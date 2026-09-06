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
//
// Parsning/modellbygge delas med bygg-sidor.js via bygg/lib/wiki-model.js.
const fs = require('fs');
const path = require('path');
const { buildModel } = require('./lib/wiki-model');

const ROOT = process.cwd();
const WIKI = path.join(ROOT, 'wiki');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const diffTarget = (() => {
  const i = args.indexOf('--diff');
  return i >= 0 ? args[i + 1] : null;
})();

const { npcs, platser, kapitel, fraktionerByKategori } = buildModel(WIKI);

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
