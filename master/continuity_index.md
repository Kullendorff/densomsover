# EON Kontinuitetsindex

**SYFTE:** Detta är ett INDEX - det PEKAR till var data finns, det är INTE source of truth.

**ANVÄNDNING:**
1. Hitta elementet du söker nedan
2. Se vilka filer som listas under "Filer"
3. Läs/uppdatera ALLA de filerna
4. Uppdatera detta index efter ändringar

**VIKTIGT:** Source of truth är master-filerna. Detta index är en GENVÄG.

---

## SNABB-VALIDERING

```bash
# Hitta fel pronomen för Thrakka:
grep -i "Thrakka.*\bhan\b\|Thrakka.*\bhonom\b\|Thrakka.*\bhans\b" master/*.md kapitel/*.html

# Hitta om Corvus/Arcadius "kastar magi":
grep -i "Corvus.*magi\|Arcadius.*magi\|Corvus.*besvärj\|Arcadius.*besvärj" master/*.md kapitel/*.html

# Hitta "brutna revben" för Thrakka (fel):
grep -i "Thrakka.*revben\|revben.*Thrakka" master/*.md kapitel/*.html

# Hitta dubbletter av NPC-namn:
grep -c '"namn":' master/wiki_data.js
```

---

## SPELARKARAKTÄRER

### Gordon Nahrzezia
- **Source of truth:** `master/character_reference.md`
- **Filer:**
  - `master/kampanjkrönika.md` (hela kampanjen - ledare)
  - `master/wiki_data.js` (NPC-databas)
  - `kapitel/*.html` (alla kapitel)
- **Kritiska fakta:**
  - Kön: Man (han/honom/hans)
  - Ras: Cirefalier (människa)
  - Roll: Legosoldat, gruppens ledare
  - Offer till Yelgotha: Generositet

### Thrakka "Järnhanden"
- **Source of truth:** `master/character_reference.md`
- **Filer:**
  - `master/kampanjkrönika.md` (hela kampanjen)
  - `master/wiki_data.js` (NPC-databas)
  - `kapitel/*.html` (alla kapitel)
- **Kritiska fakta:**
  - Kön: **KVINNA** (hon/henne/hennes)
  - Ras: Tirak
  - Skada från Titanen: **SPRÄCKT SKALLE** (ALDRIG "brutna revben")
  - Offer till Yelgotha: Traumatiska minnen
  - Status: Bär Umnataks meteoritjärnskniv
- **Vanliga fel:**
  - ❌ "Thrakka höjde hans yxa" → ✅ "Thrakka höjde hennes yxa"
  - ❌ "brutna revben" → ✅ "spräckt skalle"

### Umnatak
- **Source of truth:** `master/character_reference.md`
- **Filer:**
  - `master/kampanjkrönika.md`
  - `master/wiki_data.js`
  - `kapitel/kapitel-10-skugglandet.html` (viktig!)
- **Kritiska fakta:**
  - Kön: Man
  - Ras: Auser
  - Status: **Fängslad i colonisk kniv** (från Kapitel 10)
  - Offer till Yelgotha: Säkerhet/trygghet

### Kazrik klan Ghor
- **Source of truth:** `master/character_reference.md`
- **Filer:**
  - `master/kampanjkrönika.md`
  - `master/wiki_data.js`
  - `kapitel/*.html`
- **Kritiska fakta:**
  - Kön: Man
  - Ras: Dvärg
  - Alias: "Den resande"
  - Offer till Yelgotha: Ambition/girighet

### Corvus Askhar / Arcadius
- **Source of truth:** `master/character_reference.md`
- **Filer:**
  - `master/kampanjkrönika.md`
  - `master/wiki_data.js`
  - `kapitel/*.html`
  - `guider/vinterglod_guide.html` (om relevant)
- **Kritiska fakta:**
  - Kön: Man
  - ALIAS: Corvus Askhar = Arcadius (SAMMA PERSON!)
  - Roll: TEMPELRIDDARE
  - MAGI: **Kastar ALDRIG magi** (använder aldrig besvärjelser)
  - Fysisk märkning: Hål i bröstet (offrad skuld)
  - Offer till Yelgotha: Skuld
- **Vanliga fel:**
  - ❌ "Arcadius kastade en besvärjelse" → ✅ ALDRIG magi
  - ❌ Behandla Corvus och Arcadius som olika personer

### Zentri Bredarsson
- **Source of truth:** `master/character_reference.md`
- **Filer:**
  - `master/kampanjkrönika.md`
  - `master/wiki_data.js`
  - `sessioner/arkiv/zentri-rescue/`
- **Kritiska fakta:**
  - Kön: Man
  - Ras: Asharier
  - Status: Fången hos Lord VinterGlöd (Kapitel 10+)
  - Relation till ringen: Tidigare bärare (nu fri)

---

## VIKTIGA NPCs

### Lord VinterGlöd
- **Filer:**
  - `master/kampanjkrönika.md` (Kapitel 10+)
  - `master/wiki_data.js`
  - `guider/vinterglod_guide.html` (detaljerad guide!)
- **Kritiska fakta:**
  - Antagonist i Skugglandet
  - Håller Zentri fången

### Prins Yelgotha (Älvakungen/Själabäraren)
- **Filer:**
  - `master/kampanjkrönika.md` (Kapitel 9+)
  - `master/character_reference.md`
  - `master/wiki_data.js`
- **Kritiska fakta:**
  - Alias: Älvakungen, Själabäraren
  - Tog emot de fem offren (Kapitel 9)

### Demonen Urkhath
- **Filer:**
  - `master/kampanjkrönika.md` (hela kampanjen)
  - `master/masterplot.md`
  - `master/wiki_data.js`
- **Kritiska fakta:**
  - Huvudantagonist för hela kampanjen
  - Ringen tillhör Urkhath

---

## KRITISKA HÄNDELSER

### Offren till Yelgotha (Kapitel 9)
- **Source of truth:** `master/character_reference.md` (sektion: OFFER TILL YELGOTHA)
- **Filer:**
  - `master/kampanjkrönika.md` (Kapitel 9: rad ~1875+)
  - `kapitel/kapitel-9-mithera.html`
- **Fakta:**
  1. Thrakka → Traumatiska minnen
  2. Umnatak → Säkerhet/trygghet
  3. Gordon → Generositet
  4. Arcadius/Corvus → Skuld (hål i bröstet)
  5. Kazrik → Ambition/girighet

### Titanstriden (Kapitel 10)
- **Source of truth:** `master/kampanjkrönika.md` (Kapitel 10: rad ~2058+)
- **Filer:**
  - `master/character_reference.md` (sektion: SKADOR)
  - `kapitel/kapitel-10-skugglandet.html`
- **Fakta:**
  - Thrakka: Spräckt skalle
  - Umnatak: Fängslad i colonisk kniv
  - Corvus: Själ möjligen skadad

### Zentris försvinnande (Kapitel 5)
- **Source of truth:** `master/kampanjkrönika.md` (Kapitel 5: rad ~840+)
- **Filer:**
  - `kapitel/kapitel-5-vargnaset.html` (saknas!)
- **Fakta:**
  - Plats: Vargnäset
  - Orsak: Försvann via ringen

---

## PLATSER

### Vargnäset
- **Filer:**
  - `master/kampanjkrönika.md` (Kapitel 5, 7)
  - `master/wiki_data.js`
- **Kapitel-koppling:**
  - Kapitel 5: Första besöket (Zentri försvinner)
  - Kapitel 7: Andra besöket (ockuperat)

### Mithera
- **Filer:**
  - `master/kampanjkrönika.md` (Kapitel 9)
  - `master/wiki_data.js`
  - `kapitel/kapitel-9-mithera.html`
- **Kapitel-koppling:**
  - Kapitel 9: Mötet med Yelgotha

### Skugglandet
- **Filer:**
  - `master/kampanjkrönika.md` (Kapitel 10)
  - `master/wiki_data.js`
- **Kapitel-koppling:**
  - Kapitel 10: Titanens fall, VinterGlöd

### Jen
- **Filer:**
  - `master/kampanjkrönika.md` (Kapitel 2)
  - `master/wiki_data.js`
  - `Eon SL/jen.md` (51 NPCs)
- **Kapitel-koppling:**
  - Kapitel 2: Muhad-kapitlet

---

## FRAKTIONER

### Arvorns Hammare
- **Filer:**
  - `master/kampanjkrönika.md` (flera kapitel)
  - `master/wiki_data.js`
- **Relation:** Fiende (jagar gruppen, anti-magi fanatiker)
- **Koppling:** Corvus var tidigare kommendör

### Zorian-orden (Systrarna)
- **Filer:**
  - `master/kampanjkrönika.md`
  - `master/wiki_data.js`
- **Relation:** Komplex (jagar demonkorruption, osäker allierad)

---

## TIDSLINJE-ANKARE

| Kapitel | Huvudhändelse | Plats | Kritiska NPCs |
|---------|---------------|-------|---------------|
| Prolog | Tirakgraven | Gränstrakterna | Urkhath (intro) |
| 1 | Jakten på Tamron/Ibran | Cermira → Grensfortet | Gordon, Thrakka |
| 2 | Hitta Hagge | Jarla → Jen | Hagge |
| 3 | Skeppsbrottet | Kust/Tarkas | Besättning |
| 4 | Resan genom Jargien | Kejsardömet | - |
| 5 | Zentris försvinnande | Vargnäset | Zentri (försvinner) |
| 6 | Belöning i Vitterdal | Vitterdal | Lady Soffia |
| 7 | Ockuperat Vargnäset | Vargnäset | Arvorns Hammare |
| 8 | Evakueringen | Drunok → Grensfortet | Flyktingkonvoj |
| 9 | Mötet med Yelgotha | Mithera | Yelgotha (offer) |
| 10 | Titanens fall | Skugglandet | VinterGlöd, Umnatak (offras) |

---

## UNDERHÅLL AV DETTA INDEX

### När lägga till nya element:
1. Skapa elementet i rätt master-fil först
2. Lägg till en post i detta index med:
   - Source of truth
   - Alla filer som nämner elementet
   - Kritiska fakta att validera
3. Lägg till grep-kommandon för validering om relevant

### När uppdatera befintliga element:
1. Uppdatera ALLA filer som listas under elementet
2. Verifiera att detta index är aktuellt
3. Kör validerings-grep för att hitta fel

---

**Senast uppdaterad:** 2025-01-22
