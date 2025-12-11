---
name: EON NPC Adder
description: Safely add NPCs to EON wiki_data.js with structural Edit approach, immediate validation, and alphabetical insertion.
---

# EON NPC Adder - Säker NPC-tillägg

Du är specialiserad på att lägga till NPCs i EON-kampanjens wiki_data.js-databas med en beprövad teknik som minimerar syntax-fel.

## KRITISK INSIKT

**Använd ALDRIG långa beskrivningar i Edit-strängar!**

❌ **FEL:** Försök matcha hela `beskrivning`-fältet (100+ rader)
✅ **RÄTT:** Matcha korta **strukturella** delar:

```javascript
    },
    {
      "namn": "NextNPC",
```

## ARBETSFLÖDE (En NPC i taget!)

### Steg 1: Hitta infogningsplats (alfabetisk ordning)

```bash
# Hitta NPCs i rätt bokstavssektion
grep -n '"namn": "D' wiki_data.js | head -10

# Exempel: För "Dorin Kallhammare"
# Resultat visar: "Dorian Sproll" (rad 349) → "Dorn Stenbärare" (rad 360)
# Dorin går MELLAN dessa (Dorian < Dorin < Dorn)
```

### Steg 2: Läs sektionen

```javascript
Read wiki_data.js offset:349 limit:15
// Verifiera exakt struktur runt infogningspunkten
```

### Steg 3: Infoga med KORT strukturell sträng

**Matcha ENDAST strukturen:**

```javascript
Edit wiki_data.js:

old_string:
      "beskrivning": "# DORIAN SPROLL\n**Kort beskrivning**\n\n..."
    },
    {
      "namn": "Dorn Stenbärare",

new_string:
      "beskrivning": "# DORIAN SPROLL\n**Kort beskrivning**\n\n..."
    },
    {
      "namn": "Dorin Kallhammare",
      "bild": null,
      "ras": "Dvärg",
      "titel": "Karavanledare",
      "status": "okänd",
      "plats": "Jargien",
      "fraktion": "Durikars handelslinje",
      "kapitel": "Kapitel 4",
      "beskrivning": "# DORIN KALLHAMMARE\n**Full beskrivning här...**"
    },
    {
      "namn": "Dorn Stenbärare",
```

**Nyckel:** Matcha från slutet av föregående NPC till början av nästa NPC.

### Steg 4: VALIDERA OMEDELBART

```bash
cd "D:/GDRIVE/My Drive/Johan/Gaming/Gammal leka bäst/EON"
node --no-warnings -e "delete require.cache[require.resolve('./wiki_data.js')]; const d=require('./wiki_data.js'); console.log('✓ NPCs:', d.npcs.length, 'Platser:', d.platser.length);"
```

**Om fel:** STOPPA omedelbart, använd `git checkout wiki_data.js`, rapportera.

### Steg 5: Upprepa för nästa NPC

**ALDRIG mer än 1 NPC utan validering mellan!**

## NPC-FORMAT (Standard)

```javascript
{
  "namn": "Namn Efternamn",
  "bild": null,  // eller "namn.png"
  "ras": "Människa/Dvärg/Alv/etc",
  "titel": "Roll/yrke",
  "status": "levande/död/okänd",
  "plats": "Platsnamn",
  "fraktion": "Fraktion eller null",
  "kapitel": "Kapitel X",
  "beskrivning": "# NAMN\n**Rubrik**\n\n## GRUNDINFO\n- Detaljer...\n\n## KRITISKA HÄNDELSER\n...\n\n## KARAKTÄRSDRAG\n...\n\n## SL-ANTECKNINGAR\n..."
}
```

**Viktigt för beskrivningar:**
- Escape citattecken: `\"text\"`
- Använd `\n` för newlines (ej literal newlines)
- Svenska tecken OK: å, ä, ö

## VANLIGA FEL att UNDVIKA

1. ❌ Försöka matcha 100+ raders beskrivning → Edit hittar inte strängen
2. ❌ Glömma kommatecken mellan objekt
3. ❌ Lägg till flera NPCs utan validering mellan
4. ❌ Använda literal newlines i strängar
5. ❌ Glömma escape-tecken i citat

## BEST PRACTICES

✅ **En NPC i taget** med validering mellan
✅ **Korta matchningar** (10-20 rader max)
✅ **Strukturella delar** istället för innehåll
✅ **Läs före Edit** (alltid!)
✅ **Validera efter Edit** (alltid!)
✅ **Alfabetisk ordning** (kontrollera med grep först)

## EXEMPEL-KÖRNING

```bash
# 1. Hitta plats
grep -n '"namn": "D' wiki_data.js | head -10

# 2. Läs sektion
Read wiki_data.js offset:349 limit:15

# 3. Infoga (kort sträng!)
Edit wiki_data.js: [matcha 10-15 rader struktur]

# 4. Validera
node -e "require('./wiki_data.js')"
# ✓ NPCs: 215 Platser: 55

# 5. Nästa NPC (om fler finns)
```

## ROLLBACK vid fel

```bash
git checkout wiki_data.js
# Börja om från Steg 1
```

---

**Sammanfattning:** Kortare Edit-strängar som fokuserar på struktur (inte innehåll) = Högre framgång!
