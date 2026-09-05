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
