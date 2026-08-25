# EON Kampanj - Gravens Arv

**🎯 ENTRY POINT:** Läs denna fil FÖRST när du börjar arbeta med kampanjen!

---

## VAR ÄR VI NU?

- **Kapitel:** Bok 1 AVSLUTAD (Kapitel 1-10)
- **Senaste session:** 2026-02-03 (Frostspiran Final - Zentris Befrielse)
- **Status:**
  - ✅ Zentri RÄDDAD från Skugglandet (Andreas spelar honom igen)
  - ✅ Umnatak PERMANENT i kniven (ankare för Urkhaths ring)
  - ✅ Ulzak PERMANENT i Umnataks kropp
  - ✅ VinterGlöd fri från eden (stannade i Skugglandet)
  - ✅ Tillbaka i Mundana (Grensfortet, högsommar)
  - ⚠️ Tidsförskjutning: Månader har gått sedan de lämnade
- **Nästa session:** Bok 2 börjar (se `sessioner/_aktuell.md`)

---

## FÖR AGENTER - LÄS DETTA FÖRST!

### 📋 Planera session?
```
1. Läs master/character_reference.md (vem är vem?)
2. Läs master/kampanjkrönika.md (senaste 500 rader - vad har hänt?)
3. Läs sessioner/_aktuell.md (vad ska hända?)
4. Vid resor i scenariot: läs reseplanerare/reseregister-data.md (kalibrerade restider)
5. Skapa sessioner/_aktuell.html (HTML för spelmötet)
```

### 📖 Skriva kapitel?
```
1. Läs master/kampanjkrönika.md (relevant kapitel)
2. Läs master/character_reference.md (karaktärsfakta)
3. Skriv narrativ i kapitel/kapitel-X.html
```

### 📝 Uppdatera kampanjdata?
```
1. Läs master/character_reference.md FÖRST (karaktärsfakta, kön, alias)
2. Uppdatera master/kampanjkrönika.md (kronologisk tidslinje)
3. Synka master/wiki_data.js om nödvändigt (dashboard-data)
```

### 🎨 Generera bilder?
```
1. Läs master/kampanjkrönika.md eller master/masterplot.md
2. Använd eon-midjourney-prompter agent
3. Spara prompts i midjourney/
```

---

## SINGLE SOURCE OF TRUTH

| Data | Fil | Beskrivning |
|------|-----|-------------|
| **Vad har hänt?** | `master/kampanjkrönika.md` | Kronologisk tidslinje från start till nu |
| **Vem är vem?** | `master/character_reference.md` | Karaktärsfakta, kön, alias, pronomen |
| **NPC/Plats-data** | `master/wiki_data.js` | Dashboard-databas (genererad från krönika) |
| **Kampanjplot** | `master/masterplot.md` | Övergripande storyline och master-plot |
| **EON-regler** | NotebookLM (extern) | Officiellt regelbok & världsbeskrivning (se CLAUDE.md) |

---

## MAPPSTRUKTUR

```
EON/
├── _index.md                    # 🎯 DU ÄR HÄR - entry point
├── CLAUDE.md                    # AI-instruktioner
├── CURRENT_STATE.md             # Nuvarande arbetsläge
├── index.html                   # Dashboard (HTML)
│
├── master/                      # 📚 SINGLE SOURCE OF TRUTH
│   ├── kampanjkrönika.md        # Tidslinje (MASTER)
│   ├── character_reference.md   # Karaktärsfakta (MASTER)
│   ├── wiki_data.js             # Dashboard-data
│   └── masterplot.md            # Kampanjplot
│
├── sessioner/                   # 🎲 SESSION-PLANERING
│   ├── _aktuell.md              # Nästa session (MD)
│   ├── _aktuell.html            # Nästa session (HTML för spel)
│   └── arkiv/                   # Gamla sessioner
│       └── zentri-rescue/       # Session 11
│
├── kapitel/                     # 📖 Narrativa HTML-sidor
│   ├── prolog-tirakgraven.html
│   ├── kapitel-1-jakten.html
│   └── ... (11 kapitel totalt)
│
├── guider/                      # 📋 SL-GUIDER
│   └── vinterglod_guide.html
│
├── midjourney/                  # 🎨 BILDPROMPTS
│   └── *.md                     # Alla Midjourney-prompts
│
├── reseplanerare/               # 🗺️ SL-VERKTYG: kalibrerade restider
│   ├── resedata.js              # Kantlista (källa till sanningen för resor)
│   ├── generate.js              # Genererar registret ur wiki_data.js + resedata
│   └── reseregister-data.md     # GENERERAD — redigera aldrig för hand
│
├── arkiv/                       # 📦 ARKIV
│   └── brainstorm/              # Gamla brainstorm-filer
│
├── Eon SL/                      # 📁 KÄLLDOKUMENT (read-only)
│   └── *.md                     # Kampanjdokument från start
│
└── kampanjwiki/                 # Jekyll-wiki + bildarkiv
    └── assets/images/           # MASTER bildarkiv
```

---

## FILER ATT IGNORERA

**Dessa mappar innehåller INTE kampanjdata:**
- `Eon SL/` - Källdokument, läs bara om du behöver specifik bakgrund
- `midjourney/` - Bildprompts, inte kampanjfakta
- `arkiv/brainstorm/` - Gamla idéer, outdated

**Dessa filer är ej längre i bruk:**
- `kampanj_masterplot.md` (BORTTAGEN - använd `master/masterplot.md`)
- `masterplot/masterplot.html` (BORTTAGEN - använd `master/masterplot.md`)

---

## VANLIGA ARBETSFLÖDEN

### Ny session-planering
1. Öppna `sessioner/_aktuell.md`
2. Skriv detaljerad plan i Markdown
3. Konvertera till `sessioner/_aktuell.html` för spelmötet
4. Efter session: arkivera till `sessioner/arkiv/session-XX/`

### Uppdatera efter session
1. Uppdatera `master/kampanjkrönika.md` med vad som hände
2. Uppdatera `master/character_reference.md` om nya NPCs/fakta
3. Synka `master/wiki_data.js` om dashboard behöver uppdateras

### Skriva nytt kapitel
1. Läs `master/kampanjkrönika.md` för relevant period
2. Använd eon-kapitel-writer agent
3. Output: `kapitel/kapitel-X-namn.html`

### Generera NPC-bilder
1. Läs `master/character_reference.md` för NPC-beskrivning
2. Använd eon-midjourney-prompter agent
3. Spara prompts i `midjourney/`

---

## CHECKLIST FÖR AGENTER

**INNAN du gör NÅGOT:**
- [ ] Har du läst `_index.md`? (denna fil)
- [ ] Vet du vilken typ av uppgift det är? (session/kapitel/data)
- [ ] Har du läst `master/character_reference.md`?
- [ ] Vet du var du ska hitta data? (se SINGLE SOURCE OF TRUTH)

**EFTER du gjort något:**
- [ ] Har du uppdaterat ALLA relaterade filer?
- [ ] Har du validerat kontinuitet?
- [ ] Har du synkat wiki_data.js om nödvändigt?

---

## SUPPORT

**Om du är osäker:**
- Läs CLAUDE.md för detaljerade instruktioner
- Läs `.claude/agents/` för agent-specifika instruktioner
- **FRÅGA ALLTID hellre än att gissa fel!**

---

**Senast uppdaterad:** 2026-02-03
**Version:** 1.1 (Bok 1 avslutad - Zentri räddad)
