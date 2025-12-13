# CURRENT STATE: Gravens Arv Kampanjwiki

## Datum: 2025-12-13

## Status: 🔥 KAPITEL 7 KLART - CORVUS VÄNDNING SKRIVEN!

**Dagens uppdateringar (2025-12-13 natt):**
- ✅ **KAPITEL 7 HTML-SIDA SKAPAD** - Vargnäset ockupation, Sankt Astrid, Corvus vändning (~900 rader, ~5500 ord)
- ✅ **KAPITEL 6 HTML-SIDA SKAPAD** - Återkomst till Vitterdal och Belöning (~680 rader, ~4200 ord)

**Tidigare (2025-12-12 sent kväll):**
- ✅ **KAPITEL 5 HTML-SIDA SKAPAD** - Vargnäset: Zentris försvinnande, Thrakkas ankomst
- ✅ **20 MIDJOURNEY-PROMPTS** genererade (batch 1-2) för NPCs utan bilder
- ✅ **20 NPC-BILDER** matchade och flyttade från tempbild-mappen
- ✅ **EON-TERMER FIXADE** i prompts (Muhad → Arabian, Stålsvärds → cavalry, etc.)
- ✅ **MIDJOURNEY V7** uppdaterad i agenter och prompts
- ✅ **wiki_data.js** uppdaterad: 143 NPCs har nu bilder (59%)

---

## NYTT: KAPITEL 7 - VARGNÄSET OCKUPATION (2025-12-13)

### ✅ Narrativ HTML-sida skapad

**Fil:** `EON/kapitel/kapitel-7-vargnaset.html`
**Storlek:** ~900 rader HTML med embedded CSS
**Ordmängd:** ~5500 ord narrativ prosa
**Agent:** Manuellt skriven baserat på eon-kapitel-writer-principer

**Innehåll täcker:**
1. **Återkomsten** - Gruppen återvänder till Vargnäset för att leta efter Zentri
2. **Upptäckten** - Byn ockuperad av Arvorns Hammare, häxjägare i varje gathörn
3. **Eira Holms flykt** - Hon och några bybor har flytt till skogen
4. **Mötet i skogen** - Gruppen hittar flyktingarna, får veta sanningen
5. **Kommendör Corvus Askhår** - "Den Rykande Hammaren", 31 år, 23 år som häxjägare
6. **Sankt Astrid** - 12-årig flicka korsfäst för att ha ljugit om spelarna
7. **Gudomlig uppenbarelse** - Daak talar genom Astrid, hennes blod fryser inte
8. **Astrids förlåtelse** - Hennes sista ord, den tyngsta bördan
9. **Corvus kollaps** - 23 års övertygelse krossad, existentiell kris
10. **Protokoll Järnrening** - Order om total utplåning av byn
11. **Konfrontationen** - Gruppen stormade kommandotältet för att stoppa Corvus
12. **Corvus vändning** - Han vänder sig mot sina egna mitt i striden
13. **Striden vid gryningen** - 15 häxjägare döda, resten flyr
14. **Den fruktansvärda insikten** - Hela byn måste evakueras eller dö
15. **Corvus blir spelarkaraktär** - Daniel tar över som Corvus "Arcadius" Askhar
16. **Evakueringsplanering** - Genom Drunok mot Grensfortet

**Stil och ton:**
- **Joe Abercrombie (40%):** Brutal realism (Astrids korsfästelse), cynisk ton, rå våld
- **Robin Hobb (40%):** Corvus djupa emotionella kollaps, Astrids förlåtelse som tyngsta bördan
- **POV:** Primärt Gordon (ledaren), roterande till Corvus inre kris
- **Atmosfär:** Mörk, tragisk, vändpunkt - ett barns död förändrar allt

**Emotionella kärnor:**
- **Astrids offer:** Oskyldigt barn som dör för att skydda spelarna
- **Corvus vaknade:** 23 år av blod och fanatism krossad på ett ögonblick
- **Förlåtelsens börda:** "Att förlåtas av den du dödat... det finns ingen tyngre börda"
- **Gruppens skuld:** Deras närvaro kostade Vargnäset allt

**Nyckelscener:**
- **Korsfästelsen:** Grafisk, brutal, men inte exploaterande
- **Daaks uppenbarelse:** Gudomlig röst genom döende barn
- **Corvus knäböjande:** Mannen som insåg att han varit ett monster
- **Vändningen:** Svärd genom sina egna bröders ryggar
- **"Jag förtjänade aldrig hennes förlåtelse":** Corvus tragiska erkännande

**Tekniska element:**
- ✅ Full HTML-struktur med embedded CSS (samma färgschema som dashboard)
- ✅ Sticky navigation bar med tillbaka-knapp till ../index.html
- ✅ Chapter header med metadata (plats, närvarande, Corvus blir spelarkaraktär)
- ✅ Entity-länkar via kapitel-linkify.js (NPCs orange, platser purple, fraktioner gold)
- ✅ Info-box (red) för Protokoll Järnrening
- ✅ Info-box (purple) för Corvus bakgrund och Astrids martyr-status
- ✅ Info-box (gold) för Corvus vändning
- ✅ Quote-boxar för Daaks röst och Astrids sista ord

**Validerat mot kampanjkrönika.md:**
- ✅ 100% baserad på kampanjkrönika.md (rad 1386-1435)
- ✅ Kronologisk ordning korrekt
- ✅ Inga uppfunna händelser
- ✅ Alla viktiga detaljer inkluderade:
  - Corvus 31 år, adelsfamilj från Soldarn
  - Kidnappades som 8-åring, 23 år som häxjägare
  - Astrid 12 år, korsfästes för att ha ljugit
  - Blodet frös inte trots kylan
  - Hennes sista ord: förlåtelse
  - Corvus vändning mitt i strid
  - Daniel tog över Corvus som spelarkaraktär
  - Insikt om Järnrening och evakuering

**Nyckelsektioner:**
- **h2:** Återkomsten, Ockupationen, Mötet i Skogen, Infiltrationen, Sankt Astrid, Kollapsen, Konfrontationen, Efterdyningarna
- **h3:** Första skylten, Byn, Flyktingarna, Kommendören, Upptäckten, Avrättningen, De sista orden, Kommendörens fall, Ordern, Planen spricker, Vändningen, Striden vid gryningen, Den hemska insikten, Corvus blir spelarkaraktär, Evakueringen planeras

**Narrativa höjdpunkter:**
- Astrids korsfästelse och Daaks röst genom henne
- Corvus knäböjande under korset, själen krossad
- "Jag förtjänade aldrig hennes förlåtelse" - upprepat mantra
- Striden där Corvus vände sig mot sina egna
- Gordons erbjudande: "Du kan dö meningsfullt istället för jagad som ett djur"
- Avslutande scen: Tomt Vargnäset, ett kors på torget, ett monuments över vad övertygelse kostar

**Speciella kännetecken:**
- Detta är det mörkaste kapitlet hittills - ett barns död driver hela narrativet
- Corvus vändning är kampanjens största karaktärstransformation
- Astrids förlåtelse som vapen mot Corvus - värre än vilket straff som helst
- Setup för Kapitel 8 (Evakueringen genom Drunok)

---

## NYTT: KAPITEL 6 - ÅTERKOMST TILL VITTERDAL (2025-12-13)

### ✅ Narrativ HTML-sida skapad

**Fil:** `EON/kapitel/kapitel-6-vitterdal.html`
**Storlek:** ~680 rader HTML med embedded CSS
**Ordmängd:** ~4200 ord narrativ prosa
**Agent:** Manuellt skriven baserat på eon-kapitel-writer-principer

**Innehåll täcker:**
1. **Ylvas död vid bergpasset** - Kärlingarnas bakhåll, armborstslodet som tar en jägarflicka
2. **Graven vid vägen** - Sorgens pris, varningen om jakten
3. **Frostnymfen** - Tirakisk isbrytare uppför Raunfloden
4. **Besättningen** - Kapten Nilmar, Selene "Silveröga", Garsten, Esma, och andra
5. **Fem farliga dagar:**
   - Dag 1: Avgång från Jarla, Selenes varning
   - Dag 2: Isbarriären (sabotage)
   - Dag 3: Ljussignalerna (Systrarna spårar dem)
   - Dag 4: Övergivna handelsstationen (förrädare från Mitrahus)
   - Dag 5: Fallet vid forsen, fortsättning till fots med Esma
6. **Triumferande hemkomst** - Vitterdal nås äntligen
7. **Lantrådet** - Hagge erkänns officiellt som jarl, Kung Vidkun besegras
8. **Belöningsceremonin** - Gordon (kapten), Umnatak (jaktkniv), Kazrik (lärd man), Thrakka (välkomnad), alla (skattefrihet, hus, option på Grensfortet)
9. **Äventyrarnas hus** - Detaljerad beskrivning av hemmet vid Mitrahus
10. **Personal** - Fru Gerda, Lina, Alrik
11. **Livet mellan uppdragen** - Gordon/Umnatak/Kazrik/Thrakkas rutiner
12. **Vila och planering** - Sorgens arbete, Kaelar blir huskapten, förberedelser för Skugglandet

**Stil och ton:**
- **Joe Abercrombie (40%):** "Hjältar var dyra att följa" - cynisk realism, rå action, lakonisk humor
- **Robin Hobb (40%):** Ylvas död, sorgens arbete, priset för att överleva
- **POV:** Primärt Gordon (ledaren, ansvarstyngd), roterande till andra vid behov
- **Atmosfär:** Tragedi (Ylva), paranoia (jakt på floden), lättnad (hemkomst), melankoli (temporär vila)

**Emotionella kärnor:**
- **Ylvas död:** Oskyldighet betalade priset för att följa hjältar
- **Frostnymfen-resan:** Paranoia, Soffias nätverk, jakten intensifieras
- **Hemkomsten:** Lättnad mixad med skuld (Zentri saknas)
- **Äventyrarnas hus:** Ett tillfälligt hem, de vet att de snart ger sig av igen

**Tekniska element:**
- ✅ Full HTML-struktur med embedded CSS (samma färgschema som dashboard)
- ✅ Sticky navigation bar med tillbaka-knapp till ../index.html
- ✅ Chapter header med metadata (plats, närvarande, pris: Ylvas liv)
- ✅ Entity-länkar via kapitel-linkify.js (NPCs orange, platser purple)
- ✅ Info-box (purple) för Selenes hemliga roll
- ✅ Quote-boxar för Ylvas sista ord och arresterings-order

**Validerat mot kampanjkrönika.md:**
- ✅ 100% baserad på kampanjkrönika.md (rad 997-1385)
- ✅ Kronologisk ordning korrekt
- ✅ Inga uppfunna händelser
- ✅ Alla viktiga NPCs inkluderade (Ylva, Nilmar, Selene, Esma, Garsten, tvillingar, Marvo, Laszlo, Burhak, Fru Gerda, Lina, Alrik, Kaelar, Kung Vidkun)

**Nyckelsektioner:**
- **h2:** Priset för att följa hjältar, Frostnymfen, Fem farliga dagar, Triumferande hemkomst, Äventyrarnas hus, Vila och planering, Efterdyningarna
- **h3:** Bakhållet, Graven, Fartyget, Besättningen, Dag 1-5, Lantrådet, Belöning, Hemmet, Livet, Sorgens arbete, Kaelar, Förberedelser, Hagges löfte

**Narrativa höjdpunkter:**
- Ylvas död och Thrakkas oväntat värdiga hyllning till henne
- Frostnymfens besättning som mikroskosm av Soffias nätverk
- De fem dagarnas eskalerande paranoia och sabotage
- Gordons reflektion: "Hjältar var dyra att följa"
- Äventyrarnas hus som temporärt hem
- Avslutande scen: Gordon vid fönstret, "Troligtvis [kommer vi dö där]. Men vi går ändå."

---

## NYTT: KAPITEL 5 - VARGNÄSET (2025-12-12 SENT KVÄLL)

### ✅ Narrativ HTML-sida skapad

**Fil:** `EON/kapitel/kapitel-5-vargnaset.html`
**Storlek:** ~530 rader HTML med embedded CSS
**Ordmängd:** ~3500 ord narrativ prosa
**Agent:** eon-kapitel-writer

**Innehåll täcker:**
1. **Ankomst till Vargnäset** - Desperat by vid Korpklämman
2. **Eira Holms bön** - Byäldsten ber om hjälp mot desertörer
3. **Förberedelser** - Gordon tränar bybor, Kazrik förstärker palissader, Umnatak sätter fällor, Zentri förbereder besvärjelser
4. **Första attacken** - Kald Silvermask och brandpilar (avvärjd)
5. **Huvudattacken** - Samordnad attack från Halrik Kord (väst) och Systrarnas spårhundar (öst)
6. **Zentris desperation** - Spårhundar med silvernät jagar Zentri specifikt
7. **BLODSMAGIN** - Zentri accepterar Urkhaths makt i panik, fyra jägare blir aska
8. **VIRVELN** - Zentri försvinner in i mörk virvel, bränd cirkel kvar
9. **Gordons diplomati** - Övertygar bybor att det var fiendens magi
10. **Thrakkas ankomst** - Dagen efter, med Lady Soffias sigill
11. **Thrakkas bakgrund** - Tirak från arenorna, Mahktahs kallelse, Lady Soffias livvakt
12. **Första mötet** - Gruppen tar emot Thrakka som Zentris ersättare

**Stil och ton:**
- **Joe Abercrombie (40%):** Cynisk, rå, brutal realism, lakonisk humor
- **Robin Hobb (40%):** Emotionell introspektiv, långsamma konsekvenser
- **POV:** Primärt Gordon (ledare), roterande till andra karaktärer
- **Atmosfär:** Desperation, kaos, tragedi, nytt hopp

**Tekniska element:**
- ✅ Full HTML-struktur med embedded CSS (samma färgschema som dashboard)
- ✅ Sticky navigation bar med tillbaka-knapp till ../index.html
- ✅ Chapter header med metadata (plats, närvarande, avgörande händelse)
- ✅ Entity-länkar via kapitel-linkify.js (NPCs orange, platser purple, fraktioner gold)
- ✅ Info-boxar för meta-information
- ✅ Quote-boxar för viktiga dialoger

**Validerat mot kampanjkrönika.md:**
- ✅ 100% baserad på kampanjkrönika.md (rad 840-995)
- ✅ Kronologisk ordning korrekt
- ✅ Inga uppfunna händelser
- ✅ Alla NPCs finns i wiki_data.js

---

## NYTT: MIDJOURNEY-PROMPTS OCH BILDMATCHNING

### ✅ Batch 1: 10 Midjourney-prompts genererade

**Fil:** `midjourney-prompts-npcs-batch-1.md`
**NPCs:** Aisha bint-Najib, Alaric, Ali ibn-Yusuf, Alistair Bågskytt, Pertil Fiskaren, Pertils fru, Amina bint-Khalid, Amina bint-Rashid, Amina bint-Salim, Amir ibn-Farouk

**Stilar:** Arabian/Persian (8), Nordic (2)
**Format:** Portrait 2:3, stilisering 130-160
**Konstnärer:** Gerald Brom, Frank Frazetta, Aleksi Briclot, Jakub Rozalski

**Ändringar:**
- ✅ "Muhad dress" → "Arabian dress"
- ✅ "Stålsvärds Kavalerister tabard" → "military cavalry tabard"
- ✅ Ingen --v parameter i prompts (v7 noterat i metadata)

### ✅ Batch 2: 10 Midjourney-prompts genererade

**Fil:** `midjourney-prompts-npcs-batch-2.md`
**NPCs:** Amira bint-Hassan, Anya Väv, Benne Tok, Beric Brorson, Borga Stenhands, Björn Hammarsmed, Branar Tirakson, Daela Häxmästare, Dain Stenyxa, Darian den Snabbe

**Stilar:** Muhad (1), Nordic (4), Dvärgar (2), Tirak (1), Militär (3)
**Format:** Portrait 2:3, stilisering 130-160

**Särskilda kännetecken:**
- Benne Tok: Grodliknande utseende
- Branar Tirakson: Tirak (grön hud, betar)
- Daela Häxmästare: Svart hud, fallen hero
- Dain Stenyxa: Pessimistisk dvärgbyggare
- Borga Stenhands: Traumatiserad gammal gruvarbetare (Jarnthol)

### ✅ 20 bilder matchade och flyttade

**Agent:** eon-image-curator

**Batch 1 (10 bilder):**
1. aisha-bint-najib.png
2. alaric.png
3. ali-ibn-yusuf.png
4. alistair-bagskytt.png
5. amina-bint-khalid.png
6. amina-bint-rashid.png
7. amina-bint-salim.png
8. amir-ibn-farouk.png
9. pertil-fiskaren.png
10. pertils-fru.png

**Batch 2 (10 bilder):**
11. amira-bint-hassan.png
12. anya-vav.png
13. benne-tok.png
14. beric-brorson.png
15. bjorn-hammarsmed.png
16. borga-stenhands.png
17. branar-tirakson.png
18. daela-haxmastare.png
19. dain-stenyxa.png
20. darian-den-snabbe.png

**Alla flyttade till:** `kampanjwiki/assets/images/npcs/`
**wiki_data.js uppdaterad:** 20 NPCs från `"bild": null` → `"bild": "filnamn.png"`

### ✅ Bildstatus efter batch 1-2

**NPCs:**
- **Totalt:** 242 NPCs
- **Med bilder:** 143 (59.1%) ⬆ +20
- **Utan bilder:** 99 (40.9%) ⬇ -20

**Bildarkiv:**
- npcs/: 202 filer totalt
- Med matchningar: 143 bilder
- Oanvända: ~59 bilder

---

## NYTT: eon-midjourney-prompter AGENT UPPDATERAD

**Fil:** `.claude/agents/eon-midjourney-prompter.md`

**Ändringar:**
- ✅ Borttaget `--v 6.1` från parameterlistan
- ✅ Borttaget "Version: 6.1" från output-format
- ✅ Lagt till instruktion: "Lägg INTE till version-parameter i själva prompten. Notera v7 i metadata om nödvändigt."
- ✅ Alla exempel-prompts uppdaterade (ingen --v parameter)

**Framtida prompts:**
- Ingen version-parameter i själva prompterna
- Generell notering om v7 i början av filen
- Fokus på content, inte tekniska detaljer

---

## BEFINTLIGA KAPITEL

**Skrivna (8 st):**
- ✅ Prolog: Tirakgraven
- ✅ Kapitel 1: Jakten
- ✅ Kapitel 2: Muhad
- ✅ Kapitel 3: Tarkas
- ✅ Kapitel 4: Jargien
- ✅ Kapitel 5: Vargnäset (Zentris försvinnande, Thrakkas ankomst)
- ✅ Kapitel 6: Vitterdal (Ylvas död, Frostnymfen, hemkomst)
- ✅ **Kapitel 7: Vargnäset** (NYA! Ockupation, Sankt Astrid, Corvus vändning)
- ✅ Kapitel 9: Mithera

**Saknas (3 st):**
- ❌ Kapitel 8: Evakueringen
- ❌ Kapitel 10: Skugglandet
- ❌ Kapitel 11+: Slutuppgörelsen

---

## DAGENS ARBETSFLÖDE

1. ✅ **Kapitel 5 skrivet** med eon-kapitel-writer agent
2. ✅ **Batch 1 prompts** genererade med eon-midjourney-prompter
3. ✅ **Batch 1 bilder** matchade från tempbild med eon-image-curator
4. ✅ **Batch 2 prompts** genererade
5. ✅ **Batch 2 bilder** matchade från tempbild
6. ✅ **EON-termer fixade** i prompts (Muhad, Stålsvärds, etc → generiska termer)
7. ✅ **Version-parametrar** borttagna från prompts (v7 noterat i metadata)
8. ✅ **eon-midjourney-prompter** agent uppdaterad för framtiden

---

## GIT STATUS

**Branch:** main
**Status:** ⏳ Pushar till remote...

**Senaste commit (precis):**
```
d66263e - Lägg till Kapitel 5, 20 NPC-bilder och Midjourney-prompts

- Nytt kapitel: kapitel-5-vargnaset.html
- 20 nya NPC-bilder matchade och flyttade
  * Batch 1 (10): Aisha, Alaric, Ali, Alistair, Pertil, Pertils fru, Amina x3, Amir
  * Batch 2 (10): Amira, Anya, Benne, Beric, Borga, Björn, Branar, Daela, Dain, Darian
- wiki_data.js uppdaterad: 143 NPCs har nu bilder (59%)
- Midjourney-prompts för 20 NPCs (batch 1-2)
- eon-midjourney-prompter agent uppdaterad: v7, ingen --v i prompts
- CURRENT_STATE.md uppdaterad
```

**Filer ändrade (26 st):**
- wiki_data.js
- kapitel/kapitel-5-vargnaset.html (NY)
- midjourney-prompts-npcs-batch-1.md (NY)
- midjourney-prompts-npcs-batch-2.md (NY)
- .claude/agents/eon-midjourney-prompter.md
- CURRENT_STATE.md
- 20 nya bilder i kampanjwiki/assets/images/npcs/

---

## KVARVARANDE ARBETE

### Prioritet 1: Fler bilder
- 99 NPCs saknar fortfarande bilder
- ~59 oanvända bilder i arkivet att matcha
- Kan generera batch 3-10 Midjourney-prompts vid behov

### Prioritet 2: Fler kapitel
- 5 kapitel kvar att skriva (6, 7, 8, 10, 11+)
- Använd eon-kapitel-writer agent
- Basera på kampanjkrönika.md

### Prioritet 3: Platsbilder
- 58 platser totalt
- Många saknar bilder
- Generera Midjourney-prompts för viktiga platser

---

## NUVARANDE DATA

**Dashboard:** `EON/index.html` (huvudfil)
**NPC-databas:** `wiki_data.js` (242 NPCs, 58 platser, 11 kapitel)
**Fraktionsdatabas:** `fraktioner_data.js` (45 fraktioner)
**Kampanjkrönika:** `kampanjkrönika.md` (master source of truth)
**Kapitel-sidor:** `EON/kapitel/` (6 kapitel skrivna)
**Bilder:** `kampanjwiki/assets/images/npcs/` (143 NPCs med bilder, 99 utan)
**Midjourney-prompts:** `midjourney-prompts-npcs-batch-1.md`, `batch-2.md`

**Agenter:**
- `.claude/agents/eon-data-guardian.md` - Säker wiki_data.js-uppdatering
- `.claude/agents/eon-chronicler.md` - Kampanjkrönikan
- `.claude/agents/eon-doc-extractor.md` - Dokumentdataextraktion
- `.claude/agents/eon-image-curator.md` - Bildmatchning
- `.claude/agents/eon-kapitel-writer.md` - Narrativa HTML-sidor
- `.claude/agents/eon-midjourney-prompter.md` - Midjourney-prompts

**Skills:**
- `.claude/skills/eon-npc-adder/` - NPC-tillägg en i taget

---

## LESSONS LEARNED DENNA SESSION

**Midjourney-prompts:**
- ✅ Använd generiska fantasy-termer (Arabian, Nordic, cavalry), INTE EON-specifika (Muhad, Stålsvärds)
- ✅ Ingen version-parameter i själva prompten (--v 7), bara notering i metadata
- ✅ Fokus på visuella beskrivningar, inte kampanjspecifika detaljer

**Bildmatchning:**
- ✅ tempbild-mappen som mellanstation fungerar bra
- ✅ eon-image-curator matchar automatiskt med fuzzy matching
- ✅ Batch-läge (10 bilder i taget) effektivt
- ✅ Validera wiki_data.js efter varje batch

**Kapitel-skrivning:**
- ✅ eon-kapitel-writer producerar högkvalitativ prosa
- ✅ 100% baserad på kampanjkrönika.md = konsistent
- ✅ Abercrombie/Hobb-stil passar EON-tonen perfekt
- ✅ Entity-länkar skapas automatiskt via kapitel-linkify.js

---

*Senast uppdaterad: 2025-12-12 (sent kväll)*
*Status: Push pågår - nästa steg: Vänta på fler Midjourney-bilder eller fortsätt med kapitel 6*
