// Bygger registersidorna (register/npcer.html, platser.html, fraktioner.html) och
// deras databaskällor (data/*.json) ur samma wiki/-noter som bygg-wiki-data.js.
//
// Körs från D:/rollspel/EON:
//   node bygg/bygg-sidor.js              -> skriver filerna
//   node bygg/bygg-sidor.js --check      -> jämför utan att skriva, exit 1 vid drift (pre-commit)
//
// wiki/ är MASTER. Redigera ALDRIG register/*.html eller data/*.json för hand.
const fs = require('fs');
const path = require('path');
const { buildModel, slugify } = require('./lib/wiki-model');

const ROOT = process.cwd();
const WIKI = path.join(ROOT, 'wiki');
const args = process.argv.slice(2);
const checkMode = args.includes('--check');

const { npcs, platser, fraktioner, orter } = buildModel(WIKI);

// ---------- Region-härledning (portad från gamla index.html:s extractRegion) ----------
function extractRegion(plats) {
  if (!plats) return null;
  if (plats.includes('Muhad') || plats.includes('Jen')) return 'Muhad';
  if (plats.includes('Cermira')) return 'Cermira';
  if (plats.includes('Mithera')) return 'Mithera';
  if (plats.includes('Tarkas')) return 'Tarkas';
  if (plats.includes('Skugglandet')) return 'Skugglandet';
  if (plats.includes('Vargnäset')) return 'Vargnäset';
  if (plats.includes('Vitterdal')) return 'Vitterdal';
  if (plats.includes('Tuzan Rim')) return 'Tuzan Rim';
  if (plats.includes('Jarla')) return 'Jarla';
  return 'Övriga';
}

// ---------- Slug-tilldelning med dedup (t.ex. "Dubbel-Orm" finns 3x i källdatan) ----------
function withSlugs(items) {
  const seen = new Map();
  return items.map(item => {
    const base = slugify(item.namn) || 'namnlos';
    const n = (seen.get(base) || 0) + 1;
    seen.set(base, n);
    const slug = n === 1 ? base : `${base}-${n}`;
    return { ...item, slug };
  });
}

const npcsWithSlug = withSlugs(npcs).map(n => ({ ...n, _region: extractRegion(n.plats) }));
const platserWithSlug = withSlugs(platser);
const fraktionerWithSlug = withSlugs(fraktioner);
// gift/kampanjkopplad är deriverade skalära fält för registrets filterchips - register.js
// matchar bara skalära fält rakt av, taggarrayen i sig är inte filtrerbar. Självbeskrivande
// värden (inte "Ja"/"Nej") eftersom distinctSorted() renderar en chip per unikt värde PER
// filternyckel utan att visa vilken filtergrupp den hör till - två "Ja"/"Nej"-par skulle bli
// omöjliga att skilja åt i UI:t. null/falsy filtreras bort av distinctSorted, så den "icke
// sanna" halvan blir helt enkelt ingen chip alls.
const orterWithSlug = withSlugs(orter).map(o => ({
  ...o,
  gift: o.tags.includes('gift') ? 'Gift' : null,
  kampanjkopplad: o.tags.includes('kampanj') ? 'Kampanjkoppling' : null,
}));

// ---------- data/entities.json: lätt uppslagstabell för kapitel-linkify.js ----------
const entities = [
  ...npcsWithSlug.map(n => ({ namn: n.namn, typ: 'npc', slug: n.slug })),
  ...platserWithSlug.map(p => ({ namn: p.namn, typ: 'plats', slug: p.slug })),
  ...fraktionerWithSlug.map(f => ({ namn: f.namn, typ: 'fraktion', slug: f.slug })),
  ...orterWithSlug.map(o => ({ namn: o.namn, typ: 'ort', slug: o.slug })),
].filter(e => e.namn);

// ---------- HTML-mall för en registersida ----------
function pageHtml({ type, title, searchPlaceholder, rowClass, columns, filters, detailFields, dataVarName, data, count, extraNavCurrent }) {
  const configJson = JSON.stringify({ type, title, rowClass, columns, filters, detailFields }, null, 2);
  const dataJson = JSON.stringify(data);
  return `<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} – Gravens Arv</title>
<meta name="description" content="Register över ${title.toLowerCase()} i kampanjen Gravens Arv.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/base.css">
<link rel="stylesheet" href="../assets/css/components.css">
<link rel="stylesheet" href="../assets/css/pages.css">
</head>
<body>
<header class="chrome">
  <div class="wrap chrome__row">
    <a class="wordmark" href="../index.html">Gravens&nbsp;Arv</a>
    <nav class="nav">
      <a href="../index.html#kampanjen">Kampanjen</a>
      <a href="../index.html#register" aria-current="page">Register</a>
      <a href="../index.html#eget">Eget material</a>
      <a href="../sessioner/index.html">SL</a>
      <a href="../fluff/index.html">Fluff</a>
    </nav>
  </div>
</header>

<div class="crumbs">
  <div class="wrap"><a href="../index.html">Start</a> / <a href="../index.html#register">Register</a> / <span>${title}</span></div>
</div>

<main class="wrap" style="padding-block: clamp(24px, 4vw, 44px) 72px;">
  <div class="section-head">
    <h2>${title}</h2>
    <span class="meta">${count} st</span>
  </div>

  <div class="search" style="margin-top: 20px;">
    <input id="q" type="search" placeholder="${searchPlaceholder}">
  </div>
  <div class="filters" id="filters"></div>
  <p class="result-count" id="result-count" role="status"></p>

  <ol class="rows" id="rows"></ol>
</main>

<dialog class="modal" id="detail-modal">
  <button class="modal__close" id="detail-close" aria-label="Stäng">&times;</button>
  <div id="detail-body"></div>
</dialog>

<footer class="footer">
  <div class="wrap">
    <span>Gravens Arv · EON 4:e utgåvan</span>
  </div>
</footer>

<script>
window.REGISTER_CONFIG = ${configJson};
window.${dataVarName} = ${dataJson};
</script>
<script src="../assets/js/register.js"></script>
</body>
</html>
`;
}

const pages = [
  {
    file: 'npcer.html',
    dataFile: 'npcs.json',
    dataVarName: 'REGISTER_DATA',
    data: npcsWithSlug,
    opts: {
      type: 'npc',
      title: 'NPC:er',
      searchPlaceholder: 'Sök namn, plats, fraktion…',
      rowClass: 'row--npc',
      columns: [
        { key: 'namn', role: 'title' },
        { key: 'ras', role: 'meta' },
        { key: 'plats', role: 'meta' },
        { key: 'fraktion', role: 'meta' },
        { key: 'status', role: 'status' },
      ],
      filters: [
        { key: '_region', label: 'Region' },
        { key: 'status', label: 'Status' },
        { key: 'ras', label: 'Ras' },
      ],
      detailFields: [
        { key: 'titel', label: 'Titel' },
        { key: 'ras', label: 'Ras' },
        { key: 'status', label: 'Status' },
        { key: 'plats', label: 'Plats' },
        { key: 'fraktion', label: 'Fraktion' },
        { key: 'kapitel', label: 'Första omnämnande' },
      ],
    },
  },
  {
    file: 'platser.html',
    dataFile: 'platser.json',
    dataVarName: 'REGISTER_DATA',
    data: platserWithSlug,
    opts: {
      type: 'plats',
      title: 'Platser',
      searchPlaceholder: 'Sök platser…',
      rowClass: 'row--plats',
      columns: [
        { key: 'namn', role: 'title' },
        { key: 'typ', role: 'meta' },
        { key: 'region', role: 'meta' },
      ],
      filters: [
        { key: 'region', label: 'Region' },
        { key: 'typ', label: 'Typ' },
      ],
      detailFields: [
        { key: 'typ', label: 'Typ' },
        { key: 'region', label: 'Region' },
        { key: 'kapitel', label: 'Första omnämnande' },
      ],
    },
  },
  {
    file: 'fraktioner.html',
    dataFile: 'fraktioner.json',
    dataVarName: 'REGISTER_DATA',
    data: fraktionerWithSlug,
    opts: {
      type: 'fraktion',
      title: 'Fraktioner',
      searchPlaceholder: 'Sök fraktioner…',
      rowClass: 'row--fraktion',
      columns: [
        { key: 'namn', role: 'title' },
        { key: 'typ', role: 'meta' },
        { key: 'ras', role: 'meta' },
        { key: 'status', role: 'status' },
      ],
      filters: [
        { key: 'typ', label: 'Typ' },
        { key: 'ras', label: 'Ras' },
        { key: 'status', label: 'Status' },
      ],
      detailFields: [
        { key: 'typ', label: 'Typ' },
        { key: 'ras', label: 'Ras' },
        { key: 'huvudsäte', label: 'Huvudsäte' },
        { key: 'ledare', label: 'Ledare' },
        { key: 'verksamhet', label: 'Verksamhet' },
        { key: 'status', label: 'Status' },
        { key: 'kapitel', label: 'Första omnämnande' },
      ],
    },
  },
  {
    file: 'orter.html',
    dataFile: 'orter.json',
    dataVarName: 'REGISTER_DATA',
    data: orterWithSlug,
    opts: {
      type: 'ort',
      title: 'Örter, droger & gifter',
      searchPlaceholder: 'Sök efter ört, effekt, region…',
      rowClass: 'row--ort',
      columns: [
        { key: 'namn', role: 'title' },
        { key: 'region', role: 'meta' },
        { key: 'växtplats', role: 'meta' },
      ],
      filters: [
        { key: 'region', label: 'Region' },
        { key: 'gift', label: 'Gift' },
        { key: 'kampanjkopplad', label: 'Kampanjkoppling' },
      ],
      detailFields: [
        { key: 'region', label: 'Region' },
        { key: 'växtplats', label: 'Växtplats' },
        { key: 'pris', label: 'Pris' },
        { key: 'tillredning', label: 'Tillredning' },
        { key: 'färdighet', label: 'Färdighet' },
        { key: 'kampanj', label: 'Kampanjkoppling' },
      ],
    },
  },
];

const outputs = {}; // relative path -> content
for (const p of pages) {
  outputs[path.join('data', p.dataFile)] = JSON.stringify(p.data, null, 2) + '\n';
  outputs[path.join('register', p.file)] = pageHtml({ ...p.opts, dataVarName: p.dataVarName, data: p.data, count: p.data.length });
}
outputs[path.join('data', 'entities.json')] = JSON.stringify(entities, null, 2) + '\n';

if (checkMode) {
  let clean = true;
  const drift = [];
  for (const [rel, content] of Object.entries(outputs)) {
    const abs = path.join(ROOT, rel);
    const onDisk = fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null;
    if (onDisk !== content) {
      clean = false;
      drift.push(rel);
    }
  }
  if (clean) {
    console.log('✅ register/*.html och data/*.json är i synk med wiki/');
    process.exit(0);
  } else {
    console.log('❌ Följande filer matchar INTE wiki/-noterna:');
    drift.forEach(f => console.log('   - ' + f));
    console.log('   Kör: node bygg/bygg-sidor.js   (regenererar filerna ur wiki/)');
    process.exit(1);
  }
} else {
  for (const [rel, content] of Object.entries(outputs)) {
    const abs = path.join(ROOT, rel);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, content, 'utf8');
  }
  console.log(`Skrivet: ${Object.keys(outputs).length} filer (register/*.html, data/*.json)`);
}
