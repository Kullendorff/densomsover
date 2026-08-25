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
    version: 9,
    skapad: "2026-08-25",
    tier: 1,
    omfang: "Cermira + Vitterdal-kärnan (kalibreringsdata finns för dessa noder)",
    kaliberkalla: "Spelade rutter i kampanjkrönika.md, EM-R001/R002 och .claude/memory/learnings.md",
    kampanj_datum: {
      text: "17:e Hömånad, år 2 = 2967 e.R. (kampanjstart år 1 = 2966 e.R.)",
      sasong: "Högsommar",
      kalla: "Johan via claude-sessionen 2026-08-25 (oxen-launch seq 9 + seq 18: cermira-kartans 'År 2967 efter reningen' = kampanjens nutid)"
    },
    kartkalla: "PRIMÄR världskarta: mundana-extra.jpg (har CERMIRA + skala 0–200 mil; Drunok mellan Jargien och Cermira ✓). Regionkartor: cermira.png ('År 2967 efter reningen'), asharien.jpg (jarladömena), cirefalier.jpg (samväldet: Gordrion/Melorion-öarna/Caserion/Colm — bekräftar Remzian Krack på Raunfloden, Marek Pomian vid Rhungsjön, Zian Rims fyr m.fl.), damarien.jpg (Damarien/Västmark med gränsfloden Krylon, bergspassen Dvärgpasset/Utborgspasset/Rolvis trappa/Korpärnas pass — SKALA I DAGSMARSCHER: 2 dagsmarscher ≈ 10 mil ⇒ kartan antyder ~5 mil/dagsmarsch, översta spannet; grov skala, använd försiktigt). Historisk: mundana-gammal.jpg (CERMIRA SAKNAS — före inskrivningen, endast kuriosum). MAKRO-ORDNING (Johan): västerut→österut Jargien → Drunok → Cermira/Asharien. Skala: 'mil' antas 10 km (200 mil ≈ 2 000 km). Geografibekräftat 2026-08-25: Mitheraskogen ÖST/NORR om Vitterdal; Jarla = Ashariens nordligaste jarladöme vid Cermiras sydgräns; Raunflodens lopp Stencirkeln→Fort Otis→Ramil/Jarla (krök)→österut→Nordvik; Tuzan Rim på ostkusten vid Rhung sjön. Stavvariant: 'Gaserion' (mundana-extra) vs 'Caserion' (kanon) — antas samma rike"
  },

  // Join-nycklar: nodnamn här -> postnamn i wiki_data.js (om de skiljer sig)
  alias: {
    "Cermira stad": "Cermira"
  },

  // Platsnoter: nyanser som wiki_data.js-regionfältet inte fångar (renderas under platsregistret)
  platsnoter: {
    "Jarla": "Gränsstad och Ashariens nordligaste jarladöme (egen häroldsbaner enligt asharien.jpg). Ligger på RAUNFLODENS SÖDRA STRAND (kanon ~1 600 inv, frijarl Todor Fete) — livlig knutpunkt för flod- och landshandel, Cermiras sydport. Plågas av cirefaliska spioner, tjuvgillen och lönnmördarskrån. wiki_data-regionen 'Asharien' är korrekt men ofullständig; föreslagen SSOT-formulering: 'Asharien (jarladömet Jarla, gränsar Cermira i söder)'.",
    "Tuzan Rim": "Kvävande het kuststad med stor, tungt befäst ÖRLOGSHAMN — Ashariens krigsflottas bas. Starkt thalaskiskt och cirefaliskt inflytande; frijarl Lemendien Silverfjäder."
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
    sommar_risk: "MOTSATT risk på Raunfloden: under EXTREMA TORKPERIODER kan vattennivån sjunka så drastiskt att sjöfarten helt stoppas (Johan, Drunok-beskrivning 2026-08-25). Vinter = isfria Raunfloden men frusna sidofloder; torr sommar = Raunfloden kan bli oseglbar. Kontrollera alltid årstid + väderläge.",
    lopp: "Raunflodens FULLA lopp (Johan + kartor + Caserion-kanon): källor i KROLIMBERGEN → övre loppet i DRUNOK (bred, långsam transithandel) → söderut genom CERMIRA (Månsjöns utlopp, Cermira stads hamn, förbi Fort Otis) → krök vid Ramil/JARLA → österut som GRÄNSFLOD Asharien/Caserion → mynning vid Nordvik. Medströms från Månsjöns utlopp till Nordvik. TULLFÄLLA: Remzian Krack (cirefalisk, Caserion-sidan) kontrollerar all flodtrafik med mycket höga tullar; Marek Pomian (cirefalisk huvudstad Caserion) konkurrerar med extremt låga tullar.",
    not: "Inget exakt ström-hastighetstabellvärde finns i regelverket — flodfärd beräknas fallvis.",
    kalla: "klimat-/regiontext i Spelledarens guide + landsmodul-cermira + cermira.png + Johan (Drunok, 2026-08-25)"
  },

  // Konungariket Drunok — referens för Drunokleden & norra resor (Johan 2026-08-25)
  drunok: {
    lage: "Nordost om Jargiska kejsardömet, norr om Ashariska halvön. Till stor del platt, mycket bördigt slättland kring Raunflodens ÖVRE lopp. 140 000 km², ~40 000 inv (58 % drunoker/vanarer, 23 % jargier, 12 % tauper, 6 % pyar-alver).",
    styre: "Ärftlig monarki, kung Akala Gahallan III (vis, diplomatisk), huvudstad Arlon. Traditionellt utanför konflikter — men OFFICIELLT I KRIG med Jargien: Jargien ockuperade västra Drunok 2957 e.D., misslyckat återerövringståg 2961 e.D., stor jargisk legation i Arlon som eftergift. Tio nybyggda gränsfort i VÄSTER (100 soldater + 2 riddare vardera) mot jargisk invasion. Ingen flotta (saknar kust).",
    religion: "70 % Daak, välutvecklad religionsfrihet (lockar förföljda flyktingar). Drunoks visdomskyrka = kättersk Daak-irrlära (individens band framför hierarkin), bannlyst av aboraterna i Tibara. Stor andel ortodoxa udariter (de flesta präster kvinnor).",
    handel: "Kornbod — exporterar spannmål m.a. till jargiska grannprovinsen Maulio. Transithandel på den breda, långsamma Raunfloden (torka-risk, se floder_vinter.sommar_risk).",
    stader: [
      { namn: "Arlon", not: "Huvudstad ~5 000 inv, låg kulle, ringmur med höga torn, kungens gul-/svartrutiga standar. Jargiska delegationens pampiga bygge. Taupsläkten Xilozbaki brygger Raunpilsnern." },
      { namn: "Durum", not: "Nära Arlon. Bryggardynastin Erstain — aggressivt handelskrig (ölkrig) mot Xilozbaki." },
      { namn: "Urag-Ghan", not: "Hektisk handelsplats vid Raunfloden i NORR, söder om Eyrenskogarna och Kraggbergen. Styrs av Eyrentigrinnorna. Neutral fredlig handelszon för nordbor (kraggbarbarer, raunlänningar) ↔ sydlänningar. SÄKERT VADSTÄLLE över floden." },
      { namn: "Thara-Tiannen", not: "Handelsort i VÄSTER, anlagd 2304 e.D. på kraggbarbarisk gåva. HELT OCKUPERAD av Jargien sedan tio år — ständig gnagande spänning." },
      { namn: "Ramdor", not: "Förbannad RUINSTAD, övergiven sedan 2601 e.D. (mystiska händelser + pest). Lockar skattsökare." }
    ],
    matkultur: "Enkla näringssoppor/grytor; specialitet dorksoppa (kött, lök, rödbetor, palsternacka, morötter, tomat + vispad grädde).",
    kalla: "Johan, kanon-beskrivning 2026-08-25 (direkt i oxen-launch)"
  },

  // Asharien & Soldarn — makro-referens för halvöresor (Johan 2026-08-25).
  // Tier 2-underlag: inga noder ännu, men kriserna påverkar resrisk i hela regionen.
  asharien_soldarn: {
    asharien: {
      statsskick: "Jarlaunion av 10 stadsstater (frijarlar + landsråd i Camard). Överjarl Anstir Tyldon. 240 000 km², ~190 000 inv (0,8/km²). Demografi: asharier 66 %, alver 11 %, dvärgar 9 %, tiraker 6 %.",
      geografi: "Torr, roströd högplatå (järnrik jord) mellan Khazimbergen (V), Sunariskogen (Ö) och floden BZAR (S, gräns mot Soldarn). Asha-slätten täcks av meterhögt, vassartat ashamirgräs; raviner = laglös gömställen. Livsådern: JÄRNFORSEN, segelbar — de flesta städer ligger vid den. Klippslätten (stenblocksökken) NW om Tuzan Rim.",
      kriser: [
        "Svält & slum — magra skördar driver flyktingströmmar till städerna",
        "KORSARKRIGET — tirakiska pirater + cirefaliska kapare från Caserion härjar på Rhungsjön (påverkar kustsegling Jarla↔Tuzan Rim, se kanten)",
        "Vrimzikiels upprorshär — avsatte cirefaliske markfursten plundrar de NORDRA delarna av Asharien; landsrådet har värvat motarmé under cirefaliske krigsfursten Ezori"
      ],
      stader: [
        { namn: "Camard", not: "~20 000. Huvudstad, överjarlens säte, hamn vid Järnforsens mynning, marinsoldataakademi. Stadsdelen Camard-Hazr: forntida dvärgisk bosättning (~1 400 zoloddvärgar)." },
        { namn: "Chadarians hopp", not: "~11 700. Akademiskt centrum vid sydkusten (universitet, magikerakademier); tirakiske frijarlen Torgug Xoro. Serina Elthors destination i Bok 1. 'De dödas krig' 2401 e.D." },
        { namn: "Nimto", not: "~5 700. FEM DAGSMARSCHER uppströms Järnforsen från Camard — färdigkalibrerat Tier 2-ankare! Legosoldatmarknad, stridsarena, stridscyklé (krigsakademi). Damé Ramoni Girom." },
        { namn: "Lim'alan vhic Sunariye", not: "~2 600. 'Sunaris portar' — två tredjedelar alver, grundad 1754 e.D. av Xerim, dold bakom grönmålad träpalissad. Alviskt skriftbibliotek. Frijarl Fimanol." },
        { namn: "Jarla", not: "~1 600. Se platsnoter ovan — Raunflodens södra strand, frijarl Todor Fete, handelsknutpunkt." },
        { namn: "Fala", not: "~1 300. Djupt ute på torra Asha-slätten; inga bondbyar (karg jord) men många gästväna värdshus. Frijarl Logan Marsac." },
        { namn: "Ashahrien-Rahls-Unbahr", not: "~1 400. Dyster gruvstad i norra Khazimbergen; nästan hälften dvärgar (guld, silver, platina), Vontar-tro. Zolod Torgar klan Zolod hus Mirun." },
        { namn: "Nada", not: "~800. Mycket lugn stad vid Järnforsen (segelbar ända hit). Halvöns centrum för sällsynta helande örter + pälsverk. Heliga Andarnas berg strax söderut." },
        { namn: "Daggbacken", not: "~800. Idyllisk stad i NW-Asharien, majoritet MISSLOR, omges av Ramulskogen. Frijarl Vitlugg." },
        { namn: "Tuzan Rim", not: "Se platsnoter ovan — örlogshamn, flottbas, thalask/cirefaliskt inflytande." }
      ],
      krigsmakt: "Ingen nationell anfallshär — strikt defensiv doktrin. Stadsarnisoner (ofta ~10 % av befolkningen!) + bondemilis (lag: alla vuxna milismän ska äga och träna avståndsvapen, företrädesvis pilbåge) + adelns tunga riddare. Unionsflottan stark men hyrs ut som eskort. Inofficiell försvarsallians med Soldarn."
    },
    soldarn: {
      statsskick: "Feodal ärftlig monarki: rikskonung Sachsar den Vidsynte (magiska svärdet Jisally-Neadh) + 8 hertigar, 23 grevar, 70 baroner. Huvudstad Talon. 80 000 km², ~62 000 inv (+8 000 i Kemithor). Bildat 158 e.D. då fältherren Sold svek Jargien.",
      geografi: "Bördigt och grönt — Ashariens motsats. Stora outforskade urskogar (rovdjur, monster, skogstroll). Gräns: floden BZAR i norr (mot Asharien), Khazimbergen + Sunariskogen NW. Södra Soldarn: varmt vinland — kronomarker producerar Mundanas mest kända söta viner ('soldiskt gult').",
      kriser: [
        "Svarta pesten 2916 e.D. — fem år, nästan HALVA befolkningen dog (kung Artol Remulan inkl.)",
        "Missväxt 2954–57 — landsbygden övergiven till städerna",
        "INBÖRDESKRIGSHOT — konungen vs upprorisk adelskoalition ledd av hertig Amirro och den laglöse hertig Basur av Katharsis. Hela riket rustar."
      ],
      religion_krigsmakt: "Samoriska läran 85 % med fanatiska Zoriánorden (grundad 1002 e.D.; bränner Daak-troende utan rättegång; aboraterna i Tibara utropade NYTT KORSTÅG mot Soldarn 2966 e.D.). Daak strikt förbjudet. Krigsmakt: dåligt tränade bondemiliser + Solds väktare (1 200 elit i Talon) + Zoriánriddare (få men slagkraftiga).",
      stader: [
        { namn: "Talon", not: "~4 000. Befäst kusthuvudstad: legendarisk ringmur (18 m hög, 15 m tjock) på brandkulle (1354 e.D.), katakombnätverk, kungens borg + Zoriánordens högkvarter." },
        { namn: "Kemithor Riskoz", not: "~8 000. Soldarns största handelsstad + FRIHAMN vid sydkusten; cirefaliska borgmästaren Karkraza av Wekzi; kosmopolitisk (tiraker, alver, cirefalier)." },
        { namn: "Hadarlon", not: "~2 000. Anrik f.d. huvudstad (195 e.D.), omsluten av djupa skogar, zoriántrogne hertig Yssec Solstjärna, rikets bäst bevarade forntida bibliotek." },
        { namn: "Daan Hammal", not: "Mycket livlig hamnstad vid sydkusten; riksamiralen hertig Umeran (konungens allierade); stående garnison, cirefaliskt stentorn, torkad/saltad fisk-export." },
        { namn: "Västerbrygga", not: "~500. Strategisk timmer- och handelsutpost vid JÄRNFORSEN i NORRA gränstrakten mot Asharien; 1/3 av befolkningen flottar timmer nedströms till Trollhem. Trollkrigen 2911 e.D.: 500 krigare nedgjorde 100 troll." },
        { namn: "Katharsis", not: "~1 000. Laglöst piratfäste på ön Kathar; den korrupte hertig Basur (ätten Två Lansar); fristad för smugglare, lönnmördare, legosoldater som vill störta rikskonungen." }
      ]
    },
    myntfot: "Asharien & Soldarn: 1 guldmark = 160 silverdaler · 1 gulden = 6 silverdaler · 1 silverdaler = 10 koppar — stämmer exakt mot Tabell SH-26/27 (guldmark 160 ✓, gulden 6 ✓).",
    kalla: "Johan, kanon-beskrivningar 2026-08-25 (direkt i oxen-launch)"
  },

  // Jargiska kejsardömet — makro-referens (Johan 2026-08-25)
  jargien: {
    statsskick: "Kejsardöme (diktatur). Kejsare Jargus Zavian Salvianis — 131 ÅR vid makten (onaturlig livslängd; vördnad + fruktan för tronskiftet). 490 000 km², ~6 000 000 inv (12/km²) — Mundanas största och folkrikaste stat. Huvudstad Daval (425 000). Strikt klassamhälle: medborgare / prästerskap / fria män / slavar. Kriser: genomgripande korruption (rättvisa köps med mutor); enorma statsskulder till cirefaliska handelshuset TEMIRANZ — cirefalisk påtryckningsmakt och insyn i riket.",
    geografi_vagar: "Behagligt klimat (varma somrar, snöiga vintrar). Kuperat, barr-/lövskogar, bördiga floddalar (vete, korn). VÄGNÄTET MYCKET VÄL UTBYGGT — storslagna vägar hålls ständigt i skick. Bekräftar mallen §8 ('väl utbyggt i kärnan Orno/Liboria, förfallet i periferin'). Jargiens kärnvägar = Mundanas snabbaste landsvägsresor — MEN se religion_resrisk.",
    religion_resrisk: "Daak 99 %. Moderkyrkan styrs av Aboraterna i Tibara. Sedan Reningen år 0: alla andra religioner BANNLYSTA under DÖDSSTRAFF. MAGI OCH HÄXKONST = HÄDELSE = DÖDSSTRAFF PÅ BÅL. Inkvisitionen 'Daaks skugga' torterar systematiskt. Resor med magikunniga eller icke-Daak-troende PC:er i Jargien = hög risk; prästmän patrullerar vägskäl (bekräftat i kapitel 4-kanon: 'Soldater och prästmän täta som svampar').",
    krigsmakt: "Mundanas största krigshär: yrkes- + tvångsrekryterade soldater, tungt infanteri drillat i täta formationer med JARGBILAN (2,5 m hillebard, 75 cm yxblad). Flottan gammalmodig och defensiv — undviker sjöslag, vill avgöra krig på land.",
    myntfot: "1 guldlibra = 12 solidor · 1 solida = 20 denarer · 1 denar = 10 cupra (silverdenaren väger 1,9 g). KONTROLL: 12 × 20 = 240 silver per guldlibra ✓ stämmer exakt mot Tabell SH-26. Export: tyg, finsmide, sorskinka. Import: slavar (via den flytande staden i Zhirim), timmer, spannmål.",
    stader: [
      { namn: "Daval", not: "425 000. Monumental huvudstad: kejsarens palatsområde Rasur, Kejserliga biblioteket, mäktiga adelsätter (däribland Randarian)." },
      { namn: "Tibara", not: "Daaktron HELIGA stad, moderkyrkans säte, högste aboraten residerar. Zolod-kvarteret Tibar-Shun-Azh: ~8 000 dvärgar under kyrkans vaksamma öga." },
      { namn: "Binkh", not: "~90 000. Provinshuvudstad i rika bördiga Rankun. Viktig handelsort, berömd ingenjörsskola." },
      { namn: "Orno", not: "15 000. Provins Jargien. Kejsardömets ÄLDSTA stad, vid floden Kebe. 'Jargiens portal' — gigantisk forntida triumfbåge." },
      { namn: "Kelamith", not: "~8 000. Stor garnisonsstad i provins Genrio — logistisk stödjepunkt för gränsfästet CHAN; centrum för norra jordbruket/boskapen. (Närmast Cermira-sidans gränstrakter.)" },
      { namn: "Szal Dorian", not: "7 500. Provins Salan. F.d. cirefalisk handelskoloni; stor cirefalisk befolkning; finsmide- och textil-export." },
      { namn: "Erafalan", not: "7 500. Östra Merun, vid den HÖGSTA SEGELBARA PUNKTEN på floden Erannen — transshipment-nod." },
      { namn: "Erat", not: "Provins Merun. Kejserliga akademin + ätten Ducas boktryckeri." },
      { namn: "Gnar-Muur", not: "~2 000. Ökänd LAGLÖS hamnstad vid Igonhavet — banditband styr, månatliga illegala SLAVAUKTIONER, Igonhavets piraters främsta bas." },
      { namn: "Henok", not: "Provins/koloni vid Blå havet. Starkt befäst; exporterar kläder och rotfrukter." },
      { namn: "Salan", not: "12 000. Vida känt ORAKEL." },
      { namn: "Jukon", not: "~5 000. Hamnstad i Lemira; slapphänt ordning — fruktad rövarhåla." },
      { namn: "Arbido", not: "Provins huvudstad Sardan (bergig nordlig GRUVPROVINS)." },
      { namn: "Nizam", not: "Känd kurort i Sardan: sanatoriet 'Jarhos vila' + St Jersephs kloster." },
      { namn: "Sor", not: "1 200. Maulio: enorma grisfarmar, SORSKINKAN (Drunoks exportpartner-provins)." },
      { namn: "Randarro", not: "3 000. Västra Maulio: STUTERIER — randarriska stridshingstar och fullblod." },
      { namn: "Sabesta", not: "8 000. Distrikt Charino." },
      { namn: "Variso", not: "~5 000. Distrikt Daro." },
      { namn: "Karpal", not: "2 000. Ön Dram i Lemira; lever helt på fiske." },
      { namn: "Lopnor", not: "Koloni på södra kontinenten, fulla provinsrättigheter; handel + stort kavalleri med breda jargsablar." },
      { namn: "Karakul", not: "Koloni på bördig savann söder om Forion, erövrad 2809 e.D. — djup fiendskap med Forion." }
    ],
    kalla: "Johan, kanon-beskrivning 2026-08-25 (direkt i oxen-launch)"
  },

  // Cirefaliska samväldet — makro-referens (Johan 2026-08-25)
  cirefaliska_samveldet: {
    overview: "Handelsvänlig feodal federation (ärke-/kurfurstar styr provinser/kolonier), Mundanas mest utbredda och ekonomiskt dominerande makt. Skickliga handelsmän, navigatörer, skeppsbyggare — finansiering över hela kända Mundana (jfr Temiranz-lånen till Jargien).",
    melorion: {
      lage: "Hemlandet — ögrupp norr om Takalorr, väster om Ashariska halvön, söder om Jargien. Igonhavet NW, Purpurhavet NE. Tropiskt men tempererat av havsvindar; bördigt, självförsörjande. Tre huvudöar: Vambolien, Rimcoz, Dazava.",
      stader: [
        { namn: "Ciremelo", not: "~40 000. HUVUDSTAD på Vambolien (lagun, södra slätterna). En av Mundanas största hamnar. Ointagen genom historien. Cirzateologins heligaste byggnad: 40 m vitt torn i dvärgamarmor." },
        { namn: "Tzarmun Riskoz", not: "~36 000. Vamboliens norra spets; kanaler, Cirzatempel med silverbelagt tak. Notera namnmönstret 'Riskoz' — samma som Soldarns Kemithor Riskoz." },
        { namn: "Remrim", not: "~13 000. Hamnstad Vambolien; enorma årliga tygmarknader; kanaler djupt in i urskogarna." },
        { namn: "Nahrzmel Krack", not: "~18 000 (främst militärer). Samväldets viktigaste MILITÄRstad på egen ö öster om Vambolien — hel mur av dvärgasten, stor del av krigsflottan + krigsakademier." },
        { namn: "Cirza Falz", not: "~12 000. HELIG pilgrimsort på Rimcoz (Cirza steg här ned till Mundana enl. Tzorlack-rullarna). Strikt förbjuden för icke-cirefalier. Ingen storhandel." },
        { namn: "Dzara Pomian", not: "~30 000. Rimcoz södra kust; tungt befäst (uråldrig dvärgamur); omlastning mot Stora arkipelagen. Rimcoz = samväldets metall/tenn-källa, torr och glesbefolkad." },
        { namn: "Zhirim Mian", not: "~30 000. Största staden på konfliktdrabbade Dazava (tirakiska plundringståg från Takalorr). Kirurgisk skola (samväldets bästa läkare). 'Den FLYTANDE STADEN' — Jargiens slavimport går hit (jfr Jargien-kanon)." }
      ]
    },
    caserion: {
      lage: "STÖRSTA och snabbast växande kolonin — samväldets KORNBOD. Öster om Asharien, väster om Thalamur, söder om De stora slätterna (Raon), norr om Rhungsjön. FLODEN RAUN = GRÄNSEN MOT ASHARIEN i väster; floden Thukor gräns mot Thalamur i öster. Konstbevattning; ~160 000 cirefalier + nära HALVMILJON gästarbetare.",
      stader: [
        { namn: "Marek Pomian", not: "~18 000. HUVUDSTAD (Mareks Frihamn). Grundad 1192 e.D. på raunländska Raons sydvästra hörn, tagen via politiskt rävspel 2478 e.D. Koncentriska ringmurar; EXTREMT LÅGA TULLAR (medveten handelspolitik mot Remzian Kracks höga)." },
        { namn: "Ramezior Turak", not: "~11 000. Stor stad djupt i inlandet — kolonins huvudsakliga kornbod; kanal- och slussystem till Rhungsjön." },
        { namn: "Narzkar Falz", not: "~7 000. Vid floden Thukor i NO; tvillingstad med Thalamurs Abin-Thukor; port för handel Rhungsjön ↔ Stora slätterna." },
        { namn: "Remzian Krack", not: "~6 000. PÅ GRÄNSEN till Asharien intill RAUNFLODEN. Svarta ointagliga fortet kontrollerar ALL trafik längs Raunfloden genom MYCKET HÖGA TULLAR — nyckelpost för flodhandel Cermira/Jarla↔utlandet! Krigsakademi för sjöstrid." },
        { namn: "Haraziz Krack", not: "~2 000. Sotig garnisonsstad med stor krigshamn; fästningen 'Smedjan' — dvärgar smider tunga vapen." },
        { namn: "Harandzran", not: "Militär utpost norrut på Stora slätterna — cirefalier + allierade raunlänningar planerar expansion norrut." }
      ]
    },
    gordrion: {
      lage: "Yngsta landet (grundat 2874 e.D. — för 93 år sedan!) av kolonisatörer, slavar och straffångar. Långt NW, på Blå havets nordkust, SW om jargiska kolonin Lothian. Kallt, blåsigt, granskogar + snöberg. ~140 000 cirefalier + enorma gästarbetarmängder. Export: järnmalm, guld, silver, ädelstenar.",
      stader: [
        { namn: "Casemian", not: "~13 000. HUVUDSTAD vid floden Lorzimas utlopp; timmerstad på båda flodsidorna; uppsamlingsplats för malm + stora gjuterier (järn → tackor)." },
        { namn: "Tzorfalz", not: "~7 000. Östlig utpost; stort välbesökt Cirzatempel med reliker från Cirza själv; jordbruket försörjer kolonin." },
        { namn: "Zian Rim", not: "~4 000 (soldater/marinkårister). Renodlad FLOTTBAS på sydvästra udden; stort fort + väldig fyr mot farliga rev. Notera 'Rim'-namnmönstret (Tuzan Rim, Zian Rim)." },
        { namn: "Chimazo / Daliz Falz / Penxium", not: "Mindre bosättningar, skogshuggar- och straffläger i vildmarken." }
      ]
    },
    strategiska_oar: [
      { namn: "Ön Colm", not: "SW om halvön Danbréann (Consaber). MAGISKT DÖD för hydrotropi — extremt torr. Annekterad 2946 e.D. Befästa Ramezior Krack (~10 000) + allierade dvärgfästet Kholam-Renk-Ghor (notera -renk-Ghor-namntraditionen). Spionbas mot sabriska flottan; potentiellt brohuvud för sjöblockad av Consaber." },
      { namn: "Stora arkipelagen (Kryddöarna)", not: "Total militär kontroll över huvudöarna PERDOS och YOL + dussintal mindre. Kolonisationslagar tvingar fram export av kaffe, socker, bomull, tobak, kryddor → Melorion. Största avlastningen: Pomimbukten (Perdos). Styrs från fortet CIREKRACK av guvernör Pomimalo; rykten om mörka magiska experiment på revoltörer." },
      { namn: "Szal Dorian (i Jargien)", not: "Cirefalisk handelskoloni grundad 210 e.D., erövrad av jargiska legioner 2445 e.D. — men 7 500 cirefalier kvar och driver banker/kredithus/handel (jfr Jargien-kanon ✓)." }
    ],
    kalla: "Johan, kanon-beskrivning 2026-08-25 (direkt i oxen-launch)"
  },

  // Västmark & Damarien — makro-referens (Johan 2026-08-25)
  vastmark_damarien: {
    vastmark: {
      statsskick: "Lös rådsrepublik: 5 självstyrande kantoner, president Kamand av Xerims ätt (medelmåttig, slätstruken). 75 000 km², 38 000 inv (0,5/km²). Demografi: västmarkare (asharier) 68 %, Marnakh-tiraker 14 %, Bazirk-tiraker 10 %, zolod-/ghor-dvärgar 3 %, alver 3 %. Huvudstad Rampor (~7 000). Ingen statsreligion: samoriska läran 70 % (uppblandad med lokala gudar/Daak), tirakerna dyrkar krigsgudinnan MAHKTAH.",
      geografi_resrisk: "SYDKUSTEN: låglänt, gyttjig SANKMARK med mangrove och vass — näst intill obeboelig, sjuder av reptiler, fiskar och FRUKTANSVÄRDA TRÄSKMONSTER; ständiga skyfall/översvämningar. Inlandet: vilda Khrûn- och Khazimbergen — bergatroll och vättekolonier i djupa grottsystem. DEN GEOLOGISKA SÄNKAN: 2 km bred, 200 m djup cirkulär sänka i Khazimbergen norr om Rampor; botten = monsterinfekterat träsk. LEGEND: en hel dvärgisk handelskaravan (guld, magiska reliker, ädelstenar) störtade ner här under tiraköverfall — äventyrskrok.",
      handel: "Huvudnäring gruvdrift; export malm/metaller/ädelstenar/smidesvaror; import spannmål/kött/tyg/kryddor. Handelsvägar: sjövägen + längs den GRÖNA FLODEN. Myntfot: västmarkisk THALER = 1,9 g silver = 1 silver (jargisk denar-paritet). Vänner: Soldarn, Caserion, Jargien, Consaber. Fiende: Damarien (kallt krig, fientliga stunder). Krigsmakt: 1 400 yrkessoldater (1 200 lätt kavalleri + 200 bågskyttar) + ~1 400 i uppbåd; inga örlogsfartyg utom patrullbåtar mot tirakiska pirater.",
      stader: [
        { namn: "Rampor", not: "~7 000. Huvudstad på brant klippig halvö mot ön Naldor; byggd MITT I en forntida ruin stad — den monumentala bevarade muren är försvar (presidentens garde bemannar). Färgstark NÖJES- & UNDERHÅLLNINGSORT: krogar, tavernor, spelhålor, bordeller — gruvarbetarna från RALKOM (gruvstad på Naldor) spenderar här. INTERNT PROBLEM: stadsvakten splittrad i två fientliga falanger (människor vs tiraker). President Kamand + kantonfurste Dac Persal den dristige." },
        { namn: "Västborg", not: "~1 200. Starkt befäst utpost mellan Norra skogen och gränsfloden KRYLON: stor borg i träskmark + TRE yttre citadell (belägringsskydd). Västmarks viktigaste handelsstation mot Damarien — men handeln MILITÄRT STRYPT på senare år. Furstinnan Liora Rekim (skicklig, omtyckt, diplomatisk)." },
        { namn: "Vazago", not: "Forntida, fruktad RUINSTAD längs gamla kustvägen östsydöst om Rampor; gick under pga sista härskaren Garons synder." }
      ]
    },
    damarien: {
      varning: "⚠️ SL-HEMLIGHETER I DETTA BLOCK (Ariandras pakt, vandöda-armén) — FÅR ALDRIG LÄCKA till spelar-synligt material. Jfr AGENTS.md 'Damarien — Politiskt & Militärt Läge'.",
      statsskick: "Monarkisk diktatur: storfurste Thamas Vitfjäder Donato ('Envåldshärskaren'), drottning Ariandra den Behagfulla. 45 000 km², ~630 000 inv (historiska källor: 96 000 FÖRE de norra provinserna införlivades helt — diskrepans värd att notera). Rättvisa: okorrumperad, skoningslös, DRAKONISK — grymma avrättningar, främst PÅLSPETSNING. Huvudstad Targus (~8 000, borgen Pelgrinmarac; grundad 211 e.D.). Språk: jargiska + targatiska dialekt.",
      geografi_resrisk: "VRAKKUSTEN (S): varmt/fuktigt men LIVSFARLIGT SJÖFARTSOMRÅDE — kall nordström + varm sydström möts i 'Hoppinglöshetens hav': turbulenta virvlar och MALSTRÖMMAR driver fartyg mot dolda vassa rev. Hammarnäset: fuktiga snårskogar, djungellika träsk. Norra kusten: svalt, regnigt, DIMHÖLJT, branta klippor, roströda JÄRVSKOGEN. Inlandet: torr karg grässlätt, rödbruna klippor, RAGADIKLYFTAN (flera hundra meter djup forntida floddal).",
      handel_resor: "Sjöhandel ENDAST via frihamnen MIRRON (enda plats där utländska köpmän släpps in utan pappersexercis). Landvägen mot Jargien kontrolleras via HELM; skyddade pass genom Khazimbergen (damarien-kartan visar Dvärgpasset, Utborgspasset, Rolvis trappa, Korpärnas pass). KALLT KRIG mot Västmark & Soldarn: gränsflod KRYLON — damariska sidan TALEM = upprustad invasionsbas med TOTALT handelsförbud mot Västmark; västra sidan Västborg (handeln strypt). Import: spannmål + timmer (till pågående FARTYGSBYGGE). Export: järnmalm (östra Targatia/Culnar), träkol. Myntfot: asharisk standard — ducat=guldmark 160, florin=gulden 6, dinar=silverdaler 10 koppar.",
      krigsmakt: "4 200 yrkessoldater + 9 800 milis; örlogsflotta med 1 000 marininfanterister; storfurstens legendariska personliga livvakt NATTGARDET (tränas i Svarta citadellet). Legokompaniet BLODSBRÖDERNA har bas i Hammarnäs (jfr EM-O001_legokompaniet-research i repot). Allierade: Jargiska kejsardömet, dvärgafästet KHAZIM-RENK-GHOR. Fiender: Takalorr-pirater; kallt krig Västmark/Soldarn.",
      historia_hemligheter: "Vampyr-eran VESPERIARDINA ('Skymningens trädgård'): inlandet styrdes ÖPPET av vampyrer (lamior) — människor som slavar, skatter i färskt blod. DAGBRÄCKNINGSKRIGET 713 e.D.: trollkarlen Damas den Svarte (gav landet namnet) besegrade lamiorna; sista striden krävde 'Damas offer' — han offrade den belägrade hemstaden Targus + sin familj. IDAG (SL-HEMLIGT): drottning Ariandra har i hemlighet slutit pakt med lamiorna i orden INCANTAMENTI LAMIA — en GIGANTISK UNDERJORDISK VANDÖDA-ARMÉ byggs i katakomberna under tvillingtornen SIN-MEGADA, avsedd för stundande erövringskrig. (Stämmer mot AGENTS.md: Ariandra = Xinu-inkarnation; 'Ruinerna under Helm'.) Källfråga: stadstexten säger 'grundad av magikern DAMAR den Svarte', historieavsnittet 'DAMAS den Svarte' — stavvariant eller två personer?",
      stader: [
        { namn: "Targus", not: "~8 000. Huvudstad på torra blåsiga inlandsslätter. Borgen Pelgrinmarac (storfurstens säte); de fem vindarnas kloster HQ; Xinukulten växer i skuggorna." },
        { namn: "Hammarnäs", not: "~11 000. ÄLDSTA, STÖRSTA och mest militariserade staden — hög kulle vid näsets västra udde, osedvanligt hög/kraftig mur. Örlogsflottan + armén stationerade; Blodsbrödernas bas; Svarta citadellet (Nattgardet tränas)." },
        { namn: "Mirron", not: "Rikaste + snabbast växande; ENDA FRIHAMNEN (västkusten) — utlänningar tillåts röra sig fritt. Trähus, smala labyrintgränder, hög träpalissad mot landsidan. Stadsmannaråd; historisk fredlig medlarplats i inbördeskrig." },
        { namn: "Helm", not: "~3 000. F.D. stolt huvudstad vid Svarta skogens kant; mystisk ohelig katastrof + HELMSLAKTEN för ~100 år sedan → ödelagd, DJUPT FÖRBANNAD, undviks av damarier. Numera skogshuggarort. (Jfr AGENTS.md 'Ruinerna under Helm' = KRITISK HEMLIGHET; Gordons bror Ethan tjänstgör i Damarien via Bronshjälmarna.)" },
        { namn: "Talem", not: "~5 000. Strategisk, hårt befäst gränsstad vid KRYLON — MASSIV nyligen upprustning som Thamas primära INVASIONSBAS och spärrfäste mot Västmark. Handel med Västmark STRÄNGT FÖRBUDDEN i staden. Styrs av godsfrun Odille Vitfjäder + general Grigorios Vallecata." }
      ],
      fornlamningar: [
        { namn: "Monolitcirkeln", not: "144 monoliter à ~15 m, strategiskt placerad MITT EMELLAN Targus/Mirron/Hammarnäs där flera starka magiska kraftlinjer korsas." },
        { namn: "Sin-Megada", not: "Tvillingtorn (ursprungligen bostäder åt nekromantikern Aagel + symbolisten Damaga) bundna av DOLD UNDERJORDISK TUNNEL. Idag blodssekternas och lamiornas högfäste + vandöda-arméns katakomber (SL-HEMLIGT)." },
        { namn: "Thummons portar", not: "Två ENORMA 25-m statyer uthuggna i klipporna vid inloppet till sundet mellan ön Thummon och Takalorr — två forntida Allamlahjältar (en människa, en tirak), varsin sida om vattnet." },
        { namn: "Det Vita Klostret", not: "VINDTRONS heligaste plats — pampig vit stenborg på hög kulle ute på de karga inlandshedarna i Silvianestia, styrs av 'Den Äldste'." },
        { namn: "Vesperiardina", not: "'Skymningens trädgård' — raserade ruiner efter vampyrdrottningen Odettes svarta slott djupt i skogarna; vaktas enligt legenden av mörka nattrosor (livnär sig på månljus + människoblod)." }
      ],
      kalla: "Johan, kanon-beskrivningar + damarien.jpg 2026-08-25 (direkt i oxen-launch)"
    }
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
      transport: "Mithervägen — bergsväg österut (mot Mithera-gränsen; namnet godkänt av Johan, oxen-launch seq 17)",
      km: { min: 50, max: 50 }, dagar: { min: 2, max: 3 },
      terrang: "bergsterräng",
      faror: "Skugglandets gränser går tunt in i Mithera — tematiskt samma gräns (Johan, oxen-launch seq 13)",
      anmarkning: "Grannland KLARGJORT av Johan 2026-08-25: fortet ligger på Vitterdals ÖSTRA kant, precis väster om Mithera — det gränsar MITHERA, inte Drunok (gamla tabellraden '→ Drunok' var felet). Mitheraskogen ligger ÖST/NORR om Vitterdal (Johan, cermira.png): skogen sveper över norrsidan och fortsätter ner längs östkanten, där fortet vaktar passagepunkten. Drunok ligger på motsatta sidan, västerut via Hög toppmyr. OBS: baronieri-filens geografi-sektion (rad 680: 'Norr: Mitheraskogen') bör uppdateras till 'Öst/norr' och synkas med detta beslut.",
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
      faror: "KORSARKRIGET: tirakiska pirater + cirefaliska kapare från Caserion härjar på Rhungsjön och lamslår handelsrutterna. Unionsflottan hyrs ut som eskortskydd till rika köpmän — eskort kan bokas mot pris (Asharien-kanon 2026-08-25).",
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
      transport: "flodbåt via Månsjön→Raunfloden, MEDSTRÖM söderut (bekräftat)",
      km: null, dagar: null,
      terrang: "Raunfloden är ISFRI ÅRET RUNT",
      sasong: "fungerar alla säsonger",
      anmarkning: "Johan bekräftade 2026-08-25 (oxen-launch seq 17): Fort Otis ligger NEDSTRÖMS Månsjöns utlopp — man passerar utloppet FÖRE Fort Otis på väg söderut. Raunflodens källor ligger i Krolimbergen och floden flyter söderut; Cermira stads hamn trafikerar både uppströms (mot Vitterdal) och nedströms (ut på Raunfloden).",
      kalla: { fil: "EON-Reseregister-Mall.md + Johan seq 17", rad: "48–51" }
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
      losning: "Johan avgjorde (oxen-launch seq 13 + tillägg): Grensfortet ligger på Vitterdals ÖSTRA kant intill Mithera — Mitheraskogen ligger ÖST/NORR om Vitterdal (cermira.png); Drunok ligger VÄSTERUT via Hög toppmyr (två väsensskilda vägar). Makro-ordning: Jargien → Drunok → Cermira/Asharien (väster→öster). Kanten Vitterdal→Grensfortet uppdaterad därefter. Etiketter: detta register namnger alltid kanter efter DESTINATION (ingen kollision möjlig); för kartfilens ruttetiketter föreslås 'Mithervägen' (Grensfortet-leden) resp. 'Drunokleden' (Hög toppmyr-vägen) — slutligt namn väljer Johan/claude-sessionen.",
      status: "STÄNGD — 'Mithervägen' godkänt av Johan (seq 17); motpartsnamnet 'Drunokleden' för Hög toppmyr-vägen antas därmed"
    },
    {
      fraga: "Vrimzikiels upprorshär — mallen §8 säger 'Cermira, Östanmark', Asharien-kanonen (2026-08-25) säger 'norra delarna av Asharien'",
      losning: "BEKRÄFTAT av Johan: BÅDA stämmer — hären är rörlig och plundrar i både Cermiras Östanmark och norra Asharien. Resriskfältet omfattar hela gränstrakten; landsrådets motarmé under krigsfursten Ezori opererar i norra Asharien.",
      status: "STÄNGD"
    },
    {
      fraga: "Dagsmarsch-skala på damarien.jpg: 2 dagsmarscher ≈ 10 mil ⇒ ~5 mil (50 km)/dagsmarsch?",
      losning: "Kartans dubbla skala antyder 50 km/dagsmarsch — ÖVERSTA änden av regelboks-spannet (ritt normal 48, fot forcerad 50) och över fältsiffrorna (30–48). Kan avse ridande normalfart på goda vägar, eller vara kartografisk förenkling. Använd regelboksbaserna som primära; kartskalan som grov orientering.",
      status: "OBSERVATION — Johan kan bekräfta avsett dagsmarschvärde"
    },
    {
      fraga: "Era-beteckningar: 'e.R.' (efter Reningen — Jargien-kanon: 'Sedan Reningen år 0') vs 'e.D.' (används i Drunok-/Soldarn-texterna)",
      losning: "ANTAGEN SAMMA ERA: nutid = 2967 ('efter reningen' på cermira.png, Johan-bekräftat), och Drunoks 2957/2961-händelser är nutidens nära förflutna — datumen linjerar bara om e.D. = e.R. Registret skriver e.R.",
      status: "ANTAGANDE — Johan kan bekräfta att e.D. = e.R."
    },
    {
      fraga: "Karavanpris per person/dagsmarsch",
      losning: "BEKRÄFTAT SAKNAS i regelverket (Spelarens bok, Spelledarens guide, Riddaren genomsökta 2026-08-25) — avsiktligt öppen SL-heuristik som mallen §6 redan antog. Prisankare finns nu under valuta.lonreferenser.",
      status: "AVSIKTLIGT ÖPPEN — Johan bestämmer modell vid behov"
    },
    {
      fraga: "Drunok: lokal 'Drunokleden' (väster om Vitterdal) vs världskartans Drunok (öster om Jargien) — samma region?",
      losning: "JA — Johan bekräftade makro-ordningen västerut→österut: Jargien → Drunok → Cermira/Asharien. Drunok är regionen EMELLAN; världskartans placering och den lokala västerut-leden från Vitterdal beskriver samma region från varsitt håll. Lokal kanon (seq 13: Grensfortet österut mot Mithera, Drunokleden västerut via Hög toppmyr) och makrokarta är nu konsistenta.",
      status: "STÄNGD — makro-ordning dokumenterad i meta.kartkalla"
    },
    {
      fraga: "Absolut datering: kartans 'År 2967 efter reningen'",
      losning: "BEKRÄFTAT av Johan (oxen-launch seq 18): 2967 efter reningen = kampanjens nutid. Kampanjstart (år 1) = 2966 e.R., aktuellt datum 17:e Hömånad år 2 = 2967 e.R. Alla dateringsluckor stängda.",
      status: "STÄNGD"
    },
    {
      fraga: "Raunflodens flödesriktning: Cermira stad → Fort Otis 'medström söderut'?",
      losning: "BEKRÄFTAT av Johan (oxen-launch seq 17): Fort Otis ligger NEDSTRÖMS Månsjöns utlopp; Raunflodens källor i Krolimbergen, floden flyter söderut, kröker vid Jarla och mynnar i Nordvik. Mallens 'medström söderut' var korrekt. Ny kanon-detali: Krolimbergen som källområde.",
      status: "STÄNGD"
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
