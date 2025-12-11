# CURRENT STATE: Gravens Arv Kampanjwiki

## Datum: 2025-12-11

## Status: ✅ OK

Dashboard live och fungerande. Spelarkaraktärer uppdaterade med Kapitel 4 information.

---

## Klart denna session

### Spelarkaraktärer - Kapitel 4 (Jargien) uppdateringar

**Zentri Bredarsson** (`kampanjwiki/_spelarkaraktarer/zentri-bredarsson.md`):
- Skyddsamulett från den blinda spåkvinnan i Ravnovo
- Intensifierade drömmar med demonrösten under resan
- Klibbsjälarnas bro (Natt 10): Vägrade demonens hjälp, grep amuletten
- Dokumenterad amulettens kritiska betydelse för att hålla demonen på avstånd

**Umnatak** (`kampanjwiki/_spelarkaraktarer/umnatak.md`):
- **FÖRSTA STORA SCHAMANISTISKA MANIFESTATIONEN** vid Klibbsjälarnas bro
- Detaljerad dokumentation: Trans, ritual på okänt språk, frigörelse av bundna själar
- Markerad som vändpunkt från passiv känslighet till aktiv andeplanet-kommunikation

**Kazrik klan Ghor** (`kampanjwiki/_spelarkaraktarer/kazrik-klan-ghor.md`):
- Ravnovo (Dag 7): Dvärgisk hantverksära - reparerade vagn med drucken smeds lärling
- Klibbsjälarnas bro (Natt 10): Colonisk lore - identifierade och lossade nyckelstenen
- Kombination av teoretisk kunskap och praktisk handling

**Gordon Nahrzezia** (`kampanjwiki/_spelarkaraktarer/gordon-nahrzezia.md`):
- Ledarskap och militär expertis under 15-dagarsresan
- Beskyddarroll dokumenterad: Ravnovo (spåkvinnan), Arvorns Hammare (moralisk konflikt)
- Pragmatism: Balansera moraliskt ledarskap med praktisk realism

**Hadrian "Hagge" av Vitterdal** (`wiki_data.js`):
- Återhämtning från slaveri under resan (invirad i björnfäll, haltande rytm)
- Dag 13: Rädsla för tempelriddare (Arvorns Hammare) - risk att kännas igen som förrymd slav
- Strategisk bedömning vid fångtransporten (tyst råd till Gordon att INTE ingripa)

### Ny skill skapad

**`.claude/skills/eon-npc-adder/Skill.md`**:
- Dokumenterar strukturell Edit-teknik för säker NPC-tillägg till wiki_data.js
- Nyckelinsikt: Använd KORTA strukturella strängar (10-20 rader), INTE långa beskrivningar
- Inkluderar validering, alfabetisk insättning, och rollback-strategi

### Global konfiguration uppdaterad

**`C:\Users\kulle\.claude\CLAUDE.md`**:
- Ny sektion: "Learning and Skills Creation"
- Policy: Spara lösningar som skills när trial-and-error leder till fungerande lösning
- Syfte: Undvika "uppfinna hjulet 3-4 gånger per kväll"

---

## Nuvarande data

**Dashboard:** `index.html` (roten)
**Databas:** `wiki_data.js` (✅ 214 NPCs, 55 platser, 11 kapitel)
**Bilder:** `kampanjwiki/assets/images/`
**Skills:** `.claude/skills/eon-npc-adder/`

---

## Git Status

**Branch:** main
**Status:** 4 commits ahead of origin/main
**Senaste commit:** `3d202eb` - "Kapitel 4 (Jargien) - Uppdatera spelarkaraktärer + skill"

**Modified files (committade):**
- 4 spelarkaraktär-filer
- wiki_data.js (Hagge uppdaterad)
- .claude/skills/eon-npc-adder/Skill.md (ny)

**Untracked files:**
- `Eon SL/15_dagar.md` (källdokument)
- `Eon SL/Abhan-hir-renk-Ghor.md`
- `Eon SL/Ze campaign.md`
- `Eon SL/start.md`

---

## Nästa steg

### Prioritet 1: Datainmatning från kampanjdokument
**Källor att bearbeta:**
- `Eon SL/jen.md` (51 NPCs identifierade tidigare)
- `Eon SL/flykten_genom_drunok.md` (50 NPCs)
- `Eon SL/spegelmane.md` (6 NPCs)
- `Eon SL/frostnymf.md` (9 NPCs)

**Total pending:** ~107 nya NPCs + 14 uppdateringar av befintliga

### Prioritet 2: Bildmatchning
- 96+ NPCs utan bilder (null i bild-fält)
- Använd `/eon-image-curator` för fuzzy-matchning
- 157 bilder tillgängliga i `kampanjwiki/assets/images/npcs/`

### Prioritet 3: Kontinuitetskontroll
- `/eon-lore-checker` innan fler stora tillägg
- Kontrollera tidslinjer, status-konsistens, duplikater

---

## Kända problem

**Inga aktiva blockers.**

**Lessons learned:**
- ✅ Strukturell Edit-teknik fungerar väl (dokumenterad i skill)
- ✅ Batch-storlek: Max 15 NPCs per omgång för säkerhet
- ✅ Validering EFTER varje ändring är kritisk

---

## Anteckningar

Session fokuserad på karaktärsutveckling från Kapitel 4 (Jargien - 15-dagarsresan). Alla fem uppdateringar ger djup till spelarkaraktärernas resa och sätter upp viktiga plotpunkter:
- Zentris amulett som skydd mot demonen
- Umnataks schamanistiska genombrott
- Kazriks teoretisk+praktisk kompetens
- Gordons pragmatiska ledarskap
- Hagges sårbarhet (slaveribakgrund)

Nästa naturliga steg är fortsatt datainmatning från kampanjdokument för att nå målet om komplett NPC-databas.
