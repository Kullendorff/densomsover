# EON Reseregister — DATA (genererad)

> **GENERERAD FIL — redigera inte för hand.** Ändra `resedata.js` och kör `node generate.js`.
>
> Genererad: 2026-08-25 · Källa: `D:\rollspel\EON\master\wiki_data.js` (58 platser, 317 NPCs laddade)
> Omfång: Cermira + Vitterdal-kärnan (kalibreringsdata finns för dessa noder). Kanonordning vid konflikt: kampanjkrönika.md > wiki_data.js > NotebookLM.
> Kampanjdato: 17:e Hömånad, år 2 = 2967 e.R. (kampanjstart år 1 = 2966 e.R.) · Säsong: Högsommar · Källa: Johan via claude-sessionen 2026-08-25 (oxen-launch seq 9 + seq 18: cermira-kartans 'År 2967 efter reningen' = kampanjens nutid)
> Kartkälla: PRIMÄR världskarta: mundana-extra.jpg (har CERMIRA + skala 0–200 mil; Drunok mellan Jargien och Cermira ✓). Regionkartor: cermira.png ('År 2967 efter reningen'), asharien.jpg (jarladömena), cirefalier.jpg (samväldet: Gordrion/Melorion-öarna/Caserion/Colm — bekräftar Remzian Krack på Raunfloden, Marek Pomian vid Rhungsjön, Zian Rims fyr m.fl.), damarien.jpg (Damarien/Västmark med gränsfloden Krylon, bergspassen Dvärgpasset/Utborgspasset/Rolvis trappa/Korpärnas pass — SKALA I DAGSMARSCHER: 2 dagsmarscher ≈ 10 mil ⇒ kartan antyder ~5 mil/dagsmarsch, översta spannet; grov skala, använd försiktigt). Historisk: mundana-gammal.jpg (CERMIRA SAKNAS — före inskrivningen, endast kuriosum). MAKRO-ORDNING (Johan): västerut→österut Jargien → Drunok → Cermira/Asharien. Skala: 'mil' antas 10 km (200 mil ≈ 2 000 km). Geografibekräftat 2026-08-25: Mitheraskogen ÖST/NORR om Vitterdal; Jarla = Ashariens nordligaste jarladöme vid Cermiras sydgräns; Raunflodens lopp Stencirkeln→Fort Otis→Ramil/Jarla (krök)→österut→Nordvik; Tuzan Rim på ostkusten vid Rhung sjön. Stavvariant: 'Gaserion' (mundana-extra) vs 'Caserion' (kanon) — antas samma rike

## 1. Platsregister (noder — härledda ur wiki_data.js via join)

| Namn | Typ | Region | Datakälla |
|---|---|---|---|
| Abhan-hir-renk-Ghor | Dvärgfäste | Tarkas/Jargien gräns | wiki_data.js |
| Bergvik | Skogsby (timmer/kol/pälsar) | Cermira, Mitheragränsen | EXTRA — kampanjkrönika.md:1737–1783 + trakten-omgivningar.md handelstabell |
| Cermira stad <br>*(alias → Cermira, egen SSOT-post saknas)* | Region och land | Västra Mundana | wiki_data.js |
| Fort Otis | Fästning med flodhamn | Sunnanmark/Raunfloden | EXTRA — cermira.png + EON-Reseregister-Mall.md avsnitt 1 och 3 |
| Frisänkan | By | Gränstrakterna mellan Cermira och Mithera | wiki_data.js |
| Grensfortet | Militär befästning | Gränstrakterna mellan Cermira och Mithera | wiki_data.js |
| Iskvarnsbryggan | Flodbrygga | Cermira | wiki_data.js |
| Jarla | Fristad | Asharien | wiki_data.js |
| Rödskäggs Tillflykt | Dolt handelsläger | Cermira | wiki_data.js |
| S:t Kira | Jarladöme/ort | Cermira | EXTRA — cermira.png + vitterdal-baronieriet.md:682 ('jarladöme med bättre klimat') |
| Tuzan Rim | Hamnstad | Kusten | wiki_data.js |
| Vargnäset | By | Mellan Muhad och Cermira | wiki_data.js |
| Vitterdal | Region/Område | Cermira | wiki_data.js |

**Platsnoter:**
- **Jarla:** Gränsstad och Ashariens nordligaste jarladöme (egen häroldsbaner enligt asharien.jpg). Ligger på RAUNFLODENS SÖDRA STRAND (kanon ~1 600 inv, frijarl Todor Fete) — livlig knutpunkt för flod- och landshandel, Cermiras sydport. Plågas av cirefaliska spioner, tjuvgillen och lönnmördarskrån. wiki_data-regionen 'Asharien' är korrekt men ofullständig; föreslagen SSOT-formulering: 'Asharien (jarladömet Jarla, gränsar Cermira i söder)'.
- **Tuzan Rim:** Kvävande het kuststad med stor, tungt befäst ÖRLOGSHAMN — Ashariens krigsflottas bas. Starkt thalaskiskt och cirefaliskt inflytande; frijarl Lemendien Silverfjäder.

## 2. Landkanter (kalibrerade mot spelade rutter)

| Från → Till | Transport | Km | Dagar | Terräng | Faror/säsong | Källa |
|---|---|---|---|---|---|---|
| Vitterdal → Cermira stad | landsväg, häst/vagn | 150 | 3–4 | kultiverat, östra vägen | — | vitterdal-baronieriet.md:686 |
| Vitterdal → S:t Kira | landsväg, södra vägen | — | — | kultiverat | — | vitterdal-baronieriet.md:687 |
| S:t Kira → Jarla | landsväg, södra vägen | — | — | övergår till Asharien (gränspassage) | — | vitterdal-baronieriet.md:687 |
| Vitterdal → Grensfortet | Mithervägen — bergsväg österut (mot Mithera-gränsen; namnet godkänt av Johan, oxen-launch seq 17) | 50 | 2–3 | bergsterräng | Skugglandets gränser går tunt in i Mithera — tematiskt samma gräns (Johan, oxen-launch seq 13) | vitterdal-baronieriet.md:688 |
| Vitterdal → Frisänkan <br>**tolkning** | direktled norrut, ENDAST lätt last till fots | 15 | 1 | myr-/skogsteräng mot Mitheragränsen | — | vitterdal-baronieriet.md:690 |
| Vitterdal → Bergvik <br>**tolkning** | oxkärra, bergsväg | — | 4 | bergsväg, ofta dimma | — | kampanjkrönika.md:1737–1783 |
| Bergvik → Frisänkan | oxkärra | — | 1 | skog/mark | — | kampanjkrönika.md:1804 |
| Frisänkan → Grensfortet | oxkärra | — | 1 | gränstrakter | — | kampanjkrönika.md:1817 |
| Vargnäset → Rödskäggs Tillflykt | ridande, snabbt, obelastat | — | 1 | vinter, snö | — | kampanjkrönika.md:1522, 1537 |
| Vargnäset → Iskvarnsbryggan | marsch, 41 civila inkl hjälpbehövande | — | 5 | vinter, −8 till −15 °C | kyla (en dog), snöstorm, matbrist | kampanjkrönika.md:1483 |
| Abhan-hir-renk-Ghor → Vargnäset | dvärgisk handelskaravan, vinter | — | 15 | vinterväglag | snöstorm förlängde resan med veckor | kapitel-4-jargien.html + kampanjkrönika.md:255 / 748 |
| Vargnäset → Vitterdal | ridande/häst | — | 3 | — | — | .claude/memory/learnings.md:268 |

## 3. Vattenkanter

| Från → Till | Transport | Km | Dagar | Terräng/säsong | Källa |
|---|---|---|---|---|---|
| Jarla → Tuzan Rim | kustsegling (handelsfartyg) | — | 14 | Ashariens kust | kampanjkrönika.md:330 |
| Cermira stad → Fort Otis | flodbåt via Månsjön→Raunfloden, MEDSTRÖM söderut (bekräftat) | — | — | Raunfloden är ISFRI ÅRET RUNT (fungerar alla säsonger) | EON-Reseregister-Mall.md + Johan seq 17:48–51 |

## 4. Bas-hastigheter och referensvärden

| Transportsätt | Km/dag | Packning | Källa/anmärkning |
|---|---|---|---|
| Fotmarsch, normal (regelbok) | 36 | — | 5092_eon_III_spelledarens_guide.txt:5918–5920 (3 km/h × max 12 tim) |
| Fotmarsch, snabb (regelbok) | 44 | — | samtlig fil (4 km/h × 11 tim) |
| Fotmarsch, forcerad (regelbok) | 50 | — | samma fil (5 km/h × 10 tim) |
| Ritt, normal, obelastad (regelbok) | 48 | — | samma fil:5924, 5929 (4 km/h × 12 tim) |
| Ritt, snabb (regelbok) | 80 | — | samma fil (8 km/h × 10 tim) |
| Ritt, forcerad (regelbok) | 120 | — | samma fil (15 km/h × 8 tim) |
| Ritt, galopp (regelbok, max 1 tim) | 30 | — | samma fil (30 km/h × 1 tim — sprint, ej dagsetapp) |
| Vagn, normal (regelbok) | 36 | — | samma fil:5825–5827 (3 km/h × 12 tim) |
| Vagn, snabb (regelbok) | 50 | — | samma fil (5 km/h × 10 tim) |
| Vagn, forcerad (regelbok) | 80 | — | samma fil (10 km/h × 8 tim) |
| Till fots, militär takt (Krigsherren) | 30 | — | krigsherren.md:198 (EM-O001_legokompaniet/research). lägre än regelbokens 36 — militärmarsch med full packning |
| Standardpackning fotfolk | — | ≤ 40 kg | krigsherren.md:199. viktrapport, inte hastighet |
| Häst, landsväg, BELASTAD (fälthastighet) | 38–50 | — | härledt baklänges ur Vitterdal↔Cermira (150 km/3–4 d) och Vitterdal↔Jarla (200 km/5–6 d). jämför regelboksbasen 48 (ritt normal obelastad): spelade rutter ger lägre effekt pga last+terräng — använd fältsiftet för realistiska etapper, 48 för idealförhållanden |
| Bergsterräng (häst/oxkärra, fältvärde) | 17–25 | — | härledt ur Vitterdal→Grensfortet (50 km/2–3 d) |
| Karavan | — | — | Ingen fast tabell i regelverket (bekräftat saknas) — heuristik enligt mallen avsnitt 6 |

## 5. Bärförmåga & belastning

- **Tvåbenta:** (STY+TÅL)/2 kg, avrundat nedåt
- **Fyrbenta (häst m.fl.):** STY+TÅL kg (ingen division)

Tabell R2-79 (belastning vs. BF):

| Belastning | Utmattning | Förflyttning | Svårighet |
|---|---|---|---|
| ≤ BF | ±0 | ±0 (bas) | ±0 |
| ≤ 2×BF | +1 | −1 | ±0 |
| ≤ 3×BF | +2 | −2 | +Ob1T6 |
| ≤ 4×BF | +3 | −3 | +Ob1T6 |
| ≤ 5×BF | +4 | −4 | +Ob2T6 |
| ≤ 6×BF | +5 | −5 | +Ob2T6 |

Ingen fast procentuell km-reducering — överbelastning verkar via svårighetsslaget (Marsch/Rida/Köra vagn för dagsetappen) plus extra utmattning. Misslyckat slag kortar dagsetappen med 1 timme per negativ effektpoäng. Förflyttning kan aldrig sänkas under 1.

*Källor: 5092_eon_III_spelledarens_guide.txt sid 75–78 + 5091_eon_III_spelarens_bok.txt:3747 ('Bärförmåga är lika med (STY+TÅL).')*

## 6. Vägtyper & möten

Vägtyp ger INGEN direkt hastighetsmultiplikator. Två separata mekaniska effekter:
- Svårighet på dagens Marsch/Rida-slag: lätt terräng (väg, bred stig) −Ob1T6; jobbig terräng (snårigt/sankt/kuperat) +Ob1T6. Misslyckat slag = 1 tim kortare restid per negativ effektpoäng.
- Mötesfrekvens (Tabell R2-141/142): kejserlig landsväg/större handelsväg nivå 4 → Ob6T6 möten/dag; mindre väg nivå 2 → Ob1T6/dag. Modifierare: stenlagd +1, förfallen −1, obefolkat −1, tätbefolkat +1, marknadstider +2, dåligt väder −1, stormväder −2.
- *RI-34/35 (tullmultiplikator) är separat ekonomisk mekanik — se mallen §7. Påverkar varken hastighet eller möten.*

*Källa: 5092_eon_III_spelledarens_guide.txt (R2-79–84, R2-141/142)*

## 7. Floder & vinter

Cermiras hårda vintrar fryser mindre floder/sjöar vintertid. RAUNFLODEN är det uttryckliga undantaget (isfri året runt). Övriga floder (Månfloden m.fl.) antas isbelagda vintertid om kampanjfilen inte anger annat. *Inget exakt ström-hastighetstabellvärde finns i regelverket — flodfärd beräknas fallvis.*

## 8. Valuta & prisankare

**Standard:** 1 silver = silvermynt på 1,9 g (jargiska denaren är referensmynt). Samma vikt OCH värde: silverdaler, dinar, thaler, olom, drakma, penning, trugg m.fl.

| Mynt | Vikt | Värde | Not |
|---|---|---|---|
| Sekha (Thalamur) | 1,4 g silver | 3/4 silver | omtyckt inte överallt |
| Silverdirham | 3,8 g silver | 2 silver | — |
| Sunuvai (alviskt siluna) | 10,0 g | 2 silver | — |

*Guldreferenser:* Solida 20 silver · Gulden/Florin 6 · Drock 6 · Cador 4 · Narin 10 · Guldmark/Dukat/Kulg 160 · Remerier 252 · Guldlibra 240 · Guldkrona 360 (silverenheter)

*Löne-/prisankare (för karavan-heuristiken):* Soldat ~80 silver/månad; officer ~240; dräng/piga 40–50; enkel logi 15–30/mån (SH s.42); länsherretjänare 10–50 silver/dag (5029_riddaren.txt:3169) — användbara som prisankare för karavan-heuristiken

## 9. Konungariket Drunok (referens — Drunokleden & norra resor)

**Läge:** Nordost om Jargiska kejsardömet, norr om Ashariska halvön. Till stor del platt, mycket bördigt slättland kring Raunflodens ÖVRE lopp. 140 000 km², ~40 000 inv (58 % drunoker/vanarer, 23 % jargier, 12 % tauper, 6 % pyar-alver).

**Styre & konflikt:** Ärftlig monarki, kung Akala Gahallan III (vis, diplomatisk), huvudstad Arlon. Traditionellt utanför konflikter — men OFFICIELLT I KRIG med Jargien: Jargien ockuperade västra Drunok 2957 e.D., misslyckat återerövringståg 2961 e.D., stor jargisk legation i Arlon som eftergift. Tio nybyggda gränsfort i VÄSTER (100 soldater + 2 riddare vardera) mot jargisk invasion. Ingen flotta (saknar kust).

**Religion:** 70 % Daak, välutvecklad religionsfrihet (lockar förföljda flyktingar). Drunoks visdomskyrka = kättersk Daak-irrlära (individens band framför hierarkin), bannlyst av aboraterna i Tibara. Stor andel ortodoxa udariter (de flesta präster kvinnor).

**Handel:** Kornbod — exporterar spannmål m.a. till jargiska grannprovinsen Maulio. Transithandel på den breda, långsamma Raunfloden (torka-risk, se floder_vinter.sommar_risk).

| Stad | Not |
|---|---|
| Arlon | Huvudstad ~5 000 inv, låg kulle, ringmur med höga torn, kungens gul-/svartrutiga standar. Jargiska delegationens pampiga bygge. Taupsläkten Xilozbaki brygger Raunpilsnern. |
| Durum | Nära Arlon. Bryggardynastin Erstain — aggressivt handelskrig (ölkrig) mot Xilozbaki. |
| Urag-Ghan | Hektisk handelsplats vid Raunfloden i NORR, söder om Eyrenskogarna och Kraggbergen. Styrs av Eyrentigrinnorna. Neutral fredlig handelszon för nordbor (kraggbarbarer, raunlänningar) ↔ sydlänningar. SÄKERT VADSTÄLLE över floden. |
| Thara-Tiannen | Handelsort i VÄSTER, anlagd 2304 e.D. på kraggbarbarisk gåva. HELT OCKUPERAD av Jargien sedan tio år — ständig gnagande spänning. |
| Ramdor | Förbannad RUINSTAD, övergiven sedan 2601 e.D. (mystiska händelser + pest). Lockar skattsökare. |

*Matkultur:* Enkla näringssoppor/grytor; specialitet dorksoppa (kött, lök, rödbetor, palsternacka, morötter, tomat + vispad grädde).

*Källa: Johan, kanon-beskrivning 2026-08-25 (direkt i oxen-launch)*

## 10. Asharien & Soldarn (makro-referens — halvöresor, Tier 2-underlag)

### Asharien — Jarlaunion av 10 stadsstater (frijarlar + landsråd i Camard). Överjarl Anstir Tyldon. 240 000 km², ~190 000 inv (0,8/km²). Demografi: asharier 66 %, alver 11 %, dvärgar 9 %, tiraker 6 %.

**Geografi:** Torr, roströd högplatå (järnrik jord) mellan Khazimbergen (V), Sunariskogen (Ö) och floden BZAR (S, gräns mot Soldarn). Asha-slätten täcks av meterhögt, vassartat ashamirgräs; raviner = laglös gömställen. Livsådern: JÄRNFORSEN, segelbar — de flesta städer ligger vid den. Klippslätten (stenblocksökken) NW om Tuzan Rim.

**Akuta kriser (resrisk!):**
- Svält & slum — magra skördar driver flyktingströmmar till städerna
- KORSARKRIGET — tirakiska pirater + cirefaliska kapare från Caserion härjar på Rhungsjön (påverkar kustsegling Jarla↔Tuzan Rim, se kanten)
- Vrimzikiels upprorshär — avsatte cirefaliske markfursten plundrar de NORDRA delarna av Asharien; landsrådet har värvat motarmé under cirefaliske krigsfursten Ezori

**Städer:**

| Stad | Not |
|---|---|
| Camard | ~20 000. Huvudstad, överjarlens säte, hamn vid Järnforsens mynning, marinsoldataakademi. Stadsdelen Camard-Hazr: forntida dvärgisk bosättning (~1 400 zoloddvärgar). |
| Chadarians hopp | ~11 700. Akademiskt centrum vid sydkusten (universitet, magikerakademier); tirakiske frijarlen Torgug Xoro. Serina Elthors destination i Bok 1. 'De dödas krig' 2401 e.D. |
| Nimto | ~5 700. FEM DAGSMARSCHER uppströms Järnforsen från Camard — färdigkalibrerat Tier 2-ankare! Legosoldatmarknad, stridsarena, stridscyklé (krigsakademi). Damé Ramoni Girom. |
| Lim'alan vhic Sunariye | ~2 600. 'Sunaris portar' — två tredjedelar alver, grundad 1754 e.D. av Xerim, dold bakom grönmålad träpalissad. Alviskt skriftbibliotek. Frijarl Fimanol. |
| Jarla | ~1 600. Se platsnoter ovan — Raunflodens södra strand, frijarl Todor Fete, handelsknutpunkt. |
| Fala | ~1 300. Djupt ute på torra Asha-slätten; inga bondbyar (karg jord) men många gästväna värdshus. Frijarl Logan Marsac. |
| Ashahrien-Rahls-Unbahr | ~1 400. Dyster gruvstad i norra Khazimbergen; nästan hälften dvärgar (guld, silver, platina), Vontar-tro. Zolod Torgar klan Zolod hus Mirun. |
| Nada | ~800. Mycket lugn stad vid Järnforsen (segelbar ända hit). Halvöns centrum för sällsynta helande örter + pälsverk. Heliga Andarnas berg strax söderut. |
| Daggbacken | ~800. Idyllisk stad i NW-Asharien, majoritet MISSLOR, omges av Ramulskogen. Frijarl Vitlugg. |
| Tuzan Rim | Se platsnoter ovan — örlogshamn, flottbas, thalask/cirefaliskt inflytande. |

**Krigsmakt:** Ingen nationell anfallshär — strikt defensiv doktrin. Stadsarnisoner (ofta ~10 % av befolkningen!) + bondemilis (lag: alla vuxna milismän ska äga och träna avståndsvapen, företrädesvis pilbåge) + adelns tunga riddare. Unionsflottan stark men hyrs ut som eskort. Inofficiell försvarsallians med Soldarn.

### Soldarn — Feodal ärftlig monarki: rikskonung Sachsar den Vidsynte (magiska svärdet Jisally-Neadh) + 8 hertigar, 23 grevar, 70 baroner. Huvudstad Talon. 80 000 km², ~62 000 inv (+8 000 i Kemithor). Bildat 158 e.D. då fältherren Sold svek Jargien.

**Geografi:** Bördigt och grönt — Ashariens motsats. Stora outforskade urskogar (rovdjur, monster, skogstroll). Gräns: floden BZAR i norr (mot Asharien), Khazimbergen + Sunariskogen NW. Södra Soldarn: varmt vinland — kronomarker producerar Mundanas mest kända söta viner ('soldiskt gult').

**Kriser & historia (resrisk!):**
- Svarta pesten 2916 e.D. — fem år, nästan HALVA befolkningen dog (kung Artol Remulan inkl.)
- Missväxt 2954–57 — landsbygden övergiven till städerna
- INBÖRDESKRIGSHOT — konungen vs upprorisk adelskoalition ledd av hertig Amirro och den laglöse hertig Basur av Katharsis. Hela riket rustar.

**Religion & krigsmakt:** Samoriska läran 85 % med fanatiska Zoriánorden (grundad 1002 e.D.; bränner Daak-troende utan rättegång; aboraterna i Tibara utropade NYTT KORSTÅG mot Soldarn 2966 e.D.). Daak strikt förbjudet. Krigsmakt: dåligt tränade bondemiliser + Solds väktare (1 200 elit i Talon) + Zoriánriddare (få men slagkraftiga).

**Städer:**

| Stad | Not |
|---|---|
| Talon | ~4 000. Befäst kusthuvudstad: legendarisk ringmur (18 m hög, 15 m tjock) på brandkulle (1354 e.D.), katakombnätverk, kungens borg + Zoriánordens högkvarter. |
| Kemithor Riskoz | ~8 000. Soldarns största handelsstad + FRIHAMN vid sydkusten; cirefaliska borgmästaren Karkraza av Wekzi; kosmopolitisk (tiraker, alver, cirefalier). |
| Hadarlon | ~2 000. Anrik f.d. huvudstad (195 e.D.), omsluten av djupa skogar, zoriántrogne hertig Yssec Solstjärna, rikets bäst bevarade forntida bibliotek. |
| Daan Hammal | Mycket livlig hamnstad vid sydkusten; riksamiralen hertig Umeran (konungens allierade); stående garnison, cirefaliskt stentorn, torkad/saltad fisk-export. |
| Västerbrygga | ~500. Strategisk timmer- och handelsutpost vid JÄRNFORSEN i NORRA gränstrakten mot Asharien; 1/3 av befolkningen flottar timmer nedströms till Trollhem. Trollkrigen 2911 e.D.: 500 krigare nedgjorde 100 troll. |
| Katharsis | ~1 000. Laglöst piratfäste på ön Kathar; den korrupte hertig Basur (ätten Två Lansar); fristad för smugglare, lönnmördare, legosoldater som vill störta rikskonungen. |

**Myntfot:** Asharien & Soldarn: 1 guldmark = 160 silverdaler · 1 gulden = 6 silverdaler · 1 silverdaler = 10 koppar — stämmer exakt mot Tabell SH-26/27 (guldmark 160 ✓, gulden 6 ✓).

*Källa: Johan, kanon-beskrivningar 2026-08-25 (direkt i oxen-launch)*

## 11. Jargiska kejsardömet (makro-referens)

**Statsskick & kriser:** Kejsardöme (diktatur). Kejsare Jargus Zavian Salvianis — 131 ÅR vid makten (onaturlig livslängd; vördnad + fruktan för tronskiftet). 490 000 km², ~6 000 000 inv (12/km²) — Mundanas största och folkrikaste stat. Huvudstad Daval (425 000). Strikt klassamhälle: medborgare / prästerskap / fria män / slavar. Kriser: genomgripande korruption (rättvisa köps med mutor); enorma statsskulder till cirefaliska handelshuset TEMIRANZ — cirefalisk påtryckningsmakt och insyn i riket.

**Geografi & vägnät:** Behagligt klimat (varma somrar, snöiga vintrar). Kuperat, barr-/lövskogar, bördiga floddalar (vete, korn). VÄGNÄTET MYCKET VÄL UTBYGGT — storslagna vägar hålls ständigt i skick. Bekräftar mallen §8 ('väl utbyggt i kärnan Orno/Liboria, förfallet i periferin'). Jargiens kärnvägar = Mundanas snabbaste landsvägsresor — MEN se religion_resrisk.

⚠️ **Religion & resrisk:** Daak 99 %. Moderkyrkan styrs av Aboraterna i Tibara. Sedan Reningen år 0: alla andra religioner BANNLYSTA under DÖDSSTRAFF. MAGI OCH HÄXKONST = HÄDELSE = DÖDSSTRAFF PÅ BÅL. Inkvisitionen 'Daaks skugga' torterar systematiskt. Resor med magikunniga eller icke-Daak-troende PC:er i Jargien = hög risk; prästmän patrullerar vägskäl (bekräftat i kapitel 4-kanon: 'Soldater och prästmän täta som svampar').

**Krigsmakt:** Mundanas största krigshär: yrkes- + tvångsrekryterade soldater, tungt infanteri drillat i täta formationer med JARGBILAN (2,5 m hillebard, 75 cm yxblad). Flottan gammalmodig och defensiv — undviker sjöslag, vill avgöra krig på land.

**Myntfot & handel:** 1 guldlibra = 12 solidor · 1 solida = 20 denarer · 1 denar = 10 cupra (silverdenaren väger 1,9 g). KONTROLL: 12 × 20 = 240 silver per guldlibra ✓ stämmer exakt mot Tabell SH-26. Export: tyg, finsmide, sorskinka. Import: slavar (via den flytande staden i Zhirim), timmer, spannmål.

**Viktiga städer:**

| Stad | Not |
|---|---|
| Daval | 425 000. Monumental huvudstad: kejsarens palatsområde Rasur, Kejserliga biblioteket, mäktiga adelsätter (däribland Randarian). |
| Tibara | Daaktron HELIGA stad, moderkyrkans säte, högste aboraten residerar. Zolod-kvarteret Tibar-Shun-Azh: ~8 000 dvärgar under kyrkans vaksamma öga. |
| Binkh | ~90 000. Provinshuvudstad i rika bördiga Rankun. Viktig handelsort, berömd ingenjörsskola. |
| Orno | 15 000. Provins Jargien. Kejsardömets ÄLDSTA stad, vid floden Kebe. 'Jargiens portal' — gigantisk forntida triumfbåge. |
| Kelamith | ~8 000. Stor garnisonsstad i provins Genrio — logistisk stödjepunkt för gränsfästet CHAN; centrum för norra jordbruket/boskapen. (Närmast Cermira-sidans gränstrakter.) |
| Szal Dorian | 7 500. Provins Salan. F.d. cirefalisk handelskoloni; stor cirefalisk befolkning; finsmide- och textil-export. |
| Erafalan | 7 500. Östra Merun, vid den HÖGSTA SEGELBARA PUNKTEN på floden Erannen — transshipment-nod. |
| Erat | Provins Merun. Kejserliga akademin + ätten Ducas boktryckeri. |
| Gnar-Muur | ~2 000. Ökänd LAGLÖS hamnstad vid Igonhavet — banditband styr, månatliga illegala SLAVAUKTIONER, Igonhavets piraters främsta bas. |
| Henok | Provins/koloni vid Blå havet. Starkt befäst; exporterar kläder och rotfrukter. |
| Salan | 12 000. Vida känt ORAKEL. |
| Jukon | ~5 000. Hamnstad i Lemira; slapphänt ordning — fruktad rövarhåla. |
| Arbido | Provins huvudstad Sardan (bergig nordlig GRUVPROVINS). |
| Nizam | Känd kurort i Sardan: sanatoriet 'Jarhos vila' + St Jersephs kloster. |
| Sor | 1 200. Maulio: enorma grisfarmar, SORSKINKAN (Drunoks exportpartner-provins). |
| Randarro | 3 000. Västra Maulio: STUTERIER — randarriska stridshingstar och fullblod. |
| Sabesta | 8 000. Distrikt Charino. |
| Variso | ~5 000. Distrikt Daro. |
| Karpal | 2 000. Ön Dram i Lemira; lever helt på fiske. |
| Lopnor | Koloni på södra kontinenten, fulla provinsrättigheter; handel + stort kavalleri med breda jargsablar. |
| Karakul | Koloni på bördig savann söder om Forion, erövrad 2809 e.D. — djup fiendskap med Forion. |

*Källa: Johan, kanon-beskrivning 2026-08-25 (direkt i oxen-launch)*

## 12. Cirefaliska samväldet (makro-referens)

**Översikt:** Handelsvänlig feodal federation (ärke-/kurfurstar styr provinser/kolonier), Mundanas mest utbredda och ekonomiskt dominerande makt. Skickliga handelsmän, navigatörer, skeppsbyggare — finansiering över hela kända Mundana (jfr Temiranz-lånen till Jargien).

### Melorion (hemlandet) — Hemlandet — ögrupp norr om Takalorr, väster om Ashariska halvön, söder om Jargien. Igonhavet NW, Purpurhavet NE. Tropiskt men tempererat av havsvindar; bördigt, självförsörjande. Tre huvudöar: Vambolien, Rimcoz, Dazava.

| Stad | Not |
|---|---|
| Ciremelo | ~40 000. HUVUDSTAD på Vambolien (lagun, södra slätterna). En av Mundanas största hamnar. Ointagen genom historien. Cirzateologins heligaste byggnad: 40 m vitt torn i dvärgamarmor. |
| Tzarmun Riskoz | ~36 000. Vamboliens norra spets; kanaler, Cirzatempel med silverbelagt tak. Notera namnmönstret 'Riskoz' — samma som Soldarns Kemithor Riskoz. |
| Remrim | ~13 000. Hamnstad Vambolien; enorma årliga tygmarknader; kanaler djupt in i urskogarna. |
| Nahrzmel Krack | ~18 000 (främst militärer). Samväldets viktigaste MILITÄRstad på egen ö öster om Vambolien — hel mur av dvärgasten, stor del av krigsflottan + krigsakademier. |
| Cirza Falz | ~12 000. HELIG pilgrimsort på Rimcoz (Cirza steg här ned till Mundana enl. Tzorlack-rullarna). Strikt förbjuden för icke-cirefalier. Ingen storhandel. |
| Dzara Pomian | ~30 000. Rimcoz södra kust; tungt befäst (uråldrig dvärgamur); omlastning mot Stora arkipelagen. Rimcoz = samväldets metall/tenn-källa, torr och glesbefolkad. |
| Zhirim Mian | ~30 000. Största staden på konfliktdrabbade Dazava (tirakiska plundringståg från Takalorr). Kirurgisk skola (samväldets bästa läkare). 'Den FLYTANDE STADEN' — Jargiens slavimport går hit (jfr Jargien-kanon). |

### Caserion (kornbodskolonin) — STÖRSTA och snabbast växande kolonin — samväldets KORNBOD. Öster om Asharien, väster om Thalamur, söder om De stora slätterna (Raon), norr om Rhungsjön. FLODEN RAUN = GRÄNSEN MOT ASHARIEN i väster; floden Thukor gräns mot Thalamur i öster. Konstbevattning; ~160 000 cirefalier + nära HALVMILJON gästarbetare.

| Stad | Not |
|---|---|
| Marek Pomian | ~18 000. HUVUDSTAD (Mareks Frihamn). Grundad 1192 e.D. på raunländska Raons sydvästra hörn, tagen via politiskt rävspel 2478 e.D. Koncentriska ringmurar; EXTREMT LÅGA TULLAR (medveten handelspolitik mot Remzian Kracks höga). |
| Ramezior Turak | ~11 000. Stor stad djupt i inlandet — kolonins huvudsakliga kornbod; kanal- och slussystem till Rhungsjön. |
| Narzkar Falz | ~7 000. Vid floden Thukor i NO; tvillingstad med Thalamurs Abin-Thukor; port för handel Rhungsjön ↔ Stora slätterna. |
| Remzian Krack | ~6 000. PÅ GRÄNSEN till Asharien intill RAUNFLODEN. Svarta ointagliga fortet kontrollerar ALL trafik längs Raunfloden genom MYCKET HÖGA TULLAR — nyckelpost för flodhandel Cermira/Jarla↔utlandet! Krigsakademi för sjöstrid. |
| Haraziz Krack | ~2 000. Sotig garnisonsstad med stor krigshamn; fästningen 'Smedjan' — dvärgar smider tunga vapen. |
| Harandzran | Militär utpost norrut på Stora slätterna — cirefalier + allierade raunlänningar planerar expansion norrut. |

### Gordrion (gruvkolonin i norr) — Yngsta landet (grundat 2874 e.D. — för 93 år sedan!) av kolonisatörer, slavar och straffångar. Långt NW, på Blå havets nordkust, SW om jargiska kolonin Lothian. Kallt, blåsigt, granskogar + snöberg. ~140 000 cirefalier + enorma gästarbetarmängder. Export: järnmalm, guld, silver, ädelstenar.

| Stad/post | Not |
|---|---|
| Casemian | ~13 000. HUVUDSTAD vid floden Lorzimas utlopp; timmerstad på båda flodsidorna; uppsamlingsplats för malm + stora gjuterier (järn → tackor). |
| Tzorfalz | ~7 000. Östlig utpost; stort välbesökt Cirzatempel med reliker från Cirza själv; jordbruket försörjer kolonin. |
| Zian Rim | ~4 000 (soldater/marinkårister). Renodlad FLOTTBAS på sydvästra udden; stort fort + väldig fyr mot farliga rev. Notera 'Rim'-namnmönstret (Tuzan Rim, Zian Rim). |
| Chimazo / Daliz Falz / Penxium | Mindre bosättningar, skogshuggar- och straffläger i vildmarken. |

**Strategiska öar & besittningar:**
- **Ön Colm:** SW om halvön Danbréann (Consaber). MAGISKT DÖD för hydrotropi — extremt torr. Annekterad 2946 e.D. Befästa Ramezior Krack (~10 000) + allierade dvärgfästet Kholam-Renk-Ghor (notera -renk-Ghor-namntraditionen). Spionbas mot sabriska flottan; potentiellt brohuvud för sjöblockad av Consaber.
- **Stora arkipelagen (Kryddöarna):** Total militär kontroll över huvudöarna PERDOS och YOL + dussintal mindre. Kolonisationslagar tvingar fram export av kaffe, socker, bomull, tobak, kryddor → Melorion. Största avlastningen: Pomimbukten (Perdos). Styrs från fortet CIREKRACK av guvernör Pomimalo; rykten om mörka magiska experiment på revoltörer.
- **Szal Dorian (i Jargien):** Cirefalisk handelskoloni grundad 210 e.D., erövrad av jargiska legioner 2445 e.D. — men 7 500 cirefalier kvar och driver banker/kredithus/handel (jfr Jargien-kanon ✓).

*Källa: Johan, kanon-beskrivning 2026-08-25 (direkt i oxen-launch)*

## 13. Västmark & Damarien (makro-referens)

### Västmark (Vanskmar) — Lös rådsrepublik: 5 självstyrande kantoner, president Kamand av Xerims ätt (medelmåttig, slätstruken). 75 000 km², 38 000 inv (0,5/km²). Demografi: västmarkare (asharier) 68 %, Marnakh-tiraker 14 %, Bazirk-tiraker 10 %, zolod-/ghor-dvärgar 3 %, alver 3 %. Huvudstad Rampor (~7 000). Ingen statsreligion: samoriska läran 70 % (uppblandad med lokala gudar/Daak), tirakerna dyrkar krigsgudinnan MAHKTAH.

**Geografi & resrisk:** SYDKUSTEN: låglänt, gyttjig SANKMARK med mangrove och vass — näst intill obeboelig, sjuder av reptiler, fiskar och FRUKTANSVÄRDA TRÄSKMONSTER; ständiga skyfall/översvämningar. Inlandet: vilda Khrûn- och Khazimbergen — bergatroll och vättekolonier i djupa grottsystem. DEN GEOLOGISKA SÄNKAN: 2 km bred, 200 m djup cirkulär sänka i Khazimbergen norr om Rampor; botten = monsterinfekterat träsk. LEGEND: en hel dvärgisk handelskaravan (guld, magiska reliker, ädelstenar) störtade ner här under tiraköverfall — äventyrskrok.

**Handel & politik:** Huvudnäring gruvdrift; export malm/metaller/ädelstenar/smidesvaror; import spannmål/kött/tyg/kryddor. Handelsvägar: sjövägen + längs den GRÖNA FLODEN. Myntfot: västmarkisk THALER = 1,9 g silver = 1 silver (jargisk denar-paritet). Vänner: Soldarn, Caserion, Jargien, Consaber. Fiende: Damarien (kallt krig, fientliga stunder). Krigsmakt: 1 400 yrkessoldater (1 200 lätt kavalleri + 200 bågskyttar) + ~1 400 i uppbåd; inga örlogsfartyg utom patrullbåtar mot tirakiska pirater.

| Stad | Not |
|---|---|
| Rampor | ~7 000. Huvudstad på brant klippig halvö mot ön Naldor; byggd MITT I en forntida ruin stad — den monumentala bevarade muren är försvar (presidentens garde bemannar). Färgstark NÖJES- & UNDERHÅLLNINGSORT: krogar, tavernor, spelhålor, bordeller — gruvarbetarna från RALKOM (gruvstad på Naldor) spenderar här. INTERNT PROBLEM: stadsvakten splittrad i två fientliga falanger (människor vs tiraker). President Kamand + kantonfurste Dac Persal den dristige. |
| Västborg | ~1 200. Starkt befäst utpost mellan Norra skogen och gränsfloden KRYLON: stor borg i träskmark + TRE yttre citadell (belägringsskydd). Västmarks viktigaste handelsstation mot Damarien — men handeln MILITÄRT STRYPT på senare år. Furstinnan Liora Rekim (skicklig, omtyckt, diplomatisk). |
| Vazago | Forntida, fruktad RUINSTAD längs gamla kustvägen östsydöst om Rampor; gick under pga sista härskaren Garons synder. |

### Damarien (Storfurstendömet) — Monarkisk diktatur: storfurste Thamas Vitfjäder Donato ('Envåldshärskaren'), drottning Ariandra den Behagfulla. 45 000 km², ~630 000 inv (historiska källor: 96 000 FÖRE de norra provinserna införlivades helt — diskrepans värd att notera). Rättvisa: okorrumperad, skoningslös, DRAKONISK — grymma avrättningar, främst PÅLSPETSNING. Huvudstad Targus (~8 000, borgen Pelgrinmarac; grundad 211 e.D.). Språk: jargiska + targatiska dialekt.

> ⚠️ SL-HEMLIGHETER I DETTA BLOCK (Ariandras pakt, vandöda-armén) — FÅR ALDRIG LÄCKA till spelar-synligt material. Jfr AGENTS.md 'Damarien — Politiskt & Militärt Läge'.

**Geografi & resrisk:** VRAKKUSTEN (S): varmt/fuktigt men LIVSFARLIGT SJÖFARTSOMRÅDE — kall nordström + varm sydström möts i 'Hoppinglöshetens hav': turbulenta virvlar och MALSTRÖMMAR driver fartyg mot dolda vassa rev. Hammarnäset: fuktiga snårskogar, djungellika träsk. Norra kusten: svalt, regnigt, DIMHÖLJT, branta klippor, roströda JÄRVSKOGEN. Inlandet: torr karg grässlätt, rödbruna klippor, RAGADIKLYFTAN (flera hundra meter djup forntida floddal).

**Handel & resor:** Sjöhandel ENDAST via frihamnen MIRRON (enda plats där utländska köpmän släpps in utan pappersexercis). Landvägen mot Jargien kontrolleras via HELM; skyddade pass genom Khazimbergen (damarien-kartan visar Dvärgpasset, Utborgspasset, Rolvis trappa, Korpärnas pass). KALLT KRIG mot Västmark & Soldarn: gränsflod KRYLON — damariska sidan TALEM = upprustad invasionsbas med TOTALT handelsförbud mot Västmark; västra sidan Västborg (handeln strypt). Import: spannmål + timmer (till pågående FARTYGSBYGGE). Export: järnmalm (östra Targatia/Culnar), träkol. Myntfot: asharisk standard — ducat=guldmark 160, florin=gulden 6, dinar=silverdaler 10 koppar.

**Krigsmakt:** 4 200 yrkessoldater + 9 800 milis; örlogsflotta med 1 000 marininfanterister; storfurstens legendariska personliga livvakt NATTGARDET (tränas i Svarta citadellet). Legokompaniet BLODSBRÖDERNA har bas i Hammarnäs (jfr EM-O001_legokompaniet-research i repot). Allierade: Jargiska kejsardömet, dvärgafästet KHAZIM-RENK-GHOR. Fiender: Takalorr-pirater; kallt krig Västmark/Soldarn.

**Historia & hemligheter:** Vampyr-eran VESPERIARDINA ('Skymningens trädgård'): inlandet styrdes ÖPPET av vampyrer (lamior) — människor som slavar, skatter i färskt blod. DAGBRÄCKNINGSKRIGET 713 e.D.: trollkarlen Damas den Svarte (gav landet namnet) besegrade lamiorna; sista striden krävde 'Damas offer' — han offrade den belägrade hemstaden Targus + sin familj. IDAG (SL-HEMLIGT): drottning Ariandra har i hemlighet slutit pakt med lamiorna i orden INCANTAMENTI LAMIA — en GIGANTISK UNDERJORDISK VANDÖDA-ARMÉ byggs i katakomberna under tvillingtornen SIN-MEGADA, avsedd för stundande erövringskrig. (Stämmer mot AGENTS.md: Ariandra = Xinu-inkarnation; 'Ruinerna under Helm'.) Källfråga: stadstexten säger 'grundad av magikern DAMAR den Svarte', historieavsnittet 'DAMAS den Svarte' — stavvariant eller två personer?

**Städer:**

| Stad | Not |
|---|---|
| Targus | ~8 000. Huvudstad på torra blåsiga inlandsslätter. Borgen Pelgrinmarac (storfurstens säte); de fem vindarnas kloster HQ; Xinukulten växer i skuggorna. |
| Hammarnäs | ~11 000. ÄLDSTA, STÖRSTA och mest militariserade staden — hög kulle vid näsets västra udde, osedvanligt hög/kraftig mur. Örlogsflottan + armén stationerade; Blodsbrödernas bas; Svarta citadellet (Nattgardet tränas). |
| Mirron | Rikaste + snabbast växande; ENDA FRIHAMNEN (västkusten) — utlänningar tillåts röra sig fritt. Trähus, smala labyrintgränder, hög träpalissad mot landsidan. Stadsmannaråd; historisk fredlig medlarplats i inbördeskrig. |
| Helm | ~3 000. F.D. stolt huvudstad vid Svarta skogens kant; mystisk ohelig katastrof + HELMSLAKTEN för ~100 år sedan → ödelagd, DJUPT FÖRBANNAD, undviks av damarier. Numera skogshuggarort. (Jfr AGENTS.md 'Ruinerna under Helm' = KRITISK HEMLIGHET; Gordons bror Ethan tjänstgör i Damarien via Bronshjälmarna.) |
| Talem | ~5 000. Strategisk, hårt befäst gränsstad vid KRYLON — MASSIV nyligen upprustning som Thamas primära INVASIONSBAS och spärrfäste mot Västmark. Handel med Västmark STRÄNGT FÖRBUDDEN i staden. Styrs av godsfrun Odille Vitfjäder + general Grigorios Vallecata. |

**Fornlämningar & heliga platser:**
- **Monolitcirkeln:** 144 monoliter à ~15 m, strategiskt placerad MITT EMELLAN Targus/Mirron/Hammarnäs där flera starka magiska kraftlinjer korsas.
- **Sin-Megada:** Tvillingtorn (ursprungligen bostäder åt nekromantikern Aagel + symbolisten Damaga) bundna av DOLD UNDERJORDISK TUNNEL. Idag blodssekternas och lamiornas högfäste + vandöda-arméns katakomber (SL-HEMLIGT).
- **Thummons portar:** Två ENORMA 25-m statyer uthuggna i klipporna vid inloppet till sundet mellan ön Thummon och Takalorr — två forntida Allamlahjältar (en människa, en tirak), varsin sida om vattnet.
- **Det Vita Klostret:** VINDTRONS heligaste plats — pampig vit stenborg på hög kulle ute på de karga inlandshedarna i Silvianestia, styrs av 'Den Äldste'.
- **Vesperiardina:** 'Skymningens trädgård' — raserade ruiner efter vampyrdrottningen Odettes svarta slott djupt i skogarna; vaktas enligt legenden av mörka nattrosor (livnär sig på månljus + människoblod).

*Källa: Johan, kanon-beskrivningar + damarien.jpg 2026-08-25 (direkt i oxen-launch)*

## 14. Dokumenterade tolkningar och öppna frågor

### 5.1 Frisänkan-konflikt (15 km/1 d vs 5 dagar handel)
- **Lösning/tolkning:** Två leder: direktled 15 km/1 d endast för lätt fotfolk (vitterdal-baronieriet.md:649); handelsled via Bergvik 4+1 d för kärror (trakten-omgivningar.md:307 'Längre väg, sämre' + krönikanas civila tåg dag 5). Båda källvärdena bevaras som separata kanter.
- **Status:** BEKRÄFTAD av Johan 2026-08-25 — två separata leder gäller

### 5.2 Rödskäggs '~1,5 dygn t/r'
- **Lösning/tolkning:** Johan bekräftade 2026-08-25: ~1 dygn enkelväg. Infört i kanten Vargnäset→Rödskäggs Tillflykt.
- **Status:** STÄNGD

### 5.3 Kampanjkalender — aktuellt datum/år i kampanjen
- **Lösning/tolkning:** Bekräftat av Johan 2026-08-25: 17:e Hömånad, år 2 i relativ datering (år 1 = kampanjstart; mötet i Jarla var 5:e Hömånad år 1). Absolut årtal i e.D.-systemet ej fastställt — relativt ankare räcker. Se även meta.kampanj_datum.
- **Status:** STÄNGD (relativ datering)

### 5.4 Grensfortets grannland (Drunok vs Mithera-gränsen) + dubbla 'Östra vägen'-etiketter i baronieri-filen
- **Lösning/tolkning:** Johan avgjorde (oxen-launch seq 13 + tillägg): Grensfortet ligger på Vitterdals ÖSTRA kant intill Mithera — Mitheraskogen ligger ÖST/NORR om Vitterdal (cermira.png); Drunok ligger VÄSTERUT via Hög toppmyr (två väsensskilda vägar). Makro-ordning: Jargien → Drunok → Cermira/Asharien (väster→öster). Kanten Vitterdal→Grensfortet uppdaterad därefter. Etiketter: detta register namnger alltid kanter efter DESTINATION (ingen kollision möjlig); för kartfilens ruttetiketter föreslås 'Mithervägen' (Grensfortet-leden) resp. 'Drunokleden' (Hög toppmyr-vägen) — slutligt namn väljer Johan/claude-sessionen.
- **Status:** STÄNGD — 'Mithervägen' godkänt av Johan (seq 17); motpartsnamnet 'Drunokleden' för Hög toppmyr-vägen antas därmed

### 5.5 Vrimzikiels upprorshär — mallen §8 säger 'Cermira, Östanmark', Asharien-kanonen (2026-08-25) säger 'norra delarna av Asharien'
- **Lösning/tolkning:** BEKRÄFTAT av Johan: BÅDA stämmer — hären är rörlig och plundrar i både Cermiras Östanmark och norra Asharien. Resriskfältet omfattar hela gränstrakten; landsrådets motarmé under krigsfursten Ezori opererar i norra Asharien.
- **Status:** STÄNGD

### 5.6 Dagsmarsch-skala på damarien.jpg: 2 dagsmarscher ≈ 10 mil ⇒ ~5 mil (50 km)/dagsmarsch?
- **Lösning/tolkning:** Kartans dubbla skala antyder 50 km/dagsmarsch — ÖVERSTA änden av regelboks-spannet (ritt normal 48, fot forcerad 50) och över fältsiffrorna (30–48). Kan avse ridande normalfart på goda vägar, eller vara kartografisk förenkling. Använd regelboksbaserna som primära; kartskalan som grov orientering.
- **Status:** OBSERVATION — Johan kan bekräfta avsett dagsmarschvärde

### 5.7 Era-beteckningar: 'e.R.' (efter Reningen — Jargien-kanon: 'Sedan Reningen år 0') vs 'e.D.' (används i Drunok-/Soldarn-texterna)
- **Lösning/tolkning:** ANTAGEN SAMMA ERA: nutid = 2967 ('efter reningen' på cermira.png, Johan-bekräftat), och Drunoks 2957/2961-händelser är nutidens nära förflutna — datumen linjerar bara om e.D. = e.R. Registret skriver e.R.
- **Status:** ANTAGANDE — Johan kan bekräfta att e.D. = e.R.

### 5.8 Karavanpris per person/dagsmarsch
- **Lösning/tolkning:** BEKRÄFTAT SAKNAS i regelverket (Spelarens bok, Spelledarens guide, Riddaren genomsökta 2026-08-25) — avsiktligt öppen SL-heuristik som mallen §6 redan antog. Prisankare finns nu under valuta.lonreferenser.
- **Status:** AVSIKTLIGT ÖPPEN — Johan bestämmer modell vid behov

### 5.9 Drunok: lokal 'Drunokleden' (väster om Vitterdal) vs världskartans Drunok (öster om Jargien) — samma region?
- **Lösning/tolkning:** JA — Johan bekräftade makro-ordningen västerut→österut: Jargien → Drunok → Cermira/Asharien. Drunok är regionen EMELLAN; världskartans placering och den lokala västerut-leden från Vitterdal beskriver samma region från varsitt håll. Lokal kanon (seq 13: Grensfortet österut mot Mithera, Drunokleden västerut via Hög toppmyr) och makrokarta är nu konsistenta.
- **Status:** STÄNGD — makro-ordning dokumenterad i meta.kartkalla

### 5.10 Absolut datering: kartans 'År 2967 efter reningen'
- **Lösning/tolkning:** BEKRÄFTAT av Johan (oxen-launch seq 18): 2967 efter reningen = kampanjens nutid. Kampanjstart (år 1) = 2966 e.R., aktuellt datum 17:e Hömånad år 2 = 2967 e.R. Alla dateringsluckor stängda.
- **Status:** STÄNGD

### 5.11 Raunflodens flödesriktning: Cermira stad → Fort Otis 'medström söderut'?
- **Lösning/tolkning:** BEKRÄFTAT av Johan (oxen-launch seq 17): Fort Otis ligger NEDSTRÖMS Månsjöns utlopp; Raunflodens källor i Krolimbergen, floden flyter söderut, kröker vid Jarla och mynnar i Nordvik. Mallens 'medström söderut' var korrekt. Ny kanon-detali: Krolimbergen som källområde.
- **Status:** STÄNGD

### 5.12 Cermira-som-stad har ingen egen wiki_data-post (endast regionposten 'Cermira')
- **Lösning/tolkning:** Alias-tabellen löser joinet; överväg egen SSOT-post 'Cermira stad'.
- **Status:** förslag till claude-sessionen/Johan

### 5.13 Mallens 10 Cermira-orter saknas i wiki_data.js
- **Lösning/tolkning:** Listade under tier2_platser; migrering till SSOT triggar AGENTS.md blockerande kontinuitetsprocess och ägs av Johan/claude-sessionen.
- **Status:** utanför detta uppdrag

## 15. Tier 2 — kända platser utan kanter ännu

| Namn | Kommentar |
|---|---|
| Äppelby | Huvudort Sunnanmark, köldtåliga äpplen. Saknas i wiki_data.js. |
| Egisborg | Ort Cermira. Saknas i wiki_data.js. |
| Lundaby | Ort Cermira. Saknas i wiki_data.js. |
| Daliz Rim | Cirefalisk enklav, kronomarken. Saknas i wiki_data.js. |
| Falinna Turak | Ort Östanmark. Saknas i wiki_data.js. |
| Tivar | Jarladöme vid Solfloden, Östanmark. Saknas i wiki_data.js. |
| Tirgova | Ruinstad Mithera-gräns, obebodd. Saknas i wiki_data.js. |
| Methras-renk-Drezin | Dvärgfäste Höga topparna. Saknas i wiki_data.js. |
