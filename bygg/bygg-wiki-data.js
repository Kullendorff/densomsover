// Bygger master/wiki_data.js + fraktioner_data.js ur Obsidian-noterna i wiki/.
// wiki/ är MASTER sedan Obsidian-migreringen (se _index.md) — dashboarden (index.html)
// läser bara de genererade JS-filerna, aldrig markdown direkt.
//
// Körs från D:/rollspel/EON:
//   node bygg/bygg-wiki-data.js                              -> skriver filerna
//   node bygg/bygg-wiki-data.js --dry-run --diff <fil>        -> jämför utan att skriva
//
// Redigera ALDRIG master/wiki_data.js eller fraktioner_data.js för hand — ändringar
// skrivs över nästa gång detta skript körs. Redigera noterna i wiki/ istället.
// Pre-commit-hooken kör detta automatiskt och blockerar commit om filerna då blir smutsiga.
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const WIKI = path.join(ROOT, 'wiki');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const diffTarget = (() => {
  const i = args.indexOf('--diff');
  return i >= 0 ? args[i + 1] : null;
})();

// ---------- Frontmatter-parser (minimal, matchar generate-notes.js:s serialiserare) ----------
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { fields: {}, body: raw };
  const [, fmBlock, body] = m;
  const fields = {};
  const lines = fmBlock.split(/\r?\n/);
  for (const line of lines) {
    if (!line.trim()) continue;
    // Bara rader UTAN inledande whitespace är toppnivåfält. Indenterade rader
    // hör till nästlade block (t.ex. relationer: - namn: "..." / typ: "...")
    // och skulle annars felaktigt skriva över toppnivåfält med samma nyckelnamn
    // (namn/typ) — kritiskt eftersom "namn" och "typ" krockar exakt med
    // relationer-blockets subfält.
    if (/^\s/.test(line)) continue;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      // enkel inline-array av citerade strängar
      const inner = val.slice(1, -1);
      fields[key] = inner.length
        ? inner.split(',').map(s => unquote(s.trim()))
        : [];
    } else {
      fields[key] = unquote(val);
    }
  }
  return { fields, body };
}
function unquote(s) {
  if (s.startsWith('"') && s.endsWith('"')) {
    return s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  return s;
}

// [[Namn]] -> Namn ; [[Namn|Visning]] -> Visning
function stripLink(val) {
  if (typeof val !== 'string') return val;
  const m = val.match(/^\[\[([^\]|]+)(?:\|([^\]]+))?\]\]$/);
  if (!m) return val;
  return m[2] !== undefined ? m[2] : m[1];
}

// Samma sak men för LÖPANDE TEXT (beskrivning/body) där [[länkar]] kan förekomma
// mitt i en mening, inte bara som ett helt fältvärde. Dashboarden (index.html)
// känner inte till Obsidian-syntax — utan detta läcker "[[Jen]]" rakt ut i UI:t.
function stripAllLinks(text) {
  if (typeof text !== 'string') return text;
  return text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, name, display) => display !== undefined ? display : name);
}

function readNotes(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      return { file: f, ...parseFrontmatter(raw) };
    });
}

// ---------- Rekonstruera NPCs ----------
const npcNotes = readNotes(path.join(WIKI, 'Personer'));
const npcs = npcNotes.map(({ fields, body }) => {
  const npc = {};
  npc.namn = fields.namn;
  npc.bild = fields.bild || null;
  npc.ras = fields.ras ?? null;
  npc.titel = fields.titel ?? null;
  npc.status = fields.status ?? null;
  npc.plats = fields.plats !== undefined ? stripLink(fields.plats) : null;
  npc.fraktion = fields.fraktion !== undefined ? stripLink(fields.fraktion) : null;
  npc.kapitel = fields.kapitel ?? null;
  npc.beskrivning = stripAllLinks(body.replace(/\n$/, ''));
  if (fields['källa']) npc['källa'] = fields['källa'];
  if (fields.detaljsida) npc.detaljsida = fields.detaljsida;
  if (fields.roll) npc.roll = fields.roll;
  if (fields['ålder']) npc['ålder'] = fields['ålder'];
  return npc;
});

// ---------- Rekonstruera Platser ----------
const platsNotes = readNotes(path.join(WIKI, 'Platser'));
const platser = platsNotes.map(({ fields, body }) => {
  const p = {};
  p.namn = fields.namn;
  p.typ = fields.platstyp ?? null;
  p.region = fields.region ?? null;
  p.beskrivning = stripAllLinks(body.replace(/\n$/, ''));
  p.kapitel = fields.kapitel ?? null;
  p.bild = fields.bild || null;
  if (fields.detaljsida) p.detaljsida = fields.detaljsida;
  return p;
});

// ---------- Rekonstruera Kapitel ----------
const kapitelNotes = readNotes(path.join(WIKI, 'Kapitel'));
const kapitel = kapitelNotes.map(({ fields }) => {
  const k = {};
  k.nummer = fields.nummer !== undefined ? String(fields.nummer) : null;
  k.titel = fields.namn;
  k.status = fields.status ?? null;
  k.plats = fields.plats !== undefined ? stripLink(fields.plats) : null;
  k.datum = fields.datum ?? null;
  return k;
});

// ---------- Serialisera wiki_data.js (samma form som originalet) ----------
function jsStr(v) {
  if (v === null) return 'null';
  return JSON.stringify(v);
}
function serializeObj(obj, indent) {
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent + 1);
  const keys = Object.keys(obj);
  const lines = keys.map(k => `${pad1}${jsStr(k)}: ${jsStr(obj[k])}`);
  return `${pad}{\n${lines.join(',\n')}\n${pad}}`;
}
function serializeArr(arr) {
  return `[\n${arr.map(o => serializeObj(o, 2)).join(',\n')}\n  ]`;
}

const wikiDataJs = `var wikiData = {
  npcs: ${serializeArr(npcs)},
  platser: ${serializeArr(platser)},
  kapitel: ${serializeArr(kapitel)}
};
if (typeof module !== "undefined" && module.exports) {
  module.exports = wikiData;
}
`;

// ---------- Rekonstruera Fraktioner ----------
const fraktionNotes = readNotes(path.join(WIKI, 'Fraktioner'));
const fraktionerByKategori = {};
for (const { fields, body } of fraktionNotes) {
  const kategori = fields.kategori || 'övriga';
  if (!fraktionerByKategori[kategori]) fraktionerByKategori[kategori] = [];
  const f = {};
  f.namn = fields.namn;
  if (fields.fraktionstyp !== undefined) f.typ = fields.fraktionstyp;
  if (fields.ras !== undefined) f.ras = fields.ras;
  if (fields['huvudsäte'] !== undefined) f['huvudsäte'] = stripLink(fields['huvudsäte']);
  if (fields.ledare !== undefined) f.ledare = fields.ledare;
  if (fields.verksamhet !== undefined) f.verksamhet = fields.verksamhet;
  if (fields.status !== undefined) f.status = fields.status;
  if (fields.kapitel !== undefined) f.kapitel = fields.kapitel;
  f.beskrivning = stripAllLinks(body.replace(/\n$/, ''));
  fraktionerByKategori[kategori].push(f);
}
const KATEGORI_ORDNING = ['handelshus', 'magihus', 'militära', 'kriminella', 'övriga'];
const fraktLines = KATEGORI_ORDNING
  .filter(k => fraktionerByKategori[k])
  .map(k => `  ${k}: ${serializeArr(fraktionerByKategori[k])}`);
const fraktionerDataJs = `var fraktionerData = {
${fraktLines.join(',\n')}
};
if (typeof module !== "undefined" && module.exports) {
  module.exports = fraktionerData;
}
`;

// ---------- --check: jämför byggd output mot filerna på disk (används av pre-commit) ----------
const checkMode = args.includes('--check');
if (checkMode) {
  const wikiDataPath = path.join(ROOT, 'master', 'wiki_data.js');
  const fraktionerPath = path.join(ROOT, 'fraktioner_data.js');
  const onDiskWiki = fs.existsSync(wikiDataPath) ? fs.readFileSync(wikiDataPath, 'utf8') : null;
  const onDiskFrakt = fs.existsSync(fraktionerPath) ? fs.readFileSync(fraktionerPath, 'utf8') : null;
  const clean = onDiskWiki === wikiDataJs && onDiskFrakt === fraktionerDataJs;
  if (clean) {
    console.log('✅ master/wiki_data.js och fraktioner_data.js är i synk med wiki/');
    process.exit(0);
  } else {
    console.log('❌ master/wiki_data.js / fraktioner_data.js matchar INTE wiki/-noterna.');
    console.log('   Kör: node bygg/bygg-wiki-data.js   (regenererar filerna ur wiki/)');
    console.log('   Om du redigerat wiki_data.js direkt: ändringen kommer skrivas över — flytta');
    console.log('   redigeringen till motsvarande not i wiki/ istället.');
    process.exit(1);
  }
}

// ---------- Output / diff ----------
if (diffTarget) {
  const targetData = require(path.resolve(diffTarget));
  const targetIsFraktioner = !!targetData.handelshus;
  if (targetIsFraktioner) {
    compareArrays('fraktioner (union)', Object.values(fraktionerByKategori).flat(), Object.values(targetData).flat());
  } else {
    compareArrays('npcs', npcs, targetData.npcs);
    compareArrays('platser', platser, targetData.platser);
    compareArrays('kapitel', kapitel, targetData.kapitel);
  }
} else if (!dryRun) {
  fs.writeFileSync(path.join(ROOT, 'master', 'wiki_data.js'), wikiDataJs, 'utf8');
  fs.writeFileSync(path.join(ROOT, 'fraktioner_data.js'), fraktionerDataJs, 'utf8');
  console.log('Skrivet: master/wiki_data.js, fraktioner_data.js');
}

function compareArrays(label, a, b) {
  const byName = arr => new Map(arr.map(x => [x.namn, x]));
  const ma = byName(a), mb = byName(b);
  const onlyA = [...ma.keys()].filter(n => !mb.has(n));
  const onlyB = [...mb.keys()].filter(n => !ma.has(n));
  let fieldDiffs = 0;
  const diffDetails = [];
  for (const [name, oa] of ma) {
    const ob = mb.get(name);
    if (!ob) continue;
    const keys = new Set([...Object.keys(oa), ...Object.keys(ob)]);
    for (const k of keys) {
      const va = oa[k] === undefined ? null : oa[k];
      const vb = ob[k] === undefined ? null : ob[k];
      if (JSON.stringify(va) !== JSON.stringify(vb)) {
        fieldDiffs++;
        if (diffDetails.length < 20) diffDetails.push(`  [${name}] ${k}: generated=${JSON.stringify(va).slice(0,80)} baseline=${JSON.stringify(vb).slice(0,80)}`);
      }
    }
  }
  console.log(`=== ${label} ===`);
  console.log(`  antal genererat: ${a.length} | baseline: ${b.length}`);
  console.log(`  bara i genererat: ${onlyA.length}`, onlyA.slice(0, 10));
  console.log(`  bara i baseline: ${onlyB.length}`, onlyB.slice(0, 10));
  console.log(`  fältskillnader: ${fieldDiffs}`);
  diffDetails.forEach(d => console.log(d));
}
