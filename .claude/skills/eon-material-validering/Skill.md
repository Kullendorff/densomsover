# EON Material - Validering

**Version:** 1.0 (grund-skill, förbättras vid användning)
**Senast uppdaterad:** 2026-02-01

---

## SYFTE

Wrapper-skill för eon-material-validator agent. Validerar färdigt material och hanterar resultat/konflikter.

---

## NÄR ANVÄNDA

- Efter fas 5 (Detaljer)
- När användaren säger "validera", "faktagranska", "kolla mot kanon"
- Innan material flyttas till slutmapp (fas 7)

**INTE när:**
- Material inte färdigt (vänta till efter fas 5)
- Redan validerat

---

## INPUT

- **Projektmapp:** `Eget Material/projekt/[kod]_[namn]/`
- **Eller fil:** `Eget Material/lander/EM-L001_namn.md`
- **Eller projektkod:** `EM-L001`

---

## WORKFLOW

### Steg 1: Hitta material att validera

```bash
# Om projektmapp: hitta senaste utkast
ls "Eget Material/projekt/[kod]_[namn]/utkast/"

# Välj v[högst nummer].md eller specificerat utkast
```

**Om slutgiltig fil:**
```bash
# Läs direkt från lander/stader/etc
Read "Eget Material/[typ]/[kod]_[namn].md"
```

### Steg 2: Kör eon-material-validator agent

```python
Task(
  subagent_type="eon-material-validator",
  prompt="Validera material: [filnamn]. Granska mot kampanjkrönika.md, wiki_data.js, och NotebookLM (EON-kanon). PRIORITET: Kampanjinfo > NotebookLM."
)
```

**Agenten returnerar:**
- ✅ Godkänd
- ⚠️ Varningar
- ❌ Konflikter

### Steg 3: Hantera resultat

#### A. ✅ GODKÄND

**Uppdatera STATUS.md:**
```markdown
### Fas 6: Validering
- [x] NotebookLM-validering genomförd
- [x] Kontinuitetskontroll (kampanjkrönika.md)
- [x] Konflikter lösta
- [x] Avvikelser från kanon dokumenterade

## 📋 NÄSTA SESSION

**Prioriterade steg:**
1. Granska kampanjspecifik sektion (om finns)
2. Flytta till slutmapp: Eget Material/[typ]/
3. Uppdatera _index.md
4. Markera fas 7 (Avslut) som klar

**Mål:**
Publicera materialet!
```

**Bekräfta med användaren:**
```
═══════════════════════════════════════════════════════════════
✅ VALIDERING GODKÄND: [NAMN]
═══════════════════════════════════════════════════════════════

Materialet är validerat och redo att publiceras.

NÄSTA STEG:
1. Flytta till Eget Material/[typ]/[kod]_[namn].md
2. Uppdatera _index.md
3. Markera fas 7 som klar

Vill du flytta materialet till slutmapp nu?
```

#### B. ⚠️ VARNINGAR

**Presentera varningar:**
```
═══════════════════════════════════════════════════════════════
⚠️ VARNINGAR FUNNA: [NAMN]
═══════════════════════════════════════════════════════════════

[Lista varningar från agent]

ALTERNATIV:
1. Åtgärda varningarna (rekommenderat)
2. Dokumentera som medvetna avvikelser
3. Ignorera (om kampanjdata stödjer)

Vad vill du göra?
```

**Om användaren väljer åtgärda:**
- Hjälp till att fixa varningarna
- Kör validator igen efter ändringar

**Om användaren väljer dokumentera:**
- Lägg till i material:
  ```markdown
  ## 📝 Avvikelser från kanon

  - **[Element]:** [Beskrivning av avvikelse]
    *Motivering: [Varför avviker vi?]*
  ```
- Markera som godkänd

#### C. ❌ KONFLIKTER

**Presentera konflikter:**
```
═══════════════════════════════════════════════════════════════
❌ KONFLIKTER FUNNA: [NAMN]
═══════════════════════════════════════════════════════════════

[Lista konflikter från agent med lösningsalternativ]

STOPPA. Materialet kan INTE publiceras förrän konflikter är lösta.

LÖSNINGSALTERNATIV:
[Alternativ A/B/C från agent]

Vilken lösning vill du använda?
```

**Efter användarens val:**
- Implementera vald lösning
- Kör validator igen
- Fortsätt tills godkänd

### Steg 4: Uppdatera STATUS.md

**Om godkänd:**
```markdown
### Fas 6: Validering
- [x] NotebookLM-validering genomförd ([datum])
- [x] Kontinuitetskontroll ([datum])
- [x] Konflikter lösta
- [x] Avvikelser dokumenterade

## 🔄 PÅGÅENDE
- [ ] Flytta till slutmapp
- [ ] Uppdatera _index.md
```

**Om konflikter kvar:**
```markdown
## ⚠️ BLOCKERARE

- VALIDERING: Konflikter med [källa]
  → Kräver: Lösning av konflikt [X]
  → Status: Väntar på användarens val
```

### Steg 5: Dokumentera validering

**Skapa valideringslogg i projektet:**

```markdown
# VALIDERING.md

**Datum:** [datum]
**Agent:** eon-material-validator
**Resultat:** [Godkänd/Varningar/Konflikter]

---

## KÄLLOR GRANSKADE

- kampanjkrönika.md
- wiki_data.js
- NotebookLM (EON-kanon)

---

## RESULTAT

[Bekräftade element]
[Varningar]
[Konflikter och lösningar]

---

## ÅTGÄRDER

[Vad gjordes för att lösa konflikter/varningar?]

---

**Validerat av:** [Johan/Agent]
```

---

## VIKTIGA REGLER

### 1. KÖR eon-material-validator agent
Använd ALLTID agenten (duplicera inte logik).

### 2. RESPEKTERA prioritering
Kampanjinfo > NotebookLM (alltid).

### 3. STOPPA vid konflikter
Materialet kan INTE publiceras med olösta ❌ konflikter.

### 4. DOKUMENTERA validering
Skapa VALIDERING.md för spårbarhet.

### 5. UPPDATERA STATUS.md
Markera fas 6 som klar när godkänd.

---

## EXEMPEL-ANVÄNDNING

**Användaren:** "Validera Ökenriket Khamara"

**Skill gör:**

1. Hittar projekt: `projekt/EM-L001_okenriket-khamara/`

2. Hittar utkast: `utkast/v2.md`

3. Kör agent:
   ```python
   Task(subagent_type="eon-material-validator", ...)
   ```

4. Agent returnerar: ⚠️ Varningar
   - "NotebookLM säger X, material säger Y"

5. Presenterar:
   ```
   ⚠️ VARNINGAR FUNNA

   Vad vill du göra?
   1. Åtgärda
   2. Dokumentera avvikelse
   3. Ignorera
   ```

6. Användaren väljer: "Dokumentera"

7. Lägger till avvikelse-sektion i material

8. Uppdaterar STATUS.md (fas 6 klar)

9. Bekräftar:
   ```
   ✅ VALIDERING GODKÄND (med dokumenterad avvikelse)

   Vill du flytta till slutmapp?
   ```

---

## INTEGRATION MED ANDRA TOOLS

### eon-material-validator (agent)
Kör alltid via Task tool.

### eon-projekt-tracker
Tracker föreslår att köra validering efter fas 5.

### eon-data-guardian
Efter godkänd validering: importera till wiki_data.js (om kampanjrelevant).

---

## FÖRBÄTTRINGAR (när vi testar)

**Version 1.0 (grund-skill):**
- Wrapper för validator-agent
- Hanterar resultat
- Uppdaterar STATUS.md

**Framtida förbättringar:**
- Auto-implementera enkla lösningar
- Batch-validering av flera projekt
- Historik av validerings-iterationer

---

## VERIFIERING

Efter validering, kontrollera:
- [ ] eon-material-validator agent körd
- [ ] Resultat (godkänd/varningar/konflikter) hanterat
- [ ] STATUS.md uppdaterad
- [ ] VALIDERING.md skapad (dokumentation)
- [ ] Vid godkänd: nästa steg (fas 7) tydligt
- [ ] Vid konflikter: lösningar presenterade och användaren valt

---

**Skill-typ:** Skill tool (`skill="eon-material-validering"`)
**Output:** Validerat material, uppdaterad STATUS.md, VALIDERING.md
**Använder:** eon-material-validator agent (via Task tool)
