// resedata.js — Kantlista och baskatalog för EON Reseplaneraren
//
// ARKITEKTUR (SSOT-principen):
//   Platser (noder) härleds av generate.js via join på namn mot master/wiki_data.js.
//   Denna fil innehåller BARA resespecifik data — inga platsbeskrivningar dupliceras.
//   Registret (reseregister-data.md) är ett DERIVAT: generera om, redigera aldrig för hand.
//
// PROVENIENS: Alla restider är kalibrerade mot spelade rutter (kampanjkrönika.md m.fl.),
//   källa anges per kant. Vid konflikt gäller projektets ordning:
//   kampanjkrönika.md > wiki_data.js > NotebookLM (enligt _index.md).
//
// Skapad: 2026-08-25 av ox-alpha-sessionen (oxen-launch tråd "reseplanerare", seq 5–7).
// Validering efter ändring:
//   node -e "const d=require('./reseplanerare/resedata.js'); console.log('✓', d.kanter.length, 'kanter,', Object.keys(d.alias).length, 'alias');"

var reseData = {
  meta: {
    version: 1,
    skapad: "2026-08-25",
    tier: 1,
    omfang: "Cermira + Vitterdal-kärnan (kalibreringsdata finns för dessa noder)",
    kaliberkalla: "Spelade rutter i kampanjkrönika.md, EM-R001/R002 och .claude/memory/learnings.md"
  },

  // Join-nycklar: nodnamn här -> postnamn i wiki_data.js (om de skiljer sig)
  alias: {
    "Cermira stad": "Cermira"
  },

  // Noder som behövs i grafen men SAKNAS i wiki_data.js (SSOT-luckor, ej migrerade
  // pga AGENTS.md blockerande process — Johan/claude-sessionen äger wiki-migrering)
  extra_platser: [
    {
      namn: "S:t Kira",
      typ: "Jarladöme/ort",
      region: "Cermira",
      kalla: "cermira.png + vitterdal-baronieriet.md:642 ('jarladöme med bättre klimat')"
    },
    {
      namn: "Bergvik",
      typ: "Skogsby (timmer/kol/pälsar)",
      region: "Cermira, Mitheragränsen",
      kalla: "kampanjkrönika.md:1737–1783 + trakten-omgivningar.md handelstabell"
    },
    {
      namn: "Fort Otis",
      typ: "Fästning med flodhamn",
      region: "Sunnanmark/Raunfloden",
      kalla: "cermira.png + EON-Reseregister-Mall.md avsnitt 1 och 3"
    }
  ],

  // Kända platser från kartan/mallen utan kalibrerade kanter ännu (Tier 2)
  tier2_platser: [
    { namn: "Äppelby", kommentar: "Huvudort Sunnanmark, köldtåliga äpplen. Saknas i wiki_data.js." },
    { namn: "Egisborg", kommentar: "Ort Cermira. Saknas i wiki_data.js." },
    { namn: "Lundaby", kommentar: "Ort Cermira. Saknas i wiki_data.js." },
    { namn: "Daliz Rim", kommentar: "Cirefalisk enklav, kronomarken. Saknas i wiki_data.js." },
    { namn: "Falinna Turak", kommentar: "Ort Östanmark. Saknas i wiki_data.js." },
    { namn: "Tivar", kommentar: "Jarladöme vid Solfloden, Östanmark. Saknas i wiki_data.js." },
    { namn: "Tirgova", kommentar: "Ruinstad Mithera-gräns, obebodd. Saknas i wiki_data.js." },
    { namn: "Methras-renk-Drezin", kommentar: "Dvärgfäste Höga topparna. Saknas i wiki_data.js." }
  ],

  // Referensvärden — baser att räkna med när kantdata saknar km/dagar
  bas_hastigheter: [
    { transportsatt: "Till fots (normaltakt)", km_per_dag: { min: 30, max: 30 },
      kalla: "krigsherren.md:198 (EM-O001_legokompaniet/research)" },
    { transportsatt: "Standardpackning fotfolk", km_per_dag: null, packning_kg: { max: 40 },
      kalla: "krigsherren.md:199", anmarkning: "viktrapport, inte hastighet" },
    { transportsatt: "Ridande, landsväg, belastad", km_per_dag: { min: 38, max: 50 },
      kalla: "härledt baklänges ur Vitterdal↔Cermira (150 km/3–4 d) och Vitterdal↔Jarla (200 km/5–6 d)",
      anmarkning: "HÖGRE än mallens 36 km — mallvärdet är fotfolk-referens felplacerat under 'ridande'" },
    { transportsatt: "Bergsterräng (häst/oxkärra)", km_per_dag: { min: 17, max: 25 },
      kalla: "härledt ur Vitterdal→Grensfortet (50 km/2–3 d)" },
    { transportsatt: "Ridande, obelastad", km_per_dag: null,
      kalla: "GAP — tabell K-7 (trupptyp-proxy) enligt mallen avsnitt 4; väntar NotebookLM" },
    { transportsatt: "Karavan", km_per_dag: null,
      kalla: "Ingen fast tabell — heuristik enligt mallen avsnitt 6; pris/bärkraft väntar NotebookLM-GAP" }
  ],

  // Kalibrerade kanter. km/dagar = {min,max}; null = okänt (fylls när karta gåtts igenom).
  // tolkning:true = dokumenterad bedömning, johan_bekrafta:true = väntar Johans bekräftelse.
  kanter: [
    {
      fran: "Vitterdal", till: "Cermira stad",
      transport: "landsväg, häst/vagn",
      km: { min: 150, max: 150 }, dagar: { min: 3, max: 4 },
      terrang: "kultiverat, östra vägen",
      faror: null,
      kalla: { fil: "vitterdal-baronieriet.md", rad: 646 }
    },
    {
      fran: "Vitterdal", till: "S:t Kira",
      transport: "landsväg, södra vägen",
      km: null, dagar: null,
      terrang: "kultiverat",
      anmarkning: "Delsträcka av totalen Vitterdal→Jarla (200 km/5–6 d); km-fördelning mellan S:t Kira och Jarla okänd tills kartan mätts",
      kalla: { fil: "vitterdal-baronieriet.md", rad: 647 }
    },
    {
      fran: "S:t Kira", till: "Jarla",
      transport: "landsväg, södra vägen",
      km: null, dagar: null,
      terrang: "övergår till Asharien (gränspassage)",
      anmarkning: "Samma delsträckekommentar som Vitterdal→S:t Kira",
      kalla: { fil: "vitterdal-baronieriet.md", rad: 647 }
    },
    {
      fran: "Vitterdal", till: "Grensfortet",
      transport: "bergsväg västerut",
      km: { min: 50, max: 50 }, dagar: { min: 2, max: 3 },
      terrang: "bergsterräng",
      faror: "Skugglandets gräns vid fortet",
      kalla: { fil: "vitterdal-baronieriet.md", rad: 648 }
    },
    {
      fran: "Vitterdal", till: "Frisänkan",
      transport: "direktled norrut, ENDAST lätt last till fots",
      km: { min: 15, max: 15 }, dagar: { min: 1, max: 1 },
      terrang: "myr-/skogsteräng mot Mitheragränsen",
      tolkning: true,
      anmarkning: "Se konfliktlösning: direktleden är snabb för fotfolk men olämplig för kärror — tung last tar handelsleden via Bergvik",
      kalla: { fil: "vitterdal-baronieriet.md", rad: 649 }
    },
    {
      fran: "Vitterdal", till: "Bergvik",
      transport: "oxkärra, bergsväg",
      km: null, dagar: { min: 4, max: 4 },
      terrang: "bergsväg, ofta dimma",
      tolkning: true,
      anmarkning: "Handelsledens första etapp (timmer/kol/pälsar är Bergviks export)"
      , kalla: { fil: "kampanjkrönika.md", rad: "1737–1783" }
    },
    {
      fran: "Bergvik", till: "Frisänkan",
      transport: "oxkärra",
      km: null, dagar: { min: 1, max: 1 },
      terrang: "skog/mark",
      kalla: { fil: "kampanjkrönika.md", rad: 1804 }
    },
    {
      fran: "Frisänkan", till: "Grensfortet",
      transport: "oxkärra",
      km: null, dagar: { min: 1, max: 1 },
      terrang: "gränstrakter",
      kalla: { fil: "kampanjkrönika.md", rad: 1817 }
    },
    {
      fran: "Jarla", till: "Tuzan Rim",
      transport: "kustsegling (handelsfartyg)",
      km: null, dagar: { min: 14, max: 14 },
      terrang: "Ashariens kust",
      anmarknung: null,
      anmarkning: "'cirka två veckor längs Ashariens kust' — Spegelmåne, Bok 1",
      kalla: { fil: "kampanjkrönika.md", rad: 330 }
    },
    {
      fran: "Vargnäset", till: "Rödskäggs Tillflykt",
      transport: "ridande, snabbt, obelastat",
      km: null, dagar: { min: 0.75, max: 1.5 },
      terrang: "vinter, snö",
      tolkning: true, johan_bekrafta: true,
      anmarkning: "Källan anger '~1,5 dygn tur o retur' — tolkat som ~0,75 dygn enkelväg; alternativt 1,5 enkelväg",
      kalla: { fil: "kampanjkrönika.md", rad: "1522, 1537" }
    },
    {
      fran: "Vargnäset", till: "Iskvarnsbryggan",
      transport: "marsch, 41 civila inkl hjälpbehövande",
      km: null, dagar: { min: 5, max: 5 },
      terrang: "vinter, −8 till −15 °C",
      faror: "kyla (en dog), snöstorm, matbrist",
      kalla: { fil: "kampanjkrönika.md", rad: 1483 }
    },
    {
      fran: "Abhan-hir-renk-Ghor", till: "Vargnäset",
      transport: "dvärgisk handelskaravan, vinter",
      km: null, dagar: { min: 15, max: 15 },
      terrang: "vinterväglag",
      faror: "snöstorm förlängde resan med veckor",
      kalla: { fil: "kapitel-4-jargien.html + kampanjkrönika.md", rad: "255 / 748" }
    },
    {
      fran: "Vargnäset", till: "Vitterdal",
      transport: "ridande/häst",
      km: null, dagar: { min: 3, max: 3 },
      terrang: null,
      kalla: { fil: ".claude/memory/learnings.md", rad: 268 }
    },
    {
      fran: "Cermira stad", till: "Fort Otis",
      transport: "flodbåt via Månsjön→Raunfloden, medström söderut",
      km: null, dagar: null,
      terrang: "Raunfloden är ISFRI ÅRET RUNT",
      sasong: "fungerar alla säsonger",
      kalla: { fil: "EON-Reseregister-Mall.md", rad: "48–51" }
    }
  ],

  // Dokumenterade tolkningar & öppna frågor (renderas i registret)
  oppna_fragor: [
    {
      fraga: "Frisänkan-konflikt (15 km/1 d vs 5 dagar handel)",
      losning: "Två leder: direktled 15 km/1 d endast för lätt fotfolk (vitterdal-baronieriet.md:649); handelsled via Bergvik 4+1 d för kärror (trakten-omgivningar.md:307 'Längre väg, sämre' + krönikanas civila tåg dag 5). Båda källvärdena bevaras som separata kanter.",
      status: "tolkning klar, johan_bekrafta: true"
    },
    {
      fraga: "Rödskäggs '~1,5 dygn t/r'",
      losning: "Tolkat som 0,75–1,5 dygn enkelväg beroende på läsning; se kantens anmarkning.",
      status: "johan_bekrafta: true"
    },
    {
      fraga: "Kampanjkalender — aktuellt datum/år i kampanjen",
      losning: "Finns inte skrivet någonstans. Behövs från Johan innan säsongskolumnen kan göras exakt ('just nu, funkar det'). Nuläge enligt CURRENT_STATE.md: Grensfortet, högsommar, efter Bok 1.",
      status: "BLOCKERAR ENDAST säsongsexakthet, inte Tier 1-kärnan"
    },
    {
      fraga: "Cermira-som-stad har ingen egen wiki_data-post (endast regionposten 'Cermira')",
      losning: "Alias-tabellen löser joinet; överväg egen SSOT-post 'Cermira stad'.",
      status: "förslag till claude-sessionen/Johan"
    },
    {
      fraga: "Mallens 10 Cermira-orter saknas i wiki_data.js",
      losning: "Listade under tier2_platser; migrering till SSOT triggar AGENTS.md blockerande kontinuitetsprocess och ägs av Johan/claude-sessionen.",
      status: "utanför detta uppdrag"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = reseData;
}
