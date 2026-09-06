// Uppdaterar de delar av index.html som annars riskerar bli inaktuella (kapitellista,
// antal) ur samma wiki/-noter som övriga bygg-skript. index.html i övrigt är
// handskrivet — bara texten mellan <!--BYGG:X--> och <!--/BYGG:X--> ersätts.
//
// Körs från D:/rollspel/EON:
//   node bygg/bygg-index.js          -> skriver index.html
//   node bygg/bygg-index.js --check  -> jämför utan att skriva, exit 1 vid drift (pre-commit)
const fs = require('fs');
const path = require('path');
const { buildModel, readNotes } = require('./lib/wiki-model');

const ROOT = process.cwd();
const WIKI = path.join(ROOT, 'wiki');
const INDEX_PATH = path.join(ROOT, 'index.html');
const checkMode = process.argv.includes('--check');

const { npcs, platser, kapitel, fraktionerByKategori, orter } = buildModel(WIKI);
const fraktionerCount = Object.values(fraktionerByKategori).flat().length;

// Kapitel-HTML-filerna byter inte namn ofta — liten stabil tabell istället för att
// gissa filnamn ur titeln.
const KAPITEL_FIL = {
  '0': 'prolog-tirakgraven.html',
  '1': 'kapitel-1-jakten.html',
  '2': 'kapitel-2-muhad.html',
  '3': 'kapitel-3-tarkas.html',
  '4': 'kapitel-4-jargien.html',
  '5': 'kapitel-5-vargnaset.html',
  '6': 'kapitel-6-vitterdal.html',
  '7': 'kapitel-7-vargnaset.html',
  '8': 'kapitel-8-evakueringen.html',
  '9': 'kapitel-9-mithera.html',
  '10': 'kapitel-10-skugglandet.html',
};

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

const sortedKapitel = [...kapitel].sort((a, b) => Number(a.nummer) - Number(b.nummer));
const pagaende = sortedKapitel.find(k => (k.status || '').toLowerCase() === 'pågående');

const kapitelRowsHtml = sortedKapitel.map(k => {
  const fil = KAPITEL_FIL[k.nummer];
  const href = fil ? `kapitel/${fil}` : '#';
  const nr = String(k.nummer).padStart(2, '0');
  const erPagaende = (k.status || '').toLowerCase() === 'pågående';
  const statusLabel = erPagaende ? 'Pågår' : 'Klart';
  const statusClass = erPagaende ? ' row__status--aktiv' : '';
  // Titeln i wiki/Kapitel är "Kapitel N: Undertitel" / "Prolog: Undertitel" — vi vill
  // bara ha undertiteln i radlistan, numret ligger redan i sin egen kolumn.
  const kortTitel = (k.titel || '').replace(/^(Kapitel\s*\d+|Prolog)\s*:\s*/i, '');
  return `          <li><a class="row row--kapitel" href="${href}">
            <span class="row__nr">${nr}</span>
            <span class="row__title">${escapeHtml(kortTitel)}</span>
            <span class="row__meta">${escapeHtml(k.plats)}</span>
            <span class="row__status${statusClass}">${statusLabel}</span>
          </a></li>`;
}).join('\n');

const statPagaende = pagaende
  ? `${pagaende.nummer} · ${(pagaende.titel || '').replace(/^(Kapitel\s*\d+|Prolog)\s*:\s*/i, '')}`
  : 'Bok 2 väntar';

const statNpcCount = `${npcs.length} NPC:er`;

const pagaendeCount = sortedKapitel.filter(k => (k.status || '').toLowerCase() === 'pågående').length;
const kapitelMeta = `${sortedKapitel.length} kapitel · ${pagaendeCount > 0 ? pagaendeCount + ' pågående' : 'alla avslutade'}`;

// ---------- Rollpersoner (spelarnas karaktärer) ----------
// Egen mapp, inte del av buildModel() (NPC-registret) — spelare/status har annan
// semantik än vanliga NPCs och hör inte hemma i register/npcer.html.
const rollpersonNotes = readNotes(path.join(WIKI, 'Rollpersoner'));
function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}
const rollpersonerRowsHtml = rollpersonNotes.map(({ fields }) => {
  return `      <li><div class="row row--rollperson">
        <span class="row__title">${escapeHtml(fields.namn)}</span>
        <span class="row__meta">${escapeHtml(fields.ras)} · Spelare: ${escapeHtml(fields.spelare)}</span>
        <span class="row__status">${escapeHtml(capitalize(fields.status))}</span>
      </div></li>`;
}).join('\n');

const registerRowsHtml = [
  { titel: 'NPC:er', antal: npcs.length, href: 'register/npcer.html' },
  { titel: 'Platser', antal: platser.length, href: 'register/platser.html' },
  { titel: 'Fraktioner', antal: fraktionerCount, href: 'register/fraktioner.html' },
  { titel: 'Örter & droger', antal: orter.length, href: 'register/orter.html' },
].map(r => `          <li><a class="row row--simple" href="${r.href}">
            <span class="row__title">${r.titel}</span>
            <span class="row__meta">${r.antal}</span>
          </a></li>`).join('\n');

function replaceBetween(html, marker, replacement) {
  const re = new RegExp(`(<!--BYGG:${marker}-->)([\\s\\S]*?)(<!--\\/BYGG:${marker}-->)`);
  if (!re.test(html)) {
    throw new Error(`Markör saknas i index.html: BYGG:${marker}`);
  }
  return html.replace(re, `$1\n${replacement}\n        $3`);
}

const current = fs.readFileSync(INDEX_PATH, 'utf8');
let next = current;
next = replaceBetween(next, 'KAPITEL-ROWS', kapitelRowsHtml);
next = replaceBetween(next, 'STAT-PAGAENDE', `          ${statPagaende}`);
next = replaceBetween(next, 'STAT-NPCCOUNT', `          ${statNpcCount}`);
next = replaceBetween(next, 'KAPITEL-META', kapitelMeta);
next = replaceBetween(next, 'ROLLPERSONER-ROWS', rollpersonerRowsHtml);
next = replaceBetween(next, 'ROLLPERSONER-META', `${rollpersonNotes.length} aktiva`);
next = replaceBetween(next, 'REGISTER-ROWS', registerRowsHtml);

if (checkMode) {
  if (current === next) {
    console.log('✅ index.html (genererade delar) är i synk med wiki/');
    process.exit(0);
  } else {
    console.log('❌ index.html:s genererade delar matchar INTE wiki/-noterna.');
    console.log('   Kör: node bygg/bygg-index.js   (uppdaterar de genererade delarna)');
    process.exit(1);
  }
} else {
  fs.writeFileSync(INDEX_PATH, next, 'utf8');
  console.log('Uppdaterat: index.html (kapitellista, statusrad, registerräknare)');
}
