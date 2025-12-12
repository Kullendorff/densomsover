/**
 * EON KAMPANJ - FRAKTIONER DATABAS
 * Separerad från wiki_data.js för bättre prestanda
 *
 * Innehåller: Handelshus, Magihus, Militära grupper, Kriminella organisationer
 */

var fraktionerData = {
  handelshus: [
    {
      "namn": "Handelshuset Atana",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": "Ebhron",
      "ledare": null,
      "verksamhet": "Aggressiv konkurrens, korruption, penningutlåning",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET ATANA\n**Pyariskt handelshus - Maktgalna konkurrenter**\n\n## GRUNDINFO\n- **Ras:** Pyaralver\n- **Huvudsäte:** Ebhron\n- **Verksamhet:** Aggressiv konkurrens, korruption, penningutlåning\n- **Rykte:** Giriga, makthungriga, bryter regler\n\n## VERKSAMHET\nHandelshuset Atana är kända för sin aggressiva affärstaktik och brist på skrupler. De har 'hållhake' på Ebhrons styrande och använder korruption som affärsverktyg.\n\n**Metoder:**\n- Konkurrera ut inhemska handelshus\n- Mänskliga tjänare behandlas som 'råskinn'\n- Bryter regler systematiskt\n\n**Färdigheter:** Värdera, Räkna\n\n## RELATION TILL KHAZ-ZATIM-GHOR\nDvärgiska Khaz-Zatim-Ghor arbetar ALDRIG med Atana på grund av deras girighet och brist på ära.\n\n## SL-ANTECKNINGAR\nAtana representerar den mörkare sidan av alvisk handel - makt och rikedom över hederlighet."
    },
    {
      "namn": "Handelshuset Badastro",
      "typ": "Handelshus",
      "ras": "Asharisk",
      "huvudsäte": "Camard",
      "ledare": "Thom Badastro",
      "verksamhet": "Spannmål, timmer, ashamirgräs",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET BADASTRO\n**Ashariskt handelshus - Spannmålsjättarna**\n\n## GRUNDINFO\n- **Ras:** Asharisk\n- **Huvudsäte:** Camard (Thom Badastro)\n- **Verksamhet:** Ashamirgräs, timmer, spannmål\n\n## FILIALER\n- **Tuzan Rim:** Frende Jattel\n- **Chadarians hopp:** Ullrica Badastro\n\n## HISTORIA\n**Chelos Modige av hus Badastro** var asharisk överjarl 2646–2693 e.D. - en prestigefull historia som ger huset politisk tyngd.\n\n## VERKSAMHET\nEtt av de stora spannmålshusen i Mundana med stark närvaro i ashariska regioner.\n\n## SL-ANTECKNINGAR\nBadastro är ett respekterat handelshus med djupa historiska rötter i asharisk politik."
    },
    {
      "namn": "Handelshuset Elisari",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": "Consaber",
      "ledare": null,
      "verksamhet": "Exotiska varor, information, sällsynta varelser",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET ELISARI\n**Pyariskt handelshus - Multinationell jätte**\n\n## GRUNDINFO\n- **Ras:** Pyaralver\n- **Huvudsäte:** Consaber\n- **Verksamhet:** Exotiska varor, information, sällsynta varelser\n- **Rykte:** 'Kan skaffa vad som helst mot rätt pris'\n- **Status:** En av Mundanas rikaste handelshus\n\n## FILIALER\nGlobal närvaro:\n- Soldarn (Mirya)\n- Melorion (Leadan)\n- Jargiska Kejsardömet\n- Caserion\n- Asharien\n- Ebhron\n\n## SPECIALITET\n**Exotiska varor och information:**\n- Sällsynta varelser\n- Svåråtkomlig information\n- Luxuösa kläder\n- Sociala tjänster\n\n**Färdigheter:** Etikett, Förföra\n\n## VIKTIGA KONTAKTER\n- **Consaber:** Riddersdamen Inalea & Amiral Morollan\n\n## SL-ANTECKNINGAR\nElisari är det ultimata 'kan-fixa-vad-som-helst' handelshuset - perfekt för när rollpersonerna behöver något obskyrt."
    },
    {
      "namn": "Handelshuset Fasces",
      "typ": "Handelshus",
      "ras": "Drunokisk/Jargisk",
      "huvudsäte": "Sankt Kira, Cermira",
      "ledare": "Torfilius Fasces",
      "verksamhet": "Gobelänger, fabricerade helgonreliker, dramatik, salt, boskap",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET FASCES\n**Cermiransk - Relik-teatermästarna**\n\n## GRUNDINFO\n- **Ras:** Drunokisk familj med jargiskt påbrå\n- **Huvudsäte:** Sankt Kira, Cermira\n- **Ledare:** Torfilius Fasces\n- **Verksamhet:** Gobelänger, **fabricerade helgonreliker**, dramatik, salt, boskap\n\n## KONTROVERS - FALSKA RELIKER\nFasces är beryktade för sina **fabricerade helgonreliker:**\n- 'Dravandors skalle'\n- 'Ignariosfjädrar'\n- 'S:t Senmians vinkrus'\n- 'S:t Boreus balsamerade ögon'\n\n## FAMILJ\n- **Barn:** Mianni & Ludo = dramatiker-duo på kontroversiell teaterscen\n\n## KONFLIKTER\n- Tirakiska karteller stjäl både reliker och teatermanuskript\n\n## RYKTE\n'Skamlösa men rika' - lever i synd men skrattar hela vägen till kredithuset\n\n## POLITISK MAKT\nEn av få icke-adliga i **Cermiras landsråd**\n\n## SL-ANTECKNINGAR\nFasces representerar den korrupta sidan av Daak-kyrkan - reliker som affärsverksamhet."
    },
    {
      "namn": "Handelshuset Hahna",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": "Kryddöarna",
      "ledare": null,
      "verksamhet": "Sjöfart, slavhandel, tullkrävning",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET HAHNA\n**Pyariskt handelshus - Kryddö-sjörövarna**\n\n## GRUNDINFO\n- **Ras:** Pyaralver\n- **Huvudsäte:** Kryddöarna (ett av fyra styrande hus)\n- **Verksamhet:** Sjöfart, slavhandel, tullkrävning\n- **Rykte:** Hetlevrade, omoraliska för att vara alver\n\n## MILITÄR STYRKA\n**Krigsfartyget 'Slaghöken':**\n- Tremastad karack\n- Egen hamnplats i lagun\n- Militär makt på Kryddöarna\n\n**Färdigheter:** Slagsmål, Sjömansskap\n\n## POLITIK\nEtt av fyra styrande hus på Kryddöarna:\n- **Hahna (pyarisk)** - militär överlägsen men numerärt underlägsna\n- Mianai, Natah, Tanhi (mänskliga)\n\n## AFFÄRSPOLICY\nKontakt endast med Forion-fränder (pyariska kontakter)\n\n## SL-ANTECKNINGAR\nHahna är det farligaste alviska handelshuset - kombinerar sjörövarmentalitet med alvisk överlägsenhet."
    },
    {
      "namn": "Handelshuset Hibelius",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": "Saviasskogen, Jargien",
      "ledare": null,
      "verksamhet": "Diplomati med kejsardömet, handelslänk till Jargien",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET HIBELIUS\n**Pyariskt handelshus - Jargiska diplomaterna**\n\n## GRUNDINFO\n- **Ras:** Pyaralver\n- **Huvudsäte:** Saviasskogen, Jargiska Kejsardömet (Yourum'an Savias)\n- **Verksamhet:** Diplomati med kejsardömet, handelslänk till Jargien\n\n## STRATEGI\n**Religiös anpassning:**\n- Låtsas vara Daak-troende\n- Anpassar sig till kyrkan\n- Gör affärer i kyrkor\n\n**Färdigheter:** Räkning, Kulturkännedom\n\n## NÄRVARO\nTillhåll i alla jargiska städer - omfattande nätverk i kejsardömet\n\n## SL-ANTECKNINGAR\nHibelius är mästare på kulturell anpassning - alver som spelar enligt Jargiens regler."
    },
    {
      "namn": "Handelshuset Ivari",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": "Drunok",
      "ledare": "Saevian & Avanni Ivari (Cermira-filial)",
      "verksamhet": "Spannmål från Pavaraslätten",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET IVARI\n**Drunokiskt handelshus - Spannmålsarvet under attack**\n\n## GRUNDINFO\n- **Ras:** Pyar-familjen\n- **Huvudsäte:** Drunok\n- **Verksamhet:** Spannmål från Pavaraslätten (generationer av verksamhet)\n\n## FILIALER\n- **Cermira:** Saevian & Avanni Ivari\n\n## AKTUELL KONFLIKT\n**Bitter och eskalerande fejd** med marnakhtirakiska Wekzi:\n- Thukkor Wekzi har förlorat 'hel båtlast dyrbara pälsar' till Ivari\n- Våldsam eskalering pågår\n\n## SL-ANTECKNINGAR\nIvari dras in i Wekzis desperata överlevnadskamp - farlig situation."
    },
    {
      "namn": "Handelshuset Jhamalomian",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": null,
      "ledare": null,
      "verksamhet": "Handel i Gordrion och på Takalorr",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET JHAMALOMIAN\n**Pyariskt handelshus - Gordrion/Takalorr-specialister**\n\n## GRUNDINFO\n- **Ras:** Pyaralver\n- **Verksamhet:** Handel i Gordrion och på Takalorr\n\n## KOPPLINGAR\n**Delägare i kredithuset Jhamrimsez:**\n- Filialer i Västlanden och Takalorr\n- Samarbete med Jhamkeir\n\n## SL-ANTECKNINGAR\nEtt av de mindre dokumenterade pyariska handelshusen - verkar fokusera på specifika geografiska områden (Gordrion/Takalorr)."
    },
    {
      "namn": "Handelshuset Jhamkeir",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": null,
      "ledare": null,
      "verksamhet": "Handel i Västlanden och Takalorr",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET JHAMKEIR\n**Pyariskt handelshus - Västlanden/Takalorr-fokus**\n\n## GRUNDINFO\n- **Ras:** Pyaralver\n- **Verksamhet:** Handel i Västlanden och Takalorr\n\n## KOPPLINGAR\n**Delägare i kredithuset Jhamrimsez:**\n- Filialer i Västlanden och Takalorr\n- Samarbete med Jhamalomian\n\n## SL-ANTECKNINGAR\nEtt av de mindre dokumenterade pyariska handelshusen - verkar fokusera på specifika geografiska områden (Västlanden/Takalorr)."
    },
    {
      "namn": "Handelshuset Khaz-Zatim-Ghor",
      "typ": "Handelshus",
      "ras": "Dvärgisk (Klan Ghor)",
      "huvudsäte": "Khazim-Renk-Ghor",
      "ledare": "Mäster Handlare Baror klan Ghor",
      "verksamhet": "Prestigeprojekt, diplomatiska avtal, strategiska allianser",
      "status": "allierad",
      "kapitel": "Kapitel 4",
      "beskrivning": "# HANDELSHUSET KHAZ-ZATIM-GHOR\n**Dvärgiskt prestigehandelshus - Klanens diplomatiska arm**\n\n## GRUNDINFO\n- **Ras:** Dvärgar (Klan Ghor, hus Ironhold)\n- **Huvudsäte:** Khazim-Renk-Ghor (Handelshallarna, Västra Portdistriktet)\n- **Ledare:** Mäster Handlare Baror klan Ghor (underställd Mäster Dryftare Khorin)\n\n## FILOSOFI\n**'Ghors namn ska aldrig förminskas genom vardagshandel'**\n\nKhaz-Zatim-Ghor arbetar ENDAST med:\n- Prestigeprojekt\n- Diplomatiska avtal\n- Strategiska allianser\n- Kungliga beställningar\n- Fästbyggnationer\n- Ceremonievapen\n- Diplomatiska gåvor\n\n## ARBETSSÄTT\n- Arbetar genom lokala agenter\n- Etablerar ALDRIG permanenta filialer\n- All extern handel genom 'värdiga mellanhänder'\n- Kvalitetskontroll: Alla varor med Ghor-sigill inspekteras personligen\n\n## BETRODDA AGENTER\n- **Ramiz (Zolod-klanen):** Ockra, kryddor - 'pålitliga om än ivriga'\n- **Ziliz (Balin den Silvertungade):** Metallhantverk - 'förstår kvalitet'\n- **Solmarin (Cirefaliska):** Diplomatiska kontakter - 'diskreta och professionella'\n- **Temiranz:** Distribution - 'har räckvidd men kräver övervakning'\n- **Lokala Zolod-dvärgar:** Förstagentslänk i alla större städer\n\n## STRIKT POLICY\nArbetar ALDRIG med:\n- Atana (för giriga)\n- Wekzi (för våldsamma)\n- Nejas (för opålitliga)\n\n## AKTUELLT UPPDRAG\n**Kazriks förhandlingar i Vitterdal** - första externa mission på 20 år\n\n## KOPPLING TILL KAMPANJEN\nKazrik klan Ghor är Mäster Ambassadör för handelshuset och arbetar med Hagges återuppbyggnad av Vitterdal.\n\n## SL-ANTECKNINGAR\nKhaz-Zatim-Ghor representerar dvärgisk ära och prestige i handel - kvalitet och hederlighet över vinst."
    },
    {
      "namn": "Handelshuset Leurest'ya",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": "Lim'alan vhic Sunariye, Asharien",
      "ledare": null,
      "verksamhet": "Medling, diplomati, kulturell brygga",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET LEUREST'YA\n**Pyariskt handelshus - Medlarna**\n\n## GRUNDINFO\n- **Ras:** Pyaralver\n- **Huvudsäte:** Lim'alan vhic Sunariye, Asharien\n- **Verksamhet:** Medling, diplomati, kulturell brygga\n\n## SPECIALITET\n**Diplomati och medling:**\n- Goda kontakter med alla folkslag\n- Inklusive marnakhtiraker\n- Kulturell brygga mellan raser\n\n**Färdigheter:** Diplomati, Kulturkännedom\n\n## ALLIANSER\n- Samarbetar med Vilia\n- Starka kopplingar till frijarl Fimanol 'halvalven'\n\n## SL-ANTECKNINGAR\nLeurest'ya är de perfekta medlarna - använd dem när rollpersonerna behöver diplomatisk hjälp."
    },
    {
      "namn": "Handelshuset Meneltaze",
      "typ": "Handelshus",
      "ras": "Cirefalisk",
      "huvudsäte": "Cermira stad",
      "ledare": "Familjer Merocidan och Calanzeso",
      "verksamhet": "Expeditioner i Mithera, kristallgruvor",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET MENELTAZE\n**Cirefaliskt handelshus - Mithera-skattjägarna**\n\n## GRUNDINFO\n- **Ras:** Cirefalier\n- **Huvudsäte:** Cermira stad (grundat 2700-talet e.D.)\n- **Ledare:** Familjer Merocidan och Calanzeso\n- **Verksamhet:** Expeditioner i Mithera, kristallgruvor från Daliz Rim\n\n## OBSESSION\n**Mithera-fixering:**\n- Besatta av Mitheraskogen\n- Regelbundna expeditioner\n- Ljusskygga metoder\n\n## KONFLIKTER\n- **Fejd:** Nejas och Ivari\n- **Förbund:** Wekzi\n\n## POLITISK MAKT\nDjupt involverade i Cermira stads gillen\n\n## SL-ANTECKNINGAR\nMeneltaze är farligt nära Mithera - kan ha information om skogen som rollpersonerna behöver."
    },
    {
      "namn": "Handelshuset Mianai",
      "typ": "Handelshus",
      "ras": "Mänsklig",
      "huvudsäte": "Kryddöarna",
      "ledare": null,
      "verksamhet": "Kryddhandel, styrande på Kryddöarna",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET MIANAI\n**Mänskligt handelshus - Kryddö-rivalen**\n\n## GRUNDINFO\n- **Ras:** Mänsklig\n- **Huvudsäte:** Kryddöarna\n- **Verksamhet:** Styrande hus på Kryddöarna\n\n## METODER\n**Kriminell verksamhet:**\n- Betalar dhurkoorska pirater för att attackera rivaler\n- Våldsam konkurrensstrategi\n\n## POLITIK\nEtt av tre mänskliga styrande hus (tillsammans med Natah och Tanhi) mot pyariska Hahna\n\n## SL-ANTECKNINGAR\nMianai representerar den mörkare sidan av Kryddöarnas politik."
    },
    {
      "namn": "Handelshuset Mimore",
      "typ": "Handelshus",
      "ras": "Cirefalisk",
      "huvudsäte": null,
      "ledare": "Ficon Manziir (Cermira)",
      "verksamhet": "Kredithuset Elzimaz, timmer, legosoldater",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET MIMORE\n**Cirefaliskt handelshus - Kredithus-mästarna**\n\n## GRUNDINFO\n- **Ras:** Cirefalisk\n- **Verksamhet:** Kredithuset Elzimaz, timmer från Mithera, legosoldatverksamhet\n- **Cermira-ledare:** Ficon Manziir\n\n## LEDARE - FICON MANZIIR\n- Krigsveteran\n- Martari-kultist\n- Tränat cermiranska prinsarna i fäktning\n\n## VERKSAMHET\n- Export: Spannmål, smide\n- Import: Malm\n- Goda relationer med Manziiriska härakademin\n\n## RYKTE\nPålitliga, hög kvalitet, Martaridyrkare\n\n## POLITISK SITUATION\nKung Vidkuns skulder till Mimore komplicerar Cermiras politiska läge\n\n## SL-ANTECKNINGAR\nMimore är ett mäktigt finansiellt handelshus med politiskt inflytande."
    },
    {
      "namn": "Handelshuset Monome",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": "Forion",
      "ledare": null,
      "verksamhet": "Handel, låneverksamhet, finansiella tjänster",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET MONOME\n**Pyariskt handelshus - Forionska bankirer**\n\n## GRUNDINFO\n- **Ras:** Pyaralver\n- **Huvudsäte:** Forion\n- **Verksamhet:** Handel, låneverksamhet, finansiella tjänster\n\n## KONFLIKTER\n- Konflikt med cirefalier\n- Hemligt stöd från Imaytemplet\n\n**Färdigheter:** Handel, Kulturkännedom\n\n## SL-ANTECKNINGAR\nMonome har religiöst stöd vilket ger dem makt utöver deras ekonomiska styrka."
    },
    {
      "namn": "Handelshuset Natah",
      "typ": "Handelshus",
      "ras": "Mänsklig",
      "huvudsäte": "Kryddöarna",
      "ledare": null,
      "verksamhet": "Kryddhandel, styrande på Kryddöarna",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET NATAH\n**Mänskligt handelshus - Kryddö-styrande**\n\n## GRUNDINFO\n- **Ras:** Mänsklig\n- **Huvudsäte:** Kryddöarna\n- **Verksamhet:** Styrande hus på Kryddöarna\n\n## POLITIK\nEtt av fyra styrande hus på Kryddöarna (tillsammans med Mianai, Tanhi och pyariska Hahna)\n\n## SL-ANTECKNINGAR\nNatah är en del av den mänskliga majoriteten mot pyarisk militärmakt."
    },
    {
      "namn": "Handelshuset Nejas",
      "typ": "Handelshus",
      "ras": "Asharisk",
      "huvudsäte": "Jarla",
      "ledare": "Ylva Guldskeppa",
      "verksamhet": "Spannmål, pälsar, vapen - triangelhandel",
      "status": "fiende",
      "kapitel": "Kapitel 2",
      "beskrivning": "# HANDELSHUSET NEJAS\n**Ashariskt handelshus - Maktgriparna i Jarla [EXTREMT FARLIGT]**\n\n## GRUNDINFO\n- **Ras:** Asharisk\n- **Huvudsäte:** Jarla\n- **Ledare:** Ylva Guldskeppa ('mycket höga ambitioner')\n- **Verksamhet:** Spannmål, pälsar, vapen - triangelhandel Vitterdal/Cermira/Drunok\n\n## KRIMINELLA METODER\n**Använder lönnmördargildet 'Skrået':**\n- Eliminerar konkurrenter\n- Politiska mord\n- Infiltrerat Jarlas landsråd\n\n## AKTUELL STATUS\n**De facto härskare i Jarla:**\n- Frijarl Todor Felkes paranoid och isolerad\n- Nejas kontrollerar staden genom våld och manipulation\n- Stadsvakt brutal under kapten Hemkhath Thokk\n\n## FEJDER\n- **Wekzi:** Stulen pälslast\n- **Ramiz:** Har krossat genom anklagelser om förräderi, ledare fängslade\n\n## RELATION TILL KHAZ-ZATIM-GHOR\nDvärgiska Khaz-Zatim-Ghor arbetar ALDRIG med Nejas (för opålitliga)\n\n## KOPPLING TILL KAMPANJEN\nGruppen passerade genom Jarla under Fas 3 när Nejas maktgrepp var som värst\n\n## SL-ANTECKNINGAR\nNejas är en av kampanjens farligaste fraktioner - använder lönnmord som affärsstrategi."
    },
    {
      "namn": "Handelshuset Ordomah",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": null,
      "ledare": null,
      "verksamhet": "Landhandel, karavaner, spannmålstransport",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET ORDOMAH\n**Pyariskt handelshus - Mänskliggjorda karavanhandlare**\n\n## GRUNDINFO\n- **Ras:** Pyaralver (förlorar alviska drag)\n- **Verksamhet:** Landhandel, karavaner, spannmålstransport\n\n## UNIK KARAKTÄR\n**Mänskliggjorda alver:**\n- Förlorar alviska drag över generationer\n- 'Halvalver' vanliga\n- Manliga alver får skäggväxt\n- Totalt integrerade i mänskliga kulturer\n\n**Färdigheter:** Kulturkännedom, Köra vagn\n\n## SL-ANTECKNINGAR\nOrdomah representerar alvisk integration i mänskliga samhällen - kulturell anpassning över bevarande av alvisk identitet."
    },
    {
      "namn": "Handelshuset Pornaz",
      "typ": "Handelshus",
      "ras": "Cirefalisk",
      "huvudsäte": "Gordrion",
      "ledare": null,
      "verksamhet": "Riskfylld handel, expeditioner till farliga områden",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET PORNAZ\n**Cirefaliskt handelshus - Pionjärerna**\n\n## GRUNDINFO\n- **Ras:** Cirefalisk\n- **Huvudsäte:** Gordrion\n- **Verksamhet:** Riskfylld handel, expeditioner till farliga områden\n\n## SPECIALITET\n**Mod och risktagande:**\n- Söker vinst där andra undviker\n- Handel med tauper i Taupernas dal\n- Expeditioner till obefolkade områden\n\n## RYKTE\nPionjärer som tar risker andra handelshus undviker\n\n## SL-ANTECKNINGAR\nPornaz är perfekta för uppdrag i farliga områden - de har erfarenhet och kontakter där andra inte vågar sig."
    },
    {
      "namn": "Handelshuset Ramiz",
      "typ": "Handelshus",
      "ras": "Dvärgisk (Zolod-klanen)",
      "huvudsäte": "Lim'alan vhic Sunariye",
      "ledare": "Bhozin klan Zolod",
      "verksamhet": "Ockra, kryddor, sällsynta örter",
      "status": "neutral",
      "kapitel": "Kapitel 2",
      "beskrivning": "# HANDELSHUSET RAMIZ\n**Dvärgiskt handelshus - Nedkämpade kryddhandlarna [UNDER ATTACK]**\n\n## GRUNDINFO\n- **Ras:** Dvärgar (Zolod-klanen)\n- **Huvudsäte:** Lim'alan vhic Sunariye (Bhozin klan Zolod)\n- **Verksamhet:** Ockra, kryddor, sällsynta örter\n\n## FILIALER\n- **Jarla:** Khemir klan Zolod - **KRAFTIGT FÖRSVAGAD**\n\n## AKTUELL KRIS\n**Anklagade för förräderi i Jarla:**\n- Ledare fängslade av frijarl Todor\n- Utmanövrerade av Handelshuset Nejas\n- Offer för Nejas politiska maktspel\n\n## FEJDER\n- Kiryanska Samunali\n- **Nejas** (största hotet)\n\n## RELATION TILL KHAZ-ZATIM-GHOR\nBetrodd agent: 'Pålitliga om än ivriga'\n\n## KOPPLING TILL KAMPANJEN\nGruppen såg Ramiz fall i Jarla under Fas 3\n\n## SL-ANTECKNINGAR\nRamiz är offer för Nejas maktgrepp - potentiell allierad mot gemensam fiende."
    },
    {
      "namn": "Handelshuset Reza",
      "typ": "Handelshus",
      "ras": "Tirakisk",
      "huvudsäte": "Tiban, Takalorr",
      "ledare": "Bazirk-trukhen Kharziza Reza",
      "verksamhet": "Misstänks vilja starta 'fjärde tirakkrig'",
      "status": "farlig",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET REZA\n**Tirakiskt handelshus - Krigsstartarna**\n\n## GRUNDINFO\n- **Ras:** Tirakisk\n- **Huvudsäte:** Tiban, Takalorr\n- **Ledare:** Bazirk-trukhen Kharziza Reza\n- **Verksamhet:** Misstänks vilja starta 'fjärde tirakkrig'\n\n## PERSONAL\n- **Schaman:** Nekkma Andeblidare i tjänst\n\n## RYKTE\nElaka rykten om krigsplanering som huset bestämt förnekar\n\n## SL-ANTECKNINGAR\nReza är potentiellt farliga - tirakisk aggression kombinerad med handelshusets resurser."
    },
    {
      "namn": "Handelshuset Rihzim",
      "typ": "Handelshus",
      "ras": "Dvärgisk (Zolod-klanen)",
      "huvudsäte": "Daan Hammal, Soldarn",
      "ledare": "Zoloddvärgar",
      "verksamhet": "Glasblåsning, glashantverk",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET RIHZIM\n**Dvärgiskt handelshus - Glasmästarna**\n\n## GRUNDINFO\n- **Ras:** Dvärgar (Zolod-klanen)\n- **Huvudsäte:** Daan Hammal, Soldarn\n- **Verksamhet:** Glasblåsning, glashantverk\n\n## KUNDER\nCaseriska och meloriska köpmän\n\n## SL-ANTECKNINGAR\nRihzim är specialister på glas - använd dem för glasrelaterade uppdrag eller kontakter."
    },
    {
      "namn": "Handelshuset Salusta",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": null,
      "ledare": null,
      "verksamhet": "Kiryanska varor, alvisk 'exoticism'",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET SALUSTA\n**Pyariskt handelshus - Alvisk-exotiska säljare**\n\n## GRUNDINFO\n- **Ras:** Pyaralver\n- **Verksamhet:** Kiryanska varor, alvisk 'exoticism'\n\n## STRATEGI\n**Marknadsföring:**\n- Spelar på 'alviskhet' för att locka kunder\n- Använder alviska kläder och språk på marknader\n- Nära band till kiriyaalver\n\n**Färdigheter:** Övertala, Skådespel\n\n## SL-ANTECKNINGAR\nSalusta använder alvisk mystik som marknadsföring - teatralisk handel."
    },
    {
      "namn": "Handelshuset Samunali",
      "typ": "Handelshus",
      "ras": "Kiryansk",
      "huvudsäte": "Sunariskogen",
      "ledare": null,
      "verksamhet": "Handel i/omkring Sunariskogen",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET SAMUNALI\n**Kiryanskt handelshus - Skogshandlarna**\n\n## GRUNDINFO\n- **Ras:** Kiriyaalver\n- **Huvudsäte:** Sunariskogen\n- **Verksamhet:** Handel i/omkring Sunariskogen\n\n## RYKTE\nStörsta bland kiriyaalver\n\n## FEJDER\n- Zoloddvärgiska Ramiz\n\n**Färdigheter:** Berättarkonst, Köra vagn\n\n## SL-ANTECKNINGAR\nSamunali är dominerande i Sunariskogen - viktiga för kontakter med kiriyaalver."
    },
    {
      "namn": "Handelshuset Solmarin",
      "typ": "Handelshus",
      "ras": "Cirefalisk",
      "huvudsäte": "Vitterdal",
      "ledare": "Lysander & Cassandra Korinthos",
      "verksamhet": "Lyxvaror, kryddor, textilier, postkontor",
      "status": "allierad",
      "kapitel": "Kapitel 6",
      "beskrivning": "# HANDELSHUSET SOLMARIN\n**Cirefaliskt handelshus - Vitterdal-filialen** *(Gordons kontakt)*\n\n## GRUNDINFO\n- **Ras:** Cirefalisk\n- **Huvudsäte:** Vitterdal\n- **Ledare:** Lysander & Cassandra Korinthos (15 år i staden)\n- **Verksamhet:** Lyxvaror, kryddor, textilier från södra arkipelagen, postkontor\n\n## AKTUELL SITUATION\nDrabbade av handelsstörningar, oroliga för säkerheten\n\n## RELATIONER\n- Goda relationer med dvärgar\n- Goda relationer med Vitterdals adelshus\n- **Betrodd agent för Khaz-Zatim-Ghor:** 'Diskreta och professionella'\n\n## KOPPLING TILL KAMPANJEN\nGordon har kontakt med Solmarin i Vitterdal\n\n## SL-ANTECKNINGAR\nSolmarin är Gordons kontakt för diplomatiska tjänster och postväsende."
    },
    {
      "namn": "Handelshuset Tanhi",
      "typ": "Handelshus",
      "ras": "Mänsklig",
      "huvudsäte": "Kryddöarna",
      "ledare": null,
      "verksamhet": "Kryddhandel, styrande på Kryddöarna",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET TANHI\n**Mänskligt handelshus - Kryddö-splittrat**\n\n## GRUNDINFO\n- **Ras:** Mänsklig\n- **Huvudsäte:** Kryddöarna\n- **Verksamhet:** Styrande hus på Kryddöarna\n\n## POLITIK\n**Splittrat mellan allianser:**\n- Ett av fyra styrande hus (med Mianai, Natah, Hahna)\n- Intern konflikt om allianser\n\n## SL-ANTECKNINGAR\nTanhi är det minst stabila av Kryddöarnas styrande hus."
    },
    {
      "namn": "Handelshuset Temiranz",
      "typ": "Handelshus",
      "ras": "Cirefalisk",
      "huvudsäte": "Melorion",
      "ledare": null,
      "verksamhet": "Glas, spannmål, salt, metaller",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET TEMIRANZ\n**Cirefaliskt handelshus - Mundanas största**\n\n## GRUNDINFO\n- **Ras:** Cirefalisk\n- **Huvudsäte:** Melorion\n- **Verksamhet:** Glas, spannmål, salt, metaller - nästan global räckvidd\n\n## FILIALER\n- **Camard:** Penzior Caszara\n- **Chadarian:** Canaza\n- Filialer världen över\n\n## FINANSIELL MAKT\nMajoritetsägare i eget kredithus med samma namn\n\n## RELATION TILL KHAZ-ZATIM-GHOR\nAnvänds för större distributionsuppgifter: 'Har räckvidd men kräver övervakning'\n\n## SL-ANTECKNINGAR\nTemiranz är Mundanas största handelshus - global makt och inflytande."
    },
    {
      "namn": "Handelshuset Turkosen",
      "typ": "Handelshus",
      "ras": "Colonansk",
      "huvudsäte": "Colonan",
      "ledare": "Chasim Chasimir (familjen Charovilad)",
      "verksamhet": "Alkemiska preparat, droger, örter, stenar",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET TURKOSEN\n**Colonanskt handelshus - Alkemiska specialister**\n\n## GRUNDINFO\n- **Ras:** Colonansk\n- **Ägs av:** Familjen Charovilad i Colonan\n- **Ledare:** Chasim Chasimir (mystisk ålderman)\n- **Verksamhet:** Obskyra alkemiska preparat, droger, örter, stenar\n\n## SPECIELLT\n**Mundanas största alkemiska laboratorium:**\n- I källarvalv\n- Nära samarbete med minst två hus i Legio Colonan\n\n## SL-ANTECKNINGAR\nTurkosen är kontakten för alkemiska substanser och obskyra ingredienser."
    },
    {
      "namn": "Handelshuset Ukkalim",
      "typ": "Handelshus",
      "ras": "Marnakhtirakisk",
      "huvudsäte": "Katharsis, Soldarn",
      "ledare": "Harkk Kötthandlaren",
      "verksamhet": "Prostitution, slavhandel, kriminella affärer",
      "status": "farlig",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET UKKALIM\n**Marnakhtirakiskt handelshus - Ljusskygga affärer**\n\n## GRUNDINFO\n- **Ras:** Marnakhtiraker\n- **Huvudsäte:** Katharsis, Soldarn\n- **Ledare:** Harkk Kötthandlaren\n- **Verksamhet:** Prostitution, slavhandel, kriminella affärer\n\n## FAMILJEKONFLIK\n**Mor Dhakka** driver liknande verksamhet i Takalorr\n\n## SL-ANTECKNINGAR\nUkkalim är kriminellt handelshus - farliga men nyttiga kontakter i undre världen."
    },
    {
      "namn": "Handelshuset Vilia",
      "typ": "Handelshus",
      "ras": "Pyaralver",
      "huvudsäte": "Tuzan Rim",
      "ledare": "Frijarl Lemendien Silverfjäder",
      "verksamhet": "Järn, timmer, tobak",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET VILIA\n**Pyariskt handelshus - Strukturerade järnhandlare**\n\n## GRUNDINFO\n- **Ras:** Pyaralver\n- **Huvudsäte:** Tuzan Rim, Asharien\n- **Ledare:** Frijarl Lemendien Silverfjäder\n- **Verksamhet:** Järn, timmer, tobak\n\n## FILIALER\n- **Nimto:** Anuien Tavu\n\n## ARBETSSÄTT\n**Strukturerade och taktiska:**\n- Kräver lojalitetseder\n- Systematisk organisation\n\n**Färdigheter:** Handel, Bokhållning\n\n## ALLIANSER\nSamarbetar med Leurest'ya\n\n## SL-ANTECKNINGAR\nVilia är välorganiserade och pålitliga - bra för långsiktiga affärsrelationer."
    },
    {
      "namn": "Handelshuset Wekzi",
      "typ": "Handelshus",
      "ras": "Marnakhtirakisk",
      "huvudsäte": "Rampor, Västmark",
      "ledare": "Handelsfurstinna Nihtor Wekzi",
      "verksamhet": "Grovsmide, pälsar, sprit, saltfisk",
      "status": "neutral",
      "kapitel": "Kapitel 2",
      "beskrivning": "# HANDELSHUSET WEKZI\n**Marnakhtirakiskt handelshus - Asharina-krigarna under press**\n\n## GRUNDINFO\n- **Ras:** Marnakhtiraker\n- **Huvudsäte:** Rampor, Västmark\n- **Ledare:** Handelsfurstinna Nihtor Wekzi\n- **Verksamhet:** Inflytande över hela Asharinahalvön, grovsmide, pälsar, sprit, saltfisk\n\n## CERMIRA-LEDARE\n**Thukkor Wekzi:**\n- 'Järnhand'\n- Fet, sidenrockar\n- Skarptänkt\n\n## FILIALER\n- **Tiban:** Brakka Wekzi\n- **Jarla:** Kusin Gekthtath\n\n## AKTUELL KRIS\n**Förlorad pälslast från Vitterdal:**\n- Brutal fejd mot Ivari\n- Desperat strategi: Smörer för Mimore/Meneltaze\n\n## RELATION TILL KHAZ-ZATIM-GHOR\nDvärgiska Khaz-Zatim-Ghor arbetar ALDRIG med Wekzi (för våldsamma)\n\n## KOPPLING TILL KAMPANJEN\nGruppen träffade Gekthtath av Wekzi i Jarla (Fas 3)\n\n## SL-ANTECKNINGAR\nWekzi är desperata och farliga - använder våld som affärsstrategi."
    },
    {
      "namn": "Handelshuset Ziliz",
      "typ": "Handelshus",
      "ras": "Dvärgisk (Zolod-klanen)",
      "huvudsäte": "Camard",
      "ledare": "Balin den Silvertungade",
      "verksamhet": "Metaller, vapen, rustningar, keramik",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# HANDELSHUSET ZILIZ\n**Dvärgiskt handelshus - Metallmästarna**\n\n## GRUNDINFO\n- **Ras:** Dvärgar (Zolod-klanen)\n- **Huvudsäte:** Camard\n- **Ledare:** Balin den Silvertungade\n- **Verksamhet:** Metaller, vapen, rustningar, keramik\n\n## RYKTE\nBitter konkurrens med Jon Thekol/'Camards Väl'\n\n## RELATION TILL KHAZ-ZATIM-GHOR\nBetrodd agent för metallhantverk: 'Förstår kvalitet'\n\n## SL-ANTECKNINGAR\nZiliz är dvärgisk kvalitet i metallarbete - Khaz-Zatim-Ghors föredragna agent."
    }
  ],

  magihus: [
    {
      "namn": "Magihuset Consenti",
      "typ": "Magihus (Legio Colonan)",
      "ras": "Blandad",
      "huvudsäte": "Colonan",
      "ledare": null,
      "verksamhet": "Krigsmagiker och diplomater",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# MAGIHUSET CONSENTI\n**Legio Colonan - Krigsmagiker och diplomater**\n\n## GRUNDINFO\n- **Typ:** Ett av de tio stora husen inom magikersällskapet Legio Colonan\n- **Verksamhet:** Krigsmagik och diplomati\n\n## SPECIALITET\n**Dual focus:**\n- Militär magi\n- Diplomatisk verksamhet\n\n## SL-ANTECKNINGAR\nConsenti kombinerar makt och diplomati - användbara för både strid och förhandlingar."
    },
    {
      "namn": "Magihuset Cuvri'an",
      "typ": "Magihus (Legio Colonan)",
      "ras": "Alvisk",
      "huvudsäte": "Alarinn",
      "ledare": "Lirmana (domus magus)",
      "verksamhet": "Alvexklusiv magik",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# MAGIHUSET CUVRI'AN\n**Legio Colonan - Alvexklusiva magiker**\n\n## GRUNDINFO\n- **Typ:** Magihus inom Legio Colonan\n- **Huvudsäte:** Alarinn\n- **Ledare:** Lirmana (domus magus)\n- **Medlemmar:** 8 léaramalver, 3 sanarialver\n\n## SPECIELLT\n**Hedersmedlem:** Sir Verduhrakh (lumiandraken)\n**Relation:** Alean Ninarian\n\n## KARAKTÄR\nExklusivt alviskt - accepterar endast alver som medlemmar\n\n## SL-ANTECKNINGAR\nCuvri'an är den alviska magiska eliten - prestigi öst och exklusivt."
    },
    {
      "namn": "Magihuset Dilige",
      "typ": "Magihus (Legio Colonan)",
      "ras": "Blandad",
      "huvudsäte": "Colonan",
      "ledare": null,
      "verksamhet": "Administration, informella kontakter, mutor och vänskapskorruption",
      "status": "neutral",
      "kapitel": null,
      "beskrivning": "# MAGIHUSET DILIGE\n**Legio Colonan - Administratörer och 'rumlare'**\n\n## GRUNDINFO\n- **Typ:** Magihus inom Legio Colonan\n- **Verksamhet:** Administration, informella kontakter, mutor och vänskapskorruption\n\n## SPECIALITET\n**Grå zonen:**\n- Hanterar administration\n- Informella kontakter\n- Mutor och 'vänskapskorruption'\n- Smörjer systemet\n\n## SL-ANTECKNINGAR\nDilige är de som får saker att hända bakom kulisserna - korrupta men effektiva."
    },
    {
      "namn": "Magihuset Duncreigh",
      "typ": "Magihus (Legio Colonan)",
      "ras": "Blandad",
      "huvudsäte": "Colonan",
      "ledare": "Emerall",
      "verksamhet": "Mystisk front för hemliga 'Priori Cun-Sabreann'",
      "status": "misstänkt",
      "kapitel": null,
      "beskrivning": "# MAGIHUSET DUNCREIGH\n**Legio Colonan - Mystiska fronten**\n\n## GRUNDINFO\n- **Typ:** Magihus inom Legio Colonan\n- **Ledare:** Emerall\n- **Verksamhet:** Misstänkt front för hemliga 'Priori Cun-Sabreann'\n\n## MISSTANKE\n**Endast front:**\n- Duncreigh misstänks vara fasad\n- Verklig organisation: 'Priori Cun-Sabreann'\n- Hemlig agenda\n\n## RELATIONER\nEmerall har goda relationer med Thalamur-magikrater\n\n## SL-ANTECKNINGAR\nDuncreigh är mysterium - vad döljer de egentligen?"
    }
  ],

  militära: [
    {
      "namn": "Arvorns Hammare",
      "typ": "Militär/Religiös organisation",
      "ras": "Huvudsakligen människor",
      "huvudsäte": null,
      "ledare": null,
      "verksamhet": "Anti-magi fanatiker, häxjagare",
      "status": "fiende",
      "kapitel": "Kapitel 7",
      "beskrivning": "# ARVORNS HAMMARE\n**Militär-religiös organisation - Anti-magi fanatiker**\n\n## GRUNDINFO\n- **Typ:** Religiös-militär orden\n- **Verksamhet:** Jaga och utrota magianvändare och 'demonkorruption'\n- **Status:** **FIENDE** till gruppen\n\n## METODER\n**Brutala och systematiska:**\n- Ockuperar byar under 'magisk kontamina tionsundersökning'\n- Systematiskt folkmord på 'korrupta'\n- Korsfästelse av 'lögnare'\n- Jagar gruppen (särskilt Zentri)\n\n## VIKTIGA HÄNDELSER\n**Vargnäset ockupation (Kapitel 7):**\n- Ockuperade byn\n- Utrotade 160+ bybor\n- Korsfäste Sankt Astrid (12-årig flicka)\n- Triggade Corvus gudomliga uppenbarelse\n\n## RELATION TILL CORVUS\nCorvus Askhar var f.d. Kommendör i Arvorns Hammare - nu förrädare och jagad\n\n## SL-ANTECKNINGAR\nArvorns Hammare är kampanjens primära militära antagonist - fanatiska och obevekliga."
    },
    {
      "namn": "Stålsvärds Kavalerister",
      "typ": "Legosoldatkompani",
      "ras": "Blandad",
      "huvudsäte": null,
      "ledare": "F.d. Kaelar Stålsvärd",
      "verksamhet": "Legosoldater (upplöst)",
      "status": "upplöst",
      "kapitel": "Prolog",
      "beskrivning": "# STÅLSVÄRDS KAVALERISTER\n**Legosoldatkompani - Upplöst efter Tirakgraven**\n\n## GRUNDINFO\n- **Typ:** Legosoldatkompani\n- **F.d. ledare:** Kaelar Stålsvärd\n- **Status:** Upplöst eller spridd\n- **Verksamhet:** Bevakade Tirakgravens utgrävning (Prolog)\n\n## HISTORIA\n**Tirakgraven (Fas 1):**\n- Bevakade utgrävningen\n- Såg demonen delvis frigöras\n- Förlorade kontroll när Serafina stal bindningsföremålen\n- Traumatiska förluster\n\n## EFTER TIRAKGRAVEN\n- Kaelar utvecklade alkoholproblem\n- Kompaniet upplöstes eller spreds\n- Medlemmar spridda över Mundana\n\n## KAELAR IDAG\nÖvervann alkoholism, nu kapten för Hagges hussoldate i Vitterdal\n\n## SL-ANTECKNINGAR\nF.d. medlemmar kan dyka upp som allierade eller fiender - delade traumat från Tirakgraven."
    },
    {
      "namn": "Systrarna / Zorian-orden",
      "typ": "Religiös-militant orden",
      "ras": "Människor",
      "huvudsäte": "Lundnäs",
      "ledare": "Lady Isadora",
      "verksamhet": "Jaga demonkorruption",
      "status": "komplex",
      "kapitel": "Kapitel 8",
      "beskrivning": "# SYSTRARNA / ZORIAN-ORDEN\n**Religiös-militant orden - Demonjägare**\n\n## GRUNDINFO\n- **Typ:** Religiös-militant orden\n- **Huvudsäte:** Lundnäs\n- **Ledare:** Lady Isadora\n- **Verksamhet:** Jaga och bekämpa demonkorruption\n\n## VIKTIGA MEDLEMMAR\n- **Lady Isadora:** Ledare\n- **Syster Moira:** Andlig ledare\n\n## METODER\n**Mer raffinerade än Arvorns Hammare:**\n- Anlitar legosoldater (t.ex. Halrik Kord)\n- Spårhundar och spejare\n- Systematisk jakt på demonkorruption\n\n## RELATION TILL GRUPPEN\n**Komplex och osäker:**\n- Jagar Zentri (silverringen = demonkoppling)\n- Men bekämpar också demonen Urkhath\n- Potentiell allierad mot gemensam fiende?\n- Observerade evakueringen vid Iskvarnsbryggan\n\n## KOPPLING TILL KAMPANJEN\n- Anlitade Halrik Kord för att jaga Zentri (Kapitel 6)\n- Observerade gruppen under evakueringen (Kapitel 8)\n\n## SL-ANTECKNINGAR\nSystrarna är moraliskt grå - jagar demoner men också gruppen. Potentiell förhandlingspartner?"
    }
  ],

  kriminella: [
    {
      "namn": "Skrået",
      "typ": "Lönnmördargille",
      "ras": "Blandad",
      "huvudsäte": "Jarla",
      "ledare": null,
      "verksamhet": "Lönnmord, politiska mord",
      "status": "fiende",
      "kapitel": "Kapitel 2",
      "beskrivning": "# SKRÅET\n**Lönnmördargille - Nejas blodiga verktyg**\n\n## GRUNDINFO\n- **Typ:** Lönnmördargille\n- **Bas:** Jarla\n- **Verksamhet:** Lönnmord, politiska mord\n- **Arbetsgivare:** Handelshuset Nejas (primär klient)\n\n## METODER\n**Professionella lönnmördare:**\n- Eliminerar Nejas konkurrenter\n- Politiska mord\n- Tyst och effektivt\n\n## RELATION TILL NEJAS\nFungerar som Nejas militära arm i Jarlas maktövertagande\n\n## KOPPLING TILL KAMPANJEN\nGruppen såg Skråets arbete i Jarla (Fas 3) - Ramiz föll offer\n\n## SL-ANTECKNINGAR\nSkrået är professionella - farliga om gruppen blir mål."
    },
    {
      "namn": "Skuggväktarna",
      "typ": "Tjuvgille",
      "ras": "Blandad",
      "huvudsäte": "Jarla",
      "ledare": null,
      "verksamhet": "Tjuveri, smuggling, undre världen",
      "status": "neutral",
      "kapitel": "Kapitel 2",
      "beskrivning": "# SKUGGVÄKTARNA\n**Tjuvgille - Jarlas undre värld**\n\n## GRUNDINFO\n- **Typ:** Tjuvgille\n- **Bas:** Jarla\n- **Verksamhet:** Tjuveri, smuggling, svartabörshandel\n\n## SITUATION I JARLA\n**Djärvare än någonsin:**\n- Frijarl Todors paranoia skapar maktvakuum\n- Stadsvakt upptagen med politiska fångar\n- Skuggväktarna expanderar verksamhet\n\n## RELATION TILL MAKT\nGynnades av Nejas maktövertagande - mindre kontroll från myndigheter\n\n## SL-ANTECKNINGAR\nSkuggväktarna kan vara informationskälla eller smugglingshjälp - om priset är rätt."
    }
  ],

  övriga: [
    {
      "namn": "Daak-kyrkan",
      "typ": "Religiös organisation",
      "ras": "Huvudsakligen människor",
      "huvudsäte": "Jargien",
      "ledare": null,
      "verksamhet": "Religiös makt, Daak-dyrkan",
      "status": "komplex",
      "kapitel": null,
      "beskrivning": "# DAAK-KYRKAN\n**Religiös organisation - Jargiens dominerande religion**\n\n## GRUNDINFO\n- **Typ:** Religiös organisation\n- **Centrum:** Jargiska Kejsardömet\n- **Verksamhet:** Daak-dyrkan, religiös kontroll\n- **Inflytande:** Massivt i Jargien, stort i Cermira\n\n## KARAKTÄR\n**Dogmatisk och mäktig:**\n- Dödsstraff för andra religioner i Jargien\n- Politiskt inflytande\n- Kontroll över utbildning och moral\n\n## RELATION TILL GRUPPEN\n**Corvus bakgrund:**\n- F.d. Kommendör i Arvorns Hammare (Daak-fanatiker)\n- 23 års tro krossad av Sankt Astrids martyrskap\n- Lämnade sin Daak-medalj på altaret\n\n## SL-ANTECKNINGAR\nDaak-kyrkan är maktstruktur snarare än trossamfund - korruption (Fasces falska reliker) och fanatism (Arvorns Hammare)."
    },
    {
      "namn": "Sanari-alverna",
      "typ": "Alvisk nation",
      "ras": "Sanarialver",
      "huvudsäte": "Sanari-alvernas rike",
      "ledare": null,
      "verksamhet": "Alvisk nation med bindningsföremål",
      "status": "potentiell allierad",
      "kapitel": null,
      "beskrivning": "# SANARI-ALVERNA\n**Alvisk nation - Har bindningsföremål**\n\n## GRUNDINFO\n- **Typ:** Alvisk nation\n- **Ras:** Sanarialver\n- **Verksamhet:** Alvisk kultur och magi\n\n## VIKTIGT FÖR KAMPANJEN\n**Har bindningsföremål:**\n- Äger föremål som kan binda demonen Urkhath\n- Kritisk för gruppens slutmål\n- Potentiell allierad mot demonen\n\n## STATUS\nPotentiell allierad - gruppen behöver förhandla om bindningsföremål\n\n## SL-ANTECKNINGAR\nSanari-alverna är nyckeln till att binda Urkhath - förhandlingar kommer vara kritiska."
    },
    {
      "namn": "Tirakstammen",
      "typ": "Tirakisk stam",
      "ras": "Tiraker",
      "huvudsäte": "Gränstrakterna",
      "ledare": null,
      "verksamhet": "Tirakisk kultur, krigare",
      "status": "komplex",
      "kapitel": "Prolog",
      "beskrivning": "# TIRAKSTAMMEN\n**Tirakisk stam - Från Tirakgraven**\n\n## GRUNDINFO\n- **Typ:** Tirakisk stam\n- **Område:** Gränstrakterna Cermira/Mithera\n- **Verksamhet:** Tirakisk krigarkultur\n\n## HISTORIA\n**Tirakgraven (Prolog):**\n- Deras förfäders grav utgrävdes\n- Strider med utgrävarna\n- Demonen delvis frigjord från graven\n- Potentiellt offer för demonens makt\n\n## RELATION TILL THRAKKA\nThrakka är tirak, men hennes relation till stammen oklar\n\n## SL-ANTECKNINGAR\nTirakstammen kan söka hämnd för gravskändning eller vara offer för demonen."
    },
    {
      "namn": "De Röda Vargarna",
      "typ": "Banditgäng",
      "ras": "Blandad",
      "huvudsäte": "Muhad-regionen",
      "ledare": null,
      "verksamhet": "Rövare, plundrare",
      "status": "fiende",
      "kapitel": "Kapitel 2",
      "beskrivning": "# DE RÖDA VARGARNA\n**Banditgäng - Muhads rövare**\n\n## GRUNDINFO\n- **Typ:** Banditgäng/Rövare\n- **Område:** Muhad-regionen\n- **Verksamhet:** Plundring, röveri\n\n## KOPPLING TILL KAMPANJEN\n**Tuzan Rim (Kapitel 2):**\n- Aktiva i regionen\n- Tafrandir försvinner i samband med deras närvaro\n- Hot mot resenärer\n\n## SL-ANTECKNINGAR\nDe Röda Vargarna är lokalt hot i Muhad - farliga men inte huvudantagonister."
    }
  ]
};

// CommonJS export för Node.js validering
if (typeof module !== 'undefined' && module.exports) {
  module.exports = fraktionerData;
}
