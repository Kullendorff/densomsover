# EM-R002: Förläningen Grensfortet - Projektstatus

**Typ:** Region/Förläning
**Startdatum:** 2026-02-03
**Senast uppdaterad:** 2026-02-16

---

## NUVARANDE STATUS

**Fas:** 5 av 7 (Detaljer) - KOMPLETT
**Progress:** 85%
**Status:** Allt innehåll implementerat. HTML-sida uppdaterad (v4.0). 25 nya NPCs i wiki_data.js. 33 NPC-sidor i kampanjwiki.

---

## FASÖVERSIKT

| Fas | Namn | Status | Kommentar |
|-----|------|--------|-----------|
| 1 | Syfte & Koncept | ✅ Klar | Förläning för spelarkaraktärerna |
| 2 | Research | ✅ Klar | NotebookLM, Vitterdal-data, kampanjkrönika |
| 3 | Grundstruktur | ✅ Klar | grensfortet.md med ekonomi, feodala regler |
| 4 | Kärnan | ✅ Klar | Befolkning, styre, religion, militär |
| 5 | Detaljer | ✅ Klar | Alla NPCs, platser, konflikter, atmosfär implementerade |
| 6 | Validering | ⬜ Ej startad | Behöver NotebookLM-validering |
| 7 | Avslut | ⬜ Ej startad | HTML-sida, flytta till slutmapp |

---

## FILER I PROJEKTET

| Fil | Innehåll | Status |
|-----|----------|--------|
| `grensfortet.md` | Ekonomi, feodala förpliktelser, militär, politik | ✅ Komplett |
| `grensfortet.html` | Fullständig HTML v4.0: Frisänkan, Bergvik, Trakten, alla NPCs | ✅ Uppdaterad |
| `frisankan.md` | Fullständig by: 13 NPCs, atmosfär, konflikter | ✅ NY |
| `bergvik.md` | Fullständig by: 14 NPCs, atmosfär, konflikter | ✅ NY |
| `trakten-omgivningar.md` | Solo-invånare, platser, rykten, ekonomi, årstider | ✅ NY |
| `NOTES.md` | Idéer och anteckningar (merparten implementerad) | ✅ Uppdaterad |

---

## VERSIONHISTORIK

### v3.0 (2026-02-16) - WIKI-INTEGRATION
**HTML + wiki_data.js + kampanjwiki-sidor:**

- grensfortet.html uppdaterad till v4.0 med alla byar, trakten, NPC-kort, konflikter
- 25 nya NPCs tillagda i master/wiki_data.js (267 → 292)
- 33 nya NPC-sidor skapade i kampanjwiki/_npcs/
- Rollo av Flod uppdaterad med rikare beskrivning

### v2.0 (2026-02-16) - STOR UPPDATERING
**Implementerat allt från NOTES.md:**

**Frisänkan (frisankan.md):**
- 6 befintliga NPCs med utökade beskrivningar
- 7 nya NPCs: Gamle Sigurd, Tilda & Orm, Enöga Klas, Neta Båtbyggare, Kopparsansen, Stum-Maja, Gransen
- Atmosfärtexter (sinnesintryck, tider på dygnet)
- 5 byggnader/platser (Vidars tempel, bryggan, rökeriet, Halinors hus, palissaden)
- 3 konflikter (tiondefrågan, ungdomsflykt, jaktmarksgräns)
- Ekonomi och kampanjkoppling

**Bergvik (bergvik.md):**
- 7 befintliga NPCs med utökade beskrivningar
- 7 nya NPCs: Bror & Stig Tallgren, Änke-Margit, Ull Björnsson, Varg-Mika, Lille Per, Svart-Erik, Trollbinderskan Rut
- Atmosfärtexter (sinnesintryck, tider på dygnet)
- 5 byggnader/platser (sågverket, smedjan, Daak-kyrkan, kolmilan, Ragnas stuga)
- 3 konflikter (skogsrätt, kolmilefejd, vägunderhåll)
- Ekonomi och kampanjkoppling

**Trakten (trakten-omgivningar.md):**
- 8 solo-invånare: Grimme Jansen, Systkonen, Trädklättraren, Broder Tomas, Gråben, Dimgumman, Enarmade Gunnar, Dezerteuren
- 8 platser: Korsvägskrogen, Trollstenen, Svältbacken, Gråvargens pass, De sju stenarna, Issjön, Övergivna gruvan, Flodkällan
- 5 stora rykten + 3 lokala sägner
- 3 pågående + 7 potentiella händelser/hooks
- Handelsvägar och ekonomisk översikt
- 4 årstider med atmosfärtexter

### v1.0 (2026-02-03)
- Grunddokument: `grensfortet.md`
- Ekonomi med Bas + Lyx
- Militärkapacitet
- Dagsverken och tionde

---

## NÄSTA STEG

1. ~~**Skapa HTML-sida**~~ ✅ Klart (v4.0)
2. ~~**Importera nya NPCs**~~ ✅ Klart (292 NPCs i wiki_data.js)
3. **Validera mot NotebookLM** - Kontrollera att alla NPCs följer EON-regler (ras, kultur, religion)
4. **Grensfortet-dokumentet** - Liknande behandling för fortets invånare
5. **Generera Midjourney-prompts** - Bilder för nya NPCs och platser

---

## BLOCKERARE

*Inga blockerare.*

**Beslut som behövs från Johan:**
- ~~Vilka av de nya NPCsen ska bli kanoniska?~~ ✅ Alla importerade
- ~~Ska de importeras till wiki_data.js?~~ ✅ Klart
- Prioritet: NotebookLM-validering eller Grensfortet-dokument?

---

## KÄLLOR

- `grensfortet.md` (ekonomi, feodala regler)
- `NOTES.md` (idéer - merparten nu implementerad)
- `master/kampanjkrönika.md` (kontinuitetsvalidering)
- `master/wiki_data.js` (befintliga NPCs och platser)
- `Eon SL/Frisänkan.md` (NPC-relationer)
- `Eon SL/grensfort-resan-cook-stil.md` (dag 4-5 berättelse)
- `EgetMaterial/projekt/EM-R001_vitterdal-baronieriet/vitterdal-baronieriet.md` (byar-sektioner)
- NotebookLM: Riddaren-regler, Bas/Lyx-ekonomi

---

## KOPPLING TILL KAMPANJ

**Kapitel:** 1 (Frisänkan-morden), 8.5 (Resan), 9-10 (Skugglandet)
**Vasaller:** Gordon, Umnatak, Kazrik, Zentri, Arcadius
**Lensherre:** Jarl Hagge av Vitterdal
**Status:** Aktivt spelat (gruppen är herrar över förläningen)
