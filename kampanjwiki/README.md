# Gravens Arv - EON Kampanjwiki

En Jekyll-baserad kampanjwiki för EON-rollspelskampanjen "Gravens Arv".

## Lokal utveckling

```bash
cd kampanjwiki
bundle install
bundle exec jekyll serve
```

Besök sedan `http://localhost:4000/gravensarv/`

## Struktur

- `_npcs/` - NPCs (Non-Player Characters)
- `_platser/` - Platser och städer
- `_kapitel/` - Kampanjkapitel och händelser
- `_fraktioner/` - Fraktioner och organisationer

## Deployment

Sidan publiceras automatiskt via GitHub Pages när ändringar pushas till `main`-branchen.
