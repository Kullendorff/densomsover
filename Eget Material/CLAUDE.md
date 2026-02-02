# Eget Material - Projektinstruktioner

**🎯 SYFTE:** Skapa och hantera eget EON-material (platser, länder, städer, NPCs) som:
- Är **delbart** med andra EON-spelledare (generiskt, utan kampanj-spoilers)
- Följer **officiella EON-regler** (validerat via NotebookLM)
- Kan **importeras** till kampanjens wiki_data.js vid behov
- Använder **kodad namngivning** för organisation

---

## 🔑 KODNINGSSYSTEM

### Format
```
EM-[TYP][NR]_namn.md
```

### Typer
| Kod | Typ | Exempel |
|-----|-----|---------|
| `EM-L001` | Land | `EM-L001_örkenriket-khamara.md` |
| `EM-S001` | Stad | `EM-S001_oasstaden-al-nur.md` |
| `EM-P001` | Plats | `EM-P001_den-svarta-cisternerna.md` |
| `EM-R001` | Region | `EM-R001_de-brinnande-slätterna.md` |
| `EM-O001` | Organisation | `EM-O001_skugghandelns-gille.md` |
| `EM-F001` | Föremål | `EM-F001_sandridarnas-mantel.md` |
| `EM-N001` | NPC | `EM-N001_al-rashid.md` |

**Namngivningsregler:**
- Små bokstäver, bindestreck istället för mellanslag
- Inget å/ä/ö i filnamn (skriv ut: `ö` → `o`, `å` → `a`, `ä` → `a`)
- Exempel: `EM-S001_oasstaden-al-nur.md` (inte `EM-S001_Oasstaden Al-Nur.md`)

---

## 📁 MAPPSTRUKTUR

```
Eget Material/
├── CLAUDE.md                # 🎯 DU ÄR HÄR - instruktioner
├── _index.md                # Katalog över allt material
│
├── projekt/                 # 🆕 PÅGÅENDE PROJEKT
│   └── EM-L001_landnamn/
│       ├── STATUS.md        # Projektstatus, fas-tracking
│       ├── NOTES.md         # Vision, frågor, anteckningar
│       ├── research/        # Research-data från NotebookLM
│       │   ├── geografi.md
│       │   ├── kultur.md
│       │   └── historia.md
│       └── utkast/          # Work-in-progress versioner
│           ├── v1_översikt.md
│           └── v2_komplett.md
│
├── lander/                  # FÄRDIGA Länder
│   └── EM-L001_namn.md
├── stader/                  # FÄRDIGA Städer
│   └── EM-S001_namn.md
├── platser/                 # FÄRDIGA Specifika platser
│   └── EM-P001_namn.md
├── regioner/                # FÄRDIGA Regioner
│   └── EM-R001_namn.md
├── organisationer/          # FÄRDIGA Organisationer/gillen
│   └── EM-O001_namn.md
├── foremal/                 # FÄRDIGA Magiska/speciella föremål
│   └── EM-F001_namn.md
├── npcs/                    # FÄRDIGA NPCs
│   └── EM-N001_namn.md
│
└── mallar/                  # Malldokument
    ├── mall-land.md
    ├── mall-stad.md
    ├── mall-plats.md
    ├── mall-npc.md
    ├── mall-organisation.md
    └── mall-status.md       # 🆕 STATUS.md-mall
```

---

## 📂 PROJEKTHANTERING

### Översikt

Material som tar flera sessioner att skapa hanteras i `projekt/`-mappen med strukturerad progress-tracking.

**Två arbetsflöden:**
1. **Snabba tillägg** (1 session, enkla NPCs/platser): Hoppa direkt till `npcs/` eller `platser/`
2. **Projekt** (flersessions, komplexa land/städer/organisationer): Använd `projekt/`-struktur

### Projektstruktur

**Varje projekt har:**
- `STATUS.md` - Fas-tracking, progress, nästa steg, blockerare
- `NOTES.md` - Vision, frågor, idéer, kampanjlänkar
- `research/` - NotebookLM-queries, kampanjdata
- `utkast/` - Work-in-progress versioner

**Workflow:**
1. Skapa projekt i `projekt/EM-XXX_namn/`
2. Arbeta genom 7 faser
3. När klar: Flytta till slutmapp (`lander/`, `stader/`, etc.)
4. Uppdatera `_index.md`

### Session-briefing

**Vid sessionstart för pågående projekt:**
```python
# eon-projekt-tracker ger automatisk status-briefing
Task(
  subagent_type="eon-projekt-tracker",
  prompt="Fortsätt med [projektnamn eller kod]"
)
```

**Output:**
- Var du är (fas, progress)
- Vad som är klart
- Vad som återstår
- 3-5 konkreta nästa steg
- Eventuella blockerare

---

## 📊 ARBETSORDNING (7 FASER)

**VIKTIGT:** Samma 7 faser används för ALLA typer av material. Skippa irrelevanta faser för mindre material (ex: plats hoppar över fas 4 Politik).

### Fas 1: Syfte & Koncept

**Vad:** Klargör vision och syfte
**Output:** `NOTES.md` med vision, koncept, frågor
**Tool:** `eon-material-fas1` skill

**Steg:**
1. Definiera vad materialet ska vara
2. Välj region/placering
3. Bestäm delbart eller kampanjspecifikt
4. Identifiera frågor att besvara

**Exempel-frågor:**
- Vad är grundidén?
- Var ska det ligga?
- Varför skapa detta?
- Hur ska det kännas?

### Fas 2: Research

**Vad:** Samla fakta från NotebookLM och kampanjdata
**Output:** `research/*.md` med NotebookLM-svar
**Tool:** `eon-material-fas2-research` skill

**Steg:**
1. NotebookLM-queries (geografi, kultur, historia, etc.)
2. Kampanjdata-sökning (om relevant)
3. Dokumentera resultat i research/-mappen
4. Identifiera luckor

**Exempel-queries:**
- "Vad vet vi om [region]? Geografi, klimat, terräng?"
- "[Ras]-kultur: traditioner, språk, samhälle?"
- "Vilka länder gränsar till [region]?"

### Fas 3: Grundstruktur

**Vad:** Översikt och grundläggande fakta
**Output:** `utkast/v1_översikt.md` med skeleton

**Steg:**
1. Kopiera mall från `mallar/`
2. Fyll i översikt-sektion
3. Skriv geografi/läge
4. Etablera grundläggande fakta

**Inkluderar:**
- Översikt (namn, läge, storlek)
- Geografi (klimat, terräng)
- Grundläggande beskrivning

### Fas 4: Kärnan

**Vad:** Viktiga sektioner (historia, styre, befolkning)
**Output:** Utkast utökat med kärnelement

**Steg:**
1. Historia (grundande, stora händelser)
2. Styre/Ledning (om relevant)
3. Befolkning/Kultur
4. Religion (om relevant)

**Skippa för:**
- Platser (fokusera på beskrivning och faror)
- NPCs (fokusera på bakgrund och personlighet)

### Fas 5: Detaljer

**Vad:** Detaljrikedom (städer, NPCs, organisationer)
**Output:** Nästan komplett material

**Steg:**
1. Viktiga platser (land: städer, stad: kvarter)
2. NPCs (ledare, viktiga personer)
3. Organisationer (om relevant)
4. Kampanjhooks (2-5 äventyrsiäder)
5. Atmosfär-texter (för städer/platser)

**Kvalitetskrav:**
- Alla mallavsnitt ifyllda
- Kampanjhooks konkreta
- Atmosfär-texter stämningsfulla

### Fas 6: Validering

**Vad:** Faktagranskning mot kanon och kampanj
**Output:** Validerat material med lösta konflikter
**Tool:** `eon-material-validering` skill (wrapper för validator-agent)

**Steg:**
1. Kör `eon-material-validator` agent
2. Granska resultat (godkänd/varningar/konflikter)
3. Lös konflikter
4. Dokumentera avvikelser från kanon

**Prioritering:** Kampanjinfo > NotebookLM (alltid!)

### Fas 7: Avslut

**Vad:** Flytta till slutmapp och publicera
**Output:** Material i `lander/`, `stader/`, etc.

**Steg:**
1. Granska kampanjspecifik sektion (ta bort om delbart)
2. Flytta från `projekt/` till rätt slutmapp
3. Uppdatera `_index.md`
4. Markera projekt som klart i STATUS.md

**Klar!** Materialet är nu färdigt att delas eller importeras.

---

## ⚖️ PRIORITERINGSREGEL (KRITISK!)

**Vid konflikt mellan källor:**

```
KAMPANJINFO > NOTEBOOKLM

1. master/kampanjkrönika.md     (HÖGSTA PRIORITET)
2. master/wiki_data.js          (om konsistent med krönika)
3. NotebookLM (EON-kanon)       (officiellt material, men kampanj kan avvika)
```

**Exempel:**
- **NotebookLM:** "Stad X ligger i region Y"
- **Kampanjkrönika:** "Gruppen reste till Stad X i region Z (Kapitel 3)"
- **→ Kampanjkrönikan har rätt** (vi var där!)

**Dokumentera avvikelser:**
```markdown
## 📝 Avvikelser från kanon

- **Stad X placering:** I kampanjen ligger staden i region Z,
  ej Y som i officiellt material. Gruppen besökte staden i
  Kapitel 3 och fastställde dess läge.
```

**Varför?**
- Kampanjen är vår verklighet - det som hänt i spelet är sant
- NotebookLM är officiellt material - kan avvika från vår kampanj
- Kontinuitet i kampanjen är viktigare än att följa kanon 100%

---

## 🧠 NOTEBOOKLM-INTEGRATION (REGELVALIDERING)

**KRITISKT:** ALLT nytt material MÅSTE valideras mot officiella EON-regler.

### NotebookLM-referens
- **ID:** `eon-komplett-regelbok-och-v-rl`
- **URL:** https://notebooklm.google.com/notebook/1a52a02f-a054-4c35-9b83-91e707286c79
- **Innehåll:** Kompletta EON-regelboken, alla rasreferenser, geografi, magi, fraktioner

### Automatisk regelvalidering

**Vid skapande av nytt material:**
1. Skriv material enligt mall
2. Använd NotebookLM för att validera:
   - Rasegenskaper (livslängd, utseende, kultur)
   - Geografisk konsistens (var ligger regioner?)
   - Magiregler (vad är möjligt?)
   - Historisk kontext (tidslinjer, händelser)
   - Fraktioner och organisationer

**Exempel:**
```python
# Validera att en ny ras är konsistent
Task(
  subagent_type="general-purpose",
  prompt="Använd NotebookLM (notebook_id: eon-komplett-regelbok-och-v-rl) för att validera: Kan en mûhadier vara 200 år gammal? Vad är deras normala livslängd?"
)
```

**Vad ska ALLTID valideras:**
- ✅ Rasegenskaper (livslängd, utseende, förmågor)
- ✅ Geografiska platser (region, klimat, grannar)
- ✅ Magiska förmågor (vad är möjligt enligt regler?)
- ✅ Organisationer (passar de i EON-världen?)
- ✅ Historiska referenser (tidslinjer, kända händelser)

---

## 🔗 WIKI-INTEGRATION (KAMPANJIMPORT)

Material från `Eget Material/` kan importeras till kampanjens `master/wiki_data.js` vid behov.

### När importera till wiki?

**Importera ENDAST om:**
- ✅ Materialet används aktivt i kampanjen
- ✅ Det behöver synas i dashboard (index.html)
- ✅ NPCs/platser har kampanjrelevans

**Importera INTE om:**
- ❌ Materialet är bara potentiellt framtida innehåll
- ❌ Det är generiska exempel
- ❌ Du vill behålla det delbart utan kampanj-spoilers

### Import-process

**För NPCs:**
```python
# Använd eon-data-guardian agent
Task(
  subagent_type="eon-data-guardian",
  prompt="Importera EM-N001 (Al-Rashid) från Eget Material/npcs/ till master/wiki_data.js. Lägg till fält 'källa: EM-N001' för spårbarhet."
)
```

**För platser:**
```python
# Använd eon-data-guardian agent
Task(
  subagent_type="eon-data-guardian",
  prompt="Importera EM-S001 (Oasstaden Al-Nur) från Eget Material/stader/ till master/wiki_data.js under 'platser'. Lägg till fält 'källa: EM-S001'."
)
```

**VIKTIGT:**
- Lägg ALLTID till `källa: "EM-XXX"` i wiki_data.js för spårbarhet
- Detta gör det enkelt att hitta ursprungsfilen vid framtida uppdateringar
- Validera omedelbart efter import: `node -e "require('./master/wiki_data.js')"`

---

## 📝 MALLAR (BASERAT PÅ OFFICIELLT EON-MATERIAL)

### Mall: Land (`mallar/mall-land.md`)

**Struktur:**
- Översikt (namn, läge, storlek, befolkning)
- Geografi (klimat, terräng, viktiga platser)
- Historia (grundande, stora händelser)
- Styre (regeringsform, ledare)
- Befolkning (raser, kultur, språk)
- Religion (gudar, trosriktningar)
- Ekonomi (handel, resurser)
- Militär (armé, försvar)
- Städer och viktiga platser
- NPCs (ledare, viktiga personer)
- Kampanjhooks (äventyrsiäder)

### Mall: Stad (`mallar/mall-stad.md`)

**Struktur:**
- Atmosfär och första intryck
- Läge och storlek
- Historia
- Styre (borgmästare, råd)
- Befolkning (raser, antal)
- Ekonomi (handel, hantverksgillen)
- Stadsdelar (beskrivningar per kvarter)
- Viktiga byggnader (tempel, värdshus, marknader)
- NPCs (borgmästare, köpmän, präster)
- Atmosfär-texter (3-5 korta scen-beskrivningar)
- Kampanjhooks

### Mall: Plats (`mallar/mall-plats.md`)

**Struktur:**
- Typ (ruin, grotta, tempel, etc.)
- Läge (region, närhet till städer)
- Beskrivning (utseende, atmosfär)
- Historia (vad hände här?)
- Faror (monster, fällor, environmental hazards)
- Skatter/Belöningar
- NPCs eller kreatur
- Kampanjhooks

### Mall: NPC (`mallar/mall-npc.md`)

**Struktur:**
- Namn och titel
- Ras, ålder, kön
- Utseende (kort beskrivning)
- Personlighet (drag, quirks)
- Bakgrund (historia, motivation)
- Färdigheter och förmågor
- Utrustning
- Relationer (till andra NPCs/organisationer)
- Kampanjroll (allierad, fiende, neutral)
- Dialog-exempel (2-3 typiska repliker)

### Mall: Organisation (`mallar/mall-organisation.md`)

**Struktur:**
- Namn och typ (gille, orden, kult, etc.)
- Symbol/Heraldik
- Grundande och historia
- Syfte och mål
- Struktur (hierarki, ledare)
- Medlemmar (antal, ras, krav)
- Resurser (pengar, fastigheter, inflytande)
- Operationsområde (var är de aktiva?)
- Relationer (allierade, fiender)
- Viktiga NPCs
- Kampanjhooks

---

## 🌍 DELBARHETSPRINCIPER

### Generiskt material (offentligt)

**I huvudtext, inkludera:**
- ✅ Generiska beskrivningar (stad, land, plats)
- ✅ EON-kanon (officiellt material)
- ✅ Öppna kampanjhooks (potentiella äventyr)
- ✅ NPCs utan koppling till specifik kampanj
- ✅ Organisationer som kan användas överallt

**I huvudtext, inkludera INTE:**
- ❌ Kampanj-specifika händelser ("I vår kampanj...")
- ❌ Spoilers för din kampanj
- ❌ Spelarkaraktärers handlingar
- ❌ Hemliga plot-detaljer

### Kampanjspecifikt material (privat)

**Lägg kampanj-specifikt innehåll i separat sektion:**
```markdown
---

## 📌 KAMPANJSPECIFIKT (Gravens Arv)

**VIKTIGT:** Detta avsnitt innehåller kampanj-specifika detaljer och spoilers. Ta bort denna sektion om du delar filen med andra!

### Användning i kampanjen
[Hur används detta i din kampanj?]

### Relaterade händelser
[Kapitel, sessioner, händelser]

### Koppling till masterplot
[Hur kopplar detta till huvudstoryn?]

### NPCs som besökt
[Spelarkaraktärer eller viktiga NPCs]
```

### Exempel

**Generiskt (delbart):**
```markdown
# EM-S001: Oasstaden Al-Nur

## Översikt
Al-Nur är en blomstrande oasstad i hjärtat av Muhads öken...

## Atmosfär
Solnedgången färgar de vita minaretterna gyllene...
```

**Kampanjspecifikt (privat):**
```markdown
---

## 📌 KAMPANJSPECIFIKT (Gravens Arv)

### Användning i kampanjen
Gruppen besökte Al-Nur i Kapitel 2 för att söka information om Zentris försvinnande. Gordon mötte Al-Rashid här och fick veta om demonkulten.

### Relaterade händelser
- Kapitel 2: Första besöket (2024-03-15)
- Gordons bror Ethan ska tjänstgöra här senare
```

---

## 🛠️ VERKTYG OCH AGENTER

**VIKTIGT:** Agenter och skills för Eget Material finns i EON-projektets centrala `.claude/`-mapp, INTE i `Eget Material/.claude/`.

**Plats:**
- Agenter: `EON/.claude/agents/`
- Skills: `EON/.claude/skills/`

**Läs:** Se huvudprojektets `CLAUDE.md` för fullständig lista av alla EON-agenter.

---

### Projekthantering

#### eon-projekt-tracker (session-briefing)
**Fil:** `EON/.claude/agents/eon-projekt-tracker.md`
**Syfte:** Läser STATUS.md och ger översikt av pågående projekt
**När:** Vid sessionstart för pågående projekt

```python
Task(
  subagent_type="eon-projekt-tracker",
  prompt="Fortsätt med [projektnamn eller kod]"
)
```

**Output:**
- Var du är (fas, progress)
- Vad som är klart/återstår
- 3-5 konkreta nästa steg
- Blockerare (om finns)

#### eon-material-validator (faktagranskning)
**Fil:** `EON/.claude/agents/eon-material-validator.md`
**Syfte:** Validerar material mot NotebookLM, kampanjkrönika, wiki_data
**När:** Efter fas 5 (Detaljer), innan fas 6 (Validering)

```python
Task(
  subagent_type="eon-material-validator",
  prompt="Validera [filnamn]. Granska mot kampanjkrönika.md, wiki_data.js, och NotebookLM. PRIORITET: Kampanjinfo > NotebookLM."
)
```

**Output:**
- ✅ Godkänd / ⚠️ Varningar / ❌ Konflikter
- Lösningsalternativ vid konflikter
- Avvikelser från kanon att dokumentera

---

### Skills (snabba arbetsflöden)

#### eon-material-fas1 (Syfte & Koncept)
**Fil:** `EON/.claude/skills/eon-material-fas1/Skill.md`
**Syfte:** Starta nytt projekt med struktur
**När:** Vid nya material-projekt

```python
Skill(skill="eon-material-fas1")
# Följt av: "Skapa nytt land i Muhad"
```

**Output:**
- Projektmapp skapad
- STATUS.md och NOTES.md
- research/ och utkast/ mappar

#### eon-material-fas2-research (Research)
**Fil:** `EON/.claude/skills/eon-material-fas2-research/Skill.md`
**Syfte:** NotebookLM-queries och kampanjdata-sökning
**När:** Efter fas 1

```python
Skill(skill="eon-material-fas2-research")
# Följt av: projektkod eller namn
```

**Output:**
- Research-filer i `research/`
- NotebookLM-queries genomförda
- Kampanjdata granskad (om relevant)

#### eon-material-validering (Validering)
**Fil:** `EON/.claude/skills/eon-material-validering/Skill.md`
**Syfte:** Wrapper för validator-agent
**När:** Efter fas 5, innan fas 6

```python
Skill(skill="eon-material-validering")
# Följt av: projektkod eller filnamn
```

**Output:**
- Kör eon-material-validator agent
- Hanterar resultat (godkänd/varningar/konflikter)
- Uppdaterar STATUS.md

---

### Kampanjverktyg (från EON/.claude/agents/)

**VIKTIGT:** Dessa agenter finns i huvudprojektets `.claude/agents/`, inte i `Eget Material/`.

#### NotebookLM (regelvalidering)
```python
# Validera rasegenskaper
Task(
  subagent_type="general-purpose",
  prompt="Använd NotebookLM (eon-komplett-regelbok-och-v-rl) för att validera: [fråga om EON-regler]"
)
```

#### eon-data-guardian (wiki-import)
**Fil:** `EON/.claude/agents/eon-data-guardian.md`

```python
# Importera NPC till kampanjens wiki_data.js
Task(
  subagent_type="eon-data-guardian",
  prompt="Importera EM-N001 från Eget Material/npcs/ till master/wiki_data.js. Lägg till källa: 'EM-N001'."
)
```

#### eon-midjourney-prompter (bilder)
**Fil:** `EON/.claude/agents/eon-midjourney-prompter.md`

```python
# Generera bilder för eget material
Task(
  subagent_type="eon-midjourney-prompter",
  prompt="Generera Midjourney-prompt för EM-S001: Oasstaden Al-Nur (muhad-stil, öken, vita minareter)"
)
```

#### eon-chronicler (tidslinjevalidering)
**Fil:** `EON/.claude/agents/eon-chronicler.md`

```python
# Validera att nytt material passar i kampanjtidslinjen
Task(
  subagent_type="eon-chronicler",
  prompt="Validera att EM-S001 (Al-Nur) inte skapar kontinuitetskonflikter med kampanjkrönika.md"
)
```

**Se huvudprojektets `CLAUDE.md` för fullständig lista av alla EON-agenter!**

---

## 📋 ARBETSFLÖDE

### Skapa nytt land

1. **Planera:**
   - Välj region i EON-världen
   - Bestäm typ (ökenrike, skogsland, bergsregion)
   - Researcha officiellt material via NotebookLM

2. **Validera:**
   - Fråga NotebookLM: "Vilka länder finns i [region]?"
   - Fråga NotebookLM: "Vad vet vi om [närliggande land]?"
   - Säkerställ att det inte krockar med kanon

3. **Skriv:**
   - Kopiera `mallar/mall-land.md` till `lander/EM-L001_namn.md`
   - Fyll i alla sektioner
   - Inkludera kampanjhooks (generiska)
   - Lägg kampanj-specifikt i separat sektion

4. **Uppdatera index:**
   - Lägg till i `_index.md`
   - Inkludera kort beskrivning

### Skapa ny stad

1. **Planera:**
   - Välj land/region
   - Bestäm storlek (liten by, stad, storstad)
   - Researcha officiellt material via NotebookLM

2. **Validera:**
   - Fråga NotebookLM: "Vilka städer finns i [region]?"
   - Kontrollera befolkning, raser, kultur

3. **Skriv:**
   - Kopiera `mallar/mall-stad.md` till `stader/EM-S001_namn.md`
   - Fyll i alla sektioner
   - Skriv 3-5 atmosfär-texter (first person, kort)
   - Lägg kampanj-specifikt i separat sektion

4. **Uppdatera index:**
   - Lägg till i `_index.md`

### Skapa ny NPC

1. **Planera:**
   - Välj ras (validera via NotebookLM)
   - Bestäm roll (köpman, präst, krigare, etc.)
   - Researcha rasegenskaper

2. **Validera:**
   - Fråga NotebookLM: "Vad vet vi om [ras]? Livslängd? Utseende? Kultur?"
   - Kontrollera att egenskaper stämmer

3. **Skriv:**
   - Kopiera `mallar/mall-npc.md` till `npcs/EM-N001_namn.md`
   - Fyll i alla sektioner
   - Inkludera dialog-exempel
   - Lägg kampanj-specifikt i separat sektion

4. **Uppdatera index:**
   - Lägg till i `_index.md`

### Importera till kampanjwiki

**När ska du importera?**
- NPC används aktivt i kampanj
- Plats besöks av spelarna
- Organisation spelar en roll

**Hur importera:**
```python
# Importera NPC
Task(
  subagent_type="eon-data-guardian",
  prompt="Importera EM-N001 (Al-Rashid) från Eget Material/npcs/ till master/wiki_data.js. Lägg till fält 'källa: EM-N001'."
)

# Importera plats
Task(
  subagent_type="eon-data-guardian",
  prompt="Importera EM-S001 (Al-Nur) från Eget Material/stader/ till master/wiki_data.js under 'platser'. Lägg till fält 'källa: EM-S001'."
)
```

**Efter import:**
- Validera syntax: `node -e "require('./master/wiki_data.js')"`
- Kontrollera dashboard: öppna `index.html` i browser
- Uppdatera kampanjkrönika.md om relevant

---

## 🔍 VALIDERING OCH KVALITET

### Regelkontroll (via NotebookLM)

**ALLTID validera:**
- [ ] Rasegenskaper (livslängd, utseende, förmågor)
- [ ] Geografisk placering (region, klimat, grannar)
- [ ] Magiska element (följer EON-magiregler?)
- [ ] Historiska referenser (stämmer med EON-tidslinje?)
- [ ] Organisationer (passar i EON-världen?)

**Exempel-frågor till NotebookLM:**
- "Vad vet vi om mûhadier? Livslängd, kultur, utseende?"
- "Vilka regioner finns i Muhad? Vad vet vi om klimatet?"
- "Hur fungerar magi i EON? Vad är möjligt/omöjligt?"
- "Vilka stora historiska händelser har format EON-världen?"

### Delbarhetskontroll

**Innan du delar material:**
- [ ] Inga kampanj-spoilers i huvudtext
- [ ] Kampanjspecifikt i separat sektion
- [ ] Generiska kampanjhooks (användbara för alla)
- [ ] Följer officiell EON-kanon
- [ ] Validerat via NotebookLM

### Kvalitetskrav

**Minsta krav för publicering:**
- [ ] Alla mallavsnitt ifyllda
- [ ] Validerat via NotebookLM (inga regelbrott)
- [ ] Kampanjhooks inkluderade (minst 2-3)
- [ ] Atmosfär-texter (för städer/platser)
- [ ] Kodad namngivning (EM-XXX)
- [ ] Listat i _index.md

---

## 📚 REFERENSMATERIAL

### Officiellt EON-material (via NotebookLM)
- **ID:** `eon-komplett-regelbok-och-v-rl`
- **URL:** https://notebooklm.google.com/notebook/1a52a02f-a054-4c35-9b83-91e707286c79
- **Innehåll:** Kompletta regelboken, alla rasreferenser, geografi, magi, fraktioner

### Kampanjens wiki (för inspiration)
- `master/wiki_data.js` - NPCs och platser från kampanjen
- `master/kampanjkrönika.md` - Kampanjhistoria
- `kampanjwiki/_npcs/` - Markdown-filer med NPCs

### Stilreferenser
- **Generiska beskrivningar:** Neutral ton, användbara för alla kampanjer
- **Atmosfär-texter:** First person, korta, stämningsfulla
- **Kampanjhooks:** Öppna, inspirerande, konkreta

---

## ❓ VANLIGA FRÅGOR

### Måste jag validera ALLT via NotebookLM?
**Ja.** NotebookLM innehåller hela EON-regelboken och världsbeskrivningen. Validera alltid rasegenskaper, geografi, magi, och organisationer för att undvika att bryta mot kanon.

### Kan jag skapa egna raser?
**Nej.** Använd officiella EON-raser (människor, tiraker, dvärgar, alver, ausare, mûhadier, etc.). Validera alla rasegenskaper via NotebookLM.

### Kan jag skapa nya länder?
**Ja, men försiktigt.** Använd befintliga regioner i EON-världen. Fråga NotebookLM om vilka länder som redan finns i regionen och se till att ditt material inte krockar.

### När ska jag importera till kampanjens wiki?
**Endast när materialet används aktivt i kampanjen.** Behåll materialet här i `Eget Material/` tills det blir kampanjrelevant.

### Hur delar jag material med andra spelledare?
Ta bort `## 📌 KAMPANJSPECIFIKT`-sektionen från filen, validera att det inte finns kampanj-spoilers i huvudtexten, och dela filen.

### Vad händer om mitt material krockar med officiell kanon?
Använd NotebookLM för att validera INNAN du skriver. Om du upptäcker en konflikt efter att ha skrivit, revidera materialet för att passa kanon.

---

## 🎯 NÄSTA STEG

1. **Läs `_index.md`** för att se befintligt material
2. **Välj typ** (land, stad, plats, NPC)
3. **Researcha** via NotebookLM
4. **Kopiera mall** från `mallar/`
5. **Skriv material** enligt mall
6. **Validera** via NotebookLM
7. **Uppdatera** `_index.md`
8. **(Valfritt)** Importera till kampanjens wiki om relevant

---

**Senast uppdaterad:** 2026-02-01
**Version:** 2.0 (projekthantering tillagd)
