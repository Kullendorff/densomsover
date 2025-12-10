# EON Kampanjwiki - Projektinstruktioner

## Projektöversikt
Bygg en statisk hemsida (Jekyll/GitHub Pages) för att katalogisera en pågående EON-rollspelskampanj. Sidan är endast för spelledaren (SL).

## NUVARANDE STATUS (2025-12-09)
Projektet är IGÅNG. Git repo initierat, grundstruktur klar, innehållsgenerering pågår.

Se CURRENT_STATE.md för detaljer.

## Mappstruktur
```
EON/
├── EON för alla/     # Regelböcker, PDF:er (spelarnas åtkomst)
├── Eon SL/           # SL-material, äventyr, NPC:er, kampanjdokumentation
└── kampanjwiki/      # <-- SIDAN SKAPAS HÄR (ny mapp)
```

## Ditt uppdrag

### Fas 1: Setup
1. Skapa mappen `kampanjwiki/` under EON/
2. Initiera Jekyll-projekt för GitHub Pages
3. Skapa `.gitignore` som exkluderar ALLA `.pdf`-filer i hela EON-trädet
4. Sätt upp grundläggande collections: `_npcs`, `_platser`, `_kapitel`, `_fraktioner`

### Fas 2: Datainsamling
Navigera och läs innehåll från:
- `Eon SL/` - Kampanjmaterial, NPC:er, händelser
- `Eon SL/rädda zentri/` - Nuvarande äventyrsbåge
- Undermappar som Jarla, Muhad, Tarkas etc. för historiska händelser

Extrahera och strukturera:
- NPC:er (namn, ras, status, relationer, första omnämnande)
- Platser (namn, typ, region, koppling till händelser)
- Kapitel/Faser (kronologisk kampanjhistorik)
- Fraktioner (Handelshus, Daak-kyrkan, Systrarna, etc.)

### Fas 3: Generera markdown-filer
Skapa `.md`-filer med YAML frontmatter för varje entitet. Exempel:
```yaml
---
namn: Zentri Bredarsson
ras: Asharier
status: försvunnen
relationer:
  - namn: Gordon
    typ: kamrat
---
```

## Viktiga regler

### .gitignore (KRITISKT)
```gitignore
# Copyrightskyddade PDF:er - ladda INTE upp
*.pdf
**/*.pdf
```

### Språk
- All dokumentation på svenska
- Variabelnamn/kod på engelska är OK

### Prioritet
1. Fungerande struktur först
2. Innehåll extraherat korrekt
3. Design kommer senare

## Kampanjkontext (snabbversion)
- **Spelare:** Gordon (Calle), Thrakka (Andreas), Umnatak (Christofer), Kazrik (Jonas), Corvus (Daniel)
- **Nuläge:** Gruppen är i Skugglandet för att rädda Zentri
- **Historik:** Tirakgraven → Muhad → Tarkas → Vargnäset → Evakuering → Mithera → Skugglandet

## Kommandon att köra först
```bash
# Från EON-mappen
mkdir -p kampanjwiki
cd kampanjwiki
# Initiera Jekyll...
```

## Frågor?
Om något är oklart i SL-materialet, fråga innan du gissar.
