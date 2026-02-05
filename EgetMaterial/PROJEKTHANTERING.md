# Projekthantering - Snabbguide

**Version:** 1.0
**Skapad:** 2026-02-01

---

## 🎯 ÖVERSIKT

Projekthanteringssystemet för material som tar flera sessioner att skapa.

**Två arbetsflöden:**
- **Snabbt** (1 session): Skriv direkt i slutmapp
- **Projekt** (flersessions): Använd `projekt/`-struktur med 7 faser

---

## 🚀 SNABBSTART

### Starta nytt projekt

```python
# Använd eon-material-fas1 skill
Skill(skill="eon-material-fas1")
# Följt av: "Skapa nytt land i Muhad"
```

**Output:**
- Projektmapp: `projekt/EM-L001_landnamn/`
- STATUS.md (fas-tracking)
- NOTES.md (vision, frågor)
- research/ och utkast/ mappar

### Fortsätt pågående projekt

```python
# Session-briefing
Task(
  subagent_type="eon-projekt-tracker",
  prompt="Fortsätt med Ökenriket Khamara"
)
```

**Output:**
- Var du är (fas X av 7)
- Vad som är klart
- 3-5 nästa steg
- Blockerare (om finns)

---

## 📊 7 FASER

| Fas | Namn | Fokus | Tool/Agent |
|-----|------|-------|------------|
| 1 | Syfte & Koncept | Vision, frågor | `eon-material-fas1` |
| 2 | Research | NotebookLM-queries | `eon-material-fas2-research` |
| 3 | Grundstruktur | Översikt, geografi | Manuell |
| 4 | Kärnan | Historia, styre | Manuell |
| 5 | Detaljer | Städer, NPCs, hooks | Manuell |
| 6 | Validering | Faktagranskning | `eon-material-validering` |
| 7 | Avslut | Flytta till slutmapp | Manuell |

---

## 🛠️ VERKTYG

### Agenter (Task tool)

**eon-projekt-tracker** - Session-briefing
```python
Task(subagent_type="eon-projekt-tracker", prompt="...")
```

**eon-material-validator** - Faktagranskning
```python
Task(subagent_type="eon-material-validator", prompt="...")
```

### Skills (Skill tool)

**eon-material-fas1** - Starta projekt
```python
Skill(skill="eon-material-fas1")
```

**eon-material-fas2-research** - Research-fas
```python
Skill(skill="eon-material-fas2-research")
```

**eon-material-validering** - Validering
```python
Skill(skill="eon-material-validering")
```

---

## ⚖️ PRIORITERINGSREGEL

**Vid konflikt:**
```
KAMPANJINFO > NOTEBOOKLM

1. kampanjkrönika.md (högst)
2. wiki_data.js
3. NotebookLM (officiell kanon)
```

**Exempel:**
- NotebookLM: "Stad X i region Y"
- Kampanjkrönika: "Vi besökte Stad X i region Z"
- **→ Kampanjkrönikan har rätt!**

Dokumentera avvikelser i materialet:
```markdown
## 📝 Avvikelser från kanon
- **Stad X:** Kampanjplacering region Z (ej Y som i kanon)
```

---

## 📁 PROJEKTSTRUKTUR

```
projekt/EM-L001_namn/
├── STATUS.md           # Fas-tracking, progress, blockerare
├── NOTES.md            # Vision, frågor, idéer
├── VALIDERING.md       # Valideringslogg (skapas i fas 6)
├── [projektnamn].md    # 📄 SAMMANFATTNING (all info för NotebookLM)
├── research/
│   ├── geografi.md     # NotebookLM-svar
│   ├── kultur.md
│   └── historia.md
└── utkast/
    ├── v1_översikt.md  # Första utkast
    └── v2_komplett.md  # Utökat
```

---

## 🔄 EXEMPEL-SESSION

**1. Sessionstart**
```
Du: "Fortsätt med Ökenriket Khamara"

Claude: Kör eon-projekt-tracker
→ "Fas 2 (Research), 60% klar
   Nästa: Slutför geografi-query"
```

**2. Arbete**
```
Du: "OK, kör geografi-query"

Claude: NotebookLM-query → Samlar resultat i research/geografi.md
```

**3. Uppdatera status**
```
Claude: Uppdaterar STATUS.md
→ Geografi 100% klar
→ Föreslår nästa steg (börja grundstruktur)
```

---

## ✅ VERIFIERINGSLISTA

Efter implementation:
- [x] `projekt/` mapp skapad
- [x] `mallar/mall-status.md` finns
- [x] `eon-projekt-tracker` agent skapad
- [x] `eon-material-validator` agent skapad
- [x] 3 grund-skills skapade
- [x] `CLAUDE.md` uppdaterad med:
  - [x] Projekthantering-sektion
  - [x] 7-fas arbetsordning
  - [x] Prioriteringsregel
  - [x] Nya agenter/skills dokumenterade
- [x] `_index.md` uppdaterad med projekt-sektion

---

## 📚 LÄRDOMAR

**Kvalitet > Hastighet > Tokens**
- Använd agenter för bättre kvalitet (även om långsammare)
- Tokens är INTE viktigt att spara
- Kontinuitet och exakthet är allt

**Kampanjinfo har alltid företräde**
- Vid konflikt: kampanjkrönika > NotebookLM
- Dokumentera avvikelser från kanon
- Vår kampanj är vår verklighet

**Skills förbättras med användning**
- Version 1.0 är grund-skelett
- Uppdatera när vi hittar bättre workflow
- Dokumentera lärdomar i `.claude/memory/learnings.md`

---

**Läs CLAUDE.md för fullständig dokumentation!**
