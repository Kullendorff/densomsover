# EON Material - Fas 2: Research

**Version:** 1.0 (grund-skill, förbättras vid användning)
**Senast uppdaterad:** 2026-02-01

---

## SYFTE

Genomför research-fas för material-projekt genom NotebookLM-queries och kampanjdata-sökning. Samlar resultat i `research/`-mappen och uppdaterar STATUS.md.

---

## NÄR ANVÄNDA

- Efter fas 1 (Syfte & Koncept)
- När användaren säger "börja researcha", "fas 2", "NotebookLM"
- Automatiskt efter eon-material-fas1 skill

**INTE när:**
- Materialet inte har STATUS.md (kör fas 1 först)
- Research redan färdig

---

## INPUT

- **Projektmapp:** `Eget Material/projekt/[kod]_[namn]/`
- **Eller projektkod:** `EM-L001`

---

## WORKFLOW

### Steg 1: Läs projektstatus

```bash
# Hitta projekt
Read "Eget Material/projekt/[kod]_[namn]/STATUS.md"
Read "Eget Material/projekt/[kod]_[namn]/NOTES.md"
```

**Extrahera:**
- Typ (land, stad, plats, etc.)
- Frågor att besvara (från NOTES.md)
- NotebookLM-queries som behövs

### Steg 2: Identifiera research-områden

Baserat på typ:

**För LAND:**
- Geografi (region, klimat, terräng)
- Grannar (vilka länder runt omkring?)
- Kultur (raser, språk, traditioner)
- Historia (grundande, stora händelser)
- Politik (styre, ledare)

**För STAD:**
- Läge (region, närhet till annat)
- Storlek (befolkning, utbredning)
- Kultur (raser, handel, yrken)
- Arkitektur (stil, byggnader)
- Historia (grundande, viktiga händelser)

**För PLATS:**
- Typ (ruin, grotta, tempel, etc.)
- Läge (region, närhet till städer)
- Historia (vad hände här?)
- Faror (monster, fällor, miljö)

**För NPC:**
- Ras (egenskaper, kultur, livslängd)
- Roll/yrke (möjligt i EON?)
- Bakgrund (passar i världen?)
- Färdigheter (regelenliga?)

**För ORGANISATION:**
- Typ (gille, orden, kult, etc.)
- Plats (var är de aktiva?)
- Syfte (passar i EON-världen?)
- Liknande organisationer (vad finns redan?)

### Steg 3: Parallella NotebookLM-queries

**KRITISKT:** Kör queries parallellt för effektivitet.

**Exempel för land i Muhad:**
```python
# Query 1: Geografi
mcp__notebooklm__ask_question(
  notebook_id="eon-komplett-regelbok-och-v-rl",
  question="Vad vet vi om Muhads geografi? Regioner, klimat, terräng, viktiga platser?"
)

# Query 2: Kultur
mcp__notebooklm__ask_question(
  notebook_id="eon-komplett-regelbok-och-v-rl",
  question="Mûhadier-kultur: traditioner, språk, samhällsstruktur, religion?"
)

# Query 3: Grannar
mcp__notebooklm__ask_question(
  notebook_id="eon-komplett-regelbok-och-v-rl",
  question="Vilka länder och regioner gränsar till Muhad? Relationer?"
)
```

**Exempel för NPC (mûhadier):**
```python
# Query 1: Ras
mcp__notebooklm__ask_question(
  notebook_id="eon-komplett-regelbok-och-v-rl",
  question="Mûhadier: utseende, livslängd, kultur, förmågor, begränsningar?"
)

# Query 2: Yrke
mcp__notebooklm__ask_question(
  notebook_id="eon-komplett-regelbok-och-v-rl",
  question="[Yrke] i EON: färdigheter, utrustning, typiska roller?"
)
```

### Steg 4: Kampanjdata-sökning (om relevant)

**Om materialet ska användas i kampanjen:**

```bash
# Sök i kampanjkrönika
Grep pattern="[region/plats/tema]" path="master/kampanjkrönika.md" output_mode="content"

# Sök i wiki_data
Grep pattern="[region/plats/tema]" path="master/wiki_data.js" output_mode="content"
```

**Extrahera:**
- Platser som redan finns
- NPCs som verkar i regionen
- Händelser som påverkar området
- Kontinuitet att respektera

### Steg 5: Samla resultat i research/

**Skapa filer för varje område:**

```markdown
# research/geografi.md
# Geografi och Klimat

## Från NotebookLM (EON-kanon)

[NotebookLM svar här]

**Viktiga punkter:**
- [Punkt 1]
- [Punkt 2]

## Från kampanjdata (om relevant)

[Kampanjkrönika-hits här]

**Kontinuitet att respektera:**
- [Händelse/plats som finns]

---
**Källor:**
- NotebookLM query: [datum]
- kampanjkrönika.md (om använt)
```

**Skapa filer för:**
- `geografi.md` (region, klimat, terräng)
- `kultur.md` (raser, traditioner, språk)
- `historia.md` (händelser, tidslinje)
- `politik.md` (styre, ledare) [om relevant]
- `grannar.md` (angränsande länder/regioner) [om relevant]
- `kampanj.md` (kampanjspecifik info) [om relevant]

### Steg 6: Uppdatera STATUS.md

```markdown
### Fas 2: Research
- [x] NotebookLM-queries genomförda
- [x] Kampanjdata-sökning (om relevant)
- [x] Research-material samlat i `research/`

## 📋 NÄSTA SESSION

**Prioriterade steg:**
1. Granska research-resultat
2. Identifiera eventuella luckor (saknas något?)
3. Börja skriva grundstruktur (fas 3)

**Mål:**
Påbörja fas 3 (Grundstruktur) baserat på research-materialet.
```

**Uppdatera progress:**
```markdown
| 2. Research | ✅ Klar | 100% |
| 3. Grundstruktur | ❌ Ej påbörjad | 0% |
```

### Steg 7: Bekräfta och ge nästa steg

**Output:**
```
═══════════════════════════════════════════════════════════════
✅ FAS 2 KLAR: RESEARCH ([PROJEKTNAMN])
═══════════════════════════════════════════════════════════════

Research-filer skapade:
✓ research/geografi.md
✓ research/kultur.md
✓ research/historia.md
[Eventuellt fler...]

NotebookLM-queries genomförda: [X]
Kampanjdata granskad: [Ja/Nej]

═══════════════════════════════════════════════════════════════
📋 SAMMANFATTNING
═══════════════════════════════════════════════════════════════

**Geografi:**
[1-2 meningar sammanfattning]

**Kultur:**
[1-2 meningar sammanfattning]

**Historia:**
[1-2 meningar sammanfattning]

**Kontinuitet (kampanj):**
[Om relevant: vad måste vi respektera?]

═══════════════════════════════════════════════════════════════
📋 NÄSTA STEG (FAS 3: GRUNDSTRUKTUR)
═══════════════════════════════════════════════════════════════

1. Granska research-resultat för luckor
2. Kopiera mall-[typ].md till utkast/v1.md
3. Fyll i översikt och geografi baserat på research
4. Använd eon-material-fas3-grundstruktur skill (när skapad)

═══════════════════════════════════════════════════════════════

Vill du fortsätta till fas 3 (skriva grundstrukturen)?
```

---

## VIKTIGA REGLER

### 1. KÖR QUERIES PARALLELLT
3-5 NotebookLM-queries samtidigt för effektivitet.

### 2. DOKUMENTERA KÄLLOR
Varje research-fil ska ha:
- Vad frågade vi?
- Vad fick vi för svar?
- Datum för query
- Källa (NotebookLM/kampanjkrönika)

### 3. IDENTIFIERA KONTINUITET
Om kampanjdata påverkar materialet:
- Dokumentera i `research/kampanj.md`
- Flagga i STATUS.md som "måste respektera"

### 4. FLAGGA LUCKOR
Om NotebookLM inte kan svara på något:
- Dokumentera i research-fil
- Markera som "behöver egen design"
- Notera i STATUS.md

### 5. SAMMANFATTA RESULTAT
I slutet av fas 2: ge kort sammanfattning av vad vi lärt oss.

---

## EXEMPEL-ANVÄNDNING

**Användaren:** "Börja researcha Land X"

**Skill gör:**

1. Läser STATUS.md och NOTES.md

2. Identifierar research-områden (land):
   - Geografi
   - Kultur
   - Historia
   - Grannar
   - Politik

3. Kör parallella NotebookLM-queries:
   ```
   Query 1: "Muhads geografi?"
   Query 2: "Mûhadier-kultur?"
   Query 3: "Muhads grannar?"
   Query 4: "Muhads historia?"
   ```

4. Skapar research-filer:
   - `geografi.md` med resultat
   - `kultur.md` med resultat
   - `historia.md` med resultat
   - `grannar.md` med resultat

5. Uppdaterar STATUS.md (fas 2 klar)

6. Ger sammanfattning och nästa steg

**Output:**
```
✅ FAS 2 KLAR: RESEARCH (Ökenriket Khamara)

Research-filer: 4
NotebookLM-queries: 4

SAMMANFATTNING:
Geografi: Muhad är ökenregion med oaser...
Kultur: Mûhadier har rik handelstradition...

Nästa steg: Skriv grundstruktur (fas 3).
Vill du fortsätta?
```

---

## NOTEBOOKLM-QUERIES (MALLAR)

### Land
```
1. "Vad vet vi om [region]? Geografi, klimat, terräng?"
2. "[Ras]-kultur: traditioner, språk, samhälle?"
3. "Vilka länder gränsar till [region]?"
4. "[Region] historia: viktiga händelser, tidslinje?"
5. "Styre och politik i [region]?"
```

### Stad
```
1. "Typiska städer i [region]? Storlek, arkitektur?"
2. "[Ras]-städer: layout, byggnader, atmosfär?"
3. "Handel och ekonomi i [region]?"
4. "Organisationer och gillen i [region]?"
```

### NPC
```
1. "[Ras]: utseende, livslängd, kultur, förmågor?"
2. "[Yrke] i EON: färdigheter, utrustning, roll?"
3. "[Region]-specifik kultur för [ras]?"
```

### Organisation
```
1. "Vilka organisationer finns i [region]?"
2. "[Typ]-organisationer i EON: struktur, syfte?"
3. "Liknande organisationer: [exempel]?"
```

---

## FÖRBÄTTRINGAR (när vi testar)

**Version 1.0 (grund-skill):**
- NotebookLM-queries
- Kampanjdata-sökning
- Research-filer skapade

**Framtida förbättringar:**
- Auto-generera queries baserat på typ
- Identifiera luckor automatiskt
- Föreslå extra queries vid otillräcklig data

---

## VERIFIERING

Efter fas 2, kontrollera:
- [ ] Minst 3 NotebookLM-queries genomförda
- [ ] Research-filer skapade i `research/`
- [ ] Kampanjdata granskad (om relevant)
- [ ] STATUS.md uppdaterad (fas 2 klar)
- [ ] Sammanfattning given
- [ ] Nästa steg tydligt definierade

---

**Skill-typ:** Skill tool (`skill="eon-material-fas2-research"`)
**Output:** Research-filer, uppdaterad STATUS.md, sammanfattning
**Förbättras:** Genom användning och feedback
