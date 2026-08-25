# EON-specifika lärdomar

Lärdomar som gäller specifikt för **EON-kampanjen "Gravens Arv"**.

För globala lärdomar som gäller alla projekt, se `~/.claude/memory/learnings.md`.

---

## eon-parchment-design: EON Eget Material HTML-sidor

**Datum:** 2026-02-03
**Skill:** `.claude/skills/eon-parchment-design/Skill.md`
**Baserat på:** Vitterdal-baronieriet (EM-R001)
**Stilkälla:** Asharien & Soldarn (officiellt EON-material)

**Vad:** Komplett design-specifikation för EON Eget Material HTML-sidor med parchment-estetik och EON-stil stämningstexterna.

**Komponenter:**
1. **Parchment-färgschema** - Varma bruna/beige toner (#f4e8d8, #faf6f0, #704214)
2. **Lora serif font** - Klassisk, lättläst, 17px body
3. **Single-column layout** - 900px max-width, luftigt
4. **Lång introduktionstext** - 400-600 ord berättande, drop cap på första bokstaven
5. **Kortare stämningstexterna** - Före varje sektion, första meningen bold
6. **Info/warning-boxar** - Parchment-stil med border

**Trial-and-error lärdomar:**
- ❌ **Försök 1:** EON-inspirerad två-kolumn layout → "fruktansvärt ful"
- ✅ **Lösning:** 5 POC-alternativ, valde parchment (#2)
- ❌ **Drop cap:** K:et svävar i mitten av andra raden
- ✅ **Lösning:** line-height: 0.7, padding-top: 0.15rem
- ❌ **Hela första raden bold** istället för första meningen
- ✅ **Lösning:** Manuella `<strong>` tags runt första meningen

**Användning:**
```python
Skill(skill="eon-parchment-design")
# Följt av: "Skapa HTML-sida för EM-R002: Jarndalen"
```

**Output:**
- Komplett HTML-fil med all CSS embedded
- Parchment-design klar att använda
- Mallar för stämningstexterna
- Drop cap på lång intro, bold första mening i kortare

**Gäller:** Eget Material-projekt (land, stad, region, organisation)

---

## wiki_data.js: Validera ALLTID efter ändringar

**Datum:** 2026-01-06
**Fil:** `master/wiki_data.js` (~300 KB, 242 NPCs, 58 platser)
**Problem:** Syntax-fel i wiki_data.js gör att hela dashboard kraschar
**Lösning:** Kör validering OMEDELBART efter VARJE ändring

**Validerings-kommando:**
```bash
cd "D:/rollspel/EON"
node -e "const d=require('./master/wiki_data.js'); console.log('✓', d.npcs.length, 'NPCs,', d.platser.length, 'platser');"
```

**När:**
- Efter Edit-verktyget använts på wiki_data.js
- Efter batch-tillägg via eon-data-guardian
- Efter manuellt tillägg via eon-npc-adder
- Före git commit

**Gäller:** Bara EON (Delta Green/Trip19 har ingen wiki_data.js)

---

## eon-npc-adder: EN-i-taget vid osäkerhet

**Datum:** 2026-01-06
**Skill:** `.claude/skills/eon-npc-adder/Skill.md`
**Användning:** Säker NPC-tillägg en-i-taget med maximal kontroll

**När använda:**
- Komplexa NPCs med långa beskrivningar
- Osäker på alfabetisk plats i wiki_data.js
- Vill ha full kontroll över varje steg
- 1-3 NPCs att lägga till

**Metod:**
1. Hitta alfabetisk plats med `grep -n '"namn": "D' master/wiki_data.js`
2. Läs exakt sektion med `Read wiki_data.js offset:X limit:15`
3. Matcha KORT strukturell sträng (10-15 rader, INTE hela beskrivningar)
4. Validera OMEDELBART efter tillägg
5. Repetera för nästa NPC

**Alternativ:**
- `eon-data-guardian` för batch-tillägg (5-15 NPCs) - snabbare men mindre kontroll

**Gäller:** Bara EON (wiki_data.js-specifik)

---

## eon-data-guardian: Batch-tillägg (max 15 NPCs)

**Datum:** 2026-01-06
**Agent:** `.claude/agents/eon-data-guardian.md`
**Användning:** Säker batch-uppdatering av wiki_data.js

**När använda:**
- 5-15 NPCs att lägga till samtidigt
- NPCs med standardiserade format
- Extraherat data från kampanjdokument (jen.md, etc.)
- Vill spara tid jämfört med en-i-taget

**Säkerhetsregler:**
- MAX 15 NPCs per batch (hårdkodad gräns)
- Automatisk validering efter varje ändring
- Rollback vid syntax-fel
- Duplikatkontroll innan tillägg
- UTF-8 encoding-säkerhet

**Batch-storlek:**
- 5-10 NPCs: Optimal balans mellan hastighet och säkerhet
- 11-15 NPCs: Max-gräns, högre risk
- 15+ NPCs: Använd INTE - dela upp i flera batchar

**Gäller:** Bara EON (wiki_data.js-specifik)

---

## kampanjkrönika.md: Master source of truth

**Datum:** 2026-01-06
**Fil:** `master/kampanjkrönika.md`
**Roll:** Kronologisk tidslinje från kampanjstart till nu

**Viktigt:**
- MASTER-källa för alla händelser
- eon-chronicler underhåller denna fil
- eon-kapitel-writer MÅSTE basera kapitel på denna fil
- Vid konflikt mellan krönika och wiki_data.js: **krönikan har alltid rätt**

**Uppdateringsflöde:**
1. Session spelas
2. eon-chronicler uppdaterar kampanjkrönika.md med nya händelser
3. eon-chronicler validerar kontinuitet
4. wiki_data.js uppdateras om nödvändigt (synk från krönika)

**Gäller:** Bara EON (Trip19 har `master/timeline.md` med annan struktur)

---

## Bildmatchning: Fuzzy matching ≥85%

**Datum:** 2026-01-06
**Agent:** `eon-image-curator`
**Problem:** 121 NPCs saknar bilder, 179 bilder tillgängliga

**Fuzzy matching-regler:**
- ≥85% likhet mellan filnamn och NPC-namn = auto-match
- <85% likhet = föreslå för manuell review
- Kolla varianter: "thrakka.png" matchar "Thrakka Järnhanden"

**Bildarkiv:**
- Master: `kampanjwiki/assets/images/npcs/` (157 bilder)
- Dashboard: `../kampanjwiki/assets/images/npcs/namn.png` (relativ path)

**Gäller:** Bara EON (Trip19 har andra bildpaths)

---

## Kapitel-sidor: 100% baserad på kampanjkrönika.md

**Datum:** 2026-01-06
**Agent:** `eon-kapitel-writer`
**Output:** `kapitel/kapitel-X-namn.html` (narrativ prosa)

**KRITISK REGEL:**
- **100% baserad på kampanjkrönika.md** (ALDRIG uppfinna händelser)
- ALDRIG avvika från krönikan
- Vid konflikt: krönika har alltid rätt
- Vid luckor: Markera `[BEHÖVER BEKRÄFTELSE från Johan: fråga]`

**Stil:**
- Joe Abercrombie (40%): Cynisk, rå, direkt
- Robin Hobb (40%): Emotionell, introspektiv
- Fokus (20%): Moraliska gråzoner, personliga kostnader

**Befintliga kapitel:** Prolog, 1, 2, 3, 9
**Saknas:** Kapitel 4, 5, 6, 7, 8, 10, 11

**Gäller:** Bara EON (Trip19 har ingen kapitel-struktur)

---

## UTF-8 Encoding: Svenska tecken (å, ä, ö)

**Datum:** 2026-01-06
**Problem:** Mojibake (Ã¥ istället för å) vid fel encoding
**Lösning:** ALLTID UTF-8 utan BOM

**Python-scripts:**
```python
with open(file, 'r', encoding='utf-8') as f:
    content = f.read()
```

**Node.js:**
```javascript
fs.readFileSync(file, 'utf-8')
```

**Gäller:** EON och Trip19 (båda använder svenska)

---

## Dashboard: Single-file HTML (1050+ rader)

**Datum:** 2026-01-06
**Fil:** `index.html`
**Typ:** Vanilla JS, CSS Grid, Markdown-rendering
**Data:** Laddar `master/wiki_data.js` via `<script src>`

**Färgschema:**
- `--flame-orange: #ff6b4a` - Primär accent
- `--deep-red: #d4534d` - Varningar
- `--mystic-purple: #a855a8` - Sekundär
- `--gold: #ffa500` - Highlights
- `--bg-dark: #0a0a0a` - Bakgrund

**Viktigt:**
- ALDRIG redigera index.html direkt - för stor och komplex
- Ändringar i wiki_data.js reflekteras automatiskt

**Gäller:** Bara EON (Trip19 har annan struktur)

---

## Agenter: Prioritera kvalitet över hastighet

**Datum:** 2026-01-06
**Policy från CLAUDE.md:**

**Prioritetsordning:**
1. **KVALITET/EXAKTHET/KONTINUITET** - Högsta prioritet
2. **SNABBHET** - Andra prioritet
3. **TOKEN-SPARANDE** - Lägsta prioritet

**Beslut:**
- Om agent = bättre kvalitet → Använd agent (även om långsammare)
- Om agent = snabbare MEN sämre kvalitet → Använd INTE agent
- Tokens är INTE viktigt att spara - kvalitet är allt

**Gäller:** EON och Trip19 (Johan's generella filosofi)

---

---

## Geografi: Distanser och resvägar (ETABLERAD KANON)

**Datum:** 2026-01-22
**Källa:** `master/kampanjkrönika.md`
**Viktigt:** Geografisk logik måste följas

**Etablerade resor:**
- **Jarla → Tuzan Rim:** 2 veckor (fartyg Spegelmåne, längs Ashariens kust)
- **Tuzan Rim → Jen:** Flera veckor (landväg genom öken/Muhad)
- **Jen → Tarkas:** Sjöresa (fartyg Stormjägaren)
- **Tarkas kust → Jargien:** Genom Kejsardömet (veckor)
- **Jargien → Vargnäset:** 6 veckor (landväg, etablerat i Kapitel 5)
- **Vargnäset → Vitterdal:** 3 dagar (häst, etablerat i Kapitel 6)
- **Vitterdal → Drunok-floden:** 1 dag (etablerat i Kapitel 8)
- **Colonisk portal:** Omedelbar förflyttning (Kapitel 10, Skugglandet)

**Geografisk logik:**
- Gruppen INTE kan vara i Muhad och Cermira samtidigt
- Vitterdal ligger norr om Vargnäset (kallt klimat)
- Grensfortet ligger i bergen mellan Vitterdal och Mithera
- Skugglandet är INTE fysiskt närliggande - extradimensionellt
- Tirakgraven: Gränstrakterna Cermira/Mithera

**Klimat per region:**
- **Muhad (Jen, öken):** Kvävande hetta, dammigt, klara nätter
- **Tarkas (kust/vulkan):** Varmt, vulkanisk aktivitet
- **Cermira/Mithera:** Nordiskt, kallt, skog och snö
- **Skugglandet:** Förvrängd verklighet, inget normalt klimat

**Gäller:** Bara EON

---

## Tidslinje: Händelseordning (MASTER från kampanjkrönika.md)

**Datum:** 2026-01-22
**Källa:** `master/kampanjkrönika.md`
**Kritisk regel:** Kampanjkrönika = MASTER för alla händelser

**Zentris försvinnande (KRITISK KONTINUITET):**
- **Prolog - Kapitel 2:** Med gruppen
- **Kapitel 2 (Jen):** Försvinner under attack
- **Kapitel 3-9:** INTE med gruppen, var han är okänt
- **Kapitel 10:** Hittas i Frostspiran (Skugglandet), kropp i sarkofag
- **VIKTIGT:** Kan INTE nämnas i Kapitel 3-8 som "med gruppen"

**Thrakkas anslutning:**
- **Prolog - Kapitel 4:** Inte med gruppen
- **Kapitel 5 (Vargnäset):** Ansluter gruppen
- **Kapitel 5 →:** Kontinuerligt med gruppen
- **Kapitel 8 (Iskvarnsbryggan):** Pil genom ögat, spräckt skalle
- **Efter Kapitel 8:** Permanent ärr, grund för 8 sånger

**Corvus/Arcadius anslutning:**
- **Prolog - Kapitel 6:** Inte med gruppen
- **Kapitel 7:** Ansluter gruppen
- **Kapitel 10:** Tråd bruten till Arvorns Hammare, nu "Arcadius"

**Umnataks fångenskap:**
- **Prolog - Kapitel 9:** Med gruppen
- **Kapitel 10:** Fängslad i meteoritjärnskniv
- **Kapitel 10:** Ulzak (tirakshaman) i Umnataks kropp istället

**Systrarna (Lady Isadora & Syster Moira):**
- **Kapitel 2 (Spegelmåne):** Första attack, dödar Tafrandir
- **Kapitel 2 →:** Jagar Zentri för demonringen
- **Kontinuerligt:** Gruppen vet inte om dem förrän senare

**Viktiga datum:**
- **5:e Hömånad (den vita gåsen):** Möte i Jarla (Kapitel 2 start)

**Gäller:** Bara EON

---

## Relationer: NPC-kontinuitet (ETABLERAD KANON)

**Datum:** 2026-01-22
**Källa:** `master/kampanjkrönika.md`, `master/wiki_data.js`
**Viktigt:** Relationer måste vara konsekventa över tid

**Arvorns Hammare (fraktion) - Komplex relation:**
- **Gordon Nahrzezia:** F.d. medlem, komplicerad relation (bror Ethan tjänstgör)
- **Corvus Askhar:** F.d. Kommendör, överlopp, jagar nu gruppen (blev "Arcadius")
- **Thrakka:** Aldrig medlem, de hatar henne (anti-magi fanatiker)
- **Zentri:** Jagar honom för demonringen
- **Konflikt:** Kan INTE vara både allierade och fiender samtidigt

**Serafina Eldstav (Thismalv):**
- **Kapitel 1:** Second-in-command, Stålsvärds Kavalerister
- **Kapitel 1 slut:** Sviker gruppen, tar bindningsföremål
- **Efter Kapitel 1:** Levererar till Sanari-alverna för återtagning
- **Status:** Komplex - varken allierad eller fiende, använder gruppen

**Systrarna (Lady Isadora & Syster Moira, Zorian-orden):**
- **Jagar Zentri:** Från Kapitel 2 och framåt (demonringen)
- **Tafrandir:** Dödar honom Kapitel 2 (Spegelmåne)
- **Status:** Fiende, hemliga agenter, okända för gruppen länge

**Adisa (Häxan i Cermiras skogar):**
- **Kapitel 1:** Möter gruppen, vägrar släppa in Zentri
- **Orsak:** Känner demonessens i hans ring
- **Status:** Neutral men kunnig, känner av demonmagi

**Kazrik klan Ghor:**
- **Yrke:** Författare "Den resande" (reseberättelser, ej krigare)
- **Personlighet:** Nyfiken observatör, dokumenterare
- **INTE:** Frontlinjekrigare, även om dvärg

**Ibran Anderyttare (Tirakshaman):**
- **Prolog:** I Tamrons kropp
- **Kapitel 1:** Kastad ur Tamrons kropp vid Grensfortet
- **Efter Kapitel 1:** Öde okänt, försvann mot Mithera

**Gäller:** Bara EON

---

## Status-ändringar: Levande/Död (KRITISK KONTINUITET)

**Datum:** 2026-01-22
**Källa:** `master/kampanjkrönika.md`
**Viktigt:** Döda NPCs kan INTE nämnas som levande senare

**Etablerade dödsfall (ur kampanjkrönika.md):**
- **Timron:** Död Prolog (dödad av Ibran/Tamron vid tirakgraven)
- **Pertil Fiskaren:** Död Kapitel 1 (mördad av Ibran/Tamron, Frisänkan)
- **Pertils fru (gravid):** Död Kapitel 1 (mördad av Ibran/Tamron, Frisänkan)
- **Tafrandir:** Försvunnen Kapitel 2 (kastades över bord av Systrarna, öde okänt)
- **Silvius:** Död Kapitel 9 (dödad av VinterGlöd i Mithera)

**Status okänd/försvunnen:**
- **Migor Trollkunnig:** Öde okänt efter Prolog (tirakgraven)
- **Tamron:** Efter Ibran kastades ur kroppen (Kapitel 1)
- **Ibran Anderyttare:** Flydde mot Mithera efter Grensfortet (Kapitel 1)

**Viktigt:**
- Döda NPCs får INTE nämnas som "levande" i senare kapitel
- Wiki_data.js `status`-fält måste matcha kampanjkrönika.md
- Vid konflikt: kampanjkrönika.md har ALLTID rätt

**Gäller:** Bara EON

---

## Världsbygge: Etablerad kanon (FLUFF-KONTINUITET)

**Datum:** 2026-01-22
**Filer:** `orter.html`, `fluff/*.html`
**Viktigt:** Fluff-dokument = source of truth för worldbuilding

**Örter & droger:**
- **123 örter dokumenterade** i `orter.html` - DENNA är source of truth
- NPCs med örtkunskap: Ingvild, Dr. Yusuf, Häxan Fredricca, Umnatak, Thrakka
- **Regel:** Inga nya örter utan check mot orter.html först
- **5 Mithera-droger etablerade:**
  - Vinterraseri (Flugsvamp) - Rusgivande/aggression
  - Rimfrostlav - Schamanisk trance
  - Blodfeber-röt - Stridsstimulans
  - Skuggblomma - Smärtstillande/skuggseende
  - Isfrostkristall - Kryotropisk immunitet

**Mithera-fragment:**
- **24 fragment etablerade** i `fluff/mithera-fragment.html`
- **Ton:** Lovecraftian horror, förvrängd verklighet, skräck
- **Regel:** Alla nya Mithera-texter måste matcha denna ton

**Thrakka-sånger:**
- **8 sånger etablerade** i `fluff/thrakka-sånger.html`
- **Baserat på:** Iskvarnsbryggan (Kapitel 8: pil genom ögat, fortsatte kämpa)
- **Kulturer:** Cermirian hjältesaga, Sung-poesi, Tirakisk krigssång, Drunokisk barnvisa, Muhad-tavernsång, Dvärgisk dryckesvisa, Arvorns Hammare hatpredikan, Vitterdals hovballad
- **Regel:** Alla nya Thrakka-referenser måste matcha Iskvarnsbryggan-händelsen

**Kokbok:**
- **10 recept etablerade** i `fluff/kokbok.html`
- Autentiska recept från kampanjens platser (Muhad, Cermira, Dvärgar, etc.)
- **Regel:** Nya recept måste matcha regional stil och ingredienser

**Gäller:** Bara EON

---

## Stilguide: Narrativ kontinuitet (SKRIV-REGLER)

**Datum:** 2026-01-22
**Källa:** CLAUDE.md, `kapitel/*.html`
**Viktigt:** Konsistent ton och stil över alla narrativa texter

**Kapitel-HTML stil (eon-kapitel-writer):**
- **Joe Abercrombie (40%):** Cynisk ton, rå realism, direkt action, mörk humor
- **Robin Hobb (40%):** Emotionell introspektiv, långsamma konsekvenser, rika relationer
- **Fokus (20%):** Moraliska gråzoner, personliga kostnader, atmosfär
- **Format:** ~500 rader HTML, ~3000 ord, narrativ prosa (EJ punktlistor)

**Dashboard färgschema (ALDRIG ändra):**
```css
--flame-orange: #ff6b4a   /* Primär accent */
--deep-red: #d4534d       /* Varningar */
--mystic-purple: #a855a8  /* Sekundär */
--gold: #ffa500           /* Highlights */
--bg-dark: #0a0a0a        /* Bakgrund */
```

**Ton per region:**
- **Muhad (Jen, öken):** Arabisk, kryddrik, exotisk, kvävande hetta
- **Cermira:** Nordisk, mörk, kall, skog och dimma
- **Mithera:** Lovecraftian horror, förvrängd, skräck, irrationell
- **Skugglandet:** Demoniskt, surrealistisk, förvrängd verklighet
- **Jargien:** Imperial, militär, ordning, grå/röda toner
- **Tarkas:** Vulkaniskt, varmt, exotiskt, farligt

**Entity-länkar (auto-genererade via kapitel-linkify.js):**
- NPCs: Orange (#ff6b4a)
- Platser: Purple (#a855a8)
- Fraktioner: Gold (#ffa500)

**Gäller:** Bara EON (Trip19 har annan stil)

---

*Senast uppdaterad: 2026-01-22*
