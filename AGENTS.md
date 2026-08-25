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

## 🚨 AUTOMATISK KONTINUITETSKONTROLL (BLOCKERANDE)

**KRITISKT:** Varje gång användaren ber om något NYTT ska Codex AUTOMATISKT granska förslaget mot befintlig kampanjdata INNAN implementering. Detta är BLOCKERANDE - fortsätt inte utan godkännande vid konflikter.

### Vad triggar kontrollen?

ALLT nytt:
- ✅ Nya NPCs (namn, bakgrund, relationer)
- ✅ Nya händelser/scener
- ✅ Nya platser
- ✅ Ändringar i befintliga element
- ✅ Nya relationer mellan karaktärer
- ✅ Nya fraktioner eller grupper
- ✅ Tidslinjeändringar

### Steg 1: IDENTIFIERA vad som ska införas

```
VAD: [Typ av element - NPC/händelse/plats/ändring]
VEM: [Vilka karaktärer berörs?]
NÄR: [Vilket kapitel/tidpunkt?]
VAR: [Vilken plats/region?]
```

### Steg 2: PARALLELLA SÖKNINGAR (minst 3, max 6)

**OBLIGATORISKA sökningar vid varje nytt element:**

```bash
# 1. Sök i kampanjkrönika (tidslinje)
Grep: [elementnamn/relaterade termer] i master/kampanjkrönika.md

# 2. Sök i karaktärsreferens (fakta, kön, relationer)
Grep: [namn/relaterade karaktärer] i master/character_reference.md

# 3. Sök i wiki_data.js (NPCs, platser)
Grep: [namn/plats] i master/wiki_data.js

# 4. (vid händelse) Sök tidslinje-konflikter
Grep: [kapitel/datum/plats] i master/kampanjkrönika.md

# 5. (vid NPC) Sök namnkonflikter
Grep: [förnamn] i master/wiki_data.js

# 6. (vid plats) Sök geografisk konsistens
Grep: [region/stad] i master/wiki_data.js + kampanjkrönika.md
```

### Steg 3: DJUP GRANSKNING (alla nivåer)

**Nivå 1 - Fakta:**
- [ ] Finns namnet redan? (dubbletter)
- [ ] Stämmer stavning med befintliga element?
- [ ] Är ras/kön/titel konsistent?

**Nivå 2 - Tidslinje:**
- [ ] Kan detta hända vid angiven tidpunkt?
- [ ] Finns karaktären vid liv då?
- [ ] Är karaktären på rätt plats geografiskt?
- [ ] Konflikter med redan etablerade händelser?

**Nivå 3 - Geografi:**
- [ ] Är platsen realistiskt nåbar från föregående plats?
- [ ] Stämmer regionbeskrivningen?
- [ ] Finns platsen redan med annat namn?

**Nivå 4 - Narrativ konsistens:**
- [ ] Passar detta med karaktärens etablerade motivation?
- [ ] Bryter detta mot karaktärens personlighet?
- [ ] Finns det etablerade relationer som påverkas?
- [ ] Är detta konsistent med fraktionens mål/värderingar?
- [ ] Skapar detta plothål eller motsägelser?

### Steg 4: RAPPORT (OBLIGATORISK INNAN ÄNDRING)

```
═══════════════════════════════════════════════════════════════
📋 KONTINUITETSRAPPORT
═══════════════════════════════════════════════════════════════

FÖRSLAG: [Kort beskrivning av vad som ska införas]

SÖKNINGAR UTFÖRDA:
✓ kampanjkrönika.md - [X träffar]
✓ character_reference.md - [X träffar]
✓ wiki_data.js - [X träffar]
[eventuella extra sökningar]

───────────────────────────────────────────────────────────────
FAKTA-KONTROLL:
───────────────────────────────────────────────────────────────
[✓/⚠/❌] Namn: [status]
[✓/⚠/❌] Dubbletter: [status]
[✓/⚠/❌] Stavning: [status]

───────────────────────────────────────────────────────────────
TIDSLINJE-KONTROLL:
───────────────────────────────────────────────────────────────
[✓/⚠/❌] Kronologi: [status]
[✓/⚠/❌] Karaktärers status: [status - levande/död/var?]
[✓/⚠/❌] Händelsesekvens: [status]

───────────────────────────────────────────────────────────────
GEOGRAFI-KONTROLL:
───────────────────────────────────────────────────────────────
[✓/⚠/❌] Plats existerar: [status]
[✓/⚠/❌] Resväg logisk: [status]
[✓/⚠/❌] Region korrekt: [status]

───────────────────────────────────────────────────────────────
NARRATIV-KONTROLL:
───────────────────────────────────────────────────────────────
[✓/⚠/❌] Motivation: [passar med etablerad karaktär?]
[✓/⚠/❌] Relationer: [konflikter med etablerade band?]
[✓/⚠/❌] Fraktionslogik: [stämmer med fraktionens mål?]
[✓/⚠/❌] Plothål: [skapar detta motsägelser?]

═══════════════════════════════════════════════════════════════
RESULTAT: [✅ INGA KONFLIKTER / ⚠️ VARNINGAR / ❌ KONFLIKTER]
═══════════════════════════════════════════════════════════════

[Om konflikter:]
KONFLIKTER FUNNA:
1. [Beskrivning av konflikt]
   - Källa: [fil:rad]
   - Befintligt: [vad som står]
   - Föreslaget: [vad som föreslås]

───────────────────────────────────────────────────────────────
LÖSNINGSALTERNATIV:
───────────────────────────────────────────────────────────────

**Konflikt 1: [namn]**

☐ Alternativ A: [Anpassa det nya]
   → Ändra [detalj] till [nytt värde] för att passa befintlig data
   → Påverkar: [vilka filer/element]

☐ Alternativ B: [Revidera det befintliga]
   → Uppdatera [befintlig data] till [nytt värde]
   → Kräver: ändringar i [lista filer]
   → OBS: Detta ändrar etablerad kanon!

☐ Alternativ C: [Kombinera/förklara]
   → Behåll båda genom [förklaring/retcon]
   → Exempel: "Det finns två [X] med samma namn" eller
              "Tidigare information var felaktig/ofullständig"

☐ Alternativ D: [Avbryt]
   → Genomför inte ändringen

**MIN REKOMMENDATION:** [Alternativ X] eftersom [motivering]

[Om varningar:]
VARNINGAR:
1. [Beskrivning av potentiellt problem]
   - Risk: [vad kan gå fel]
   - REKOMMENDATION: [konkret åtgärd]
   - ALTERNATIV: [om användaren vill ignorera]

═══════════════════════════════════════════════════════════════
VÄLJ LÖSNINGSALTERNATIV (eller ange eget)
═══════════════════════════════════════════════════════════════
```

### Steg 5: BLOCKERANDE BESLUT

**Vid ❌ KONFLIKTER:**
- STOPPA. Fortsätt INTE utan explicit godkännande.
- Presentera MINST 2-4 konkreta lösningsalternativ (se format ovan).
- Ge din REKOMMENDATION med motivering.
- Vänta på användarens val (A/B/C/D eller eget förslag).
- Genomför ENDAST vald lösning.

**Vid ⚠️ VARNINGAR:**
- Presentera varningarna med konkreta risker.
- Ge REKOMMENDATION för hur risken kan minimeras.
- Fråga: "Vill du fortsätta trots dessa varningar, eller ska jag anpassa förslaget?"
- Vänta på bekräftelse.

**Vid ✅ INGA KONFLIKTER:**
- Informera användaren att kontrollen är klar.
- Sammanfatta vad som ska ändras.
- Fråga: "Ska jag genomföra ändringen?"

### TOKENS ÄR INTE EN BEGRÄNSNING

Kontinuitetskontroll FÅR kosta tokens:
- Kör FLER sökningar än minimum om osäker
- Rapportera UTFÖRLIGT hellre än kortfattat
- Läs HELA relevanta sektioner, inte bara snippets
- FRÅGA hellre än att gissa

**Kontinuitet > Tokens. Alltid.**

---

## Geografi-fakta (KÄNDA MISSTAG ATT UNDVIKA)

- **Jarla** ligger i **Asharien** (INTE Vitterdal). Förväxla aldrig.
- **Vitterdal** är ett **baroni** — förväxla inte baroniet med en stad.
- Verifiera ALLTID platsplaceringar mot NotebookLM eller befintliga kampanjfiler innan du skriver.

---

## Projektöversikt
EON-rollspelskampanj "Gravens Arv" - Dashboard och wiki för spelledaren (Johan).

**Huvudsida:** Fantasy-dashboard (`/index.html`) med centraliserad databas (`master/wiki_data.js`)
**Referens:** Jekyll-wiki (`/kampanjwiki/`) för strukturerad markdown-data

## NUVARANDE STATUS (2026-04-18)
- ✅ Dashboard live med 292 NPCs, 58 platser, 11 kapitel
- ✅ Grid + Modal-layout, sök/filter-funktioner
- ✅ Bilder centraliserade i `kampanjwiki/assets/images/`
- ✅ 6 specialiserade agenter + 1 skill för drift
- ✅ Alla kapitel för Bok 1 klara (Prolog + Kapitel 1-10)
- 🔄 Pågående: Bildmatchning (122 NPCs saknar bilder, 246 tillgängliga)

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
**Storlek:** ~450 KB (292 NPCs, 58 platser, 11 kapitel)
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
cd "D:/rollspel/EON"
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
├── prolog-tirakgraven.html      ✅ Finns
├── kapitel-1-jakten.html        ✅ Finns
├── kapitel-2-muhad.html         ✅ Finns
├── kapitel-3-tarkas.html        ✅ Finns
├── kapitel-4-jargien.html       ✅ Finns
├── kapitel-5-vargnaset.html     ✅ Finns
├── kapitel-6-vitterdal.html     ✅ Finns
├── kapitel-7-vargnaset.html     ✅ Finns (andra besöket)
├── kapitel-8-evakueringen.html  ✅ Finns
├── kapitel-9-mithera.html       ✅ Finns
├── kapitel-10-skugglandet.html  ✅ Finns (BOK 1 KOMPLETT!)
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
- **MASTER:** `master/kampanjkrönika.md` (eon-chronicler's tidslinje)
- **Kompletterande:** `master/wiki_data.js`, Jekyll markdown

**Genereras av:** `eon-kapitel-writer` agent

**Viktigt:**
- ALLTID baserat på kampanjkrönika.md
- ALDRIG uppfunna händelser
- Storyteller är BERÄTTARE, inte historiker
- Chronicler validerar fakta

---

## .Codex/ - AI-infrastruktur

### Struktur
```
.Codex/
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
~/.Codex/
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

## Specialiserade Agents

**VIKTIGT:** Dessa är **autonoma agents** (inte slash commands). Använd Task tool med `subagent_type` för att starta dem.

### eon-data-guardian
**Fil:** `.Codex/agents/eon-data-guardian.md`
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
**Fil:** `.Codex/agents/eon-chronicler.md`
**Syfte:** Kampanjens officiella krönikör och kontinuitetsvaktare
**Användning:**
```python
# Via Task tool
Task(
  subagent_type="eon-chronicler",
  prompt="Uppdatera krönikan med Kapitel 8-händelser: [beskrivning]"
)
```

**Master-dokument:** `master/kampanjkrönika.md` (kronologisk tidslinje från start till nu)

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
**Fil:** `.Codex/agents/eon-doc-extractor.md`
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
**Fil:** `.Codex/agents/eon-image-curator.md`
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
**Fil:** `.Codex/agents/eon-kapitel-writer.md`
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

**Status:** Alla kapitel för Bok 1 FINNS (Prolog + Kapitel 1-10)
**Bok 1 komplett!** Alla narrativa sidor skrivna.

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
**Fil:** `.Codex/agents/eon-midjourney-prompter.md`
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
**Fil:** `.Codex/skills/eon-npc-adder/Skill.md`
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
cd "D:/rollspel/EON"
node -e "const d=require('./master/wiki_data.js'); console.log('✓', d.npcs.length, 'NPCs,', d.platser.length, 'platser');"

# Syntax-check endast
node -c master/wiki_data.js

# Hitta NPC
grep -n '"namn": "Namn"' master/wiki_data.js

# Lista alla bilder
ls kampanjwiki/assets/images/npcs/ | wc -l

# Räkna NPCs utan bilder
grep '"bild": null' master/wiki_data.js | wc -l

# Git backup (innan stora ändringar)
git add master/wiki_data.js
git commit -m "Backup före batch-tillägg"

# Rollback vid fel
git checkout master/wiki_data.js
```

---

## Viktiga regler

### .gitignore
```gitignore
# PDF-filer finns lokalt för referens och design-inspiration
# Men läggs inte upp i git (för stora filer)
*.pdf
**/*.pdf
```

**OBS:** PDF-filer (regelböcker, äventyr) får läsas fritt för design-inspiration och referens.

### UTF-8 Encoding
- ALLTID UTF-8 utan BOM
- Svenska tecken: å, ä, ö (INTE Ã¥, Ã¤, Ã¶)
- Python-scripts MÅSTE ha `encoding='utf-8'`

### Datavalidering
- ALLTID köra `node -e "require('./master/wiki_data.js')"` efter ändringar
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
- [ ] Bildmatchning: 122 NPCs saknar bilder (246 tillgängliga)
- [ ] Platsbilder: de flesta platser saknar bilder

### Kort sikt
- [ ] Kontinuitetskontroll: validera wiki_data.js mot kampanjkrönika.md
- [ ] Generera stämningsbilder med Midjourney

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

### EON Regelbok & Världsbeskrivning (NotebookLM)
**Resurs:** NotebookLM-notebook (Google AI)
**URL:** https://notebooklm.google.com/notebook/6633c085-c455-46a7-bcf2-6267a249a622
**ID i bibliotek:** `eon-komplett-regelbok-och-v-rl`

**Innehåll:** Allt officiellt material släppt för EON-rollspelet:
- Spelregler och mekanik
- Raser (Människor, Tiraker, Dvärgar, Alver, Ausare, Mûhadier, etc.)
- Magi och övernaturligt
- Geografiska regioner (Damarien, Cermira, Mithera, Muhad, Jargien, etc.)
- Fraktioner och organisationer
- Historia och världsbakgrund
- Strid och färdigheter
- Föremål och utrustning

**När använda:**
- ✅ Validera rasegenskaper vid NPC-skapande
- ✅ Kontrollera geografisk och regional konsistens
- ✅ Verifiera magiregler och förmågor
- ✅ Slå upp fraktioner och organisationer
- ✅ Kontrollera historiska fakta och världskanon
- ✅ Regelmekanik för strid, färdigheter, och utmaningar
- ✅ När kontinuitetskontroll behöver regelverks-validering

**VIKTIGT:** Konsultera NotebookLM AUTOMATISKT när du är osäker på EON-regler eller världsfakta. Fråga hellre än att gissa fel!

**Användning:**
```python
# Ställ fråga till EON-regelboken
Task(
  subagent_type="general-purpose",
  prompt="Använd NotebookLM (notebook_id: eon-komplett-regelbok-och-v-rl) för att svara: [fråga om EON-regler/värld]"
)
```

---

## EgetMaterial/
`EgetMaterial/` innehåller egenproducerat kampanjmaterial — regioner, baronier, organisationer och projekt med egna HTML-sidor. Har egen struktur med mallar, projektmappar och status-filer. Se `EgetMaterial/AGENTS.md` för detaljer.

---

## Frågor?
Om något är oklart, fråga innan du gissar. Data-integritet är KRITISK - hellre fråga för mycket än för lite.

## Imported Claude Cowork project instructions
