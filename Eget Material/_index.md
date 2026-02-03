# Eget Material - Katalog

**🎯 SYFTE:** Index över allt eget EON-material skapat för delning och eventuell kampanjimport.

**Läs CLAUDE.md FÖRST** för instruktioner om hur materialet skapas och hanteras.

---

## 📊 STATISTIK

### Färdigt material
- **Länder:** 0
- **Städer:** 0
- **Platser:** 0
- **Regioner:** 1
- **Organisationer:** 0
- **Föremål:** 0
- **NPCs:** 0
- **Totalt färdigt:** 1

### Pågående projekt
- **Aktiva projekt:** 1
- **I fas 2 (Research):** 1
- **I fas 3-5 (Skrivande):** 0
- **I fas 6 (Validering):** 0

**Senast uppdaterad:** 2026-02-03

---

## 🔄 PÅGÅENDE PROJEKT

*Projekt i `projekt/`-mappen som inte är färdiga ännu.*

### EM-R002: Grens Baroneri
- **Typ:** Region/Förläning
- **Fas:** 2 av 7 (Research)
- **Progress:** 40%
- **Status:** Samlar material, korrigerat ekonomi enligt Riddaren-regler
- **Nästa:** Verifiera NPCs med Johan, definiera ytterligare material
- **Koppling:** Underlydande under EM-R001 (Vitterdal-baronieriet)

**Senaste ändringar (2026-02-03):**
- Korrigerat ekonomi med Bas + Lyx
- Lagt till dagsverken och tionde
- Justerat militärkapacitet till realistiska nivåer
- Validerat mot kampanjkrönika.md
- Research från Vitterdal-projektet inhämtad

**Frågor till Johan:**
- Vilka NPCs är kanoniska? (Astrid Björnsdotter, Olav Järnhand, Ragna Klokhand, etc.)
- Frisänkan befolkning: 50 eller 60-80?
- När/hur anlände Xian-Li till Grensfortet?

**För att se status på pågående projekt:**
```python
Task(
  subagent_type="eon-projekt-tracker",
  prompt="Fortsätt med [projektnamn]"
)
```

---

## 🌍 LÄNDER

*Inga länder skapade ännu.*

**Exempel:**
```markdown
### EM-L001: Örkenriket Khamara
- **Region:** Muhad (södra delen)
- **Storlek:** ~200,000 invånare
- **Styre:** Teokrati (solkult)
- **Status:** Generiskt, delbart
- **Kampanjstatus:** Ej använt i kampanj
```

---

## 🏙️ STÄDER

*Inga städer skapade ännu.*

**Exempel:**
```markdown
### EM-S001: Oasstaden Al-Nur
- **Land:** Muhad
- **Storlek:** 15,000 invånare
- **Typ:** Handelsstad
- **Status:** Generiskt, delbart
- **Kampanjstatus:** Ej använt i kampanj
```

---

## 📍 PLATSER

*Inga platser skapade ännu.*

**Exempel:**
```markdown
### EM-P001: De Svarta Cisternerna
- **Region:** Muhads öken
- **Typ:** Ruin (gammalt vattenreservoar)
- **Fara-nivå:** Medium
- **Status:** Generiskt, delbart
- **Kampanjstatus:** Ej använt i kampanj
```

---

## 🗺️ REGIONER

### EM-R001: Vitterdal-baronieriet ✅
- **Land:** Cermira (nordvästra hörnet)
- **Typ:** Jarladöme med gruvstad
- **Klimat:** Extremt kallt, bergstrakter
- **Befolkning:** ~2250 (människor + dvärgar)
- **Status:** Kampanjspecifikt (Hagge som jarl, gruppens bas)
- **Kampanjstatus:** Aktivt använt (Kapitel 6+)
- **HTML:** `projekt/EM-R001_vitterdal-baronieriet/vitterdal-baronieriet.html`
- **Validerat:** 2026-02-02

**Innehåller:**
- Komplett geografi och klimat
- Historia (Colonisk → Asharisk → nutid)
- Mitrahus (stad och borg)
- Stålsvärds Kavalerister (officiell roster)
- Grensfortet (ledarskap: Eira, Xian-Li, Skorda)
- 6 kampanjhooks
- 20 Midjourney-prompts

---

## 🏛️ ORGANISATIONER

*Inga organisationer skapade ännu.*

**Exempel:**
```markdown
### EM-O001: Skugghandelns Gille
- **Typ:** Smugglarnätverk
- **Region:** Muhad (städer)
- **Medlemmar:** ~500
- **Status:** Generiskt, delbart
- **Kampanjstatus:** Ej använt i kampanj
```

---

## ⚔️ FÖREMÅL

*Inga föremål skapade ännu.*

**Exempel:**
```markdown
### EM-F001: Sandridarnas Mantel
- **Typ:** Magisk mantel
- **Kraft:** Skydd mot sand och sol
- **Raritet:** Sällsynt
- **Status:** Generiskt, delbart
- **Kampanjstatus:** Ej använt i kampanj
```

---

## 👤 NPCS

*Inga NPCs skapade ännu.*

**Exempel:**
```markdown
### EM-N001: Al-Rashid ibn Khalid
- **Ras:** Mûhadier
- **Ålder:** 45 år
- **Roll:** Karavanledare
- **Plats:** Oasstaden Al-Nur
- **Status:** Generiskt, delbart
- **Kampanjstatus:** Ej använt i kampanj
```

---

## 📌 KAMPANJIMPORTERAT MATERIAL

*Material som importerats till kampanjens wiki_data.js*

**Format:**
```markdown
### EM-XXX: Namn
- **Importdatum:** YYYY-MM-DD
- **Kapitel:** Kapitel X
- **Användning:** [Hur det används i kampanjen]
```

*Inget material importerat ännu.*

---

## 🔖 STATUSFÖRKLARING

### Generiskt, delbart
- Materialet följer officiell EON-kanon
- Validerat via NotebookLM
- Inga kampanj-spoilers
- Kan delas med andra spelledare

### Kampanjspecifikt
- Innehåller kampanjdetaljer i separat sektion
- Kan göras delbart genom att ta bort kampanjsektion

### Importerat till kampanj
- Finns i `master/wiki_data.js`
- Används aktivt i kampanjen
- Har fält `källa: "EM-XXX"` för spårbarhet

---

## 📋 KOMMANDE MATERIAL (IDÉER)

*Lista över material du planerar att skapa*

**Exempel:**
- [ ] EM-S001: Oasstaden Al-Nur (muhad-stil handelsstad)
- [ ] EM-N001: Al-Rashid (karavanledare, mûhadier)
- [ ] EM-P001: De Svarta Cisternerna (ökenruin)
- [ ] EM-O001: Skugghandelns Gille (smugglarnätverk)

---

## ❓ HJÄLP

### Starta nytt projekt

**Snabbt (1 session, enkel NPC/plats):**
1. Kopiera mall direkt till slutmapp
2. Skriv, validera, klar

**Projekt (flersessions, komplex):**
```python
# Använd eon-material-fas1 skill
Skill(skill="eon-material-fas1")
# Följt av: "Skapa nytt land i Muhad"
```

**Output:**
- Projektmapp i `projekt/`
- STATUS.md (fas-tracking)
- NOTES.md (vision, frågor)
- Nästa steg (fas 2: Research)

### Fortsätt pågående projekt

```python
# Använd eon-projekt-tracker för session-briefing
Task(
  subagent_type="eon-projekt-tracker",
  prompt="Fortsätt med [projektnamn eller kod]"
)
```

**Output:**
- Var du är (fas, progress)
- Vad som återstår
- 3-5 konkreta nästa steg

### Validera färdigt material

```python
# Använd eon-material-validering skill
Skill(skill="eon-material-validering")
# Följt av: projektkod eller filnamn
```

**Output:**
- Validering mot NotebookLM + kampanjdata
- Konflikter/varningar/godkänd
- Lösningsalternativ vid konflikter

### Importera till kampanj

```python
# Använd eon-data-guardian agent
Task(
  subagent_type="eon-data-guardian",
  prompt="Importera EM-XXX från Eget Material/ till master/wiki_data.js. Lägg till källa: 'EM-XXX'."
)
```

### Arbetsordning (7 faser)

1. **Syfte & Koncept** → Vision, frågor (`eon-material-fas1`)
2. **Research** → NotebookLM-queries (`eon-material-fas2-research`)
3. **Grundstruktur** → Översikt, geografi
4. **Kärnan** → Historia, styre, befolkning
5. **Detaljer** → Städer, NPCs, kampanjhooks
6. **Validering** → Faktagranskning (`eon-material-validering`)
7. **Avslut** → Flytta till slutmapp, uppdatera index

**Läs `CLAUDE.md` för detaljerad information!**

---

**Senast uppdaterad:** 2026-02-01
