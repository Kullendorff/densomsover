# EON Reseregister — DATA (genererad)

> **GENERERAD FIL — redigera inte för hand.** Ändra `resedata.js` och kör `node generate.js`.
>
> Genererad: 2026-08-25 · Källa: `D:\rollspel\EON\master\wiki_data.js` (58 platser, 317 NPCs laddade)
> Omfång: Cermira + Vitterdal-kärnan (kalibreringsdata finns för dessa noder). Kanonordning vid konflikt: kampanjkrönika.md > wiki_data.js > NotebookLM.
> Kampanjdato: 17:e Hömånad, år 2 (relativ datering; år 1 = kampanjstart) · Säsong: Högsommar · Källa: Johan via claude-sessionen 2026-08-25 (oxen-launch seq 9)
> Kartkälla: cermira.png ('Jarladömet Cermira, År 2967 efter reningen') + asharien.jpg (Ashariens jarladömen, Cermira EJ med) + gammal mundanakarta (världsöversikt; CERMIRA SAKNAS — inskriven i världen senare än karttrycket per Johan, används ENDAST för makrosammanhang, aldrig lokal Cermira-geografi). Geografibekräftat 2026-08-25: Mitheraskogen norr om Vitterdal; Jarla = Ashariens nordligaste jarladöme vid Cermiras sydgräns; Raunflodens lopp Stencirkeln→Fort Otis→Ramil/Jarla (krök)→österut→Nordvik; Tuzan Rim på ostkusten vid Rhung sjön

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
- **Jarla:** Gränsstad och Ashariens nordligaste jarladöme (egen häroldsbaner enligt asharien.jpg). Ligger precis innanför Cermiras sydgräns (cermira.png, vid Svarta skogen) — politiskt Asharisk, geografiskt Cermiras sydport. wiki_data-regionen 'Asharien' är korrekt men ofullständig; föreslagen SSOT-formulering: 'Asharien (jarladömet Jarla, gränsar Cermira i söder)'. Gränsläget + läget PÅ Raunfloden gör Jarla till naturlig passagepunkt/nod i vägnätet (tull, karavanuppsamling, flodtransport vid kröken).

## 2. Landkanter (kalibrerade mot spelade rutter)

| Från → Till | Transport | Km | Dagar | Terräng | Faror/säsong | Källa |
|---|---|---|---|---|---|---|
| Vitterdal → Cermira stad | landsväg, häst/vagn | 150 | 3–4 | kultiverat, östra vägen | — | vitterdal-baronieriet.md:686 |
| Vitterdal → S:t Kira | landsväg, södra vägen | — | — | kultiverat | — | vitterdal-baronieriet.md:687 |
| S:t Kira → Jarla | landsväg, södra vägen | — | — | övergår till Asharien (gränspassage) | — | vitterdal-baronieriet.md:687 |
| Vitterdal → Grensfortet | bergsväg österut (mot Mithera-gränsen) | 50 | 2–3 | bergsterräng | Skugglandets gränser går tunt in i Mithera — tematiskt samma gräns (Johan, oxen-launch seq 13) | vitterdal-baronieriet.md:688 |
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
| Cermira stad → Fort Otis | flodbåt via Månsjön→Raunfloden | — | — | Raunfloden är ISFRI ÅRET RUNT (fungerar alla säsonger) | EON-Reseregister-Mall.md + cermira.png:48–51 |

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

## 9. Dokumenterade tolkningar och öppna frågor

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
- **Lösning/tolkning:** Johan avgjorde (oxen-launch seq 13): Grensfortet ligger på Vitterdals ÖSTRA kant intill Mithera; Drunok ligger VÄSTERUT via Hög toppmyr (två väsensskilda vägar). Kanten Vitterdal→Grensfortet uppdaterad därefter. Etiketter: detta register namnger alltid kanter efter DESTINATION (ingen kollision möjlig); för kartfilens ruttetiketter föreslås 'Mithervägen' (Grensfortet-leden) resp. 'Drunokleden' (Hög toppmyr-vägen) — slutligt namn väljer Johan/claude-sessionen.
- **Status:** SAKNFRÅGA STÄNGD; etikettförslag väntar val

### 5.5 Karavanpris per person/dagsmarsch
- **Lösning/tolkning:** BEKRÄFTAT SAKNAS i regelverket (Spelarens bok, Spelledarens guide, Riddaren genomsökta 2026-08-25) — avsiktligt öppen SL-heuristik som mallen §6 redan antog. Prisankare finns nu under valuta.lonreferenser.
- **Status:** AVSIKTLIGT ÖPPEN — Johan bestämmer modell vid behov

### 5.6 Drunok i två skalor: lokal 'Drunokleden' (väster om Vitterdal, Johans beslut seq 13) vs världskartans Drunok (markerat öster om Jargien)
- **Lösning/tolkning:** Ingen motsägelse konstaterad — mundanakartan är FÖRE Cermiras inskrivning i världen (Johan) och styr inte lokal geografi; den lokala Drunokleden avser gränszonen nära Vitterdal. Men vid framtida resefrågor av typen 'res till Drunok' ska skalan förtydligas (lokal gränszon vs världsregion öster om Jargien).
- **Status:** OBSERVATION — ingen åtgärd, skalfråga vid framtida Tier 2/3

### 5.7 Absolut datering: kartans 'År 2967 efter reningen'
- **Lösning/tolkning:** cermira.png bär årtalsangivelsen 2967 e.R. Om kartan avser kampanjens nutid gäller: kampanjstart (år 1) ≈ 2966 e.R., aktuellt datum (17:e Hömånad år 2) = 2967 e.R. Det skulle stänga den sista dateringsluckan.
- **Status:** VÄNTAR JOHANS BEKRÄFTELSE — är kartans 2967 nutiden?

### 5.8 Raunflodens flödesriktning: Cermira stad → Fort Otis 'medström söderut'?
- **Lösning/tolkning:** DELVIS KLARLAGT via kartorna: Raunfloden rinner Stencirkeln→Fort Otis→krök vid Jarla→Nordvik. Fort Otis→Jarla→Nordvik är medströms. Kvar: sambandet Cermira stad/Månsjön ↔ övre Raunfloden — ligger Fort Otis uppströms eller nedströms Månsjöns utlopp? Mallens 'medström söderut' antyder nedströms hela vägen.
- **Status:** VÄNTAR JOHANS BEKRÄFTELSE — påverkar endast resriktningstext, inte isfriheten

### 5.9 Cermira-som-stad har ingen egen wiki_data-post (endast regionposten 'Cermira')
- **Lösning/tolkning:** Alias-tabellen löser joinet; överväg egen SSOT-post 'Cermira stad'.
- **Status:** förslag till claude-sessionen/Johan

### 5.10 Mallens 10 Cermira-orter saknas i wiki_data.js
- **Lösning/tolkning:** Listade under tier2_platser; migrering till SSOT triggar AGENTS.md blockerande kontinuitetsprocess och ägs av Johan/claude-sessionen.
- **Status:** utanför detta uppdrag

## 10. Tier 2 — kända platser utan kanter ännu

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
