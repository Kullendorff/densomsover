# EON Kampanjwiki - Projektinstruktioner

## 🎯 BÖRJA HÄR: Läs _index.md FÖRST!

**KRITISKT:** Innan du gör NÅGOT i detta projekt, läs `_index.md` först.
Den filen är entry point och visar:
- Var vi är i kampanjen nu
- Var all data finns (SINGLE SOURCE OF TRUTH)
- Vilken fil du ska läsa för vilken uppgift
- Mappstruktur och arbetsflöden

**Efter att ha läst _index.md, fortsätt här för detaljerad arkitektur.**

---

## 🤖 AGENT-ANVÄNDNINGSPOLICY

**VIKTIGT:** Sluta fråga om du ska använda en agent. Gör din egen bedömning.

**Prioritetsordning:**
1. **KVALITET/EXAKTHET/KONTINUITET** - Högsta prioritet
2. **SNABBHET** - Andra prioritet
3. **TOKEN-SPARANDE** - Lägsta prioritet

**Beslutsregel:**
- Om agent = bättre kvalitet → Använd agent (även om långsammare)
- Om agent = snabbare MEN sämre kvalitet → Använd INTE agent
- Tokens är INTE viktigt att spara - kvalitet är allt

**Exempel:**
- ✅ Använd eon-chronicler för kontinuitetskontroller (bättre kvalitet)
- ✅ Använd eon-data-guardian för batch-tillägg (säkrare)
- ✅ Använd eon-kapitel-writer för narrativ (bättre prosa)
- ❌ Använd INTE agent om manuell redigering är noggrannare

**TL;DR:** Tänk själv. Kvalitet > hastighet > tokens.

---

## Projektöversikt
EON-rollspelskampanj "Gravens Arv" - Dashboard och wiki för spelledaren (Johan).

**Huvudsida:** Fantasy-dashboard (`/index.html`) med centraliserad databas (`master/wiki_data.js`)
**Referens:** Jekyll-wiki (`/kampanjwiki/`) för strukturerad markdown-data

## NUVARANDE STATUS (2025-12-12)
- ✅ Dashboard live med 242 NPCs, 58 platser, 11 kapitel
- ✅ Grid + Modal-layout, sök/filter-funktioner
- ✅ Bilder centraliserade i `kampanjwiki/assets/images/`
- ✅ 6 specialiserade agenter + 1 skill för drift
- 🔄 Pågående: Bildmatchning (121 NPCs saknar bilder)

---

## Arkitektur

### 1. Dashboard (Huvudsida)
**Plats:** `/index.html` (rot-katalogen)
**Typ:** Single-file HTML (1050+ rader)
**Tech Stack:** Vanilla JS, CSS Grid, Markdown-rendering
**Data:** Laddar `master/wiki_data.js` via `<script src>`

**Features:**
- Hero-sektion med kampanjstatus
- Spelarkaraktärer (6 st inkl. Zentri)
- NPCs (grid cards → modal lightbox på klick)
- Platser (samma struktur)
- Kapitel-tidslinje (Prolog + Kapitel 1-10)
- Fraktioner-översikt
- Sök + filter (region, ras, status, fraktion)

**Färgschema:**
- `--flame-orange: #ff6b4a` - Primär accent
- `--deep-red: #d4534d` - Varningar
- `--mystic-purple: #a855a8` - Sekundär
- `--gold: #ffa500` - Highlights
- `--bg-dark: #0a0a0a` - Bakgrund

### 2. master/wiki_data.js (Centraliserad Databas)
**Plats:** `/master/wiki_data.js` (master-mappen)
**Storlek:** ~300 KB (242 NPCs, 58 platser, 11 kapitel)
**Format:** CommonJS module (`module.exports`) + browser global (`var wikiData`)

**Struktur:**
```javascript
var wikiData = {
  npcs: [
    {
      namn: "Namn Efternamn",
      bild: "namn.png",  // eller null
      ras: "Människa/Mûhadier/Tirak/etc",
      ålder: "25 år",
      yrke: "Roll/yrke",
      status: "levande/död/försvunnen",
      plats: "Jen/Vargnäset/etc",
      fraktion: "Fraktion",
      kapitel: "Kapitel 2",
      beskrivning: "Markdown-text med **formatering**"
    }
  ],
  platser: [...],
  kapitel: [...]
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = wikiData;
}
```

**KRITISK VALIDERING efter VARJE ändring:**
```bash
cd "D:/GDRIVE/My Drive/Johan/Gaming/Gammal leka bäst/EON"
node -e "const d=require('./master/wiki_data.js'); console.log('✓', d.npcs.length, 'NPCs,', d.platser.length, 'platser');"
```

### 3. kampanjwiki/ (Jekyll-referens)
**Plats:** `EON/kampanjwiki/`
**Typ:** Jekyll-struktur med markdown-filer
**Användning:** Källdata för wiki_data.js, bildarkiv

**Struktur:**
```
kampanjwiki/
├── _spelarkaraktarer/  # 6 player characters
├── _npcs/              # 220+ markdown-filer (YAML frontmatter)
├── _platser/           # 53+ markdown-filer
├── _kapitel/           # 11 kampanjfaser
├── _fraktioner/        # Viktiga grupper
└── assets/images/      # 🎯 MASTER BILDARKIV
    ├── npcs/           # 157 bilder (karaktärer + monster)
    ├── platser/        # 23 bilder
    ├── fartyg/         # Skepp
    ├── kartor/         # Kartor
    ├── spelarkaraktarer/ # Player portraits
    ├── kampanj/        # Kampanjbilder
    ├── föremål/        # Items
    └── bakgrunder/     # Backgrounds
```

**Bildhantering:**
- Dashboard: `../kampanjwiki/assets/images/npcs/namn.png`
- Jekyll: `/assets/images/npcs/namn.png` (auto-hittar)

### 4. Eon SL/ (Kampanjdokumentation)
**Plats:** `EON/Eon SL/`
**Innehåll:** Kampanjdokument (.md-filer), äventyr, sessionsanteckningar
**Viktiga filer:**
- `jen.md` - Staden Jen (51 NPCs extraherade)
- `flykten_genom_drunok.md` - Evakueringen (50 NPCs)
- `spegelmane.md` - Fartyget (6 NPCs)
- `frostnymf.md` - Flodpråm (9 NPCs)

### 5. kapitel/ (Narrativa HTML-sidor)
**Plats:** `EON/kapitel/`
**Typ:** Fristående HTML-filer med full narrativ prosa
**Syfte:** Kampanjhistoria som litterär berättelse (ej bara fakta)

**Struktur:**
```
EON/kapitel/
├── prolog-tirakgraven.html      ✅ Finns (520 rader)
├── kapitel-1-jakten.html        ✅ Finns (502 rader)
├── kapitel-2-muhad.html         ✅ Finns (542 rader)
├── kapitel-3-tarkas.html        ✅ Finns (542 rader)
├── kapitel-4-jargien.html       ❌ SAKNAS
├── kapitel-5-vargnaset.html     ❌ SAKNAS
├── kapitel-6-vitterdal.html     ❌ SAKNAS
├── kapitel-7-vargnaset-2.html   ❌ SAKNAS
├── kapitel-8-evakueringen.html  ❌ SAKNAS
├── kapitel-9-mithera.html       ✅ Finns (518 rader)
├── kapitel-10-skugglandet.html  ❌ SAKNAS
└── kapitel-linkify.js           # Auto-länkar NPCs/platser
```

**Innehåll per fil:**
- Full HTML-struktur (~500 rader)
- Embedded CSS (samma färgschema som dashboard)
- Navigation bar med tillbaka-knapp
- Chapter header med metadata
- **Narrativ prosa** (ej punktlistor!)
  - Joe Abercrombie-stil: Cynisk, rå, direkt
  - Robin Hobb-stil: Emotionell, introspektiv, konsekvenser
- Entity-länkar (auto-genererade via JS):
  - NPCs (orange)
  - Platser (purple)
  - Fraktioner (gold)
- Info-boxar för meta-information
- Quote-boxar för dialog

**Data-källa:**
- **MASTER:** `master/master/kampanjkrönika.md` (eon-chronicler's tidslinje)
- **Kompletterande:** `master/master/wiki_data.js`, Jekyll markdown

**Genereras av:** `eon-kapitel-writer` agent

**Viktigt:**
- ALLTID baserat på kampanjkrönika.md
- ALDRIG uppfunna händelser
- Storyteller är BERÄTTARE, inte historiker
- Chronicler validerar fakta

---

## .claude/ - AI-infrastruktur

### Struktur
```
.claude/
├── agents/                      # Specialiserade autonoma agenter
│   ├── eon-data-guardian.md     # Säker wiki_data.js-uppdatering
│   ├── eon-chronicler.md        # Kampanjkrönikör
│   ├── eon-doc-extractor.md     # Dokumentdataextraktion
│   ├── eon-image-curator.md     # Bildmatchning
│   ├── eon-kapitel-writer.md    # Narrativ HTML-skrivare
│   └── eon-midjourney-prompter.md # Midjourney prompt-generator
├── skills/                      # Återanvändbara skills
│   └── eon-npc-adder/           # NPC-tillägg (en i taget)
│       └── Skill.md
├── memory/                      # 🆕 Memory-system (lärdomar)
│   └── learnings.md             # EON-specifika lärdomar
└── commands/                    # Slash commands (om några)
```

**Global struktur** (utanför EON-projektet):
```
~/.claude/
├── hooks/
│   └── session-start.js         # Auto-loader hook (Node.js)
├── memory/
│   └── learnings.md             # Globala lärdomar (alla projekt)
└── settings.json                # Hooks-konfiguration
```

### Agent vs Skill - När använda vilket?

**Agents (Task tool):**
- Komplexa, multi-steg-processer
- Kräver autonomt beslutsfattande
- Kan köra flera verktyg i sekvens
- Exempel: eon-data-guardian (batch-tillägg med validering)

**Skills (Skill tool):**
- Specifika, upprepbara uppgifter
- Tydligt definierad input → output
- Dokumenterar "lärdomar" från trial-and-error
- Exempel: eon-npc-adder (en-i-taget-metod för säkerhet)

---

## 🧠 Memory-system (Lärdomar)

**Nytt sedan 2026-01-06:** Dokumentation av lärdomar på två nivåer.

### Hur det fungerar

**Vid session-start:**
- SessionStart-hook körs automatiskt (`~/.claude/hooks/session-start.js`)
- Hook läser projekt-filer: `_index.md`, `CLAUDE.md`, `CURRENT_STATE.md`
- Hook läser **global** learnings.md (`~/.claude/memory/learnings.md`)
- Hook läser **EON-specifik** learnings.md (`.claude/memory/learnings.md`)
- Allt laddas automatiskt - inget manuellt "läs denna fil först"!

### Global vs EON-specifik

**Global learnings** (`~/.claude/memory/learnings.md`):
- Lärdomar som gäller **alla projekt** (EON, Trip19, framtida)
- Tekniska mönster (Edit-verktyget, Git, validering)
- Verktygs-quirks och best practices
- Ogmios-analys (vad vi tog, vad vi skippa de)

**EON-specifika learnings** (`.claude/memory/learnings.md`):
- wiki_data.js validering (ALLTID efter ändringar)
- eon-npc-adder vs eon-data-guardian (när använda vilket)
- kampanjkrönika.md som master source of truth
- Bildmatchning fuzzy ≥85%
- Kapitel-sidor baserade 100% på krönika
- UTF-8 encoding (svenska tecken)
- Dashboard färgschema och struktur
- Agenter-prioritering (kvalitet > hastighet > tokens)

### Uppdatera learnings

**När du löser ett problem eller upptäcker ett mönster:**
1. Lägg till i rätt learnings.md (global eller EON-specifik)
2. Inkludera datum, problem, lösning, exempel
3. Tagga vad det gäller för

**Exempel:**
```markdown
## wiki_data.js: Validera ALLTID efter ändringar

**Datum:** 2026-01-06
**Fil:** `master/wiki_data.js`
**Problem:** Syntax-fel kraschar dashboard
**Lösning:** Kör `node -e "require('./master/wiki_data.js')"` OMEDELBART
**Gäller:** Bara EON
```

### Fördelar

- ✅ Konsistent context varje session
- ✅ Inga glömda best practices
- ✅ Dokumenterade lösningar på vanliga problem
- ✅ Bygger institutionell kunskap över tid

**Baserat på:** Ogmios (Carl Heath's PAI-system) - hybrid-approach.

---

## Specialiserade Agents

**VIKTIGT:** Dessa är **autonoma agents** (inte slash commands). Använd Task tool med `subagent_type` för att starta dem.

### eon-data-guardian
**Fil:** `.claude/agents/eon-data-guardian.md`
**Syfte:** Säker batch-uppdatering av wiki_data.js
**Användning:**
```python
# Via Task tool
Task(
  subagent_type="eon-data-guardian",
  prompt="Lägg till följande 10 NPCs: [lista]"
)
```

**Kapabiliteter:**
- Max 15 NPCs per batch (säkerhetsregel)
- Automatisk validering efter varje ändring
- Rollback vid syntax-fel
- Duplikatkontroll innan tillägg
- UTF-8 encoding-säkerhet
- Arbetar autonomt och rapporterar resultat

**När använda:**
- Batch-tillägg av NPCs/platser
- Uppdateringar av befintlig data
- När du vill garantera syntax-säkerhet

### eon-chronicler
**Fil:** `.claude/agents/eon-chronicler.md`
**Syfte:** Kampanjens officiella krönikör och kontinuitetsvaktare
**Användning:**
```python
# Via Task tool
Task(
  subagent_type="eon-chronicler",
  prompt="Uppdatera krönikan med Kapitel 8-händelser: [beskrivning]"
)
```

**Master-dokument:** `EON/master/master/kampanjkrönika.md` (kronologisk tidslinje från start till nu)

**Huvudfunktioner:**
1. **Krönikör:** Underhåller master-tidslinjen
   - Ta emot kampanjsammanfattningar och detaljer
   - Placera all info på KORREKT kronologisk plats (aldrig bara sist)
   - Tagga NPCs och platser för cross-referens
   - Fråga ALLTID om oklarheter (vilket kapitel? före/efter X?)

2. **Kontinuitetsvaktare:** Validerar mot tidslinjen
   - Kontrollera att wiki_data.js stämmer med krönikan
   - Flagga inkonsekvenser (död/levande, kapitel-ordning, geografisk logik)
   - Föreslå lösningar på konflikter
   - Rapportera luckor i data

3. **Sökfunktion:** Besvara historikfrågor
   - "När var NPC X aktiv?"
   - "Vad hände i plats Y?"
   - "Sammanfatta kapitel Z"

**Viktigt:**
- Krönikan är master-källa (inte wiki_data.js)
- Aldrig gissa - fråga om osäker
- Kronologi är heligt - placera alltid på rätt plats
- Validera cross-referenser efter varje uppdatering

**När använda:**
- Uppdatera kampanjkrönika med nya sessioner/händelser
- Validera kontinuitet mellan krönika och wiki_data.js
- Historiska sökningar ("När hände X?")

### eon-doc-extractor
**Fil:** `.claude/agents/eon-doc-extractor.md`
**Syfte:** Extrahera data från kampanjdokument
**Användning:**
```python
# Via Task tool
Task(
  subagent_type="eon-doc-extractor",
  prompt="Extrahera NPCs och platser från Eon SL/jen.md"
)
```

**Extraherar:**
- NPCs (namn, ras, roll, beskrivning)
- Platser och regioner
- Händelser och kapitel-info
- Output: JSON-ready format

**När använda:**
- Läsa kampanjdokument och extrahera strukturerad data
- Hitta alla NPCs/platser i ett dokument
- Förbereda data för batch-tillägg via data-guardian

### eon-image-curator
**Fil:** `.claude/agents/eon-image-curator.md`
**Syfte:** Bildmatchning och organisation
**Användning:**
```python
# Via Task tool
Task(
  subagent_type="eon-image-curator",
  prompt="Matcha bilder till alla NPCs utan bilder"
)
```

**Hanterar:**
- Fuzzy-matchning bilder → NPCs (≥85% likhet)
- Flytta bilder till rätt assets-mapp
- Uppdatera bild-fält i wiki_data.js
- Rapportera oanvända/saknade bilder

**När använda:**
- Automatisk bildmatchning för NPCs utan bilder
- Organisera och kategorisera bildarkiv
- Generera bildstatus-rapporter

### eon-kapitel-writer
**Fil:** `.claude/agents/eon-kapitel-writer.md`
**Syfte:** Skriver narrativa HTML-sidor för kampanjens kapitel
**Användning:**
```python
# Via Task tool
Task(
  subagent_type="eon-kapitel-writer",
  prompt="Skriv Kapitel 5 (Vargnäset första besöket) baserat på kampanjkrönika.md"
)
```

**Output:** Fristående HTML-sidor i `EON/kapitel/kapitel-X-namn.html`

**Skriver:**
- Full HTML-struktur med embedded CSS (dashboard-stil)
- Narrativ prosa i **Joe Abercrombie + Robin Hobb**-stil
- Entity-länkar till NPCs, platser, fraktioner (auto-genererade)
- Info-boxar för meta-information
- Quote-boxar för dialog
- ~500 rader, ~3000 ord per kapitel

**KRITISK REGEL:**
- **100% baserad på kampanjkrönika.md** (master source of truth)
- ALDRIG avvika från krönikan
- ALDRIG uppfinna händelser
- Vid konflikt: krönika har alltid rätt
- Markera luckor: `[BEHÖVER BEKRÄFTELSE från Johan: fråga]`

**Stil:**
- **Abercrombie (40%):** Cynisk ton, rå realism, direkt action, mörk humor
- **Hobb (40%):** Emotionell introspektiv, långsamma konsekvenser, rika relationer
- **Fokus (20%):** Moraliska gråzoner, personliga kostnader, atmosfär

**Arbetsflöde:**
- 8 detaljerade steg (från fakta till validering)
- Omfattande kvalitetskontroll-checklista
- Teknisk validering och fakta-verifiering
- Output-format med komplett rapportering

**Befintliga kapitel:** Prolog, 1, 2, 3, 9
**Saknas:** Kapitel 4, 5, 6, 7, 8, 10, 11

**När använda:**
- Skriva nya kapitel-sidor från kampanjkrönika.md
- Uppdatera befintliga kapitel med ny information
- Förbättra narrativ kvalitet på befintliga sidor
- ALLTID efter att chronicler uppdaterat kampanjkrönika.md

**Förbättring:**
- Kombinerar det bästa från tidigare eon-storyteller och ursprungliga eon-kapitel-writer
- Mer omfattande än ursprunglig version (14KB vs 10KB)
- Inklusive kvalitetskontroll, validering, och entusiastisk ton

### eon-midjourney-prompter
**Fil:** `.claude/agents/eon-midjourney-prompter.md`
**Syfte:** Generera Midjourney-prompts för EON kampanjbilder
**Användning:**
```python
# Via Task tool
Task(
  subagent_type="eon-midjourney-prompter",
  prompt="Generera stämningsbild för Kapitel 5: Vargnäset"
)
```

**Output:** Formaterade Midjourney-prompts redo att köra

**Genererar:**
- Stämningsbilder för kapitel
- Plats-visualiseringar (städer, landskap, hamnar)
- NPC-porträtt (karaktärer)
- Scen-bilder (specifika händelser)

**Stil och estetik:**
- **Mörk fantasy:** Game of Thrones, Witcher, Warhammer
- **Gritty realism:** Joe Abercrombie-estetik (smuts, blod, slitage)
- **Konstnärer:** Gerald Brom, Frank Frazetta, Jakub Rozalski, Aleksi Briclot
- **Färgpalett:** Flame orange (#ff6b4a), deep red (#d4534d), mystic purple (#a855a8), gold (#ffa500)

**Regional stil:**
- **Cermira/Mithera:** Nordisk/slavisk (skog, dimma, snö, kalla färger)
- **Muhad:** Arabisk/persisk (öken, vit sten, gyllene kupoler, varma färger)
- **Jargien:** Imperial (städer, militär, ordning, grå/röda toner)
- **Skugglandet:** Demoniskt (förvrängd verklighet, Lovecraftian horror)

**Arbetsflöde:**
1. Läser källmaterial (kampanjkrönika.md, kapitel HTML, wiki_data.js)
2. Identifierar visuella nyckelelement
3. Bygger prompt enligt struktur: [MOTIV] [STIL] [DETALJER] [STÄMNING] [LJUS] [FÄRG] --[PARAMS]
4. Genererar 2-4 prompts med variationer

**Output-format:**
```markdown
## [BILDNAMN]
**Typ:** Stämningsbild / Plats / Karaktär / Scen
**Källa:** [dokument]

### Midjourney Prompt:
[FULL PROMPT]

**Parametrar:**
- Aspect ratio: 16:9 / 2:3 / 1:1
- Stilisering: 100-300
- Version: 6.1
```

**När använda:**
- Skapa stämningsbilder för kapitel
- Generera NPC-porträtt
- Visualisera viktiga platser
- Designa scen-bilder för händelser
- Batch-generera prompts för flera bilder

---

## Specialiserade Skills

**VIKTIGT:** Skills är återanvändbara tekniker som dokumenterar "lärdomar". Använd Skill tool för att aktivera dem.

### eon-npc-adder
**Fil:** `.claude/skills/eon-npc-adder/Skill.md`
**Syfte:** Säker NPC-tillägg EN I TAGET med strukturell Edit-metod
**Användning:**
```python
# Via Skill tool
Skill(skill="eon-npc-adder")
```

**Kärnmetod (beprövad trial-and-error):**
1. **Hitta alfabetisk plats** med `grep -n '"namn": "D' master/wiki_data.js`
2. **Läs exakt sektion** med `Read wiki_data.js offset:X limit:15`
3. **Matcha KORT strukturell sträng** (10-15 rader max)
   - Matcha från slutet av föregående NPC till början av nästa
   - ALDRIG matcha långa beskrivningar (100+ rader)
   - Använd strukturella element: `}, {` och `"namn":`
4. **Validera OMEDELBART** efter varje tillägg
5. **EN NPC I TAGET** - aldrig batch utan validering mellan

**Kritisk insikt:**
❌ Försök INTE matcha hela `beskrivning`-fält (Edit hittar inte strängen)
✅ Matcha korta strukturella delar mellan NPCs

**Format:**
```javascript
{
  "namn": "Namn Efternamn",
  "bild": null,  // eller "namn.png"
  "ras": "Människa/Dvärg/etc",
  "titel": "Roll/yrke",
  "status": "levande/död/okänd",
  "plats": "Platsnamn",
  "fraktion": "Fraktion eller null",
  "kapitel": "Kapitel X",
  "beskrivning": "# NAMN\n**Text...**"
}
```

**När använda:**
- Lägga till 1-3 NPCs manuellt med maximal säkerhet
- När du vill ha full kontroll över varje steg
- För att undvika syntax-fel i komplexa fall

---

## Kampanjdata

### Spelarkaraktärer (6 st)
1. **Gordon Nahrzezia** - Cirefalier, Legosoldat, ~30 år (Spelare: Calle)
2. **Thrakka "Järnhanden"** - Tirak, f.d. Gladiator/Livvakt (Spelare: Andreas)
3. **Umnatak** - Auser, Spejare/Schaman (Spelare: Christofer)
4. **Kazrik klan Ghor** - Dvärg, Författare "Den resande" (Spelare: Jonas)
5. **Corvus Askhar** - Människa, f.d. Kommendör Arvorns Hammare, 31 år (Spelare: Daniel)
6. **Zentri Bredarsson** - Asharier, Köpmansson/Krigarmagiker, försvunnen (f.d. Spelare: Andreas)

### Kampanjstruktur
**Namn:** "Gravens Arv" (arbetsnamn)
**Nuvarande plats:** Kapitel 10 - Skugglandet
**Huvudantagonist:** Demonen Urkhath (hela kampanjen)
**Aktuell antagonist:** Lord VinterGlöd (håller Zentri fången)

**Kapitel:**
- Prolog: Tirakgraven (Gränstrakterna Cermira/Mithera)
- Kapitel 1: Jakten (Cermiras skogar → Grensfortet)
- Kapitel 2: Muhad (Jarla → Jen)
- Kapitel 3: Tarkas (Kust/öken)
- Kapitel 4: Jargien (Kejsardömet)
- Kapitel 5: Vargnäset (Första besöket)
- Kapitel 6: Vitterdal (Återkomst)
- Kapitel 7: Vargnäset igen (Ockuperat)
- Kapitel 8: Evakueringen (Flykt genom Drunok)
- Kapitel 9: Mithera (Skogen)
- Kapitel 10: Skugglandet (Förvrängd verklighet)

### Viktiga Fraktioner
1. **Arvorns Hammare** - Fiende (jagar gruppen, anti-magi fanatiker)
2. **Zorian-orden/Systrarna** - Komplex relation (jagar demonkorruption, osäker allierad)
3. **Sanari-alverna** - Potentiell allierad (har bindningsföremål)
4. **Dvärgarna (Klan Drezin)** - Potentiell allierad (demonkunskap)
5. **Vitterdals hov** - Allierad (Hagge, Lady Soffia)
6. **Stålsvärdskavaleristerna** - Bakgrund (f.d. arbetsgivare)

---

## Arbetsflöde

### Lägg till nya NPCs

**Batch-tillägg (5-15 NPCs):**
```python
# Använd eon-data-guardian agent
Task(
  subagent_type="eon-data-guardian",
  prompt="Lägg till följande 10 NPCs: [lista med alla detaljer]"
)
```

**Manuellt tillägg (1-3 NPCs med max kontroll):**
```python
# Använd eon-npc-adder skill
Skill(skill="eon-npc-adder")
# Följt av: "Lägg till Dorin Kallhammare, dvärg, karavanledare"
```

**Efter tillägg:**
```bash
# Validera syntax
node -e "const d=require('./wiki_data.js'); console.log('✓', d.npcs.length, 'NPCs');"

# Verifiera i dashboard (öppna i browser)
```

### Uppdatera befintliga NPCs
1. Hitta i wiki_data.js: `grep -n '"namn": "Namn"' master/wiki_data.js`
2. Använd Edit-verktyget (INTE Write)
3. Validera omedelbart efter ändring med Node.js

### Hantera bilder

**Automatisk bildmatchning:**
```python
# Använd eon-image-curator agent
Task(
  subagent_type="eon-image-curator",
  prompt="Matcha bilder till alla NPCs utan bilder"
)
```

**Manuellt:**
1. Lägg bilder i `kampanjwiki/assets/images/npcs/`
2. Uppdatera `bild`-fält i wiki_data.js med filnamn
3. Validera att dashboard visar bilden korrekt

### Uppdatera kampanjkrönika

```python
# Använd eon-chronicler agent
Task(
  subagent_type="eon-chronicler",
  prompt="Uppdatera krönikan med Kapitel 8-händelser: [sessionsbeskrivning]"
)
```

**Agenten:**
- Placerar allt kronologiskt i rätt kapitel
- Cross-validerar mot wiki_data.js
- Flaggar inkonsekvenser
- Frågar om oklarheter (aldrig gissar!)

### Skriva kapitel-sidor

```python
# Använd eon-kapitel-writer agent
Task(
  subagent_type="eon-kapitel-writer",
  prompt="Skriv Kapitel 5 (Vargnäset första besöket) baserat på kampanjkrönika.md"
)
```

**Output:** Narrativ HTML-sida i `EON/kapitel/kapitel-5-vargnaset.html`

### Generera kampanjbilder

```python
# Använd eon-midjourney-prompter agent
Task(
  subagent_type="eon-midjourney-prompter",
  prompt="Generera stämningsbild för Kapitel 5: Vargnäset"
)
```

**Output:** Midjourney-prompts redo att köra

### Kontinuitetskontroll

```python
# Använd eon-chronicler för validering
Task(
  subagent_type="eon-chronicler",
  prompt="Validera att wiki_data.js stämmer överens med kampanjkrönika.md. Flagga alla konflikter."
)
```

**Kör innan:**
- Stora uppdateringar av wiki_data.js
- Nya kapitel-sidor genereras
- Git commits med kampanjdata

---

## Vanliga kommandon

```bash
# Validera wiki_data.js
cd "D:/GDRIVE/My Drive/Johan/Gaming/Gammal leka bäst/EON"
node -e "const d=require('./wiki_data.js'); console.log('✓', d.npcs.length, 'NPCs,', d.platser.length, 'platser');"

# Syntax-check endast
node -c wiki_data.js

# Hitta NPC
grep -n '"namn": "Namn"' wiki_data.js

# Lista alla bilder
ls kampanjwiki/assets/images/npcs/ | wc -l

# Räkna NPCs utan bilder
grep '"bild": null' wiki_data.js | wc -l

# Git backup (innan stora ändringar)
git add wiki_data.js
git commit -m "Backup före batch-tillägg"

# Rollback vid fel
git checkout wiki_data.js
```

---

## Viktiga regler

### .gitignore (KRITISKT)
```gitignore
# Copyrightskyddade PDF:er - ladda INTE upp
*.pdf
**/*.pdf
```

### UTF-8 Encoding
- ALLTID UTF-8 utan BOM
- Svenska tecken: å, ä, ö (INTE Ã¥, Ã¤, Ã¶)
- Python-scripts MÅSTE ha `encoding='utf-8'`

### Datavalidering
- ALLTID köra `node -e "require('./wiki_data.js')"` efter ändringar
- Lita ALDRIG på agent self-reports - testa faktiskt
- Vid fel: rollback omedelbart med `git checkout`

### Batch-storlek
- MAX 15 NPCs per batch
- Större batchar = högre syntax-felrisk
- Validera efter VARJE batch

---

## Kända problem och lösningar

### Problem: Syntax-fel i wiki_data.js
**Symptom:** Dashboard laddar inte, Node.js ger `SyntaxError`
**Lösning:** `git checkout master/wiki_data.js` → börja om från senaste fungerande version

### Problem: Mojibake (Ã¥ istället för å)
**Orsak:** Python/script utan UTF-8 encoding
**Lösning:** Alltid `open(file, 'r', encoding='utf-8')`

### Problem: Bilder syns inte i dashboard
**Check 1:** Finns bilden i `kampanjwiki/assets/images/npcs/`?
**Check 2:** Rätt path i index.html? `../kampanjwiki/assets/images/npcs/`
**Check 3:** Korrekt filnamn i wiki_data.js `bild`-fält?

### Problem: Duplikater (5× Amina)
**Normal:** Flera karaktärer kan ha samma förnamn
**Lösning:** Fullständigt namn + platsspecificering (ex: "Kamelens Oas, Jen")

---

## Nästa steg

### Omedelbart (pågående)
- [ ] Bildmatchning: 121 NPCs saknar bilder (179 bilder tillgängliga)
- [ ] Platsbilder: 58 platser saknar bilder (40 bilder tillgängliga)
- [ ] Kapitel-sidor: Skriv kapitel 4, 5, 6, 7, 8, 10 (6 kapitel saknas)

### Kort sikt
- [ ] Kontinuitetskontroll: validera wiki_data.js mot kampanjkrönika.md
- [ ] Generera stämningsbilder för saknade kapitel med Midjourney
- [ ] Uppdatera kampanjkrönika.md med senaste sessionerna (Kapitel 10-11)

### Lång sikt
- [ ] Performance-optimering vid 500+ NPCs
- [ ] Relationship-visualisering (nätverk mellan NPCs)
- [ ] Timeline-visualisering (interaktiv tidslinje)
- [ ] Export-funktioner (PDF, JSON, Markdown)
- [ ] Search-funktionalitet förbättring (fuzzy search, relationer)

---

## Kampanjreferenser

### Damarien - Politiskt & Militärt Läge
**Fil:** `master/damarien-politiska-läget.md`
**Innehåll:** Fullständig sammanfattning av Damariens politiska situation, inklusive:
- Storfurste Thamas Vitfjäders regim
- **KRITISK HEMLIGHET:** Drottning Ariandra ÄR en inkarnation av Xinu
- Hemlig vandöd-armé kontrollerad av Ariandra
- Xinukultens planer för Damarien och omgivande länder
- Ruinerna under Helm
- Hot mot Ariadnas planer (kyrkan, vindmunkarna, vissa adelsmän)

**Kampanjrelevans:**
- Gordons bror Ethan har tagit värvning med Bronshjälmarna för att tjänstgöra i Damarien
- Cirefalier kommer från/genom Damarien
- Möjlig koppling till Arvorns Hammare
- Möjlig koppling till lamior och vandöda gruppen stött på

**När läsa:** Vid planering av Damarien-relaterade äventyr eller när spelarna frågar om regionen.

---

## Frågor?
Om något är oklart, fråga innan du gissar. Data-integritet är KRITISK - hellre fråga för mycket än för lite.
