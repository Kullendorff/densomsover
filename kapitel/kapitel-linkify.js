/**
 * Kapitel Auto-Link Script
 * Söker igenom prose-texten och gör NPCs, platser och fraktioner klickbara.
 * Länkarna öppnar modaler i dashboard.
 */

// Vänta tills wiki_data och fraktioner_data är laddade
document.addEventListener('DOMContentLoaded', function() {
    // Vänta lite för att säkerställa att externa scripts har laddats
    setTimeout(linkifyContent, 100);
});

function linkifyContent() {
    // Kontrollera att data finns
    if (typeof wikiData === 'undefined') {
        console.warn('wiki_data.js inte laddat - auto-länkning hoppad');
        return;
    }

    // Samla alla namn att söka efter
    const npcs = (wikiData.npcs || []).map(n => ({
        namn: n.namn,
        type: 'npc'
    }));

    const platser = (wikiData.platser || []).map(p => ({
        namn: p.namn,
        type: 'plats'
    }));

    let fraktioner = [];
    if (typeof fraktionerData !== 'undefined') {
        const allFraktioner = [
            ...(fraktionerData.handelshus || []),
            ...(fraktionerData.magihus || []),
            ...(fraktionerData.militära || []),
            ...(fraktionerData.kriminella || []),
            ...(fraktionerData.övriga || [])
        ];
        fraktioner = allFraktioner.map(f => ({
            namn: f.namn,
            type: 'fraktion'
        }));
    }

    // Kombinera alla och sortera efter längd (längst först för att undvika partiella matchningar)
    const allEntities = [...npcs, ...platser, ...fraktioner]
        .filter(e => e.namn && e.namn.length > 2) // Ignorera för korta namn
        .sort((a, b) => b.namn.length - a.namn.length);

    // Skapa en uppslagstabell för snabbare sökning
    const entityMap = new Map();
    allEntities.forEach(e => {
        entityMap.set(e.namn.toLowerCase(), e);
    });

    // Hitta prose-elementet
    const prose = document.querySelector('.prose');
    if (!prose) {
        console.warn('Inget .prose element hittat');
        return;
    }

    // Processa alla textnoder
    processNode(prose, entityMap);

    console.log(`Auto-länkning klar: ${entityMap.size} möjliga entiteter`);
}

function processNode(node, entityMap) {
    // Ignorera script, style och redan länkade element
    if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase();
        if (tagName === 'script' || tagName === 'style' || tagName === 'a') {
            return;
        }
        // Ignorera info-box-title och liknande
        if (node.classList.contains('info-box-title')) {
            return;
        }
    }

    // Processa textnoder
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
    // Hitta alla matchningar
    const matches = [];

    for (const [namn, entity] of entityMap) {
        // Använd word boundaries för att undvika partiella matchningar
        // Escape specialtecken i namnet
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

    // Om inga matchningar, returnera null
    if (matches.length === 0) return null;

    // Sortera matchningar efter position
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

    // Bygg fragment med länkar
    const fragment = document.createDocumentFragment();
    let currentPos = 0;

    for (const match of filteredMatches) {
        // Lägg till text före matchningen
        if (match.start > currentPos) {
            fragment.appendChild(document.createTextNode(text.slice(currentPos, match.start)));
        }

        // Skapa länk
        const link = document.createElement('a');
        link.href = `../index.html?modal=${match.entity.type}&name=${encodeURIComponent(match.entity.namn)}`;
        link.textContent = match.original;
        link.className = 'entity-link entity-' + match.entity.type;
        link.title = `Visa ${match.entity.type === 'npc' ? 'NPC' : match.entity.type === 'plats' ? 'plats' : 'fraktion'}: ${match.entity.namn}`;
        fragment.appendChild(link);

        currentPos = match.end;
    }

    // Lägg till resterande text
    if (currentPos < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(currentPos)));
    }

    return fragment;
}
