# CURRENT STATE: Gravens Arv Kampanjwiki

## Datum: 2025-12-11

## Status: OK

Dashboard live och fungerande.

---

## Klart denna session

### GitHub Pages
- `index.html` flyttad till roten (krävs för GitHub Pages)
- `.nojekyll` tillagd
- Sökvägar uppdaterade (`./wiki_data.js`, `./kampanjwiki/...`)

### NPC-korrigeringar
**Borttagna (felaktiga):**
- Alokhara (var en plats, inte NPC)
- Amina (duplikat utan efternamn)
- Arvorns Hammare-representant
- Beef
- Eira (duplikat - behöll Eira Holm)

**Bilder borttagna (felaktiga):**
- Amina bint-Khalid
- Amina bint-Rashid
- Amina bint-Salim
- Amir ibn-Farouk
- Amira bint-Hassan

**Korrigerade:**
- Dorian → Dorian Sproll, Kapitel 2, Tuzan Rim
- Berak → Kapitel 2, Tuzan Rim
- Bartol → Kapitel 2, Tuzan Rim
- Esma → Esma Randarrohästare, Kapitel 8, Frostnymfen
- Berta Flodkvinna → Lade till bild `flodkvinna.png`

---

## Nuvarande data

**Dashboard:** `index.html` (roten)
**Databas:** `wiki_data.js` (224 NPCs, 55 platser, 11 kapitel)
**Bilder:** `kampanjwiki/assets/images/`

---

## Git Status

**Branch:** claude/investigate-swedish-phrase-0174QYczkp2VrKyhdjJGzfSW
**Pushat:** Ja
**Behöver mergas till main för GitHub Pages**

---

## Nästa steg

1. Merga PR till main för att aktivera GitHub Pages
2. Fortsätt NPC-granskning (fler felaktiga bilder/data?)
3. Bildmatchning för NPCs utan bilder
