# EON Parchment Design - HTML-sidor för Eget Material

**Syfte:** Skapa snygga, lättlästa HTML-sidor för EON-material med parchment-estetik och EON-stil stämningstexterna.

**Baserat på:** Vitterdal-baronieriet (EM-R001) - designad 2026-02-03

---

## När använda

- Nya Eget Material-sidor (land, stad, region, organisation)
- När parchment/vintage-stil passar EON-känslan
- När innehåll behöver stämningstexterna (narrativa intro-texterna)

---

## Design-specifikation

### Färgschema (Parchment)

```css
/* Bakgrund och papper */
body background: #f4e8d8 (ljus beige)
.page-container: #faf6f0 (off-white parchment)

/* Text */
main text: #3d2817 (mörkbrun)
headings: #2c1810 (mycket mörkbrun)
subtle text: #6d5d4b (medium brun)

/* Accenter */
borders: #8b6f47 (gyllenbrun)
emphasis: #704214 (mörkare gyllenbrun)

/* Boxar */
.info-box background: #f0e6d6 (ljus brun)
.atmosphere background: #f0e6d6 (ljus brun)
.warning-box background: #f9e6e0 (lätt rödbrun)
```

### Typografi

```css
font-family: 'Lora', serif  /* Huvudfont - klassisk serif */
font-size: 17px  /* Body text */
line-height: 1.8  /* Luftig läsbarhet */

h1: 3.5rem, 700 weight
h2: 2.2rem, 700 weight
h3: 1.6rem, 600 weight
h4: 1.3rem, 600 weight

.atmosphere: 1.1rem, italic (kortare)
.atmosphere-long: 1rem, italic (långre)
```

### Layout

```css
.page-container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 4rem 3rem;
    box-shadow: 0 0 40px rgba(61, 40, 23, 0.15);
    border: 1px solid #d4c4b0;
}
```

**Single-column layout** - inga sidebars, inga två-kolumner.

---

## Stämningstexterna (Kritisk komponent)

### 1. Lång Introduktionstext (före Översikt)

**Stil:** Berättande, karaktärsperspektiv, sensorisk

**Längd:** 400-600 ord (nästan en sida)

**Format:**
```html
<section class="section">
    <div class="atmosphere atmosphere-long" style="font-size: 1rem; line-height: 1.9; padding: 2rem 2.5rem; margin: 2rem 0 3rem 0;">
        <p>Första meningen börjar här...</p>
        <!-- 6-8 stycken totalt -->
        <p>Sista meningen avslutar.</p>
    </div>
</section>
```

**Drop cap CSS:**
```css
.atmosphere-long p:first-of-type::first-letter {
    font-size: 3.5rem;
    font-weight: 700;
    float: left;
    line-height: 0.7;
    margin: 0.05rem 0.2rem -0.1rem 0;
    color: #704214;
    font-style: normal;
    padding-top: 0.15rem;
}
```

**Innehåll:**
- Karaktär som anländer/upplever platsen
- Konkret och sensorisk (köld, ljud, lukter, syn, känslor)
- Sätter tonen för hela materialet
- Blandar fakta med atmosfär

**Exempel från Vitterdal:**
> Kazrik drog kappan tätare omkring sig när vinden bet tag i hans skägg. Sex dagar på vägen från Cermira stad och kölden hade bara förvärrats för varje mil norrut. Nu stod han äntligen på krönet av den sista höjden och kunde se Vitterdal breda ut sig nedanför.

### 2. Kortare Stämningstexterna (före varje sektion)

**Stil:** Kortare (4-7 meningar), mer fokuserad

**Format:**
```html
<div class="atmosphere">
    <strong>Första meningen här.</strong> Resten av texten fortsätter...
</div>
```

**CSS för första mening:**
```css
.atmosphere:not(.atmosphere-long) strong:first-of-type {
    font-weight: 600;
    color: #704214;
    font-style: normal;  /* Inte kursiv som resten */
}
```

**Innehåll:**
- Sätter tonen för sektionen
- Första meningen bold och mörkbrun (inte kursiv)
- Resten kursiv och ljusare brun
- Konkret och levande

**Exempel från Vitterdal:**

**Geografi:**
> **Kölden är ingen fiende här - den är en medlem av familjen.** Träden vet vart de lutar, och bergen minns varje steg som tagits i deras skugga. Vinden från Mithera biter genom varje lager tyg...

**Historia:**
> **Där dvärgarna gick, följde människor.** Där guldet fanns, följde makt. Där makt fanns, följde blod. Vitterdals historia är inte skriven i böcker utan i stenar och ben...

---

## Komplett CSS (kopieras till nya sidor)

```css
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background: #f4e8d8;
    color: #3d2817;
    font-family: 'Lora', serif;
    line-height: 1.8;
    font-size: 17px;
}

.page-container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 4rem 3rem;
    background: #faf6f0;
    box-shadow: 0 0 40px rgba(61, 40, 23, 0.15);
    border: 1px solid #d4c4b0;
}

/* Header */
header {
    text-align: center;
    border-bottom: 3px double #8b6f47;
    padding-bottom: 2rem;
    margin-bottom: 3rem;
}

h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #2c1810;
    margin-bottom: 0.5rem;
    letter-spacing: 0.02em;
}

.subtitle {
    font-size: 1.4rem;
    font-style: italic;
    color: #6d5d4b;
    margin-bottom: 1rem;
}

.meta {
    margin-top: 1.5rem;
    font-size: 0.95rem;
    color: #8b6f47;
    font-weight: 600;
}

/* Atmosphere quote */
.atmosphere {
    background: #f0e6d6;
    border-left: 4px solid #8b6f47;
    padding: 1.5rem 2rem;
    margin: 2rem 0;
    font-style: italic;
    font-size: 1.1rem;
    color: #5d4d3b;
    border-radius: 0 4px 4px 0;
}

/* Drop cap for long atmospheric texts */
.atmosphere-long p:first-of-type::first-letter {
    font-size: 3.5rem;
    font-weight: 700;
    float: left;
    line-height: 0.7;
    margin: 0.05rem 0.2rem -0.1rem 0;
    color: #704214;
    font-style: normal;
    padding-top: 0.15rem;
}

/* First sentence emphasis for short atmospheric texts */
.atmosphere:not(.atmosphere-long) strong:first-of-type {
    font-weight: 600;
    color: #704214;
    font-style: normal;
}

/* Info box */
.info-box {
    background: #f0e6d6;
    border: 2px solid #8b6f47;
    padding: 1.5rem;
    margin: 1.5rem 0;
    box-shadow: inset 0 0 10px rgba(139, 111, 71, 0.1);
    border-radius: 4px;
}

.info-box strong {
    color: #704214;
    font-weight: 600;
}

/* Warning box */
.warning-box {
    background: #f9e6e0;
    border: 2px solid #a85442;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-radius: 4px;
}

.warning-box strong {
    color: #8b2e1f;
    font-weight: 700;
}

/* Section */
.section {
    margin-bottom: 3rem;
}

h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #2c1810;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #8b6f47;
}

h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: #3d2817;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

h4 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #704214;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
}

p {
    margin-bottom: 1rem;
    text-align: justify;
}

/* Lists */
ul, ol {
    margin-left: 2.5rem;
    margin-bottom: 1rem;
}

li {
    margin: 0.6rem 0;
}

/* NPC Card */
.npc-card {
    background: #f0e6d6;
    border: 2px solid #8b6f47;
    border-radius: 6px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    box-shadow: 0 2px 8px rgba(61, 40, 23, 0.1);
}

.npc-card h4 {
    color: #704214;
    margin-top: 0;
    font-size: 1.4rem;
}

.npc-meta {
    color: #8b6f47;
    font-size: 0.9rem;
    margin: 0.5rem 0;
    font-style: italic;
}

/* Campaign hook */
.hook-card {
    background: #faf0e6;
    border: 2px solid #b8985e;
    border-radius: 6px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    box-shadow: 0 2px 8px rgba(61, 40, 23, 0.1);
}

.hook-card h4 {
    color: #704214;
    margin-top: 0;
    font-size: 1.4rem;
}

/* Footer */
footer {
    border-top: 3px double #8b6f47;
    padding-top: 2rem;
    margin-top: 4rem;
    text-align: center;
    color: #6d5d4b;
    font-size: 0.9rem;
}

footer p {
    margin: 0.5rem 0;
    text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
    .page-container {
        margin: 0;
        padding: 2rem 1.5rem;
        border: none;
    }

    h1 {
        font-size: 2.5rem;
    }
}
```

---

## HTML-struktur

```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Namn] - EON Kampanjmaterial</title>
    <style>
        /* Klistra in CSS här */
    </style>
</head>
<body>
    <div class="page-container">
        <!-- Header -->
        <header>
            <h1>[Namn]</h1>
            <div class="subtitle">[Slogan/Motto]</div>
            <div class="meta">
                📍 [Region] • 👥 [Befolkning] • ⚔️ [Typ]
            </div>
        </header>

        <!-- Navigation -->
        <nav>
            <ul>
                <li><a href="../../../index.html">← Dashboard</a></li>
                <li><a href="#oversikt">Översikt</a></li>
                <!-- Fler nav-länkar -->
            </ul>
        </nav>

        <!-- Lång introduktionstext -->
        <section class="section">
            <div class="atmosphere atmosphere-long" style="font-size: 1rem; line-height: 1.9; padding: 2rem 2.5rem; margin: 2rem 0 3rem 0;">
                <p>[Berättande intro, 400-600 ord]</p>
            </div>
        </section>

        <!-- Översikt -->
        <section id="oversikt" class="section">
            <h2>Översikt</h2>
            <p>[Innehåll]</p>

            <div class="info-box">
                <strong>Nyckelinfo:</strong> [Fakta]
            </div>
        </section>

        <!-- Andra sektioner med kortare stämningstexterna -->
        <section id="geografi" class="section">
            <h2>Geografi</h2>

            <div class="atmosphere">
                <strong>[Första meningen.]</strong> [Resten av texten...]
            </div>

            <p>[Innehåll]</p>
        </section>

        <!-- Footer -->
        <footer>
            <p><strong>[Namn]</strong> - EON Kampanjmaterial</p>
            <p>Kod: [EM-XXX] | Version: [X.X]</p>
            <p>Senast uppdaterad: [Datum]</p>
        </footer>
    </div>
</body>
</html>
```

---

## Checklist för nya sidor

- [ ] Kopiera HTML-struktur ovan
- [ ] Byt ut alla `[placeholder]` med faktiskt innehåll
- [ ] Skriv lång introduktionstext (400-600 ord, berättande)
- [ ] Skriv kortare stämningstexterna för varje sektion
- [ ] Första meningen i kortare texterna wrapped i `<strong>`
- [ ] Info-boxar för nyckeldata
- [ ] Navigation-länkar fungerar
- [ ] Footer uppdaterad med rätt metadata

---

## Stilregler

### Stämningstexterna - Innehåll

**Inspiration:** Asharien & Soldarn (EON officiellt material)

**Stil:**
- **Berättande** - inte bara fakta, utan upplevelse
- **Konkret och sensorisk** - köld, lukter, ljud, syn, känslor
- **Karaktärsperspektiv** - någon som UPPLEVER platsen
- **Blandar historia, geografi, och personliga känslor**
- **Rik på detaljer** men inte överdriven

**Undvik:**
- Torra faktalistan
- Abstrakt/generella beskrivningar
- För mycket "fluff" utan substans
- Repeterande meningar

### Färgval - När använda parchment

**Parchment passar:**
- ✅ Historiska platser
- ✅ Traditionella kulturer
- ✅ "Äldre" känsla
- ✅ Narrativt material

**Parchment passar INTE:**
- ❌ Modern/teknisk information
- ❌ Mörk/skräck-fokuserad material (använd dashboard-färger istället)

---

## Lärdomar från Vitterdal-designen

### Trial-and-Error

**Problem 1:** Första försöket (EON-inspirerad två-kolumn) blev "fruktansvärt ful"
**Lösning:** Skapade 5 POC-alternativ, valde parchment (#2)

**Problem 2:** Drop cap K:et svävar i mitten av andra raden
**Lösning:** Justerade line-height (0.7), padding-top (0.15rem), margin

**Problem 3:** Första raden bold istället för första meningen
**Lösning:** Bytte från `::first-line` CSS till manuella `<strong>` tags

**Problem 4:** Stavfel (inteskriven, bedjertill, lantis ar, desperata tion)
**Lösning:** Noggrann korrekturläsning efter AI-genererade texterna

### Vad som fungerade

✅ **Single-column layout** - bättre läsbarhet än två-kolumner
✅ **Parchment-färger** - varmt, inbjudande, passar EON
✅ **Lora serif font** - klassisk, lättläst, passar vintage-känsla
✅ **Drop cap på lång text** - visuell markör för start
✅ **Bold första mening i korta texterna** - balans och struktur
✅ **Stämningstexterna före varje sektion** - sätter tonen, engagerar läsaren

### Designprinciper

1. **Enkelhet över komplexitet** - single-column, inga sidebars
2. **Luftig layout** - margin, padding, line-height generöst
3. **Konsekvent färgschema** - max 6-7 färger totalt
4. **Hierarki genom typografi** - storlek, vikt, färg
5. **Stämningstexterna = kärnan** - inte bara dekorativt, utan berättande

---

## Användning

```python
# När du ska skapa ny Eget Material-sida
Skill(skill="eon-parchment-design")

# Följt av:
"Skapa HTML-sida för EM-R002: Jarndalen (region i Mithera)"
```

**Output:**
- Komplett HTML-fil med parchment-design
- Alla stämningstexterna ifyllda (genererade eller mallar)
- Korrekt färgschema och typografi
- Redo att öppna i browser

---

**Skapad:** 2026-02-03
**Baserat på:** Vitterdal-baronieriet (EM-R001_vitterdal-baronieriet/vitterdal-baronieriet.html)
**Stilkälla:** Asharien & Soldarn (officiellt EON-material)
**Version:** 1.0
