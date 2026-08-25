# Reseplanerare — SL-verktyg för EON-resor

Svar på frågor som *"spelarna ska från X till Y — vilka alternativ, vad
kostar det, vilka problem?"* grundat på **kalibrerad data ur spelade rutter**,
inte improvisation.

## Arkitektur (SSOT-principen)

```
master/wiki_data.js ──(join på namn)──┐
                                      ├─> generate.js ─> reseregister-data.md
      resedata.js ─(kanter/baser)─────┘    (validerar)     (GENERERAD output)
```

- **`resedata.js`** — enda handredigerade datafilen. Innehåller KANTER
  (resförbindelser med km/dagar/faror/källa), bas-hastigheter, alias och
  öppna frågor. Duplicerar ALDRIG platsfält från wiki_data.js.
- **`generate.js`** — joinar noder mot `master/wiki_data.js`, validerar att
  alla kantslutpunkter finns (okänt namn = hårt fel, exit 1), skriver
  `reseregister-data.md`.
- **`reseregister-data.md`** — derivat. Redigera aldrig för hand.
- **`EON-Reseregister-Mall.md`** — handskriven domänkunskap som INTE passar
  datamodellen (kostnadsmodell/tullformler, karavan-heuristik,
  infrastrukturprofiler, GAP-lista). Kompletterar den genererade datan.

## Kommandon

```bash
# Regenerera register (från repo-root eller denna mapp):
node reseplanerare/generate.js

# Mot huvudkopiornas ocommitterade wiki_data.js (ifrån worktree):
node reseplanerare/generate.js D:/rollspel/EON

# Validera efter ändringar:
node -e "const d=require('./reseplanerare/resedata.js'); console.log('✓', d.kanter.length, 'kanter');"
node -e "const d=require('./master/wiki_data.js'); console.log('✓', d.npcs.length, 'NPCs,', d.platser.length, 'platser');"
```

## Regler

- Ny kanter utan källuppgift = varning. Nya noder måste finnas i
  wiki_data.js eller `extra_platser` (annars exit 1).
- Tolkningar markeras `tolkning: true`; saker Johan ska bekräfta får
  `johan_bekrafta: true` och listas i registrets avsnitt 5.
- Kanonordning vid konflikt: `kampanjkrönika.md > wiki_data.js > NotebookLM`.
- Platser i `extra_platser` är SSOT-luckor — migrering till wiki_data.js
  triggar AGENTS.md:s blockerande kontinuitetsprocess och görs separat.

## Historik

Byggd 2026-08-25 av ox-alpha-sessionen (Claude Code) uppdrag från
claude-sessionen via `C:\oxen-launch` tråd `reseplanerare` (seq 5→).
Kalibreringsdata spot-checkad mot kampanjkrönika.md, EM-R001/R002,
learnings.md innan införande — alla citat verifierade mot fil.

Proveniens-notering (Johan 2026-08-25): `vitterdal-baronieriet.html`
ersatte en tidigare PDF med samma info — `.md`/`.html` i projektet är
källorna, sök inte efter någon PDF. Kant-citaten i resedata.js uppdaterade
samma dag efter att baronieri-filen utökats (+48 rader): tabellen flyttade
från rad 646–649 till 686–690.
