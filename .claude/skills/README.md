# Installerade Webbdesign Skills

*Installationsdatum: 2025-12-26*

Denna katalog innehåller 6 specialiserade skills för webbdesign och frontend-utveckling, installerade från SkillsMP och Anthropic's officiella repository.

## Översikt

| Skill | Radantal | Källa | Kategori |
|-------|----------|-------|----------|
| **frontend-design** | 42 | Anthropic (officiell) | Design System |
| **landing-page-guide-v2** | 616 | Custom (baserad på bear2u) | Landing Pages |
| **tailwind-css** | 1274 | manutej/luxor | CSS Framework |
| **brand-guidelines** | 73 | Anthropic (officiell) | Branding |
| **web-artifacts-builder** | 73 | Anthropic (officiell) | React Artifacts |
| **eon-npc-adder** | 155 | Custom (EON-projekt) | Kampanjdata |

**Totalt:** 2233 rader skill-dokumentation

---

## 🎨 Design & Aesthetics

### 1. Frontend Design (Anthropic)
**Fil:** `frontend-design/Skill.md`
**Användning:** Bygga distinkta, produktionskvalitets-gränssnitt

**Nyckelprinciper:**
- Undvik generiska AI-estetiker (Inter, Roboto, lila gradienter)
- Välj unika, karaktärsfulla typsnitt
- Skapa oväntade layouter och kompositioner
- Implementera motion och mikrointeraktioner
- Balansera maximalism vs minimalism med intentionalitet

**När använda:**
- Webbkomponenter och sidor
- Dashboards och applikationer
- React-komponenter
- HTML/CSS-layouter
- När du vill höja designkvaliteten

**Exempel aesthetic directions:**
- Brutally minimal
- Maximalist chaos
- Retro-futuristic
- Organic/natural
- Luxury/refined
- Brutalist/raw

---

### 2. Landing Page Guide V2 (Custom)
**Fil:** `landing-page-guide-v2/Skill.md`
**Användning:** Högkonverterande landing pages med Next.js 14+

**De 11 Essentiella Elementen:**
1. SEO-optimerad URL
2. Företagslogga (header)
3. Hero-titel & undertitel
4. Primär CTA
5. Social proof (reviews, badges)
6. Bilder/videos (produktdemo)
7. Kärnfördelar (3-6 features)
8. Kundomdömen (4-6 reviews)
9. FAQ-sektion (5-10 frågor)
10. Avslutande CTA
11. Footer (legal, kontakt)

**Tech Stack:**
- Next.js 14+ App Router
- TypeScript
- Tailwind CSS
- ShadCN UI (kraftigt customiserad)
- Framer Motion (optional)

**Aesthetic Directions:**
- **SaaS:** Minimalist, Tech-Forward, Bold
- **E-commerce:** Luxury, Energetic, Natural
- **Service/Agency:** Creative, Editorial, Portfolio
- **Event:** Exciting, Professional, Community

**När använda:**
- Marketing landing pages
- Produktlanseringar
- Event-registrering
- Lead generation
- Portfolio-sidor

---

### 3. Tailwind CSS (Luxor)
**Fil:** `tailwind-css/Skill.md`
**Användning:** Utility-first CSS framework

**Omfattar:**
- Core utilities (layout, spacing, typography, colors)
- Responsive design patterns (mobile-first)
- Dark mode implementation
- Component extraction (React, Vue, Svelte)
- Theme customization (@theme directive)
- Production optimization (purging, minification)

**Breakpoints:**
```css
sm: 640px   /* Tablet */
md: 768px   /* Tablet landscape */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

**Plugins:**
- `@tailwindcss/typography` - Prose styling
- `@tailwindcss/forms` - Form defaults
- `@tailwindcss/container-queries` - Container queries

**När använda:**
- Alla moderna webbprojekt
- Responsiv design
- Snabb prototyping
- Designsystem-implementation
- När du behöver CSS-referens

---

## 🏢 Branding & Artifacts

### 4. Brand Guidelines (Anthropic)
**Fil:** `brand-guidelines/Skill.md`
**Användning:** Applicera Anthropic's varumärkesriktlinjer

**Innehåll:**
- Officiella färger och typografi
- Visuell identitet
- Design standards

**När använda:**
- När du bygger för Anthropic-projekt
- Behöver officiella brand colors
- Skapar artifacts med Anthropic look-and-feel

---

### 5. Web Artifacts Builder (Anthropic)
**Fil:** `web-artifacts-builder/Skill.md`
**Användning:** Komplexa React-artifacts för claude.ai

**Features:**
- Multi-komponent React-projekt
- State management
- Client-side routing
- ShadCN UI-integration
- Bundle till single HTML-artifact

**Workflow:**
1. Initiera React-projekt
2. Bygg komponenter med Tailwind + shadcn/ui
3. Bundla till `bundle.html`
4. Dela som artifact i Claude-konversation

**När använda:**
- Komplexa artifacts (inte simpel HTML)
- Behöver state management
- Routing krävs
- ShadCN UI-komponenter

---

## 🎮 EON-Projekt

### 6. EON NPC Adder (Custom)
**Fil:** `eon-npc-adder/Skill.md`
**Användning:** Säker NPC-tillägg till wiki_data.js

**Metod:**
- Alfabetisk placering
- Strukturell Edit-matching
- Omedelbar validering
- EN NPC åt gången

**När använda:**
- Manuellt lägga till 1-3 NPCs
- Maximal kontroll och säkerhet
- Undvika syntax-fel

*För batch-tillägg (5-15 NPCs), använd `eon-data-guardian` agent istället.*

---

## Hur man använder skills

### Via Skill-kommandot
```bash
# Aktivera en skill i konversationen
/skill frontend-design
/skill landing-page-guide-v2
/skill tailwind-css
```

### Via direktreferens
Skills laddas automatiskt av Claude Code när relevanta uppgifter efterfrågas.

### Kombinera skills
Du kan kombinera flera skills i samma konversation:
```
Använd frontend-design för estetik + tailwind-css för implementation
+ landing-page-guide-v2 för strukturen
```

---

## Rekommendationer för EON-projektet

### För Dashboard-förbättring:
1. **frontend-design** - Höj visuell kvalitet
2. **tailwind-css** - Modernisera CSS-struktur (om refactoring)
3. **landing-page-guide-v2** - Hero-sektion inspiration

### För Kapitel-sidor:
1. **frontend-design** - Narrativ layout-design
2. **tailwind-css** - Responsiv typography och spacing

### För Kampanjsidor:
1. **landing-page-guide-v2** - Strukturerad layout med CTA:er
2. **frontend-design** - Fantasy-estetik implementation

---

## Källor

- **Anthropic Skills Repository:** https://github.com/anthropics/skills
- **Luxor Claude Marketplace:** https://github.com/manutej/luxor-claude-marketplace
- **SkillsMP:** https://skillsmp.com
- **Landing Page Guide (Inspiration):** https://github.com/bear2u/my-skills

---

## Nästa steg

**Utforska:**
1. Testa `frontend-design` på en ny kapitel-sida
2. Använd `tailwind-css` som CSS-referens
3. Applicera `landing-page-guide-v2`-principer på dashboard hero-sektion

**Lär dig:**
- Läs igenom skill-filerna för djupare förståelse
- Experimentera med olika aesthetic directions
- Kombinera principer från flera skills

**Utveckla:**
- Skapa custom skills för EON-specifika workflows
- Dokumentera lärdomar i nya skills
- Dela användbara skills tillbaka till communityn

---

*Installerat av Claude Code - 2025-12-26*
