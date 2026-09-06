/**
 * Kapitel Auto-Link Script
 * Söker igenom prose-texten och gör NPCs, platser och fraktioner klickbara.
 * Länkarna öppnar detaljvyn på respektive registersida (#typ/slug).
 */

const REGISTER_FILE = { npc: 'npcer.html', plats: 'platser.html', fraktion: 'fraktioner.html' };

// document.currentScript är bara giltig under skriptets EGEN synkrona körning — måste
// sparas här, innan vi går in i den asynkrona DOMContentLoaded-callbacken där den blir null.
// Sökväg räknas ut relativt till SKRIPTETS egen URL, inte den anropande sidans — fungerar
// oavsett om det är kapitel/ eller fluff/ som laddar filen.
const DATA_URL = new URL('../data/entities.json', document.currentScript.src).href;

document.addEventListener('DOMContentLoaded', function () {
    fetch(DATA_URL)
        .then(r => r.json())
        .then(entities => linkifyContent(entities))
        .catch(err => console.warn('Kunde inte läsa data/entities.json - auto-länkning hoppad', err));
});

function linkifyContent(entities) {
    const allEntities = entities
        .filter(e => e.namn && e.namn.length > 2) // Ignorera för korta namn
        .sort((a, b) => b.namn.length - a.namn.length); // längst först, undviker partiella matchningar

    const entityMap = new Map();
    allEntities.forEach(e => {
        if (!entityMap.has(e.namn.toLowerCase())) entityMap.set(e.namn.toLowerCase(), e);
    });

    const prose = document.querySelector('.prose');
    if (!prose) {
        console.warn('Inget .prose element hittat');
        return;
    }

    processNode(prose, entityMap);
    console.log(`Auto-länkning klar: ${entityMap.size} möjliga entiteter`);
}

function processNode(node, entityMap) {
    if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase();
        if (tagName === 'script' || tagName === 'style' || tagName === 'a') {
            return;
        }
        if (node.classList.contains('box__label')) {
            return;
        }
    }

    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        if (!text.trim()) return;

        const fragment = linkifyText(text, entityMap);
        if (fragment) {
            node.parentNode.replaceChild(fragment, node);
        }
        return;
    }

    // Rekursivt processa barn (bakvänt för att undvika problem med modifierade noder)
    const children = Array.from(node.childNodes);
    children.forEach(child => processNode(child, entityMap));
}

function linkifyText(text, entityMap) {
    const matches = [];

    for (const [, entity] of entityMap) {
        const escapedName = entity.namn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedName}\\b`, 'gi');

        let match;
        while ((match = regex.exec(text)) !== null) {
            matches.push({
                start: match.index,
                end: match.index + match[0].length,
                original: match[0],
                entity: entity
            });
        }
    }

    if (matches.length === 0) return null;

    matches.sort((a, b) => a.start - b.start);

    // Ta bort överlappande matchningar (behåll den första/längsta)
    const filteredMatches = [];
    let lastEnd = 0;
    for (const match of matches) {
        if (match.start >= lastEnd) {
            filteredMatches.push(match);
            lastEnd = match.end;
        }
    }

    const fragment = document.createDocumentFragment();
    let currentPos = 0;

    for (const match of filteredMatches) {
        if (match.start > currentPos) {
            fragment.appendChild(document.createTextNode(text.slice(currentPos, match.start)));
        }

        const link = document.createElement('a');
        const file = REGISTER_FILE[match.entity.typ];
        link.href = `../register/${file}#${match.entity.typ}/${match.entity.slug}`;
        link.textContent = match.original;
        link.className = 'entity-link entity-' + match.entity.typ;
        link.title = `Visa ${match.entity.typ === 'npc' ? 'NPC' : match.entity.typ === 'plats' ? 'plats' : 'fraktion'}: ${match.entity.namn}`;
        fragment.appendChild(link);

        currentPos = match.end;
    }

    if (currentPos < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(currentPos)));
    }

    return fragment;
}
