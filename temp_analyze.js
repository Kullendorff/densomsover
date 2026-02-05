const d = require('./master/wiki_data.js');

// Gruppera NPCs efter plats
const byPlats = {};
d.npcs.forEach(npc => {
  const plats = npc.plats || 'Okänd';
  if (!byPlats[plats]) byPlats[plats] = [];
  byPlats[plats].push(npc.namn);
});

// Gruppera NPCs efter fraktion
const byFraktion = {};
d.npcs.forEach(npc => {
  const fraktion = npc.fraktion || 'Ingen fraktion';
  if (!byFraktion[fraktion]) byFraktion[fraktion] = [];
  byFraktion[fraktion].push(npc.namn);
});

console.log('=== PLATSER MED FLEST NPCs ===');
Object.entries(byPlats)
  .sort((a,b) => b[1].length - a[1].length)
  .slice(0, 15)
  .forEach(([plats, npcs]) => console.log(`${plats}: ${npcs.length} NPCs`));

console.log('\n=== FRAKTIONER MED FLEST NPCs ===');
Object.entries(byFraktion)
  .sort((a,b) => b[1].length - a[1].length)
  .slice(0, 15)
  .forEach(([fraktion, npcs]) => console.log(`${fraktion}: ${npcs.length} NPCs`));

console.log('\n=== PLATSER (alla) ===');
console.log(`Totalt: ${d.platser.length} platser`);
d.platser.slice(0, 20).forEach(p => console.log(`- ${p.namn} (${p.typ})`));
