# CURRENT STATE: Gravens Arv Kampanjwiki

## Datum: 2025-12-11

## ⚠️ KRITISKT PROBLEM - FÖRLORADE ÄNDRINGAR!

**Manuell verifiering NPCs 1-28 (Evelina) committades ALDRIG.**
Batch-agenterna skrev över alla ändringar.

**FÖRLORAT:**
- Amina-bilder (alla 4-5 har samma bild, bara en ska ha)
- Beef (borttagen, återkommen)
- Alokhara (flyttad till platser, återkommen som NPC)
- Dr. Yusuf dublett
- Eira dublett
- Alla status/bild-ändringar NPCs 1-28

**NÄSTA SESSION:**
1. Fixa Amina-bilder (bara bint-Khalid behåller bild)
2. Ta bort Beef, Alokhara
3. Återställ alla NPCs 1-28 ändringar
4. **COMMITTA efter varje fix!**

---

## ✅ Klart denna session

**DASHBOARD:** Fungerar (`dashboard/index.html`)
**DATA:** 225 NPCs, 55 platser, 11 kapitel
**AGENTER:** 4 nya (/eon-data-guardian, lore-checker, doc-extractor, image-curator)
**GIT:** Pushat - kan jobba från annan dator

**Viktiga tillägg:**
- Sankt Astrid (martyr, Corvus uppenbarelse)
- Faster Solveig (teorier om Zentri)
- Saga (naturmagi)
- Ragnar (hämnas)
- Halvdan Kolare (dödade förrädaren)
- Vargnäset: Komplett ockupations- & evakueringshistoria

**Platser:**
- Jen (fullständig)
- Rödskäggs Tillflykt
- Iskvarnsbryggan
- Spegelmåne
- Vargnäset uppdaterad

---

## Arkitektur

**Dashboard:** `dashboard/index.html` (single-file, 1050+ rader)
**Databas:** `wiki_data.js` (304 KB, 225 NPCs, 55 platser)
- Dual-mode: `var wikiData` + `module.exports`
- ⚠️ ALDRIG `module.exports = {...}` direkt!

**Bilder:** `kampanjwiki/assets/images/` (master)
- 157 i npcs/, 23 i platser/
- ~124/225 NPCs har bilder (55%)

---

## Git Status

**Commits:** 98a1e5b, 959e53f
**Branch:** main
**Pushat:** ✅ Ja

---

## Nästa session

**PRIO 1:** Fixa förlorade ändringar NPCs 1-28
**PRIO 2:** Bildmatchning (96 NPCs utan bilder)
**PRIO 3:** Kontinuitetskontroll med `/eon-lore-checker`

**Backups finns:**
- wiki_data.js.backup (300K)
- wiki_data.js.backup_batch4 (293K)
