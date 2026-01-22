# CURRENT STATE: Gravens Arv Kampanjwiki

## Datum: 2026-01-22

## Status: KONTINUITETSSYSTEM FULLSTÄNDIGT IMPLEMENTERAT! 🎯

**NYTT (2026-01-22):**
- **KONTINUITETSSYSTEM FULLSTÄNDIGT:** Självförstärkande kontinuitet för kampanjen
  * **Learnings.md utökad:** 15 kategorier (från 9) med:
    - Geografi: Distanser och resvägar (etablerad kanon)
    - Tidslinje: Händelseordning (Zentri, Thrakka, Corvus, Umnatak)
    - Relationer: NPC-kontinuitet (Arvorns Hammare, Serafina, Systrarna)
    - Status-ändringar: Levande/Död (Silvius, Timron, Pertil, etc.)
    - Världsbygge: Fluff-kontinuitet (123 örter, Mithera-fragment, Thrakka-sånger)
    - Stilguide: Narrativ kontinuitet (Abercrombie + Hobb, färgschema)
  * **Kontinuitets-dashboard:** `kontinuitet.html` - Real-time status
    - Kontinuitetspoäng (0-100) baserat på validering
    - Systemvalideringar (wiki_data.js syntax, kampanjkrönika, learnings)
    - Aktiva konflikter-tabell (tom nu men struktur finns)
    - Databasstatistik (NPCs, platser, bilder, kapitel)
    - Auto-refresh varje 5 minuter
  * **Pre-commit hook:** `.git/hooks/pre-commit` - Automatisk validering
    - wiki_data.js syntax-check
    - UTF-8 encoding-check
    - Kampanjkrönika uppdateringskontroll (varnar om >30 dagar)
    - Learnings.md existens
    - Blockerar commit vid kritiska fel
  * **eon-chronicler utökad:** Djup kontinuitetsvalidering
    - 9-stegs arbetsflöde för fullständig audit
    - Kronologisk validering (Zentri, Thrakka, Corvus, Umnatak)
    - Geografisk validering (mot learnings.md distanser)
    - Status-validering (död/levande cross-check)
    - Relations-validering (konsistens över tid)
    - Cross-referens kampanjkrönika ↔ wiki_data.js
    - Learnings-compliance (15 kategorier)
    - Kontinuitetspoäng-algoritm (0-100)
    - Slutrapport med rekommenderade åtgärder

**TIDIGARE (2026-01-06):**
- **GLOBAL HOOKS-SYSTEM IMPLEMENTERAT:** Auto-loading av projekt-filer vid session-start
  * `~/.claude/hooks/session-start.js` - Node.js hook som laddar projekt-context automatiskt
  * `~/.claude/settings.json` - Uppdaterad med SessionStart hook
  * **Laddar automatiskt:**
    - `_index.md` (entry point)
    - `CLAUDE.md` (projekt-instruktioner)
    - `CURRENT_STATE.md` (nuvarande läge)
    - Global `learnings.md` (globala lärdomar)
    - Projekt-specifik `learnings.md` (EON-lärdomar)
- **MEMORY-STRUKTUR SKAPAD:** Dokumentation av lärdomar på två nivåer
  * **Global:** `~/.claude/memory/learnings.md` - Lärdomar som gäller alla projekt
    - Edit-verktyget (matcha korta strängar)
    - Git triple-check
    - Validering efter kritiska ändringar
    - Ogmios-analys (vad vi tog, vad vi skippa de)
  * **EON-specifik:** `.claude/memory/learnings.md` - EON-specifika lärdomar
    - wiki_data.js validering
    - eon-npc-adder vs eon-data-guardian
    - kampanjkrönika.md som master source
    - Bildmatchning fuzzy ≥85%
    - Kapitel-sidor baserade på krönika
  * **Trip19-specifik:** `Delta Green/trip19/.claude/memory/learnings.md` - Trip19-lärdomar
    - Svenska + engelsk fackterminologi
    - Inline CSS-regel
    - Character colors
    - Historiska källor (REAL + fictional gap-filling)
- **BASERAT PÅ:** Ogmios-analys (Carl Heath's PAI-system)
  * Tog: Hooks, memory-struktur, hybrid-approach
  * Skippade: Voice-system, global PAI.md, MCP Zotero, enforcement
  * **Filosofi:** Ta det bästa, skippa resten

**TIDIGARE (2026-01-05):**
- **ÖRTER & DROGER - KOMPLETT DATABAS:** 123 örter totalt i kampanjvärlden
  * `orter.html` - Interaktiv webbsida med alla örter, sök och regional filtrering
  * `dashboard/örter eon.md` - Källdata (50 nya örter skapade)
  * **Inkluderar:**
    - 22 klassiska örter från Stora Slätterna
    - 14 vulkaniska örter från Tarkas
    - 15 nordiska örter från Cermira/Mithera (inkl. 5 nya Mithera-droger)
    - 20 arabiska örter från Muhad/Öken
    - 6 imperiella örter från Jargien
    - 6 demoniska örter från Skugglandet
    - 12 kustnära örter från Hav/Kust
    - 15 europeiska skogsörter (ny kategori)
    - 5 underjordiska örter från Dvärgar
    - 5 barbariska örter från Tirak
    - 8 magiska örter från Alv/Sunari
  * **Nya Mithera-droger (5 st):**
    - Vinterraseri (Flugsvamp) - Rusgivande/aggression
    - Rimfrostlav - Schamanisk trance
    - Blodfeber-röt - Stridsstimulans
    - Skuggblomma - Smärtstillande/skuggseende
    - Isfrostkristall - Kryotropisk immunitet
  * **32 örter från Spelledarguiden** integrerade i rätt regioner
  * **13 gifter** taggade
  * Kampanjkopplingar till NPCs: Ingvild, Dr. Yusuf, Häxan Fredricca, Thrakka, Umnatak
- **WEBBSIDA:** Komplett regional filtrering, sök, gift-filter, kampanj-filter
- **GIT:** Committat och pushat (commit `cc57467`)

**TIDIGARE (2026-01-04):**
- **FLUFF-SIDOR SKAPAD:** Kampanjvärlden utökad med levande material
  * `fluff/mithera-fragment.html` - KOMPLETT (alla 24 fragment tillagda)
  * `fluff/thrakka-sånger.html` - NY! 8 sånger om Thrakka från olika kulturer
    - Cermirian hjältesaga, Sung-poesi, Tirakisk krigssång
    - Drunokisk barnvisa, Muhad-tavernsång, Dvärgisk dryckesvisa
    - Arvorns Hammare hatpredikan, Vitterdals hovballad
    - Baserat på Iskvarnsbryggan-striden där hon fortsatte med pil genom ögat
  * `fluff/kokbok.html` - NY! 10 autentiska recept från kampanjens platser
    - Muhad (Jens Kryddade Lamm, Öken-dadlar)
    - Cermira (Vargnäsets Viltgryta, Vitterdals Julgrogg)
    - Dvärgiska traditioner (Tunnbröd, Öl-brygd)
    - Grensfortet, Festmat, Tirakisk mat
    - Alla recept är faktiskt kokbara med riktiga mått
  * `fluff/index.html` - UPPDATERAD med länkar till nya sidor
- **GIT:** Committat och pushat (commit `3f3e748`)

**TIDIGARE (2026-01-03):**
- **SESSIONSPLAN SKAPAD:** `sessioner/frostspiran_final.html`
  * Komplett scenplan från kristallrummet till flykt
  * 8 scener: VinterGlöd, Kristallen, Gråtonen, Återförening, Raseriet, Ritualen, Frihet, Flykt
  * Progress bar och navigation
  * Character badges för varje spelares roll i ritualen
  * Fokus på Alternativ F: Religiös Ritual där ALLA deltar
  * Tidsram: ~2-2.5 timmar
- **KAMPANJKRÖNIKA UPPDATERAD:** Ny session tillagd
  * Gruppen genom portalen
  * Iskristallkonstrukter besegrade
  * Zentris kropp i sarkofagen
  * Gråtonen sedd (hon, fågel)
  * VinterGlöd och hans hov (fruset)
  * Samtal - Yelgotha INTE nämnd
  * Kristallrummet nått
- **CHARACTER_REFERENCE.MD KORRIGERAD:**
  * Ulzak är i UMNATAKS kropp (inte Thrakka)
  * Thrakka bär kniven men är INTE besatt
  * Umnatak fängslad i kniven

---

## KAMPANJENS NULÄGE

**Kapitel:** 10 - Skugglandet (Frostspiran Final)
**Plats:** Kristallrummet, högst upp i Frostspiran
**Senaste session:** Gruppen nådde kristallrummet

### Gruppens Status
| Karaktär | Status |
|----------|--------|
| **Gordon** | Leder |
| **Kazrik** | Oskadad |
| **Thrakka** | Spräckt skalle, bär Umnataks kniv |
| **Arcadius** | Självgående men TOM efter trådbrottet |
| **Umnatak** | Fängslad i meteoritjärnskniven |
| **Ulzak** | I Umnataks kropp |

### Zentris Status
- **Kropp:** I sarkofagen (nedre tornet)
- **Själ:** I kristallpelaren (kristallrummet)
- **Ringen:** Manifesterar vid återförening

### VinterGlöd
- Passerad utan strid
- Vet INTE att Yelgotha sände dem
- Hovet fruset
- Ska dyka upp i kristallrummet med instruktioner

---

## NÄSTA SESSION: FROSTSPIRAN FINAL

**Fil:** `sessioner/frostspiran_final.html`

### Scener
1. **VinterGlöd anländer** - Ger instruktioner om sång/resonans
2. **Kristallkrossningen** - Sång bryter kristallen
3. **Gråtonen** - Hon tar Zentris själ nedåt
4. **Återföreningen** - Själ + kropp, ringen manifesterar
5. **Urkhaths raseri** - ~10 minuter att agera
6. **Ritualen** - Alternativ F, alla spelares roller
7. **VinterGlöds frihet** - Eden brister
8. **Flykten** - Tornet kollapsar

### Ring-alternativ (dokumenterade)
- **A:** Umnataks offer (permanent i kniven)
- **B:** Kasta i Intigheten (temporärt)
- **C:** VinterGlöd tar ringen (bästa allierad-hook)
- **D:** Förstöra (ej möjligt nu)
- **E:** Zentri behåller (dåligt)
- **F:** Religiös Ritual + Umnataks offer (episk, alla deltar)

---

## VIKTIGA FILER

### Master-filer
| Fil | Beskrivning |
|-----|-------------|
| `master/kampanjkrönika.md` | Kronologisk tidslinje (UPPDATERAD) |
| `master/character_reference.md` | Karaktärsfakta (KORRIGERAD) |
| `master/wiki_data.js` | Dashboard-databas |
| `master/masterplot.md` | Kampanjplot |

### Memory-filer (🆕)
| Fil | Beskrivning |
|-----|-------------|
| `~/.claude/memory/learnings.md` | **Global** - Lärdomar som gäller alla projekt |
| `.claude/memory/learnings.md` | **EON-specifik** - 15 kategorier lärdomar (expanderad 2026-01-22) |
| `~/.claude/hooks/session-start.js` | Auto-loader hook (Node.js) |
| `~/.claude/settings.json` | Hooks-konfiguration |

### Kontinuitetssystem (🆕 2026-01-22)
| Fil | Beskrivning |
|-----|-------------|
| `kontinuitet.html` | **Kontinuitets-dashboard** - Real-time status, poäng 0-100 |
| `.git/hooks/pre-commit` | **Pre-commit hook** - Automatisk validering före commit |
| `.claude/agents/eon-chronicler.md` | **Utökad** - Djup kontinuitetsvalidering (9-stegs audit) |

### Session-filer
| Fil | Beskrivning |
|-----|-------------|
| `sessioner/frostspiran_final.html` | **NÄSTA SESSION** |
| `guider/vinterglod_guide.html` | VinterGlöd SL-guide |
| `sessioner/arkiv/zentri-rescue/` | Tidigare sessionsplan |

### Fluff-filer (worldbuilding)
| Fil | Beskrivning |
|-----|-------------|
| `fluff/index.html` | Hub för alla fluff-sidor |
| `orter.html` | **123 örter & droger** - Komplett databas |
| `dashboard/örter eon.md` | Källdata för örter (markdown) |
| `fluff/mithera-fragment.html` | 24 fragment om Mithera & Skugglandet |
| `fluff/thrakka-sånger.html` | 8 sånger om Thrakka från olika kulturer |
| `fluff/kokbok.html` | 10 kokbara recept från kampanjens platser |
| `fluff/lera-sånger.html` | Sånger om Lera Skuggskeppare |
| `fluff/resedagbocker.html` | Skorda, Xian-Li, Margarets brev |
| `fluff/silvius-sangbok.html` | Silvius sista dikt |

---

## TIDIGARE SESSIONER

### Session: In i Frostspiran
- Genom portalen (Arcadius tom efter trådbrottet)
- 2 iskristallkonstrukter besegrade
- Zentris kropp i sarkofagen
- Spiraltrappan uppåt
- Gråtonen sedd (kort möte)
- VinterGlöds hov (fruset när de kom)
- Samtal med VinterGlöd (Yelgotha INTE nämnd)
- Kristallrummet nått

### Session: Skugglandet/Titanen
- Arcadius tråd bruten
- Umnatak fängslad i kniven
- Ulzak i Umnataks kropp
- Thrakka spräckt skalle
- Colonisk portal till Frostspiran

---

## GIT STATUS

**Branch:** main
**Senaste commits:**
- `cc57467` - Komplett örter & droger-uppdatering: 123 örter totalt (2026-01-05)
- `e12c968` - Lägg till alla 86 örter till webbsidan (2026-01-05)
- `9fd4d78` - Lägg till 50 nya örter och interaktiv webbsida (2026-01-05)
- `3f3e748` - Lägg till Thrakkas sånger och kokbok som ny fluff (2026-01-04)

**🆕 Uncommitted changes (Kontinuitetssystem):**
- `.claude/memory/learnings.md` - 15 kategorier (utökad från 9)
- `kontinuitet.html` - Kontinuitets-dashboard (NY!)
- `.git/hooks/pre-commit` - Pre-commit validering (NY!)
- `.claude/agents/eon-chronicler.md` - Djup kontinuitetsvalidering (utökad)
- `CURRENT_STATE.md` - Detta dokument (uppdaterat)
- `CLAUDE.md` - Memory-sektion tillagd (2026-01-06)
- `~/.claude/` - Global hooks och memory (ej i repo)

---

## KVARVARANDE ARBETE

### Nästa session (redo)
- ✅ Sessionsplan klar
- ✅ VinterGlöd-guide finns
- ✅ Ring-alternativ dokumenterade

### Fluff-expansion
- ✅ Mithera-fragment komplett (24 fragment)
- ✅ Thrakka-sånger skapad (8 sånger)
- ✅ Kokbok skapad (10 recept)
- ✅ Fluff-index uppdaterad
- [ ] Övriga fluff-förslag (se `master/fluff-förslag-analys.md` för idéer)

### Efter sessionen
- [ ] Uppdatera kampanjkrönika med vad som hände
- [ ] Uppdatera character_reference.md om Umnataks status ändras
- [ ] Eventuellt uppdatera wiki_data.js (Zentri fri?)

### Framtida
- [ ] Kapitel 10 HTML-sida (efter sessionen)
- [ ] Kapitel 11+ planering (beroende på utgång)
- [ ] Midjourney-prompts för Frostspiran-scener
- [ ] Midjourney-prompts för nya fluff-sidor (Thrakka, kokbok)

---

---

## HOOKS + MEMORY-SYSTEM (Nytt!)

### Hur det fungerar

**Vid session-start:**
1. SessionStart-hook körs automatiskt
2. Hook läser projekt-filer (_index.md, CLAUDE.md, CURRENT_STATE.md)
3. Hook läser global learnings.md
4. Hook läser EON-specifik learnings.md
5. Allt laddas automatiskt - inget manuellt "läs denna fil först"!

**Fördelar:**
- ✅ Konsistent context varje session
- ✅ Ingen glömda filer
- ✅ Globala + projekt-specifika lärdomar
- ✅ Dokumenterade best practices

**Baserat på:**
- Ogmios (Carl Heath's PAI-system) - analyserat och adapterat
- Hybrid-approach: Global hooks + projekt-specifik content
- Node.js (inte Bun) för Windows-kompatibilitet

---

*Senast uppdaterad: 2026-01-22*
*Status: Kontinuitetssystem fullständigt implementerat + Självförstärkande kontinuitet*
