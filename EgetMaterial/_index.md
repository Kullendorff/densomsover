# Eget Material - Katalog

**🎯 SYFTE:** Index över allt eget EON-material skapat för delning och eventuell kampanjimport.

**Läs CLAUDE.md FÖRST** för instruktioner om hur materialet skapas och hanteras.

---

## 📊 STATUS (uppdaterad 2026-09-05)

**Allt existerande material är klart.** Inget projekt är just nu pågående — de sex
projekt som finns i `projekt/` visar alla Fas 7/7 (KLAR) i sina STATUS.md-filer.
(Denna katalog sa tidigare att Legokompaniet låg på 15%/Fas 1 — det var föråldrat,
projektets egen STATUS.md visade redan Fas 7/7. Lita på STATUS.md i respektive
projektmapp, inte på gamla sammanfattningar här.)

**Mappstruktur förenklad 2026-09-05:** alla sju typmappar (lander/, stader/, platser/,
regioner/, organisationer/, foremal/, npcs/) är borttagna. `Klart/` innehåller bara
HTML-versionerna — presentabla, redo att visa upp. All markdown (sammanfattning, STATUS,
NOTES, research, utkast) bor i respektive `projekt/`-mapp, kvar även efter avslut.

---

## ✅ KLART (`Klart/` — HTML, inget markdown)

| Fil | Typ | Vad | Kampanjstatus | Källa (.md) |
|---|---|---|---|---|
| `EM-L001_muhad.html` | Land | Muhad (Gudalandet), ~1,2 milj. invånare, teokrati | Besökt Kapitel 2 (Jen/Ziu) | `projekt/EM-L001_muhad/muhad.md` |
| `EM-S001_jen.html` | Stad | Jen, Muhads handels-/slavhandelsstad, ~100k inv. | Besökt Kapitel 2 | `projekt/EM-S001_jen/jen.md` |
| `EM-S002_mithrahus.html` | Stad | Mithrahus/Vitterdal, gruvstad + Guldlägret | Besökt Kap. 5, 6, 7 — gruppens hembas | `projekt/EM-S002_vitterdal-mithrahus/mithrahus.md` |
| `EM-R001_vitterdal-baronieriet.html` | Region | Vitterdal-baronieriet, jarladöme (Hagge är jarl) | Aktivt använt (Kapitel 6+) | `projekt/EM-R001_vitterdal-baronieriet/vitterdal-baronieriet.md` |
| `EM-R002_grensfortet.html` | Region | Förläningen Grensfortet, spelarnas vasallförläning | Aktivt använt (Kap. 1, 5, 9–10) | `projekt/EM-R002_grensfortet/grensfortet.md` |
| `EM-O001_legokompaniet.html` + `_spelare.html` | Organisation | Guide + katalog över legokompanier i Mundana | Kampanjspecifikt (Gordons ev. kompani) | `projekt/EM-O001_legokompaniet/legokompaniet.md` |

Se respektive projektmapp i `projekt/` för research, utkast och detaljerad historik
bakom varje färdig fil. `EM-R001_vitterdal-baronieriet/` har även 5 äldre
designutkast (`poc-1-modern-dark.html` m.fl.) — kvar som historik, inte i `Klart/`.

---

## 🔄 PÅGÅENDE PROJEKT

*Inga just nu.* Alla sex existerande projekt i `projekt/` är avslutade (Fas 7/7).

---

## 📋 KOMMANDE MATERIAL (PLANERAT, ej påbörjat)

- [ ] EM-L002: Momolan (matriarkalt grannland söder om Muhad)
- [ ] EM-O002: Juubuls lärjungar (nekromanti-orden i Melûcka)
- [ ] EM-P001: Dalkhrekni (ruinstad med orakel i Tarkas)
- [ ] EM-O003: Savakunnerna (nomadkonfederation i Tarkas)

---

## 📌 KAMPANJIMPORTERAT MATERIAL

*Material som importerats till kampanjens `wiki_data.js`* (spårbart via fält
`källa: "EM-XXX"`). *Inget importerat ännu.*

---

## 🔖 STATUSFÖRKLARING

- **Generiskt, delbart** — följer officiell EON-kanon, validerat via NotebookLM, inga
  kampanj-spoilers, kan delas med andra spelledare
- **Kampanjspecifikt** — innehåller kampanjdetaljer i separat sektion, kan göras
  delbart genom att ta bort den sektionen
- **Importerat till kampanj** — finns i `master/wiki_data.js`, används aktivt

---

## ❓ HJÄLP

### Starta nytt material

**Snabbt (1 session, enkel NPC/plats):** skriv `.md` i en ny `projekt/`-mapp, lägg en
HTML-version i `Klart/` om det är värt att visa upp.

**Projekt (flersessions, komplext):**
```python
Skill(skill="eon-material-fas1")
# Följt av: "Skapa nytt land i Muhad"
```
Output: projektmapp i `projekt/` med STATUS.md + NOTES.md, redo för Fas 2 (Research).

### Fortsätt pågående projekt
```python
Task(subagent_type="eon-projekt-tracker", prompt="Fortsätt med [projektnamn eller kod]")
```

### Validera färdigt material
```python
Skill(skill="eon-material-validering")
# Följt av: projektkod eller filnamn
```

### Importera till kampanj
```python
Task(
  subagent_type="eon-data-guardian",
  prompt="Importera EM-XXX från EgetMaterial/Klart/ till wiki/Personer (eller Platser/Fraktioner). Lägg till källa: 'EM-XXX'."
)
```
Kom ihåg: sedan Obsidian-migreringen (se `CURRENT_STATE.md`, 2026-09-05) är `wiki/` master,
inte `master/wiki_data.js` direkt — importera dit, kör sedan `node bygg/bygg-wiki-data.js`.

### Arbetsordning (7 faser)
1. **Syfte & Koncept** → Vision, frågor (`eon-material-fas1`)
2. **Research** → NotebookLM-queries (`eon-material-fas2-research`)
3. **Grundstruktur** → Översikt, geografi
4. **Kärnan** → Historia, styre, befolkning
5. **Detaljer** → Städer, NPCs, kampanjhooks
6. **Validering** → Faktagranskning (`eon-material-validering`)
7. **Avslut** → Bygg en HTML-version, lägg den i `Klart/`, uppdatera detta index

**Läs `CLAUDE.md` för detaljerad information!**

---

**Senast uppdaterad:** 2026-09-05
