# EON Kampanjwiki - Projektinstruktioner

## Projektöversikt
EON-rollspelskampanj "Gravens Arv" - Dashboard och wiki för spelledaren (Johan).

**Huvudsida:** Fantasy-dashboard (`/index.html`) med centraliserad databas (`wiki_data.js`)
**Referens:** Jekyll-wiki (`/kampanjwiki/`) för strukturerad markdown-data

## NUVARANDE STATUS (2025-12-11)
- ✅ Dashboard live med 220 NPCs, 53 platser, 11 kapitel
- ✅ Grid + Modal-layout, sök/filter-funktioner
- ✅ Bilder centraliserade i `kampanjwiki/assets/images/`
- 🔄 Pågående: Massiv datainmatning (107 nya NPCs från 3 dokument)
- 🔄 4 specialiserade agenter skapade för drift

---

## Arkitektur

### 1. Dashboard (Huvudsida)
**Plats:** `/index.html` (rot-katalogen)
**Typ:** Single-file HTML (1050+ rader)
**Tech Stack:** Vanilla JS, CSS Grid, Markdown-rendering
**Data:** Laddar `wiki_data.js` via `<script src>`

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

### 2. wiki_data.js (Centraliserad Databas)
**Plats:** `/wiki_data.js` (rot-katalogen)
**Storlek:** 284 KB (220 NPCs, 53 platser, 11 kapitel)
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
node -e "const d=require('./wiki_data.js'); console.log('✓', d.npcs.length, 'NPCs,', d.platser.length, 'platser');"
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

---

## Specialiserade Subagents

**VIKTIGT:** Dessa är **autonoma subagents** (inte slash commands). Använd Task tool för att starta dem.

### eon-data-guardian
**Fil:** `.claude/subagents/eon-data-guardian.md`
**Syfte:** Säker batch-uppdatering av wiki_data.js
**Användning:**
```
Task tool med:
  subagent_type: "eon-data-guardian"
  prompt: "Lägg till följande 10 NPCs: [lista]"
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
**Fil:** `.claude/subagents/eon-chronicler.md`
**Syfte:** Kampanjens officiella krönikör och kontinuitetsvaktare
**Användning:**
```
Task tool med:
  subagent_type: "eon-chronicler"
  prompt: "Uppdatera krönikan med Kapitel 8-händelser: [beskrivning]"
```

**Master-dokument:** `EON/kampanjkrönika.md` (kronologisk tidslinje från start till nu)

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
**Fil:** `.claude/subagents/eon-doc-extractor.md`
**Syfte:** Extrahera data från kampanjdokument
**Användning:**
```
Task tool med:
  subagent_type: "eon-doc-extractor"
  prompt: "Extrahera NPCs och platser från Eon SL/jen.md"
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
**Fil:** `.claude/subagents/eon-image-curator.md`
**Syfte:** Bildmatchning och organisation
**Användning:**
```
Task tool med:
  subagent_type: "eon-image-curator"
  prompt: "Matcha bilder till alla NPCs utan bilder"
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
1. Extrahera från kampanjdokument eller skapa manuellt
2. Använd `/eon-data-guardian` för batch-tillägg (max 15 åt gången)
3. Validera med `node -e "require('./wiki_data.js')"`
4. Verifiera i dashboard (öppna i browser)

### Uppdatera befintliga NPCs
1. Hitta i wiki_data.js: `grep -n '"namn": "Namn"' wiki_data.js`
2. Använd Edit-verktyget (INTE Write)
3. Validera omedelbart efter ändring

### Hantera bilder
1. Lägg nya bilder i `kampanjwiki/assets/images/npcs/`
2. Använd `/eon-image-curator` för automatisk matchning
3. Eller manuellt: uppdatera `bild`-fält i wiki_data.js

### Uppdatera kampanjkrönika
1. Använd `/eon-chronicler` när du har ny kampanjinfo
2. Ge sammanfattningar, sessionsanteckningar, eller detaljer
3. Agenten placerar allt kronologiskt i `kampanjkrönika.md`
4. Cross-validerar mot wiki_data.js och flaggar konflikter

### Kontinuitetskontroll
1. Använd `/eon-chronicler` för validering innan stora uppdateringar
2. Be om kontroll av specifika kapitel eller hela tidslinjen
3. Fixa flaggade problem innan commit

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
**Lösning:** `git checkout wiki_data.js` → börja om från senaste fungerande version

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
- [ ] Lägg till 107 nya NPCs från jen.md/flykten_genom_drunok.md/spegelmane.md
- [ ] Uppdatera 14 befintliga NPCs
- [ ] Lägg till 4 nya platser
- [ ] Uppdatera Vargnäset-platsen

### Kort sikt
- [ ] Matcha 96 NPCs utan bilder
- [ ] Bygga upp kampanjkrönika.md med alla kapitel
- [ ] Kontinuitetskontroll med chronicler

### Lång sikt
- [ ] Performance-optimering vid 500+ NPCs
- [ ] Relationship-visualisering (nätverk)
- [ ] Timeline-visualisering
- [ ] Export-funktioner (PDF, JSON)

---

## Frågor?
Om något är oklart, fråga innan du gissar. Data-integritet är KRITISK - hellre fråga för mycket än för lite.
