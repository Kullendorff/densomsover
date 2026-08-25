#!/usr/bin/env node
// generate.js — Genererar reseregister-data.md UR resedata.js + master/wiki_data.js
//
// Användning:
//   node generate.js [repoRoot] [wikiDataPath]
//   repoRoot     default: ..  (repot denna mapp ligger i)
//   wikiDataPath default: <repoRoot>/master/wiki_data.js
//   Tips: körs från worktree men vill kalibrera mot huvudkopiornas (ocommitterade)
//   wiki_data.js:  node generate.js D:/rollspel/EON
//
// Registret är ett DERIVAT — redigera aldrig output för hand. Ändra resedata.js och kör igen.

const fs = require("fs");
const path = require("path");

const repoRoot = process.argv[2] || path.resolve(__dirname, "..");
const wikiPath = process.argv[3] || path.join(repoRoot, "master", "wiki_data.js");
const reseData = require(path.join(__dirname, "resedata.js"));
const wiki = require(path.resolve(wikiPath));

// ---------- Join: nodnamn -> wiki-post ----------
const alias = reseData.alias || {};
const wikiNamn = (n) => alias[n] || n;
const wikiPlatser = new Map(wiki.platser.map((p) => [p.namn, p]));
const extraPlatser = new Map((reseData.extra_platser || []).map((p) => [p.namn, p]));

const grafNoder = new Set();
reseData.kanter.forEach((k) => { grafNoder.add(k.fran); grafNoder.add(k.till); });
(reseData.extra_platser || []).forEach((p) => grafNoder.add(p.namn));

// ---------- Validering ----------
const fel = [];
const varningar = [];
grafNoder.forEach((namn) => {
  if (!extraPlatser.has(namn) && !wikiPlatser.has(wikiNamn(namn))) {
    fel.push(`  ✗ Nod "${namn}" finns varken i wiki_data.js (via alias "${wikiNamn(namn)}") eller extra_platser`);
  }
});

// Kant-slutpunkter måste finnas bland grafNoder (stavningsfel fångas här)
reseData.kanter.forEach((k, i) => {
  ["fran", "till"].forEach((sida) => {
    if (!grafNoder.has(k[sida])) {
      fel.push(`  ✗ Kant ${i + 1}: ${sida}-nod "${k[sida]}" är inte definierad som grafnod (stavfel?)`);
    }
  });
  if (!k.kalla || !k.kalla.fil) {
    varningar.push(`  ⚠ Kant ${i + 1} (${k.fran}→${k.till}): saknar källuppgift`);
  }
});

if (fel.length > 0) {
  console.error("✗ VALIDERING MISSLYCKADES:\n" + fel.join("\n"));
  process.exit(1);
}

// ---------- Renderingshjälp ----------
const rng = (r) => (r == null ? "—" : r.min === r.max ? `${r.min}` : `${r.min}–${r.max}`);
const esc = (s) => (s == null ? "—" : String(s));

function platsRad(namn) {
  const w = wikiPlatser.get(wikiNamn(namn));
  if (w) {
    const aliasNote = wikiNamn(namn) !== namn ? ` <br>*(alias → ${wikiNamn(namn)}, egen SSOT-post saknas)*` : "";
    return `| ${esc(namn)}${aliasNote} | ${esc(w.typ)} | ${esc(w.region)} | wiki_data.js |`;
  }
  const x = extraPlatser.get(namn);
  return `| ${esc(x.namn)} | ${esc(x.typ)} | ${esc(x.region)} | EXTRA — ${esc(x.kalla)} |`;
}

// ---------- Markdown ----------
const L = [];
L.push(`# EON Reseregister — DATA (genererad)`);
L.push("");
L.push(`> **GENERERAD FIL — redigera inte för hand.** Ändra \`resedata.js\` och kör \`node generate.js\`.`);
L.push(`>`);
L.push(`> Genererad: 2026-08-25 · Källa: \`${wikiPath}\` (${wiki.platser.length} platser, ${wiki.npcs.length} NPCs laddade)`);
L.push(`> Omfång: ${reseData.meta.omfang}. Kanonordning vid konflikt: kampanjkrönika.md > wiki_data.js > NotebookLM.`);
if (reseData.meta.kampanj_datum) {
  const kd = reseData.meta.kampanj_datum;
  L.push(`> Kampanjdato: ${kd.text} · Säsong: ${kd.sasong} · Källa: ${kd.kalla}`);
}
L.push("");

L.push(`## 1. Platsregister (noder — härledda ur wiki_data.js via join)`);
L.push("");
L.push(`| Namn | Typ | Region | Datakälla |`);
L.push(`|---|---|---|---|`);
[...grafNoder].sort().forEach((n) => L.push(platsRad(n)));
L.push("");

const land = reseData.kanter.filter((k) => !/segling|flodbåt/.test(k.transport));
const vatten = reseData.kanter.filter((k) => /segling|flodbåt/.test(k.transport));

L.push(`## 2. Landkanter (kalibrerade mot spelade rutter)`);
L.push("");
L.push(`| Från → Till | Transport | Km | Dagar | Terräng | Faror/säsong | Källa |`);
L.push(`|---|---|---|---|---|---|---|`);
land.forEach((k) => {
  const extra = [k.tolkning ? "**tolkning**" : null, k.johan_bekrafta ? "**johan_bekrafta**" : null].filter(Boolean).join(", ");
  L.push(`| ${k.fran} → ${k.till}${extra ? ` <br>${extra}` : ""} | ${esc(k.transport)} | ${rng(k.km)} | ${rng(k.dagar)} | ${esc(k.terrang)} | ${esc(k.faror || k.sasong)} | ${esc(k.kalla.fil)}:${esc(k.kalla.rad)} |`);
});
L.push("");

if (vatten.length) {
  L.push(`## 3. Vattenkanter`);
  L.push("");
  L.push(`| Från → Till | Transport | Km | Dagar | Terräng/säsong | Källa |`);
  L.push(`|---|---|---|---|---|---|`);
  vatten.forEach((k) => {
    L.push(`| ${k.fran} → ${k.till} | ${esc(k.transport)} | ${rng(k.km)} | ${rng(k.dagar)} | ${esc(k.terrang)}${k.sasong ? ` (${esc(k.sasong)})` : ""} | ${esc(k.kalla.fil)}:${esc(k.kalla.rad)} |`);
  });
  L.push("");
}

L.push(`## 4. Bas-hastigheter och referensvärden`);
L.push("");
L.push(`| Transportsätt | Km/dag | Packning | Källa/anmärkning |`);
L.push(`|---|---|---|---|`);
reseData.bas_hastigheter.forEach((b) => {
  L.push(`| ${esc(b.transportsatt)} | ${rng(b.km_per_dag)} | ${b.packning_kg ? `≤ ${b.packning_kg.max} kg` : "—"} | ${esc(b.kalla)}${b.anmarkning ? `. ${esc(b.anmarkning)}` : ""} |`);
});
L.push("");

L.push(`## 5. Dokumenterade tolkningar och öppna frågor`);
L.push("");
reseData.oppna_fragor.forEach((o, i) => {
  L.push(`### 5.${i + 1} ${o.fraga}`);
  L.push(`- **Lösning/tolkning:** ${o.losning}`);
  L.push(`- **Status:** ${o.status}`);
  L.push("");
});

L.push(`## 6. Tier 2 — kända platser utan kanter ännu`);
L.push("");
L.push(`| Namn | Kommentar |`);
L.push(`|---|---|`);
(reseData.tier2_platser || []).forEach((p) => L.push(`| ${esc(p.namn)} | ${esc(p.kommentar)} |`));
L.push("");

// ---------- Spara ----------
const ut = path.join(__dirname, "reseregister-data.md");
fs.writeFileSync(ut, L.join("\n"), "utf8");

console.log(`✓ ${grafNoder.size} noder, ${reseData.kanter.length} kanter (${vatten.length} vatten)`);
console.log(`✓ Wiki-join: ${[...grafNoder].filter((n) => wikiPlatser.has(wikiNamn(n))).length} ur wiki_data.js, ${extraPlatser.size} extra`);
varningar.forEach((w) => console.log(w));
console.log(`✓ Skrev ${ut}`);
