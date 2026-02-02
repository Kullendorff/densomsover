# CURRENT STATE: Gravens Arv Kampanjwiki

## Datum: 2026-02-03

## Status: BOK 1 AVSLUTAD! 🎯 Zentri Räddad från Skugglandet

**NYTT (2026-02-03):**
- **BOK 1 AVSLUTAD (Kapitel 1-10):** "Frostspiran Final - Zentris Befrielse"
  * ✅ **Zentri RÄDDAD:** Andreas spelar honom igen
    - Gordon sjöng och krossade kristallen genom resonans
    - Gråtonen bar själen ner till kroppen i sarkofagen
    - Återförening genomförd framgångsrikt
  * ⚠️ **PERMANENT FÖRÄNDRING - Umnatak & Ulzak:**
    - **Umnatak:** PERMANENT fängslad i meteoritjärnskniven, ankare för Urkhaths ring
    - **Ulzak:** PERMANENT i Umnataks kropp
    - Christofer spelar nu BÅDE "kniv-Umnatak" OCH "Ulzak i kroppen"
  * 🔮 **Ritualen genomförd:**
    - Umnataks själ i kniven → nytt ankare för ringen
    - Ringen bunden till kniven (inte till Zentri längre)
    - Thrakka vaktar kniven i sin egen kropp
  * 🌅 **VinterGlöds ed bruten:**
    - Han hjälpte med instruktioner (sång/resonans)
    - Eden brast när Zentri återförenades
    - VinterGlöd STANNADE i Skugglandet (fri men ensam)
    - Gruppen nämnde ALDRIG Yelgotha
  * 👿 **Urkhath tillfälligt neutraliserad:**
    - Rasade när ringen flyttades
    - Vet att Zentri är fri
    - KOMMER TILLBAKA
  * 🏰 **Tillbaka i Mundana:**
    - Grensfortet, högsommar
    - Tidsförskjutning: Flera MÅNADER har gått
  * 📚 **Kampanjdata uppdaterad:**
    - `master/kampanjkrönika.md` - Ny session tillagd + Appendix uppdaterad
    - `master/wiki_data.js` - Ulzak, VinterGlöd, Kapitel 10 uppdaterade
    - `_index.md` - Status uppdaterad till Bok 1 avslutad
    - `index.html` - Navigering fixad (alla knappar lika stora)

**TIDIGARE (2026-01-22):**
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

**Kapitel:** BOK 1 AVSLUTAD (Kapitel 1-10)
**Plats:** Grensfortet, Cermira (högsommar)
**Senaste session:** 2026-02-03 - "Frostspiran Final - Zentris Befrielse"

### Gruppens Status (vid Grensfortet)
| Karaktär | Status |
|----------|--------|
| **Gordon** | Oskadad, sjöng och bröt kristallen |
| **Kazrik** | Oskadad, dokumenterade allt |
| **Thrakka** | Spräckt skalle (kan läkas), VAKTAR KNIVEN med ringen |
| **Zentri** | ✅ FRI! Andreas spelar honom igen |
| **Arcadius** | Tom efter trådbrottet, hålet i bröstet kvarstår |
| **Umnatak** | PERMANENT fängslad i meteoritjärnskniven (Christofer) |
| **Ulzak** | PERMANENT i Umnataks kropp (Christofer) |

### Zentris Status
- **Status:** FRI från Skugglandet, återförenad kropp + själ
- **Ringen:** INTE längre på Zentri - nu bunden till kniven
- **Försvagad:** Efter månaders separation, men levande
- **Spelas av:** Andreas (tillbaka!)

### Ringen & Urkhath
- **Ringen:** Bunden till meteoritjärnskniven (Umnatak är ankaret)
- **Thrakka:** Vaktar kniven i sin egen kropp
- **Urkhath:** Tillfälligt neutraliserad, vet att ringen flyttats, KOMMER TILLBAKA

### VinterGlöd
- **Status:** Fri från eden (bruten när Zentri återförenades)
- **Plats:** Stannade i Skugglandet (ensam)
- **Relation:** Hjälpte gruppen, men ingen stark relation byggdes

### Viktiga NPCs i Grensfortet
- **Arcadius:** Med gruppen, levande men tom
- **Xian-Li:** Sung-diplomat, finns i fortet

---

## NÄSTA SESSION: BOK 2 BÖRJAR

**Status:** ✅ Bok 1 avslutad - planering för Bok 2 behövs

### Vad händer nu?
- Gruppen återhämtar sig efter Skugglandet
- Månader har gått - vad har hänt i Mundana?
- Nästa mål: Förstöra ringen permanent
- Thrakka bär den farligaste artefakten i världen

### Ring-alternativ framåt
- ✅ **Genomfört:** Umnataks offer (permanent i kniven)
- ⏳ **Återstående:** Hitta sätt att förstöra ringen permanent
- 💀 **Hot:** Urkhath kommer att försöka återta ringen

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

## TIDIGARE SESSIONER (Bok 1)

### Session: Frostspiran Final - Zentris Befrielse (2026-02-03)
- ✅ VinterGlöd gav instruktioner (sång/resonans)
- ✅ Gordon sjöng och bröt kristallen
- ✅ Gråtonen bar själen till kroppen
- ✅ Återförening genomförd (Zentri + själ)
- ✅ Ritualen: Umnataks själ → kniven, ringen bunden till kniven
- ✅ Urkhath rasade när ringen flyttades
- ✅ VinterGlöds ed bruten (stannade i Skugglandet)
- ✅ Flykt genom portalen
- ✅ Tillbaka i Mundana (Grensfortet, högsommar, månader har gått)

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

**🆕 Uncommitted changes (Bok 1 Avslutad):**
- `master/kampanjkrönika.md` - Ny session "Frostspiran Final" + Appendix uppdaterad
- `master/wiki_data.js` - Ulzak, VinterGlöd, Kapitel 10 uppdaterade (validerat ✅)
- `_index.md` - Status: Bok 1 avslutad
- `CURRENT_STATE.md` - Detta dokument (uppdaterat)
- `index.html` - Navigering fixad (alla knappar lika stora)

**Tidigare uncommitted (Kontinuitetssystem):**
- `.claude/memory/learnings.md` - 15 kategorier
- `kontinuitet.html` - Kontinuitets-dashboard
- `.git/hooks/pre-commit` - Pre-commit validering
- `.claude/agents/eon-chronicler.md` - Djup kontinuitetsvalidering
- `CLAUDE.md` - Memory-sektion tillagd (2026-01-06)
- `~/.claude/` - Global hooks och memory (ej i repo)

---

## KVARVARANDE ARBETE

### Bok 1 Avslutad ✅
- ✅ Session genomförd: "Frostspiran Final - Zentris Befrielse"
- ✅ Kampanjkrönika uppdaterad med ny session
- ✅ Wiki_data.js uppdaterad (Ulzak, VinterGlöd, Kapitel 10)
- ✅ _index.md uppdaterad
- ✅ CURRENT_STATE.md uppdaterad
- ✅ Index.html navigering fixad

### Dokumentation kvarstår
- ✅ `master/character_reference.md` uppdaterad (Zentri, Umnatak, Ulzak, Arcadius)
- ✅ `CLAUDE.md` korrigerad (alla kapitel FINNS!)
- [ ] Commit Bok 1-avslutning till Git
- ✅ **Alla kapitel-sidor FINNS redan:** Prolog + Kapitel 1-10 (BOK 1 KOMPLETT!)

### Bok 2 Planering
- [ ] Nästa session-planering (Bok 2 början)
- [ ] Vad har hänt i Mundana under månader?
- [ ] Gruppens nästa mål (förstöra ringen permanent)
- [ ] Urkhaths återkomst (när?)

### Fluff-expansion
- ✅ Mithera-fragment komplett (24 fragment)
- ✅ Thrakka-sånger skapad (8 sånger)
- ✅ Kokbok skapad (10 recept)
- ✅ Örter & Droger komplett (123 örter)
- ✅ Fluff-index uppdaterad
- [ ] Övriga fluff-förslag (se `master/fluff-förslag-analys.md` för idéer)

### Bildgenerering
- [ ] Midjourney-prompts för Frostspiran-scener
- [ ] Midjourney-prompts för nya fluff-sidor
- [ ] NPC-bilder för saknade (121 NPCs saknar bilder)

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

*Senast uppdaterad: 2026-02-03*
*Status: BOK 1 AVSLUTAD - Zentri räddad från Skugglandet*
