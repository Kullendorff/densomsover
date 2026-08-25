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
    version: 4,
    skapad: "2026-08-25",
    tier: 1,
    omfang: "Cermira + Vitterdal-kärnan (kalibreringsdata finns för dessa noder)",
    kaliberkalla: "Spelade rutter i kampanjkrönika.md, EM-R001/R002 och .claude/memory/learnings.md",
    kampanj_datum: {
      text: "17:e Hömånad, år 2 (relativ datering; år 1 = kampanjstart)",
      sasong: "Högsommar",
      kalla: "Johan via claude-sessionen 2026-08-25 (oxen-launch seq 9)"
    },
    kartkalla: "cermira.png ('Jarladömet Cermira, År 2967 efter reningen') + asharien.jpg (Ashariens jarladömen, Cermira EJ med) + gammal mundanakarta (världsöversikt; CERMIRA SAKNAS — inskriven i världen senare än karttrycket per Johan, används ENDAST för makrosammanhang, aldrig lokal Cermira-geografi). Geografibekräftat 2026-08-25: Mitheraskogen norr om Vitterdal; Jarla = Ashariens nordligaste jarladöme vid Cermiras sydgräns; Raunflodens lopp Stencirkeln→Fort Otis→Ramil/Jarla (krök)→österut→Nordvik; Tuzan Rim på ostkusten vid Rhung sjön"
  },

  // Join-nycklar: nodnamn här -> postnamn i wiki_data.js (om de skiljer sig)
  alias: {
    "Cermira stad": "Cermira"
  },

  // Platsnoter: nyanser som wiki_data.js-regionfältet inte fångar (renderas under platsregistret)
  platsnoter: {
    "Jarla": "Gränsstad och Ashariens nordligaste jarladöme (egen häroldsbaner enligt asharien.jpg). Ligger precis innanför Cermiras sydgräns (cermira.png, vid Svarta skogen) — politiskt Asharisk, geografiskt Cermiras sydport. wiki_data-regionen 'Asharien' är korrekt men ofullständig; föreslagen SSOT-formulering: 'Asharien (jarladömet Jarla, gränsar Cermira i söder)'. Gränsläget + läget PÅ Raunfloden gör Jarla till naturlig passagepunkt/nod i vägnätet (tull, karavanuppsamling, flodtransport vid kröken)."
  },

  // Noder som behövs i grafen men SAKNAS i wiki_data.js (SSOT-luckor, ej migrerade
  // pga AGENTS.md blockerande process — Johan/claude-sessionen äger wiki-migrering)
  extra_platser: [
    {
      namn: "S:t Kira",
      typ: "Jarladöme/ort",
      region: "Cermira",
      kalla: "cermira.png + vitterdal-baronieriet.md:682 ('jarladöme med bättre klimat')"
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
  // Regelboksbaserna verifierade ordagrant mot extracted_text av BÅDA sessionerna 2026-08-25.
  bas_hastigheter: [
    // --- Regelboksbaser (Eon III Spelledarens guide, R2-80 ff) — UTAN terräng-/lastfriktion ---
    { transportsatt: "Fotmarsch, normal (regelbok)", km_per_dag: { min: 36, max: 36 },
      kalla: "5092_eon_III_spelledarens_guide.txt:5918–5920 (3 km/h × max 12 tim)" },
    { transportsatt: "Fotmarsch, snabb (regelbok)", km_per_dag: { min: 44, max: 44 },
      kalla: "samtlig fil (4 km/h × 11 tim)" },
    { transportsatt: "Fotmarsch, forcerad (regelbok)", km_per_dag: { min: 50, max: 50 },
      kalla: "samma fil (5 km/h × 10 tim)" },
    { transportsatt: "Ritt, normal, obelastad (regelbok)", km_per_dag: { min: 48, max: 48 },
      kalla: "samma fil:5924, 5929 (4 km/h × 12 tim)" },
    { transportsatt: "Ritt, snabb (regelbok)", km_per_dag: { min: 80, max: 80 },
      kalla: "samma fil (8 km/h × 10 tim)" },
    { transportsatt: "Ritt, forcerad (regelbok)", km_per_dag: { min: 120, max: 120 },
      kalla: "samma fil (15 km/h × 8 tim)" },
    { transportsatt: "Ritt, galopp (regelbok, max 1 tim)", km_per_dag: { min: 30, max: 30 },
      kalla: "samma fil (30 km/h × 1 tim — sprint, ej dagsetapp)" },
    { transportsatt: "Vagn, normal (regelbok)", km_per_dag: { min: 36, max: 36 },
      kalla: "samma fil:5825–5827 (3 km/h × 12 tim)" },
    { transportsatt: "Vagn, snabb (regelbok)", km_per_dag: { min: 50, max: 50 },
      kalla: "samma fil (5 km/h × 10 tim)" },
    { transportsatt: "Vagn, forcerad (regelbok)", km_per_dag: { min: 80, max: 80 },
      kalla: "samma fil (10 km/h × 8 tim)" },
    // --- Fälthärledda värden (spelade rutter — inkluderar redan last-, väg- och terrängfriktion) ---
    { transportsatt: "Till fots, militär takt (Krigsherren)", km_per_dag: { min: 30, max: 30 },
      kalla: "krigsherren.md:198 (EM-O001_legokompaniet/research)",
      anmarkning: "lägre än regelbokens 36 — militärmarsch med full packning" },
    { transportsatt: "Standardpackning fotfolk", km_per_dag: null, packning_kg: { max: 40 },
      kalla: "krigsherren.md:199", anmarkning: "viktrapport, inte hastighet" },
    { transportsatt: "Häst, landsväg, BELASTAD (fälthastighet)", km_per_dag: { min: 38, max: 50 },
      kalla: "härledt baklänges ur Vitterdal↔Cermira (150 km/3–4 d) och Vitterdal↔Jarla (200 km/5–6 d)",
      anmarkning: "jämför regelboksbasen 48 (ritt normal obelastad): spelade rutter ger lägre effekt pga last+terräng — använd fältsiftet för realistiska etapper, 48 för idealförhållanden" },
    { transportsatt: "Bergsterräng (häst/oxkärra, fältvärde)", km_per_dag: { min: 17, max: 25 },
      kalla: "härledt ur Vitterdal→Grensfortet (50 km/2–3 d)" },
    { transportsatt: "Karavan", km_per_dag: null,
      kalla: "Ingen fast tabell i regelverket (bekräftat saknas) — heuristik enligt mallen avsnitt 6" }
  ],

  // Bärförmåga & belastning (verifierat ordagrant mot extracted_text)
  belastning: {
    barformaga: [
      { typ: "Tvåbenta", formel: "(STY+TÅL)/2 kg, avrundat nedåt" },
      { typ: "Fyrbenta (häst m.fl.)", formel: "STY+TÅL kg (ingen division)" }
    ],
    kalla_formler: "5092_eon_III_spelledarens_guide.txt sid 75–78 + 5091_eon_III_spelarens_bok.txt:3747 ('Bärförmåga är lika med (STY+TÅL).')",
    tabell_r2_79: [
      { belastning: "≤ BF", utmattning: "±0", forflyttning: "±0 (bas)", svarighet: "±0" },
      { belastning: "≤ 2×BF", utmattning: "+1", forflyttning: "−1", svarighet: "±0" },
      { belastning: "≤ 3×BF", utmattning: "+2", forflyttning: "−2", svarighet: "+Ob1T6" },
      { belastning: "≤ 4×BF", utmattning: "+3", forflyttning: "−3", svarighet: "+Ob1T6" },
      { belastning: "≤ 5×BF", utmattning: "+4", forflyttning: "−4", svarighet: "+Ob2T6" },
      { belastning: "≤ 6×BF", utmattning: "+5", forflyttning: "−5", svarighet: "+Ob2T6" }
    ],
    mekanism: "Ingen fast procentuell km-reducering — överbelastning verkar via svårighetsslaget (Marsch/Rida/Köra vagn för dagsetappen) plus extra utmattning. Misslyckat slag kortar dagsetappen med 1 timme per negativ effektpoäng. Förflyttning kan aldrig sänkas under 1."
  },

  // Vägtyper & möten — mekaniken bakom 'sämre väg = kortare/kriskare dag'
  vagtyper_och_moten: {
    princip: "Vägtyp ger INGEN direkt hastighetsmultiplikator. Två separata mekaniska effekter:",
    effekter: [
      "Svårighet på dagens Marsch/Rida-slag: lätt terräng (väg, bred stig) −Ob1T6; jobbig terräng (snårigt/sankt/kuperat) +Ob1T6. Misslyckat slag = 1 tim kortare restid per negativ effektpoäng.",
      "Mötesfrekvens (Tabell R2-141/142): kejserlig landsväg/större handelsväg nivå 4 → Ob6T6 möten/dag; mindre väg nivå 2 → Ob1T6/dag. Modifierare: stenlagd +1, förfallen −1, obefolkat −1, tätbefolkat +1, marknadstider +2, dåligt väder −1, stormväder −2."
    ],
    not: "RI-34/35 (tullmultiplikator) är separat ekonomisk mekanik — se mallen §7. Påverkar varken hastighet eller möten.",
    kalla: "5092_eon_III_spelledarens_guide.txt (R2-79–84, R2-141/142)"
  },

  // Floder & vinter — viktigt för säsongsmatrisen
  floder_vinter: {
    regel: "Cermiras hårda vintrar fryser mindre floder/sjöar vintertid. RAUNFLODEN är det uttryckliga undantaget (isfri året runt). Övriga floder (Månfloden m.fl.) antas isbelagda vintertid om kampanjfilen inte anger annat.",
    lopp: "Raunflodens lopp enligt de två kartorna: källa vid Stencirkeln (öst, cermira.png) → västerut genom Fort Otis → Ramil/Jarla där floden KRÖKER → österut genom Jarladömet Jarla → mynning vid Nordvik (Ashariska kartan). Jarla ligger alltså PÅ floden vid kröken — flodtransport Fort Otis↔Jarla↔Nordvik är medströms österut från Fort Otis.",
    not: "Inget exakt ström-hastighetstabellvärde finns i regelverket — flodfärd beräknas fallvis.",
    kalla: "klimat-/regiontext i Spelledarens guide + landsmodul-cermira + cermira.png"
  },

  // Valuta (Tabell SH-26/27, verifierad ordagrant)
  valuta: {
    standard: "1 silver = silvermynt på 1,9 g (jargiska denaren är referensmynt). Samma vikt OCH värde: silverdaler, dinar, thaler, olom, drakma, penning, trugg m.fl.",
    avvikande_mynt: [
      { mynt: "Sekha (Thalamur)", vikt: "1,4 g silver", varde: "3/4 silver", not: "omtyckt inte överallt" },
      { mynt: "Silverdirham", vikt: "3,8 g silver", varde: "2 silver", not: null },
      { mynt: "Sunuvai (alviskt siluna)", vikt: "10,0 g", varde: "2 silver", not: null }
    ],
    guld_referenser: "Solida 20 silver · Gulden/Florin 6 · Drock 6 · Cador 4 · Narin 10 · Guldmark/Dukat/Kulg 160 · Remerier 252 · Guldlibra 240 · Guldkrona 360 (silverenheter)",
    lonreferenser: "Soldat ~80 silver/månad; officer ~240; dräng/piga 40–50; enkel logi 15–30/mån (SH s.42); länsherretjänare 10–50 silver/dag (5029_riddaren.txt:3169) — användbara som prisankare för karavan-heuristiken",
    kalla: "5002_spelarens_handbok.txt Tabell SH-26/27"
  },

  // Kalibrerade kanter. km/dagar = {min,max}; null = okänt (fylls när karta gåtts igenom).
  // tolkning:true = dokumenterad bedömning, johan_bekrafta:true = väntar Johans bekräftelse.
  kanter: [
    {
      fran: "Vitterdal", till: "Cermira stad",
      transport: "landsväg, häst/vagn",
      km: { min: 150, max: 150 }, dagar: { min: 3, max: 4 },
      terrang: "kultiverat, östra vägen",
      faror: null,
      kalla: { fil: "vitterdal-baronieriet.md", rad: 686 }
    },
    {
      fran: "Vitterdal", till: "S:t Kira",
      transport: "landsväg, södra vägen",
      km: null, dagar: null,
      terrang: "kultiverat",
      anmarkning: "Delsträcka av totalen Vitterdal→Jarla (200 km/5–6 d); km-fördelning mellan S:t Kira och Jarla okänd tills kartan mätts",
      kalla: { fil: "vitterdal-baronieriet.md", rad: 687 }
    },
    {
      fran: "S:t Kira", till: "Jarla",
      transport: "landsväg, södra vägen",
      km: null, dagar: null,
      terrang: "övergår till Asharien (gränspassage)",
      anmarkning: "Samma delsträckekommentar som Vitterdal→S:t Kira",
      kalla: { fil: "vitterdal-baronieriet.md", rad: 687 }
    },
    {
      fran: "Vitterdal", till: "Grensfortet",
      transport: "bergsväg österut (mot Mithera-gränsen)",
      km: { min: 50, max: 50 }, dagar: { min: 2, max: 3 },
      terrang: "bergsterräng",
      faror: "Skugglandets gränser går tunt in i Mithera — tematiskt samma gräns (Johan, oxen-launch seq 13)",
      anmarkning: "Grannland KLARGJORT av Johan 2026-08-25: fortet ligger på Vitterdals ÖSTRA kant, precis väster om Mithera — det gränsar MITHERA, inte Drunok (gamla tabellraden '→ Drunok' var felet). Drunok ligger på motsatta sidan, västerut via Hög toppmyr. OBS: baronieri-filens geografi-sektion (rad 680–683: 'Norr: Mitheraskogen') behöver synkas med detta beslut.",
      kalla: { fil: "vitterdal-baronieriet.md", rad: 688 }
    },
    {
      fran: "Vitterdal", till: "Frisänkan",
      transport: "direktled norrut, ENDAST lätt last till fots",
      km: { min: 15, max: 15 }, dagar: { min: 1, max: 1 },
      terrang: "myr-/skogsteräng mot Mitheragränsen",
      tolkning: true,
      anmarkning: "Se konfliktlösning: direktleden är snabb för fotfolk men olämplig för kärror — tung last tar handelsleden via Bergvik",
      kalla: { fil: "vitterdal-baronieriet.md", rad: 690 }
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
      km: null, dagar: { min: 1, max: 1 },
      terrang: "vinter, snö",
      anmarkning: "Bekräftat av Johan 2026-08-25: ~1 dygn enkelväg (krönikans '~1,5 dygn t/r' var ett för snävt spann)",
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
      transport: "flodbåt via Månsjön→Raunfloden",
      km: null, dagar: null,
      terrang: "Raunfloden är ISFRI ÅRET RUNT",
      sasong: "fungerar alla säsonger",
      anmarkning: "RIKTNINGSFRÅGA ÖPPEN: kartan antyder att Fort Otis ligger UPPSTRÖMS på Raunfloden (vattnet rinner Fort Otis→Jarla→Ramul), vilket strider mot mallens 'medström söderut'. Resan Cermira stad→Fort Otis kan alltså kräva motströmssträcka eller annat led via Månsjön — väntar Johans bekräftelse (se oppna_fragor).",
      kalla: { fil: "EON-Reseregister-Mall.md + cermira.png", rad: "48–51" }
    }
  ],

  // Dokumenterade tolkningar & öppna frågor (renderas i registret)
  oppna_fragor: [
    {
      fraga: "Frisänkan-konflikt (15 km/1 d vs 5 dagar handel)",
      losning: "Två leder: direktled 15 km/1 d endast för lätt fotfolk (vitterdal-baronieriet.md:649); handelsled via Bergvik 4+1 d för kärror (trakten-omgivningar.md:307 'Längre väg, sämre' + krönikanas civila tåg dag 5). Båda källvärdena bevaras som separata kanter.",
      status: "BEKRÄFTAD av Johan 2026-08-25 — två separata leder gäller"
    },
    {
      fraga: "Rödskäggs '~1,5 dygn t/r'",
      losning: "Johan bekräftade 2026-08-25: ~1 dygn enkelväg. Infört i kanten Vargnäset→Rödskäggs Tillflykt.",
      status: "STÄNGD"
    },
    {
      fraga: "Kampanjkalender — aktuellt datum/år i kampanjen",
      losning: "Bekräftat av Johan 2026-08-25: 17:e Hömånad, år 2 i relativ datering (år 1 = kampanjstart; mötet i Jarla var 5:e Hömånad år 1). Absolut årtal i e.D.-systemet ej fastställt — relativt ankare räcker. Se även meta.kampanj_datum.",
      status: "STÄNGD (relativ datering)"
    },
    {
      fraga: "Grensfortets grannland (Drunok vs Mithera-gränsen) + dubbla 'Östra vägen'-etiketter i baronieri-filen",
      losning: "Johan avgjorde (oxen-launch seq 13): Grensfortet ligger på Vitterdals ÖSTRA kant intill Mithera; Drunok ligger VÄSTERUT via Hög toppmyr (två väsensskilda vägar). Kanten Vitterdal→Grensfortet uppdaterad därefter. Etiketter: detta register namnger alltid kanter efter DESTINATION (ingen kollision möjlig); för kartfilens ruttetiketter föreslås 'Mithervägen' (Grensfortet-leden) resp. 'Drunokleden' (Hög toppmyr-vägen) — slutligt namn väljer Johan/claude-sessionen.",
      status: "SAKNFRÅGA STÄNGD; etikettförslag väntar val"
    },
    {
      fraga: "Karavanpris per person/dagsmarsch",
      losning: "BEKRÄFTAT SAKNAS i regelverket (Spelarens bok, Spelledarens guide, Riddaren genomsökta 2026-08-25) — avsiktligt öppen SL-heuristik som mallen §6 redan antog. Prisankare finns nu under valuta.lonreferenser.",
      status: "AVSIKTLIGT ÖPPEN — Johan bestämmer modell vid behov"
    },
    {
      fraga: "Drunok i två skalor: lokal 'Drunokleden' (väster om Vitterdal, Johans beslut seq 13) vs världskartans Drunok (markerat öster om Jargien)",
      losning: "Ingen motsägelse konstaterad — mundanakartan är FÖRE Cermiras inskrivning i världen (Johan) och styr inte lokal geografi; den lokala Drunokleden avser gränszonen nära Vitterdal. Men vid framtida resefrågor av typen 'res till Drunok' ska skalan förtydligas (lokal gränszon vs världsregion öster om Jargien).",
      status: "OBSERVATION — ingen åtgärd, skalfråga vid framtida Tier 2/3"
    },
    {
      fraga: "Absolut datering: kartans 'År 2967 efter reningen'",
      losning: "cermira.png bär årtalsangivelsen 2967 e.R. Om kartan avser kampanjens nutid gäller: kampanjstart (år 1) ≈ 2966 e.R., aktuellt datum (17:e Hömånad år 2) = 2967 e.R. Det skulle stänga den sista dateringsluckan.",
      status: "VÄNTAR JOHANS BEKRÄFTELSE — är kartans 2967 nutiden?"
    },
    {
      fraga: "Raunflodens flödesriktning: Cermira stad → Fort Otis 'medström söderut'?",
      losning: "DELVIS KLARLAGT via kartorna: Raunfloden rinner Stencirkeln→Fort Otis→krök vid Jarla→Nordvik. Fort Otis→Jarla→Nordvik är medströms. Kvar: sambandet Cermira stad/Månsjön ↔ övre Raunfloden — ligger Fort Otis uppströms eller nedströms Månsjöns utlopp? Mallens 'medström söderut' antyder nedströms hela vägen.",
      status: "VÄNTAR JOHANS BEKRÄFTELSE — påverkar endast resriktningstext, inte isfriheten"
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
