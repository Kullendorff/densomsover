# EON Material - Fas 1: Syfte & Koncept

**Version:** 1.0 (grund-skill, förbättras vid användning)
**Senast uppdaterad:** 2026-02-01

---

## SYFTE

Starta nytt material-projekt med tydligt syfte, vision, och identifierade frågor att besvara. Skapar projektmapp, STATUS.md, och NOTES.md.

---

## NÄR ANVÄNDA

När användaren vill skapa nytt material:
- "Skapa nytt land i Muhad"
- "Börja arbeta på en oasstad"
- "Jag vill göra en ny NPC"

**Triggar automatiskt när:**
- Användaren vill starta nytt material-projekt
- Säger "nytt land/stad/plats/NPC/organisation"

---

## INPUT

- **Typ:** Land, Stad, Plats, NPC, Organisation
- **Kort beskrivning:** Användarens initiala idé
- **Eventuellt:** Region, tema, inspiration

---

## WORKFLOW

### Steg 1: Samla information från användaren

**Fråga:**
- Typ av material? (Land, Stad, Plats, NPC, Organisation)
- Vad är grundidén?
- Var ska det ligga/verka? (region)
- Inspiration? (tema, stil, känsla)
- Ska det användas i kampanjen, eller bara vara delbart?

### Steg 2: Generera projektkod

**Format:** `EM-[TYP][NR]`

**Typer:**
- Land → `EM-L001`
- Stad → `EM-S001`
- Plats → `EM-P001`
- Region → `EM-R001`
- Organisation → `EM-O001`
- Föremål → `EM-F001`
- NPC → `EM-N001`

**Hitta nästa nummer:**
```bash
# Räkna befintliga projekt av samma typ
ls "Eget Material/projekt/" | grep "EM-L" | wc -l
# Nästa nummer = antal + 1
```

### Steg 3: Skapa projektmapp

```bash
# Mappnamn: kod_namn (små bokstäver, bindestreck)
# Exempel: EM-L001_okenriket-khamara

mkdir -p "Eget Material/projekt/[kod]_[namn]"
mkdir -p "Eget Material/projekt/[kod]_[namn]/research"
mkdir -p "Eget Material/projekt/[kod]_[namn]/utkast"
```

### Steg 4: Skapa STATUS.md

```bash
# Kopiera mall
cp "Eget Material/mallar/mall-status.md" "Eget Material/projekt/[kod]_[namn]/STATUS.md"

# Fyll i metadata
Edit STATUS.md:
- Projektkod
- Typ
- Startdatum (dagens datum)
- Nuvarande fas: "Fas 1: Syfte & Koncept"
```

**Sätt fas 1 som klar:**
```markdown
### Fas 1: Syfte & Koncept
- [x] Vision dokumenterad
- [x] Syfte klarlagt
- [x] Första frågor identifierade
```

### Steg 5: Skapa NOTES.md

**Format:**
```markdown
# [PROJEKTNAMN] - Anteckningar

**Kod:** [EM-XXX]
**Typ:** [Land/etc]
**Skapad:** [Datum]

---

## 🎯 VISION

[Användarens beskrivning av vad materialet ska vara]

**Kärnidé:**
[1-2 meningar som sammanfattar kärnan]

**Inspiration:**
- [Tema 1]
- [Stil/känsla]
- [Referenser]

---

## 🎨 KONCEPT

### Vad?
[Vad är detta? Land, stad, plats?]

### Var?
[Region, läge i EON-världen]

### Varför?
[Syfte: Varför skapa detta material?]
- [ ] Delbart med andra SL
- [ ] Användas i kampanj
- [ ] Inspiration för framtida äventyr

### Hur?
[Hur ska det kännas? Atmosfär, ton]

---

## ❓ FRÅGOR ATT BESVARA

### Geografi
- [ ] Var exakt ligger det?
- [ ] Hur stort är det?
- [ ] Klimat och terräng?
- [ ] Grannar?

### Historia
- [ ] Hur grundades det?
- [ ] Stora händelser?
- [ ] Nuvarande situation?

### Befolkning/Kultur
- [ ] Vilka raser?
- [ ] Hur många invånare?
- [ ] Kultur och traditioner?
- [ ] Språk?

### Styre (om relevant)
- [ ] Regeringsform?
- [ ] Ledare?
- [ ] Lagar och regler?

### Ekonomi (om relevant)
- [ ] Vad lever de på?
- [ ] Handel?
- [ ] Resurser?

### Kampanjrelevans
- [ ] Används i kampanj?
- [ ] Koppling till masterplot?
- [ ] Relaterade NPCs/händelser?

---

## 💡 IDÉER OCH TANKAR

[Fria anteckningar, brainstorming]

---

## 📚 KÄLLOR ATT KONSULTERA

**NotebookLM-queries:**
- [ ] "Vad vet vi om [region]?"
- [ ] "Vilka [typ] finns i [område]?"
- [ ] "[Ras]-kultur och traditioner?"

**Kampanjdata (om relevant):**
- [ ] Sök i kampanjkrönika.md
- [ ] Sök i wiki_data.js

---

## 🔗 LÄNKAR TILL KAMPANJEN

[Om materialet används i kampanjen:]
- Kapitel:
- Relaterade NPCs:
- Händelser:

---

**Senast uppdaterad:** [Datum]
```

**Fyll i med användarens input:**
- Vision och koncept
- Identifierade frågor
- NotebookLM-queries baserat på typ

### Steg 6: Uppdatera STATUS.md med nästa steg

```markdown
## 📋 NÄSTA SESSION

**Prioriterade steg:**
1. Researcha via NotebookLM: "[Query 1]"
2. Researcha via NotebookLM: "[Query 2]"
3. Börja samla material i research/

**Mål:**
Färdigställa fas 2 (Research) genom att besvara alla identifierade
frågor via NotebookLM och kampanjdata.
```

### Steg 7: Bekräfta och ge nästa steg

**Output:**
```
═══════════════════════════════════════════════════════════════
✅ PROJEKT SKAPAT: [NAMN] ([KOD])
═══════════════════════════════════════════════════════════════

Projektmapp: Eget Material/projekt/[kod]_[namn]/

Filer skapade:
✓ STATUS.md (Fas 1 klar)
✓ NOTES.md (Vision och frågor dokumenterade)
✓ research/ (tom)
✓ utkast/ (tom)

═══════════════════════════════════════════════════════════════
📋 NÄSTA STEG (FAS 2: RESEARCH)
═══════════════════════════════════════════════════════════════

1. Fråga NotebookLM: "[Query 1]"
   → Tool: mcp__notebooklm__ask_question

2. Fråga NotebookLM: "[Query 2]"
   → Tool: mcp__notebooklm__ask_question

3. Samla resultat i research/-mappen
   → Tool: Write research/[tema].md

4. När research är klar: Använd eon-material-fas2-research skill

═══════════════════════════════════════════════════════════════

Vill du börja med steg 1 (NotebookLM-query om [tema])?
```

---

## VIKTIGA REGLER

### 1. Samla TILLRÄCKLIGT info före skapande
Fråga användaren om:
- Vision och syfte (vad är idén?)
- Region och placering
- Kampanjrelevans (delbart eller kampanj-specifikt?)

### 2. Identifiera FRÅGOR
Gå igenom relevanta frågor baserat på typ (land/stad/plats/etc) och markera dem i NOTES.md.

### 3. Föreslå KONKRETA NotebookLM-queries
Inte: "Researcha om regionen"
Ja: "Fråga NotebookLM: 'Vad vet vi om Muhads ökenregioner? Klimat, städer, kultur?'"

### 4. Skapa ALLTID research/ och utkast/
Även om de är tomma - struktur från start.

### 5. Uppdatera STATUS.md med nästa steg
Ge användaren en tydlig plan för fas 2.

---

## EXEMPEL-ANVÄNDNING

**Användaren:** "Jag vill skapa ett ökenrike i Muhad"

**Skill gör:**
1. Frågar detaljer:
   - "Vad ska riket heta?"
   - "Ska det användas i kampanjen eller vara delbart?"
   - "Inspiration/tema?"

2. Användaren svarar:
   - Namn: Khamara
   - Delbart (generiskt)
   - Inspiration: Persien, gyllene ålder

3. Genererar kod: `EM-L001`

4. Skapar:
   - `projekt/EM-L001_okenriket-khamara/`
   - `STATUS.md` (fas 1 klar)
   - `NOTES.md` (vision, frågor)

5. Föreslår nästa steg:
   - NotebookLM: "Muhads geografi och klimat?"
   - NotebookLM: "Persisk-inspirerad kultur i EON?"

**Output:**
```
✅ PROJEKT SKAPAT: Ökenriket Khamara (EM-L001)

Nästa steg: Researcha via NotebookLM.
Vill du börja med query 1?
```

---

## FÖRBÄTTRINGAR (när vi testar)

**Version 1.0 (grund-skill):**
- Skapar projektstruktur
- Dokumenterar vision
- Identifierar frågor

**Framtida förbättringar:**
- Mall-specifika frågor (olika för land/stad/NPC)
- Automatisk NotebookLM-query-generering
- Integration med kampanjkrönika-sökning

---

## VERIFIERING

Efter fas 1, kontrollera:
- [ ] Projektmapp skapad med rätt namn
- [ ] STATUS.md finns och fas 1 markerad klar
- [ ] NOTES.md finns med vision och frågor
- [ ] research/ och utkast/ mappar skapade
- [ ] Nästa steg tydligt definierade i STATUS.md
- [ ] Användaren vet vad som ska göras härnäst

---

**Skill-typ:** Skill tool (`skill="eon-material-fas1"`)
**Output:** Projektstruktur skapad, STATUS.md och NOTES.md, nästa steg tydligt
**Förbättras:** Genom användning och feedback
