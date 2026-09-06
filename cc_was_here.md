# cc_was_here — D:\rollspel\EON

- 2026-08-25 15:00–16:10 — Städade 63 ocommitterade filer på main (var där sedan tidigare sessioner): 7 commits (sökvägsfix GDrive→D:\rollspel\EON, CLAUDE.md/AGENTS.md-sync, 30 NPCs Kapitel 8.5, EM-R002-rename+EM-O001, .agents/.codex, desktop.ini→gitignore, chattexport-flytt). Push avslöjade 5 fjärrcommits inkl. en DUBBLETT-omdöpning av EM-R002 (Johan gjorde samma rename 1 mars, mer komplett). Riktig merge (`58ac23a`): 3 äkta konflikter i `master/wiki_data.js` (rena tilläggskrockar, båda sidor behållna), `_index.md` manuellt kombinerad, gammal `EM-R002_grens-baroneri`-mapp borttagen till förmån för `EM-R002_grensfortet` (behöll 3 lokala unika filer: bergvik.md/frisänkan.md/trakten-omgivningar.md — hade gått förlorade vid blint "fjärren vinner"). 317 NPCs efter merge.
- **Pre-commit-hooken fixad** (`.git/hooks/pre-commit`, LOKAL, ej git-spårad): la till `[ -t 0 ]`-check runt den interaktiva krönike-ålder-prompten, annars blockerar den ALLA icke-interaktiva commits (inkl. från `!`-prefix-kommandon i Claude Code, som saknar riktig TTY). Syntax/UTF-8-checkarna körs fortfarande på riktigt.
- **"ox-alpha"-identitet utredd:** riktig stealth-modell (`stealth/ox-alpha` på OpenRouter, gratis, misstänkt Zhipu/GLM ~90% säkerhet enligt community-fingerprinting), INTE en annan Claude-session. Körs via Claude Code CLI hos Johan. Se [[project_oxen_launch]]-minnet.
- **NotebookLM trasig hela sessionen:** utgången Google-auth + orphanade Chrome-processer (30+ st) som låste profilmappen efter misslyckade auth-försök — `cleanup_data` + manuell `Stop-Process` på de notebooklm-taggade PID:erna löste låsningen, men själva inloggningsflödet lyckades aldrig fullt ut i den här miljön (webbläsarfönstret stängdes för tidigt av Johan innan cookie-capture hann klart, flera gånger). **Om det behövs igen:** testa `setup_auth` färskt, och om det failar direkt (inte efter en riktig väntetid) — misstänk låst profil igen, kör `cleanup_data(confirm:true, preserve_library:true)` FÖRST.
- **GAP-data till reseplaneraren löstes UTAN NotebookLM:** lokala extraherade regelbokstexter finns i `Eon SL/hemsidan/source_pdfs/extracted_text/*.txt` — verifierade bärkraft/hastigheter/vägtyper/valuta ordagrant därifrån istället. Bra fallback nästa gång NotebookLM strular.
- **Reseplanerare-projektet mergat till main** (`0a79fc4`), ox-alpha fortsatte sedan committa direkt på main (Johan matar honom kanon-lore direkt, förbi claude-sessionen): v6 Asharien/Soldarn (`d509eaf`), v7 Jargien (`b6aee13`), v8 Cirefaliska samväldet (`914f439`+`6a5e322`), v9 Västmark/Damarien (`ac0356e`). Alla pushade. Registret (`reseplanerare/reseregister-data.md`) är uppe i 15 sektioner.
- **Rutin under sessionen:** pollade `C:\oxen-launch\` (numrerade filer `NNNN_timestamp_avsändare.md`, protokoll i README.md där) var ~10:e sekund för nya ox-alpha-commits, körde `node -e "require('./master/wiki_data.js')"` + `git push origin main` varje gång. Senaste kända fil: `0023` (16:55). **Nästa session: kolla `C:\oxen-launch\` för filer efter 0023, och `git log`/`git status -sb` här för opushade commits ox-alpha gjort under tiden datorn var av.**
- Öppet/ej blockerande: vägnamnet "Drunokleden" (Hög toppmyr-leden) inte formellt bekräftat av Johan än (Mithervägen är godkänt). `nyarsmeny/index.html` (borttagen, oreleaterat projekt) — rör inte, inte del av EON-arbetet.

- **2026-09-05 (natt) — Obsidian-migrering, gren `obsidian-vault`, EJ mergad till main.**
  Johan bad om att flytta EON-materialet in i Obsidian, gick och la sig, gav klartecken
  att jobba autonomt och beslutat: "rensa ut allt gammalt, arkivera i en ARKIV-låda,
  radera inget." Full plan i `~/.claude/plans/jag-skulle-vilja-g-ra-flickering-treehouse.md`
  (har en "✅ GENOMFÖRT"-sammanfattning överst) och detaljer i `CURRENT_STATE.md`
  (entry 2026-09-05). Kort version:
  - Ny mapp `wiki/` (Obsidian-noter, YAML-frontmatter + `[[länkar]]`) är nu MASTER för
    NPCs/platser/fraktioner/kapitel/sessioner/rollpersoner — INTE `master/wiki_data.js`
    längre. 327 npcs / 58 platser / 48 fraktioner / 11 kapitel / 11 sessioner / 6 rollpersoner.
  - Nytt `bygg/bygg-wiki-data.js` genererar `master/wiki_data.js` + `fraktioner_data.js`
    ur `wiki/`. Pre-commit-hooken (redan lokalt patchad av mig tidigare med `[ -t 0 ]`-fix,
    se ovan — den fixen är fortfarande kvar orörd) utökades med ett nytt steg som kör
    `node bygg/bygg-wiki-data.js --check` och blockerar commit om JS-filerna inte matchar
    `wiki/`. Testat live: en riktig `git commit` blockerades korrekt.
  - **`.tmp.driveupload/` flyttades till `_ARKIV/drive-sync-skrap/`** ikväll (Johans
    uttryckliga önskan om städning) — detta går emot min egen tidigare notering ovan om
    att inte röra den. Inget raderat, bara arkiverat; flagga för Johan om det var fel.
  - Gammalt material (Jekyll-wikin, den separata Obsidian-vaultens EON-kopia — verifierat
    238/239 NPC-filer där var rena dubbletter, backup-filer, döda skript) ligger i
    `_ARKIV/` (gitignored, INGET raderat).
  - CLAUDE.md/AGENTS.md/_index.md/eon-data-guardian/eon-npc-adder uppdaterade med
    override-notiser som pekar mot den nya arbetsgången. `.agents/`/`.codex/`
    (speglingar) rördes INTE — flaggat som öppen fråga.
  - Två buggar hittades och fixades via faktisk verifiering (round-trip-diff + Chrome-
    rendering): 3 handelshus som bara fanns i Jekyll (Al-Zahir, Banu Qadisha, Bayt
    Al-Laila — Hagge-handlingen i Muhad), och `[[länkar]]` som läckte ut som rå text i
    dashboardens NPC-beskrivningar (byggskriptet strippade bara enskilda frontmatter-fält,
    inte brödtexten — fixat med `stripAllLinks()`).
  - **Kända, EJ åtgärdade datakvalitetsproblem** (flaggade i noterna, kräver Johans beslut):
    "Dubbel-Orm" finns 3x, fyra Vargnäset-evakuerade finns 2x var (fanns redan i
    ORIGINAL wiki_data.js, inte introducerat ikväll), 3 NPCs (generisk
    Amina/Fatima bint/Layla bint) kunde inte mergas automatiskt pga tvetydighet.
  - **Nästa session: gren `obsidian-vault` väntar på Johans granskning innan merge till
    main.** Kör `git status`/`git log obsidian-vault` här för att se var det landade.
  - **Uppföljning samma natt:** Johan bad om en lista på vad som kunde raderas. Efter
    verifiering (bildfilnamn löste upp de 3 "tvetydiga" NPC:erna entydigt: amina.md →
    Amina bint-Farid, fatima-bint.md → Fatima bint-Ali, layla-bint.md → Layla
    bint-Hussein — alias tillagda innan radering) godkände han radering av ~379 MB:
    `_ARKIV/jekyll-wiki/`, `jekyll-build-site/`, `drive-sync-skrap/`, `backupfiler/`,
    `doda-skript/`, `lostfiler/`, `gammal-vault-eon/Fluff/`.
  - **Resten av `_ARKIV/` verifierat och raderat också:** `gammal-vault-eon/SL/`
    (51 filer — 50 byte-identiska med `Eon SL/`/`master/`, den enda avvikande
    `claude.md` redan omdöpt+räddad som `Eon SL/femte-fasen-resan-till-vitterdal.md`)
    och `gammal-vault-eon/Projekt/` (alla filer identiska med eller ÄLDRE utkast av
    `EgetMaterial/projekt/`-versionerna, t.ex. saknade "Guldruschen"-handlingen och
    KANON-STATUS-blocket som redan lagts till i de aktuella filerna). **`_ARKIV/` är
    nu bara en README som förklarar historiken — allt gammalt är borta.** Originalet
    av den separata Obsidian-vaulten finns fortfarande orört kvar i
    `C:\Users\kulle\Obsidian\Vault\10_Rollspel\EON\` (bara kopian här togs bort).
  - **`EgetMaterial/` omstrukturerat på Johans begäran** ("för knökigt", "bara dumpa
    allt KLART i en mapp"): de sju typmapparna (`lander/`, `stader/`, `platser/`,
    `regioner/`, `organisationer/`, `foremal/`, `npcs/`) borttagna. Ny modell:
    `Klart/` = en flat mapp med BARA de färdiga HTML-versionerna (7 filer: Muhad, Jen,
    Mithrahus, Vitterdal-baronieriet, Grensfortet, Legokompaniet + spelarversion),
    all markdown (sammanfattning/STATUS/NOTES/research/utkast) bor permanent i
    `projekt/EM-XXX_namn/` även efter avslut. En tom kvarleva-mapp
    `projekt/EM-R002_grens-baroneri/` (från en gammal merge, redan tom) städades bort.
    **Bonusfynd:** `_index.md` var föråldrad — påstod Legokompaniet låg på 15 %/Fas 1,
    men dess egen STATUS.md visade Fas 7/7 KLAR. Rättat: **inget EgetMaterial-projekt
    är just nu pågående, alla sex befintliga är klara.** CLAUDE.md/_index.md/README.md/
    EXEMPEL.md i `EgetMaterial/` uppdaterade till den nya strukturen.
  - **Allt committat och pushat till `origin/obsidian-vault`** (ny gren på GitHub,
    `main` fortfarande helt orörd):
    - `9945dd1` — hela migreringen, 699 filer (undantog medvetet två filer som redan
      låg lösa innan sessionen och inte hör hit: `nyarsmeny/index.html` och
      `Gravens_Arv_konceptalbum_POC.md`, Johans konceptalbum)
    - `30da1e4` — tog sedan bort `nyarsmeny/index.html` OCH två upptäckta
      nyårsmeny-recept (`arkiv/icke-kampanj/matrecept/nyarsmeny_2025*.md`) på Johans
      begäran ("ingen aning varför det hamnade där") — personligt matrecept, inget
      med kampanjen att göra. Rörde inte `meny6_saltimbocca.md` i samma mapp.
  - **Nästa session:** `obsidian-vault` väntar fortfarande på merge till `main` —
    Johan har inte bett om det än. GitHub föreslår PR-länk om han vill granska där.

- **2026-09-06 — Designmigrering (designspec.md → omarbetad plan), Etapp 0 klar.**
  `obsidian-vault` mergades till `main` via PR #51 (`fdfd3c7`) under sessionen — inte av
  mig, men bekräftat och lokal `main` fast-forwardad till den (låg kvar på `ac0356e`).
  Full plan i `~/.claude/plans/titta-p-hur-du-federated-marble.md` (se "✅ Etapp 0"-status
  där för detaljer).
  - **Förarbete:** Obsidian-MCP:n (`.claude.json`) moderniserad till multi-vault
    (`eon=D:\rollspel\EON`, `starwars=...`), personliga vaulten pausad (reversibelt).
    Döda EON-kopian i `C:\Users\kulle\Obsidian\Vault\10_Rollspel\EON\` (450 filer, orörd
    sedan innan juni 2026) raderad, ersatt med `_FLYTTAD.md`-pekarnot. **Kräver omstart av
    Claude Code** för att MCP-servern ska ladda om — inte gjort än denna session.
  - **Etapp 0:** `assets/css/{base,components,pages}.css` skapade. Pilot:
    `kapitel/kapitel-9-mithera.html` konverterad till läsvyn, gammalt `<style>`-block
    (239 rader) borttaget. Verifierat i Chrome (lokal http.server på port 8743 — `file://`
    blockeras av claude-in-chrome-tillägget) med noll konsolfel, `:focus-visible` synlig,
    inga fasta pixelbredder. Bifynd: `../wiki_data.js`-sökvägen på den sidan var trasig
    (filen finns bara i `master/`) — fixad, auto-länkning fungerar nu (428 entiteter).
  - `resize_window`-verktyget satte inte faktisk viewport i den här Chrome-miljön
    (innerWidth låste sig på 1709px oavsett begärd storlek) — 360px-testet gjordes därför
    via CSS-granskning (inga fasta px-bredder utöver `.wrap`s `max-width`) istället för
    visuellt. Flagga om exakt mobilrendering behöver verifieras senare.
  - **Nästa session:** Etapp 1 (bygg om `index.html`, hash-routing, ta bort trasig
    `handleUrlParams()` och `showModal()`-referensen, fixa `npc-count`).

- **2026-09-06 (samma dag, fortsättning) — Etapp 1+2 klara och pushade till main
  (commit `b99ccdb`), live på Pages.** Johan bad om en avskalad Etapp 2 (register-sidor)
  samtidigt som Etapp 1, för att undvika att nya startsidans Register-länkar 404:ar
  under en övergångsperiod.
  - **index.html helt ombyggd** enligt designspec §6.1: header/statusrad/Kampanjen
    (kapitel som rader)/Rollpersoner/Registret/Eget material/SL & fluff. Gammalt
    1755-raders SPA-dashboard med kort-rutnät för NPC/Platser/Fraktioner borta —
    de flyttade till separata registersidor (nedan).
  - **Ny `bygg/bygg-index.js`**: injicerar kapitellista, statusrad och
    Rollpersoner-block (från `wiki/Rollpersoner/` — fanns redan från
    Obsidian-migreringen men var ALDRIG kopplad till något byggskript förrän nu)
    via `<!--BYGG:X-->`-markörer i annars handskriven `index.html`.
  - **Ny `bygg/bygg-sidor.js`** genererar `register/{npcer,platser,fraktioner}.html`
    + `data/*.json` ur samma `wiki/`-noter som `bygg-wiki-data.js`. Delad parsning
    bruten ut till `bygg/lib/wiki-model.js` (ren refaktor, verifierad byte-identisk
    output på `bygg-wiki-data.js` efteråt). Detaljvy via hash (`#typ/slug`) med
    native `<dialog>`.
  - **`kapitel-linkify.js` omskriven**: hämtar `data/entities.json` istället för att
    lita på `wiki_data.js`/`fraktioner_data.js` (som 7 av 11 kapitelsidor laddade
    från en sökväg som ALDRIG funnits — `../wiki_data.js`, riktiga filen ligger i
    `master/`), och länkar till registersidorna istället för den borttagna
    `handleUrlParams()`. Entitetslänkar från kapitel var alltså trasiga på två
    oberoende sätt förut. Verifierad end-to-end: klick i kapitel-9 → öppnar rätt
    NPC/plats-modal i registret.
  - **Två riktiga buggar hittade och fixade under Chrome-verifiering** (inte bara
    testmiljö-brus, se nedan för vad SOM var brus):
    1. `document.currentScript` är `null` inuti en async event-callback
       (DOMContentLoaded) — måste läsas synkront vid skriptets toppnivå. Kraschade
       linkify.js på alla kapitelsidor tills fixat.
    2. Overlay-klick i registrets modal stängde dialogen men rensade inte
       `location.hash` konsekvent — flyttade hash-rensningen till `closeDetail()`
       direkt istället för att bara lita på `dialog`s async `close`-event.
  - **Betydande testmiljö-brus denna session, för nästa gång:** `computer`-verktygets
    klick-koordinater och `window.innerWidth` är INTE i samma koordinatsystem i den
    här Chrome-miljön (klick på beräknad "mitten av skärmen" missade ibland helt,
    "Coordinate X is outside the coordinate frame" på andra). Direkt-navigering med
    `#hash` i URL:en racear ibland mot sidans egna scripts (dialog verkar stängd
    direkt efter navigate trots att den öppnas korrekt en sekund senare) — lägg
    ALLTID in `wait` efter `navigate` innan du litar på ett `javascript_tool`-resultat.
    `file://` är fortfarande blockerat av tillägget — kör lokal `python -m
    http.server` och döda processen (`taskkill //PID … //F`, `netstat` för att hitta
    den) när klart.
  - Pre-commit-hooken utökad med steg 1c: `bygg-sidor.js --check` +
    `bygg-index.js --check`, samma mönster som steg 1b för `bygg-wiki-data.js`.
  - **Nästa session:** Etapp 3 (kapitel/fluff → läsvyn, 19 filer kvar av 11+8,
    kapitel-9 är redan piloten/mallen). Se planen för fullständig lista.

- **2026-09-06 (samma dag, fortsättning 2) — Etapp 3 klar och pushad (commit
  `22ab90f`), live på Pages.** Alla 19 återstående kapitel/fluff-filer konverterade
  till läsvyn.
  - **10 kapitelsidor** (prolog + 1-8, 10) konverterade via ett scratchpad-script
    (`convert-kapitel.js`, ej incheckat — engångsverktyg) som extraherar
    header/meta/prose, mappar `.info-box`→`.box`/`.box--warning` och `.quote`→
    `.box--quote`, och bygger den nya sidmallen. Verifierat strukturellt (samma
    antal `<p>`/`<hr>`/`<li>`/`<h2>`/`<h3>`/`<strong>` som originalet — de enda
    `<strong>`-avvikelserna var exakt de 3 header-etiketterna per fil som blev
    till den oformaterade sammanfattningsraden) och visuellt i Chrome, inkl.
    kapitel-10 (1207 rader, största filen).
  - **8 fluff-sidor** konverterade — mycket mer heterogen struktur än kapitel
    (sånger/dikter/dagböcker/recept/fragment/fältrapporter), så varje fil fick
    sin egen driver-fil ovanpå delade hjälpfunktioner (`convert-fluff.js`, även
    den ej incheckad). Alla verifierade med samma strukturella diff-metod +
    Chrome. Detaljer i planfilen om vilken struktur som mappades till vad.
  - **Bugg hittad under arbetet:** `prose--lead`-klassen (versal-anfang på
    första stycket) gav fel resultat på fluff-sidor där en diktrad råkade bli
    "första stycket" istället för inledande brödtext — togs bort från
    fluff-mallen (kapitel behåller den, funkar rätt där).
  - **Testmiljö-kvirkar denna session** (bekräftat brus, inte kod-buggar):
    CDP `Page.captureScreenshot` timear ibland ut (~30s) på annars fungerande
    sidor — bara att köra screenshot-anropet igen. `/tmp/`-sökvägar i Node
    (körd via Git Bash) mappar INTE till samma plats som bash egna `/tmp/` —
    skriv alltid till en `./relativ-fil.html` i scriptets egen mapp istället,
    annars "skrivs" filen till ingenstans utan felmeddelande.
  - Efter denna etapp: 27 HTML-filer kvar med eget `<style>`-block (ner från
    52 vid start). Alla i EgetMaterial/ (17, väntar på dedup-beslut Klart/ vs
    projekt/) eller Etapp 4-kärnsidor (orter.html 1632 rader, masterplot.html,
    kontinuitet.html, sessioner/, guider/, platser/jen.html,
    soffias-natverk.html).
  - **Nästa session:** Etapp 4 (övriga kärnsidor) eller EgetMaterial-dedup +
    konvertering, se planfilen `~/.claude/plans/titta-p-hur-du-federated-marble.md`.

- **2026-09-06 (samma dag, fortsättning 3) — Etapp 4 nästan klar, två commits
  pushade (`b425134`, `8bdd47c`), live på Pages.**
  - **Del 1 (`b425134`):** `guider/vinterglod_guide.html`, `platser/jen.html`,
    `soffias-natverk.html`, `sessioner/index.html` (redan konverterade innan en
    context-kompaktering, committades nu tillsammans) + två nya:
    `sessioner/frostspiran_final.html` (progress-bar/nav-bar → snabbnav-rad,
    status-grid → modal-row, ritual-step → box med stegnumret i etiketten,
    char-badge → `<strong>`) och `kontinuitet.html` (hade fortfarande ett litet
    eget `<style>`-block kvar för `.score-bar`/`.stat-grid` trots att sidan
    annars redan var konverterad — flyttat till `pages.css`).
  - **Del 2 (`8bdd47c`):** `masterplot/masterplot.html` (1225 rader, störst
    hittills i etapp 4). Sidebar-nav + scroll-spy-JS borttaget helt, ersatt av
    en snabbnav-rad (samma mönster som frostspiran); `character-grid`/
    `acts-grid`/`info-box` → staplade `.box`; ASCII-kosmologidiagrammen fick
    behålla `<pre>` med ett nytt delat `.prose pre`-tema i `pages.css`.
  - **Bugg i konverteringsverktyget (inte i slutresultatet):** de delade
    `findBlocks`/`replaceBlocks`-hjälparna i `convert-fluff.js` matchar bara
    `<div class="X">`/`<div class="X extra">` — de missar helt block som har
    ett `id="..."`-attribut EFTER class (`<div class="timeline-item"
    id="...">`). 6 block (2 timeline-items, 4 character-cards) blev tysta
    hoppade-över i första körningen på masterplot.html. Upptäckt via
    strukturell diff (räknade om `<li>`-innehåll orig vs konverterat), fixat
    med en lokal `findBlocksWithId`-variant i det scriptet — INTE i den delade
    `convert-fluff.js`, som andra redan klara sidor litar på oförändrad.
    **Om nästa fil (t.ex. orter.html) har divs med id efter class-attributet,
    kom ihåg detta.**
  - Missad emoji-range upptäckt samma väg: `⏳` (U+23F3, hourglass) ligger i
    Miscellaneous Technical-blocket (`\u{2300}-\u{23FF}`), inte i något av de
    ranges som redan användes i tidigare filers `stripEmoji()`. Lade till
    rangen i masterplot-scriptet. Övriga redan konverterade filer denna
    kampanj hade inga hourglass-emojis så de påverkas inte, men värt att minnas
    om fler dyker upp i orter.html.
  - **Testmiljö-brus:** CDP-screenshots under scroll visade ibland stora tomma
    ytor på sidan — verifierat med `getBoundingClientRect()`-diff mellan
    article-barnen (`gaps: []`) att det INTE var ett riktigt layoutfel, bara en
    mitt-i-scroll-rendering-artefakt. Vid osäkerhet: verifiera strukturellt via
    `javascript_tool` istället för att lita på ett enda screenshot.
  - **Kvar i Etapp 4:** bara `orter.html` (1632 rader). Planen flaggar den
    redan som specialfall — egen filtreringslogik i JS, datakälla
    (`dashboard/örter eon.md`) utanför `wiki/`. Läs den filen i sin helhet
    innan konvertering påbörjas, inte bara `<style>`-blocket.
  - **Nästa session:** `orter.html`, sedan är Etapp 4 (kärnsajten) klar. Efter
    det återstår bara de uppskjutna posterna (EgetMaterial-dedup, bilder) —
    se planfilens "Uppskjutet"-sektion för detaljer.

- **2026-09-06 (samma dag, fortsättning 4) — `orter.html` reskinnad (INTE
  fullmigrerad), Etapp 4 därmed klar. Johans explicita beslut: "vi tar en
  reskin nu. men sen gör vi det på riktigt. som en enskild punkt på agendan."**
  - orter.html skiljer sig från alla andra Etapp 4-filer: 123 örter ligger
    hårdkodade som ett JS-objekt (`herbsData`) i sidans eget `<script>`, med
    egen `renderHerbs()`/`filterRegion()`/`filterHerbs()`-logik som bygger
    `.herb-card`-kort och filtrerar dem klientsidan. Exakt det mönster
    (data-i-JS) resten av sajten redan migrerat bort ifrån.
  - **Gjort nu:** bytte bara `<head>` (fonts/base/components/pages.css) och
    all STATISK topp-markup (nav-bar/header/stats-bar/controls) mot
    sajtens vanliga chrome-header/crumbs/statusbar/search/filters-mönster.
    Rörde INTE en enda rad i `<script>`-blocket — `herbsData`, `renderHerbs`,
    `filterRegion`, `filterHerbs` är byte-för-byte oförändrade. Nya CSS-regler
    i `pages.css` för de JS-genererade klassnamnen (`.region-section`,
    `.herb-card`, `.herb-tag` m.fl.) mappar dem mot designtokens utan att
    döpa om något klassnamn (skulle ha krävt att ändra scriptet).
  - **INTE gjort** (medvetet, väntar på "den riktiga" punkten på agendan):
    örtdata flyttad till `wiki/` som egna noter, `bygg/`-generering av en
    örtregistersida, borttagning av den klientsidiga JS-logiken. Se planfilens
    "Uppskjutet"-sektion — lade till en rad där.
  - **Kvarvarande kuriosa i själva JS-logiken (pre-existing, INTE introducerad
    av reskinnen — verifierat mot `git show HEAD:orter.html` att
    `filterRegion`s `event.target.classList.add('active')` är oförändrad):**
    aktiv-highlighten på filterknapparna uppdaterades inte konsekvent i denna
    testmiljö vare sig via riktig musklick (computer-verktyget) eller
    `element.click()` via JS — men själva filtreringen (vilka kort/sektioner
    som visas) fungerade korrekt i båda fallen, verifierat via
    `getBoundingClientRect`-baserade JS-anrop. Det förstnämnda missade
    troligen målet helt pga samma koordinatsystem-mismatch som redan
    dokumenterats för `computer`-verktyget i den här Chrome-miljön (se
    Etapp 1-posten ovan). Värt att kika på under den riktiga migreringen,
    men inte en regression att jaga nu.
  - **Etapp 4 (kärnsajten) är nu klar i sin helhet** — noll HTML-filer kvar
    med eget `<style>`-block utanför EgetMaterial/, `Eon SL/hemsidan/` och
    arkiv. Allt pushat, live på Pages.
  - **Nästa session:** EgetMaterial-dedup + konvertering, ELLER börja på den
    riktiga örter→wiki/-migreringen som Johan bad om ("en enskild punkt på
    agendan") — fråga honom vilket han vill prioritera.

- **2026-09-06 (samma dag, fortsättning 5) — Örter → wiki/-migreringen genomförd
  på riktigt.** Johan valde denna framför EgetMaterial-dedup/bilder. Plan mode
  användes (tre parallella Explore-agenter mot wiki-konventioner, bygg-pipelinen,
  och register.js) innan implementation, plan sparad i samma planfil under en ny
  rubrik "## Örter → wiki/-migrering".
  - **123 örter** extraherade ur `orter.html`s `herbsData`-JS-objekt (eval:ades
    lokalt, tryggt trusted data vi själva skrev) till egna Obsidian-noter i nya
    `wiki/Örter/` + ny mall `wiki/_Mallar/Mall - Ört.md`. Frontmatter:
    `typ/namn/region/växtplats/pris/tillredning/färdighet/kampanj/tags`.
  - **`bygg/lib/wiki-model.js`** fick ett fjärde `buildModel()`-block (örter) —
    **INTE** tillagt i `master/wiki_data.js` (fanns aldrig där, påverkar inte
    `kontinuitet.html`s räkning).
  - **`bygg/bygg-sidor.js`** fick en ny post i `pages`-arrayen → genererar
    `register/orter.html` + `data/orter.json`, ingen ny klientkod behövdes
    (`register.js` är helt konfigurationsstyrt).
  - **Två RIKTIGA buggar hittade under Chrome-verifiering** (inte
    testmiljö-brus den här gången):
    1. Mina första `gift`/`kampanjkopplad`-fält var `"Ja"/"Nej"`-strängar —
       `register.js`s `distinctSorted()` renderar en chip per unikt värde UTAN
       att visa vilken filtergrupp den hör till, så två Ja/Nej-par blev
       fyra identiska, omöjliga att skilja åt chips. Fixat genom att byta till
       självbeskrivande värden (`"Gift"`/`null`, `"Kampanjkoppling"`/`null`) —
       `null` filtreras bort av `distinctSorted` så bara den sanna halvan får
       en chip. Databaserad fix, ingen ändring i `register.js` behövdes för
       just detta.
    2. `register.js`s `matchesSearch()` sökte bara i kolumner med
       `role: title|meta` — men sökfältets placeholder-text ("Sök efter ört,
       **effekt**, region…", kopierad rakt av från originalsidan) lovade sök i
       effekttexten, som ligger i `beskrivning`, inte en synlig kolumn. Fixat
       i `assets/js/register.js` (delad av ALLA fyra registersidor) genom att
       lägga till `item.beskrivning` i sök-haystacken — en generell förbättring,
       inte en engångshack, gynnar NPC/plats/fraktion-sök också.
  - **`bygg/bygg-index.js`**: la till Örter-raden i `registerRowsHtml`-arrayen
    med levande antal, tog bort den handskrivna `<li>` som legat utanför
    `<!--BYGG:REGISTER-ROWS-->`-markören i `index.html` sedan innan
    designmigreringen (hårdkodat "123", pekade på gamla `orter.html`).
  - **`assets/css/pages.css`**: `.row--ort` + mobil-override, två rader enligt
    `.row--plats`/`.row--fraktion`-mönstret.
  - **Gamla `D:\rollspel\EON\orter.html` raderad.** Grep bekräftade inga andra
    kodreferenser till den (bara `Startsida förslag C.dc.html`, en död
    referensmockup utanför scope).
  - **Datakontroll (inte stickprov):** 123 totalt, 13 gift, 7 kampanjkopplade,
    11 regioner med exakt de radantal som fanns i originalets `herbsData` —
    verifierat programmatiskt före OCH efter varje bygg-körning.
  - **Bifynd, inte åtgärdat:** originalsidans statistikruta påstod "86
    Kampanjspecifika & Klassiska" — verklig `kampanj`-tagg-räkning är bara 7.
    Ännu ett exempel på hårdkodad, drivande siffra (samma sjukdom som
    NPC-antalet var innan designmigreringen). Den gamla siffran finns inte
    kvar någonstans nu eftersom hela sidan är genererad.
  - Alla tre `--check` gröna, allt committat och pushat till `main`, live.
  - **Nästa session:** EgetMaterial-dedup (design orörd, bara dubbletter bort)
    eller bilder — båda uppskjutna, se planfilens "Uppskjutet"-sektion.
