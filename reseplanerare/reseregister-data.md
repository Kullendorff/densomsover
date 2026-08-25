# EON Reseregister — DATA (genererad)

> **GENERERAD FIL — redigera inte för hand.** Ändra `resedata.js` och kör `node generate.js`.
>
> Genererad: 2026-08-25 · Källa: `D:\rollspel\EON\master\wiki_data.js` (58 platser, 317 NPCs laddade)
> Omfång: Cermira + Vitterdal-kärnan (kalibreringsdata finns för dessa noder). Kanonordning vid konflikt: kampanjkrönika.md > wiki_data.js > NotebookLM.
> Kampanjdato: 17:e Hömånad, år 2 (relativ datering; år 1 = kampanjstart) · Säsong: Högsommar · Källa: Johan via claude-sessionen 2026-08-25 (oxen-launch seq 9)

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

## 2. Landkanter (kalibrerade mot spelade rutter)

| Från → Till | Transport | Km | Dagar | Terräng | Faror/säsong | Källa |
|---|---|---|---|---|---|---|
| Vitterdal → Cermira stad | landsväg, häst/vagn | 150 | 3–4 | kultiverat, östra vägen | — | vitterdal-baronieriet.md:686 |
| Vitterdal → S:t Kira | landsväg, södra vägen | — | — | kultiverat | — | vitterdal-baronieriet.md:687 |
| S:t Kira → Jarla | landsväg, södra vägen | — | — | övergår till Asharien (gränspassage) | — | vitterdal-baronieriet.md:687 |
| Vitterdal → Grensfortet | bergsväg västerut | 50 | 2–3 | bergsterräng | Skugglandets gräns vid fortet | vitterdal-baronieriet.md:688 |
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
| Cermira stad → Fort Otis | flodbåt via Månsjön→Raunfloden, medström söderut | — | — | Raunfloden är ISFRI ÅRET RUNT (fungerar alla säsonger) | EON-Reseregister-Mall.md:48–51 |

## 4. Bas-hastigheter och referensvärden

| Transportsätt | Km/dag | Packning | Källa/anmärkning |
|---|---|---|---|
| Till fots (normaltakt) | 30 | — | krigsherren.md:198 (EM-O001_legokompaniet/research) |
| Standardpackning fotfolk | — | ≤ 40 kg | krigsherren.md:199. viktrapport, inte hastighet |
| Ridande, landsväg, belastad | 38–50 | — | härledt baklänges ur Vitterdal↔Cermira (150 km/3–4 d) och Vitterdal↔Jarla (200 km/5–6 d). HÖGRE än mallens 36 km — mallvärdet är fotfolk-referens felplacerat under 'ridande' |
| Bergsterräng (häst/oxkärra) | 17–25 | — | härledt ur Vitterdal→Grensfortet (50 km/2–3 d) |
| Ridande, obelastad | — | — | GAP — tabell K-7 (trupptyp-proxy) enligt mallen avsnitt 4; väntar NotebookLM |
| Karavan | — | — | Ingen fast tabell — heuristik enligt mallen avsnitt 6; pris/bärkraft väntar NotebookLM-GAP |

## 5. Dokumenterade tolkningar och öppna frågor

### 5.1 Frisänkan-konflikt (15 km/1 d vs 5 dagar handel)
- **Lösning/tolkning:** Två leder: direktled 15 km/1 d endast för lätt fotfolk (vitterdal-baronieriet.md:649); handelsled via Bergvik 4+1 d för kärror (trakten-omgivningar.md:307 'Längre väg, sämre' + krönikanas civila tåg dag 5). Båda källvärdena bevaras som separata kanter.
- **Status:** BEKRÄFTAD av Johan 2026-08-25 — två separata leder gäller

### 5.2 Rödskäggs '~1,5 dygn t/r'
- **Lösning/tolkning:** Johan bekräftade 2026-08-25: ~1 dygn enkelväg. Infört i kanten Vargnäset→Rödskäggs Tillflykt.
- **Status:** STÄNGD

### 5.3 Kampanjkalender — aktuellt datum/år i kampanjen
- **Lösning/tolkning:** Bekräftat av Johan 2026-08-25: 17:e Hömånad, år 2 i relativ datering (år 1 = kampanjstart; mötet i Jarla var 5:e Hömånad år 1). Absolut årtal i e.D.-systemet ej fastställt — relativt ankare räcker. Se även meta.kampanj_datum.
- **Status:** STÄNGD (relativ datering)

### 5.4 Cermira-som-stad har ingen egen wiki_data-post (endast regionposten 'Cermira')
- **Lösning/tolkning:** Alias-tabellen löser joinet; överväg egen SSOT-post 'Cermira stad'.
- **Status:** förslag till claude-sessionen/Johan

### 5.5 Mallens 10 Cermira-orter saknas i wiki_data.js
- **Lösning/tolkning:** Listade under tier2_platser; migrering till SSOT triggar AGENTS.md blockerande kontinuitetsprocess och ägs av Johan/claude-sessionen.
- **Status:** utanför detta uppdrag

## 6. Tier 2 — kända platser utan kanter ännu

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
