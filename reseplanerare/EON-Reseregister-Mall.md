# EON Reseregister: Struktur & Mall

**Syfte:** SL-referens för resor mellan platser. Fylls i allteftersom kartor gås igenom och regelunderlag bekräftas. Sökbar av Claude via project_knowledge_search under sessionsförberedelse.

**Status:** Mall/skelett. Cermira delvis pilotifylld (platser identifierade från cermira.png). Övriga regioner väntar på genomgång av respektive karta.

---

## 1. Platsregister (noder)

*Kalenderade restider & kanter mellan platser: se genererade
`reseregister-data.md` (byggd ur `resedata.js` + `master/wiki_data.js` — kör
`node generate.js`). Detta register behåller domänkunskap som inte passar
datamodellen (befolkning, marknad, faciliteter).*

| Namn | Typ | Region | Karta/källa | Befolkning | Marknadsstorlek (Bas/Lyx) | Faciliteter | Anteckningar |
|---|---|---|---|---|---|---|---|
| Cermira stad | Stad, kronomark | Cermira | cermira.png | TBD | TBD | Hamn (Månsjön) | Huvudstad, kung Vidkun VII |
| Vitterdal | Jarladöme/ort | Cermira | cermira.png | TBD | TBD | Gruvor | Övergivet dvärgfäste i närheten |
| S:t Kira | Jarladöme/ort | Cermira | cermira.png | TBD | TBD | — | Öppna betesmarker |
| Egisborg | Ort | Cermira | cermira.png | TBD | TBD | — | |
| Lundaby | Ort | Cermira | cermira.png | TBD | TBD | — | |
| Jarla | Stad | Asharien | cermira.png, Eon_Jarla_Karta.jpg | TBD | TBD | Hamn, torg, handelshus | Detaljerad stadskarta finns, se separat kvartersregister vid behov. Region rättad 2026-08-25: var felaktigt "Cermira/gräns" (AGENTS.md geografi-fakta) |
| Äppelby | Huvudort | Sunnanmark | cermira.png | TBD | TBD | — | Kända köldtåliga äpplen |
| Fort Otis | Fästning | Sunnanmark/Raunfloden | cermira.png | TBD | TBD | Flodhamn | Vid Raunfloden |
| Daliz Rim | Befäst by | Kronomarken | cermira.png | TBD | TBD | — | Cirefalisk enklav, handelshuset Meneltaze |
| Falinna Turak | Ort | Östanmark | cermira.png | TBD | TBD | — | |
| Tivar | Jarladöme/ort | Östanmark | cermira.png | TBD | TBD | — | Vid Solfloden |
| Tirgova | Ruinstad | Mithera-gräns | cermira.png | Obebodd | — | — | Legendarisk, uppslukad av Mithera |
| Methras-renk-Drezin | Dvärgfäste | Höga topparna | cermira.png | TBD | — | — | |
| *(fler platser tillkommer vid genomgång av övriga kartor: Asharien, Jargien, Damarien, Caserion m.fl.)* | | | | | | | |

**Fält att fylla i per plats:** befolkning (ger marknadsstorlek enligt Riddaren RI-tabeller), vilka faciliteter som styr transportalternativ (hamn = båt möjlig, garnison = tullkontroll, karavanserie = karavan sannolik).

---

## 2. Vägnät (kanter): landvägar

| Från | Till | Vägtyp | Avstånd (dagsmarscher/km) | Dominerande terräng | Säsongsrisk | Kända faror | Källa |
|---|---|---|---|---|---|---|---|
| *TBD, ingen sträcka mätt än* | | | | | | | |

**Vägtyper (enligt Riddaren):** stig/djurstråk, väg, stenlagd väg, kunglig landsväg. Vägtyp styr tullmultiplikator (se avsnitt 7) och sannolikt även bas-hastighet.

**Att göra:** mäta sträckor på kartorna mot skala (se avsnitt 9), eller kalibrera mot kända referensavstånd från spelade sessioner.

---

## 3. Vattenvägar (kanter): flod och kust

| Från | Till | Vattendrag/led | Riktning | Segelbarhet | Hamnfaciliteter | Källa |
|---|---|---|---|---|---|---|
| Cermira stad | Fort Otis | Raunfloden (via Månsjön) | Medström söderut | Isfri året runt | TBD | cermira.png, landsmodul-cermira |
| *(fler flodleder tillkommer)* | | | | | | |

**Känt:** Raunfloden är isfri året runt och central handelsled mellan Cermira, Caserion och Drunok. Månfloden i kronomarken är den huvudsakliga handelsvägen där (landvägarna är dåligt underhållna).

---

## 4. Transportsätt: baskatalog

| Transportsätt | Baskälla för hastighet | Status |
|---|---|---|
| Till fots | 36 km/dagsmarsch (Krigsherren) | Klart |
| Ridande, obelastad | Tabell K-7 (trupptyp som proxy) | Klart, kan behöva finjustering |
| Ridande, packad/belastad | **Bärkraft/packvikt-tabell saknas.** Ligger sannolikt i grundregelboken | **GAP, behöver hämtas** |
| Karavan | Ingen fast hastighet, se karavan-heuristik avsnitt 6 | Heuristik istället för data |
| Flodbåt | Beroende på ström/vind, ingen exakt tabell hittad ännu | TBD |
| Kustskepp | Knop beroende på vind (Krigsherren, medvind/halvvind/bidevind) | Klart |

---

## 5. Modifierare

| Modifierare | Effekt | Status |
|---|---|---|
| Terräng/väder | Tabell K-8 (kumulativ med marschtempo) | Klart |
| Packvikt | Saknas, se avsnitt 4 | GAP |
| Hästkvalitet | Föreslagen enkel skala: Dålig/Normal/Utmärkt → påverkar max dagsmarsch och risk för skada/hälta | Föreslag, ej fastställt |
| Regionala säsongseffekter | T.ex. Cermiras hårda vintrar, isvägar | Delvis känt per region, se avsnitt 8 |

---

## 6. Karavan-heuristik

Karavaner har ingen fast datatabell. Bedöms kontextuellt av Claude vid varje fråga utifrån:

- **Sannolikhet för karavan:** finns om vägen är kunglig landsväg/stenlagd väg mellan platser med rimlig marknadsstorlek, eller om regionen har etablerad handelstradition (t.ex. Raunfloden-handel, Mimores timmertransporter)
- **Frekvens:** kopplas till marknadsstorlek (Bas-värde) och säsong, mindre orter = mer sällan
- **Pris:** baskostnad per dagsmarsch, justeras för säkerhetsnivå (skyddad karavan kostar mer)
- **Säkerhet:** karavaner är tryggare än ensam ridning i osäkra trakter (t.ex. Vrimzikiels upprorshär i Östanmark)

Detta är alltså ett regelverk för bedömning, inte en tabell att slå upp.

---

## 7. Kostnadsmodell

| Kostnadstyp | Formel/källa | Status |
|---|---|---|
| Tull | RI-34: lokal marknad × 50 + provinsiell marknad × 5, modifierad av väg (RI-35: väg 1 / stenlagd 1,5 / kunglig landsväg 2) | Klart |
| Karavanavgift | Se heuristik avsnitt 6 | Heuristik |
| Båtfrakt/biljett | TBD | Saknas |
| Stallavgift vid transportbyte | TBD | Saknas |

---

## 8. Regionala infrastrukturprofiler

| Region | Vägkvalitet | Säkerhetsläge | Kulturella hinder | Klimat/säsong | Källa |
|---|---|---|---|---|---|
| Cermira, kronomarken | Dålig, handel går mest via Månfloden | Måttlig | Cirefalisk enklav (Daliz Rim) | Hård vinter, tidig frost | landsmodul-cermira |
| Cermira, Vitterdal | TBD | Oroligt (dvärgfäste-aura) | — | Kärvt bergsklimat | landsmodul-cermira |
| Cermira, Östanmark | Skogig, gles | Lågt (Vrimzikiels upprorshär) | Faliskt handelshus Mimore dominerar | — | landsmodul-cermira |
| Jargien | Väl utbyggt i kärnan (Orno/Liboria), förfallet i periferin | Högt i kärnan | Daakkyrkans prästmän patrullerar vägskäl, skeptiska mot icke-jargier | Milt klimat | encyklopedia mundana, kampanjkrönika |
| Damarien | Dåligt utvecklat, isolerat | Lågt/osäkert (stängda gränser) | Mycket restriktivt mot utlänningar | TBD | encyklopedia mundana |
| Västmark | Dåliga landsvägar | TBD | TBD | TBD | krigsherren |
| *(fler regioner tillkommer)* | | | | | |

---

## 9. Öppna frågor att lösa innan databasen är komplett

1. Har kartorna skalstock/rutnät, eller behövs referensavstånd från spelade sessioner för kalibrering?
2. Bärkraft/packvikt-tabellen: sidhänvisning i grundregelboken, eller fråga NotebookLM
3. Karavan- och båtpriser: acceptera heuristik permanent, eller vill du fastställa fasta priser?
4. Genomgång av resterande kartor (Asharien, Jargien, Damarien, Caserion, Drunok m.fl.) för platsregister

---

## 10. Exempel: förväntat svarsformat vid fråga

**Fråga:** "Gruppen ska från Vitterdal till Cermira stad, egna hästar, packning 25 kg."

**Svar skulle innehålla:**
- Alt 1, egen ridning hela vägen: dagar, vägtyp, tull, huvudrisk
- Alt 2, ridning + karavan del av sträckan: uppdelning, pris, säkerhetsvinst
- Alt 3, om vattenväg finns: ridning till hamn + båt, pris, väderberoende
- En rekommenderad komplikation baserad på säsong/region (t.ex. tidig snö i Cermira)

*(Detta är formatmålet. Faktiska siffror kräver ifylld data enligt avsnitt 1–8.)*
