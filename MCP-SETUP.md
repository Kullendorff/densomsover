# MCP-servrar Setup - Claude Code

**Syfte:** Peka Claude Code mot denna fil och be den konfigurera allt.
**Krav:** Node.js installerat, Claude Code med root-rättigheter.

---

## Instruktion till Claude Code

> Läs denna fil och kör alla steg nedan. Du har fulla root-rättigheter.
> Skapa `.mcp.json` i projektets rot OCH kör CLI-kommandona för user-scope-servrar.
> Verifiera att allt fungerar genom att köra `/mcp` efteråt.

---

## Steg 1: Installera beroenden globalt

```bash
npm install -g @anthropic-ai/claude-code
npm install -g npx
```

## Steg 2: Skapa `.mcp.json` i projektroten

Skapa filen `.mcp.json` i EON-projektets rot (`/home/user/densomsover/.mcp.json`) med följande innehåll:

```json
{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/"
    },
    "fetch": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    },
    "memory": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "sequential-thinking": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    },
    "puppeteer": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}
```

## Steg 3: Kör CLI-kommandon för att registrera servrarna

Kör dessa kommandon i terminalen:

```bash
# GitHub - PRs, issues, kodgranskning (autentisera via /mcp i Claude Code efteråt)
claude mcp add --transport http --scope project github https://api.githubcopilot.com/mcp/

# Fetch - Hämta webbinnehåll utan begränsningar (bättre än inbyggda WebFetch)
claude mcp add --transport stdio --scope project fetch -- npx -y @modelcontextprotocol/server-fetch

# Memory - Persistent kunskapsgraf mellan sessioner (perfekt för kampanjkontinuitet)
claude mcp add --transport stdio --scope project memory -- npx -y @modelcontextprotocol/server-memory

# Sequential Thinking - Dynamisk problemlösning för komplexa uppgifter
claude mcp add --transport stdio --scope project sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking

# Puppeteer - Webbläsarautomation (testa dashboard lokalt)
claude mcp add --transport stdio --scope project puppeteer -- npx -y @modelcontextprotocol/server-puppeteer
```

## Steg 4: Autentisera GitHub

Inne i Claude Code, kör:

```
/mcp
```

Välj "github" och följ OAuth-flödet i webbläsaren för att autentisera.

## Steg 5: Verifiera

```bash
claude mcp list
```

Alla 5 servrar ska vara listade och aktiva.

---

## Vad varje server ger dig

### `github` (HTTP)
- **Vad:** Full GitHub-integration direkt i Claude Code
- **Ger dig:** Skapa/granska PRs, hantera issues, sök kod på GitHub, code reviews
- **EON-nytta:** Snabbare arbetsflöde med git repo, automatiska PR-beskrivningar

### `fetch` (stdio)
- **Vad:** Hämtar webbsidor och konverterar till markdown
- **Ger dig:** Obegränsad webåtkomst utan de restriktioner inbyggda WebFetch har
- **EON-nytta:** Hämta referensmaterial, dokumentation, EON-wiki-resurser online

### `memory` (stdio)
- **Vad:** Persistent kunskapsgraf som sparas mellan sessioner
- **Ger dig:** Claude kommer ihåg fakta, relationer och beslut mellan sessioner
- **EON-nytta:** Kampanjkontinuitet - NPC-relationer, plothåll, beslut, pågående trådar. Kompletterar learnings.md med strukturerad, sökbar data

### `sequential-thinking` (stdio)
- **Vad:** Dynamiskt resonerande med möjlighet att revidera och förgrena tankekedjor
- **Ger dig:** Bättre problemlösning för komplexa flerstegsuppgifter
- **EON-nytta:** Kontinuitetskontroller, plotplanering, komplexa NPC-nätverk, kampanjplanering

### `puppeteer` (stdio)
- **Vad:** Styr en webbläsare (Chrome) programmatiskt
- **Ger dig:** Öppna sidor, ta screenshots, klicka, fylla i formulär
- **EON-nytta:** Testa dashboard (index.html) lokalt, verifiera att kapitel-sidor renderar korrekt, ta screenshots för dokumentation

---

## Valfria tillägg

### Om du vill ha databasåtkomst (SQLite för kampanjdata):

```bash
claude mcp add --transport stdio --scope project sqlite -- npx -y @modelcontextprotocol/server-sqlite --db-path /path/to/campaign.db
```

### Om du vill ha Notion-integration:

```bash
claude mcp add --transport http --scope project notion https://mcp.notion.com/mcp
```

### Om du vill ha Sentry (felmonitorering):

```bash
claude mcp add --transport http --scope project sentry https://mcp.sentry.dev/mcp
```

---

## Felsökning

### Problem: npx hittas inte
```bash
which npx
# Om saknas: installera Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Problem: Server startar inte
```bash
# Testa manuellt
npx -y @modelcontextprotocol/server-fetch
# Ctrl+C för att avbryta
```

### Problem: GitHub-auth misslyckas
```bash
# Kontrollera att gh CLI är installerat och autentiserat
gh auth status
# Om ej: gh auth login
```

### Problem: Ta bort en server
```bash
claude mcp remove <server-namn>
```

### Problem: Starta om efter konfigurationsändring
Stäng och öppna Claude Code igen - MCP-servrar laddas vid uppstart.

---

## Referens

- Konfigfil: `.mcp.json` (projektrot) eller `~/.claude.json` (global)
- Hantera i session: `/mcp`
- Lista servrar: `claude mcp list`
- Prioritet: Lokal > Projekt > User scope
- Docs: https://docs.anthropic.com/en/docs/claude-code/mcp
