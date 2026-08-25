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
if (reseData.meta.kartkalla) {
  L.push(`> Kartkälla: ${reseData.meta.kartkalla}`);
}
L.push("");

L.push(`## 1. Platsregister (noder — härledda ur wiki_data.js via join)`);
L.push("");
L.push(`| Namn | Typ | Region | Datakälla |`);
L.push(`|---|---|---|---|`);
[...grafNoder].sort().forEach((n) => L.push(platsRad(n)));
L.push("");
if (reseData.platsnoter) {
  L.push(`**Platsnoter:**`);
  Object.entries(reseData.platsnoter).forEach(([n, t]) => L.push(`- **${esc(n)}:** ${esc(t)}`));
  L.push("");
}

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

if (reseData.belastning) {
  const b = reseData.belastning;
  L.push(`## 5. Bärförmåga & belastning`);
  L.push("");
  b.barformaga.forEach((f) => L.push(`- **${esc(f.typ)}:** ${esc(f.formel)}`));
  L.push("");
  L.push(`Tabell R2-79 (belastning vs. BF):`);
  L.push("");
  L.push(`| Belastning | Utmattning | Förflyttning | Svårighet |`);
  L.push(`|---|---|---|---|`);
  b.tabell_r2_79.forEach((r) => L.push(`| ${esc(r.belastning)} | ${esc(r.utmattning)} | ${esc(r.forflyttning)} | ${esc(r.svarighet)} |`));
  L.push("");
  L.push(`${esc(b.mekanism)}`);
  L.push("");
  L.push(`*Källor: ${esc(b.kalla_formler)}*`);
  L.push("");
}
if (reseData.vagtyper_och_moten) {
  const v = reseData.vagtyper_och_moten;
  L.push(`## 6. Vägtyper & möten`);
  L.push("");
  L.push(`${esc(v.princip)}`);
  v.effekter.forEach((e) => L.push(`- ${esc(e)}`));
  L.push(`- *${esc(v.not)}*`);
  L.push("");
  L.push(`*Källa: ${esc(v.kalla)}*`);
  L.push("");
}
if (reseData.floder_vinter) {
  L.push(`## 7. Floder & vinter`);
  L.push("");
  L.push(`${esc(reseData.floder_vinter.regel)} *${esc(reseData.floder_vinter.not)}*`);
  L.push("");
}
if (reseData.valuta) {
  const va = reseData.valuta;
  L.push(`## 8. Valuta & prisankare`);
  L.push("");
  L.push(`**Standard:** ${esc(va.standard)}`);
  L.push("");
  L.push(`| Mynt | Vikt | Värde | Not |`);
  L.push(`|---|---|---|---|`);
  va.avvikande_mynt.forEach((m) => L.push(`| ${esc(m.mynt)} | ${esc(m.vikt)} | ${esc(m.varde)} | ${esc(m.not || "—")} |`));
  L.push("");
  L.push(`*Guldreferenser:* ${esc(va.guld_referenser)}`);
  L.push("");
  L.push(`*Löne-/prisankare (för karavan-heuristiken):* ${esc(va.lonreferenser)}`);
  L.push("");
}

if (reseData.drunok) {
  const dr = reseData.drunok;
  L.push(`## 9. Konungariket Drunok (referens — Drunokleden & norra resor)`);
  L.push("");
  L.push(`**Läge:** ${esc(dr.lage)}`);
  L.push("");
  L.push(`**Styre & konflikt:** ${esc(dr.styre)}`);
  L.push("");
  L.push(`**Religion:** ${esc(dr.religion)}`);
  L.push("");
  L.push(`**Handel:** ${esc(dr.handel)}`);
  L.push("");
  L.push(`| Stad | Not |`);
  L.push(`|---|---|`);
  dr.stader.forEach((s) => L.push(`| ${esc(s.namn)} | ${esc(s.not)} |`));
  L.push("");
  L.push(`*Matkultur:* ${esc(dr.matkultur)}`);
  L.push("");
  L.push(`*Källa: ${esc(dr.kalla)}*`);
  L.push("");
}

if (reseData.asharien_soldarn) {
  const as = reseData.asharien_soldarn;
  L.push(`## 10. Asharien & Soldarn (makro-referens — halvöresor, Tier 2-underlag)`);
  L.push("");
  L.push(`### Asharien — ${esc(as.asharien.statsskick)}`);
  L.push("");
  L.push(`**Geografi:** ${esc(as.asharien.geografi)}`);
  L.push("");
  L.push(`**Akuta kriser (resrisk!):**`);
  as.asharien.kriser.forEach((k) => L.push(`- ${esc(k)}`));
  L.push("");
  L.push(`**Städer:**`);
  L.push("");
  L.push(`| Stad | Not |`);
  L.push(`|---|---|`);
  as.asharien.stader.forEach((s) => L.push(`| ${esc(s.namn)} | ${esc(s.not)} |`));
  L.push("");
  L.push(`**Krigsmakt:** ${esc(as.asharien.krigsmakt)}`);
  L.push("");
  L.push(`### Soldarn — ${esc(as.soldarn.statsskick)}`);
  L.push("");
  L.push(`**Geografi:** ${esc(as.soldarn.geografi)}`);
  L.push("");
  L.push(`**Kriser & historia (resrisk!):**`);
  as.soldarn.kriser.forEach((k) => L.push(`- ${esc(k)}`));
  L.push("");
  L.push(`**Religion & krigsmakt:** ${esc(as.soldarn.religion_krigsmakt)}`);
  L.push("");
  L.push(`**Städer:**`);
  L.push("");
  L.push(`| Stad | Not |`);
  L.push(`|---|---|`);
  as.soldarn.stader.forEach((s) => L.push(`| ${esc(s.namn)} | ${esc(s.not)} |`));
  L.push("");
  L.push(`**Myntfot:** ${esc(as.myntfot)}`);
  L.push("");
  L.push(`*Källa: ${esc(as.kalla)}*`);
  L.push("");
}

if (reseData.jargien) {
  const j = reseData.jargien;
  L.push(`## 11. Jargiska kejsardömet (makro-referens)`);
  L.push("");
  L.push(`**Statsskick & kriser:** ${esc(j.statsskick)}`);
  L.push("");
  L.push(`**Geografi & vägnät:** ${esc(j.geografi_vagar)}`);
  L.push("");
  L.push(`⚠️ **Religion & resrisk:** ${esc(j.religion_resrisk)}`);
  L.push("");
  L.push(`**Krigsmakt:** ${esc(j.krigsmakt)}`);
  L.push("");
  L.push(`**Myntfot & handel:** ${esc(j.myntfot)}`);
  L.push("");
  L.push(`**Viktiga städer:**`);
  L.push("");
  L.push(`| Stad | Not |`);
  L.push(`|---|---|`);
  j.stader.forEach((s) => L.push(`| ${esc(s.namn)} | ${esc(s.not)} |`));
  L.push("");
  L.push(`*Källa: ${esc(j.kalla)}*`);
  L.push("");
}

if (reseData.cirefaliska_samveldet) {
  const c = reseData.cirefaliska_samveldet;
  L.push(`## 12. Cirefaliska samväldet (makro-referens)`);
  L.push("");
  L.push(`**Översikt:** ${esc(c.overview)}`);
  L.push("");
  L.push(`### Melorion (hemlandet) — ${esc(c.melorion.lage)}`);
  L.push("");
  L.push(`| Stad | Not |`);
  L.push(`|---|---|`);
  c.melorion.stader.forEach((s) => L.push(`| ${esc(s.namn)} | ${esc(s.not)} |`));
  L.push("");
  L.push(`### Caserion (kornbodskolonin) — ${esc(c.caserion.lage)}`);
  L.push("");
  L.push(`| Stad | Not |`);
  L.push(`|---|---|`);
  c.caserion.stader.forEach((s) => L.push(`| ${esc(s.namn)} | ${esc(s.not)} |`));
  L.push("");
  L.push(`### Gordrion (gruvkolonin i norr) — ${esc(c.gordrion.lage)}`);
  L.push("");
  L.push(`| Stad/post | Not |`);
  L.push(`|---|---|`);
  c.gordrion.stader.forEach((s) => L.push(`| ${esc(s.namn)} | ${esc(s.not)} |`));
  L.push("");
  L.push(`**Strategiska öar & besittningar:**`);
  c.strategiska_oar.forEach((o) => L.push(`- **${esc(o.namn)}:** ${esc(o.not)}`));
  L.push("");
  L.push(`*Källa: ${esc(c.kalla)}*`);
  L.push("");
}

if (reseData.vastmark_damarien) {
  const vd = reseData.vastmark_damarien;
  L.push(`## 13. Västmark & Damarien (makro-referens)`);
  L.push("");
  L.push(`### Västmark (Vanskmar) — ${esc(vd.vastmark.statsskick)}`);
  L.push("");
  L.push(`**Geografi & resrisk:** ${esc(vd.vastmark.geografi_resrisk)}`);
  L.push("");
  L.push(`**Handel & politik:** ${esc(vd.vastmark.handel)}`);
  L.push("");
  L.push(`| Stad | Not |`);
  L.push(`|---|---|`);
  vd.vastmark.stader.forEach((s) => L.push(`| ${esc(s.namn)} | ${esc(s.not)} |`));
  L.push("");
  L.push(`### Damarien (Storfurstendömet) — ${esc(vd.damarien.statsskick)}`);
  L.push("");
  L.push(`> ${esc(vd.damarien.varning)}`);
  L.push("");
  L.push(`**Geografi & resrisk:** ${esc(vd.damarien.geografi_resrisk)}`);
  L.push("");
  L.push(`**Handel & resor:** ${esc(vd.damarien.handel_resor)}`);
  L.push("");
  L.push(`**Krigsmakt:** ${esc(vd.damarien.krigsmakt)}`);
  L.push("");
  L.push(`**Historia & hemligheter:** ${esc(vd.damarien.historia_hemligheter)}`);
  L.push("");
  L.push(`**Städer:**`);
  L.push("");
  L.push(`| Stad | Not |`);
  L.push(`|---|---|`);
  vd.damarien.stader.forEach((s) => L.push(`| ${esc(s.namn)} | ${esc(s.not)} |`));
  L.push("");
  L.push(`**Fornlämningar & heliga platser:**`);
  vd.damarien.fornlamningar.forEach((f) => L.push(`- **${esc(f.namn)}:** ${esc(f.not)}`));
  L.push("");
  L.push(`*Källa: ${esc(vd.damarien.kalla)}*`);
  L.push("");
}

L.push(`## 14. Dokumenterade tolkningar och öppna frågor`);
L.push("");
reseData.oppna_fragor.forEach((o, i) => {
  L.push(`### 5.${i + 1} ${o.fraga}`);
  L.push(`- **Lösning/tolkning:** ${o.losning}`);
  L.push(`- **Status:** ${o.status}`);
  L.push("");
});

L.push(`## 15. Tier 2 — kända platser utan kanter ännu`);
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
