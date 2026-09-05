---
typ: "vy"
namn: "Dataview-vyer"
tags: ["vy"]
---
# Dataview-vyer

Kräver Dataview-pluginet (deklarerat i `.obsidian/community-plugins.json`, men
**måste installeras via Community Plugins-panelen** — sökväg: Inställningar →
Community plugins → Bläddra → sök "Dataview" → Installera → Aktivera. Filen kunde
inte förinstalleras under migreringen; Obsidian hämtar plugin-koden själv.

## NPCs per kapitel

```dataview
TABLE rows.file.link as "NPCs"
FROM "wiki/Personer"
WHERE kapitel
GROUP BY kapitel
SORT kapitel ASC
```

## Döda och försvunna

```dataview
TABLE ras, status, plats
FROM "wiki/Personer"
WHERE status = "död" OR status = "försvunnen" OR status = "frusen"
SORT status ASC, file.name ASC
```

## NPCs utan bild

```dataview
LIST
FROM "wiki/Personer"
WHERE !bild
SORT file.name ASC
```

## Bonus: NPCs per fraktion

```dataview
TABLE rows.file.link as "NPCs"
FROM "wiki/Personer"
WHERE fraktion
GROUP BY fraktion
SORT length(rows) DESC
```
