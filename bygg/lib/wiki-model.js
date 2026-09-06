// Delad modul: läser Obsidian-noterna i wiki/ och bygger samma NPC/plats/kapitel/
// fraktion-modell som bygg-wiki-data.js. Bruten ut därifrån så att bygg-sidor.js
// (register-sidorna) kan återanvända exakt samma parsning utan att duplicera den.
//
// Ren refaktor — ändrar inget beteende i bygg-wiki-data.js. Verifiera efter ändringar
// här med: node bygg/bygg-wiki-data.js --check
const fs = require('fs');
const path = require('path');

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
    // och skulle annars felaktigt skriva över toppnivåfält med samma nyckelnamn.
    if (/^\s/.test(line)) continue;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('[') && val.endsWith(']')) {
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
// mitt i en mening, inte bara som ett helt fältvärde.
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

// URL-säker slug. Dedupas av anroparen vid behov (t.ex. "Dubbel-Orm" x3 i källdatan).
function slugify(namn) {
  if (!namn) return '';
  return namn
    .toLowerCase()
    .replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Bygger samma npcs/platser/kapitel/fraktioner-modell som bygg-wiki-data.js skriver
// till master/wiki_data.js + fraktioner_data.js.
function buildModel(wikiDir) {
  const npcNotes = readNotes(path.join(wikiDir, 'Personer'));
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

  const platsNotes = readNotes(path.join(wikiDir, 'Platser'));
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

  const kapitelNotes = readNotes(path.join(wikiDir, 'Kapitel'));
  const kapitel = kapitelNotes.map(({ fields }) => {
    const k = {};
    k.nummer = fields.nummer !== undefined ? String(fields.nummer) : null;
    k.titel = fields.namn;
    k.status = fields.status ?? null;
    k.plats = fields.plats !== undefined ? stripLink(fields.plats) : null;
    k.datum = fields.datum ?? null;
    return k;
  });

  const ortNotes = readNotes(path.join(wikiDir, 'Örter'));
  const orter = ortNotes.map(({ fields, body }) => {
    const o = {};
    o.namn = fields.namn;
    o.region = fields.region ?? null;
    o.växtplats = fields.växtplats ?? null;
    o.pris = fields.pris ?? null;
    o.tillredning = fields.tillredning ?? null;
    o.färdighet = fields.färdighet ?? null;
    o.kampanj = fields.kampanj ? stripLink(fields.kampanj) : null;
    o.tags = Array.isArray(fields.tags) ? fields.tags : [];
    o.beskrivning = stripAllLinks(body.replace(/\n$/, ''));
    return o;
  });

  const fraktionNotes = readNotes(path.join(wikiDir, 'Fraktioner'));
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
  const fraktioner = KATEGORI_ORDNING
    .filter(k => fraktionerByKategori[k])
    .flatMap(k => fraktionerByKategori[k]);

  return { npcs, platser, kapitel, fraktionerByKategori, fraktioner, orter };
}

module.exports = {
  parseFrontmatter, unquote, stripLink, stripAllLinks, readNotes, slugify, buildModel,
};
