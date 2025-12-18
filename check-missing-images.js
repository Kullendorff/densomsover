const d = require('./master/wiki_data.js');

const npcsUtan = d.npcs.filter(n => !n.bild);
const platserUtan = d.platser.filter(p => !p.bild);

console.log('=== BILDSTATUS ===');
console.log('NPCs totalt:', d.npcs.length);
console.log('NPCs MED bilder:', d.npcs.filter(n => n.bild).length);
console.log('NPCs UTAN bilder:', npcsUtan.length);
console.log('');
console.log('Platser totalt:', d.platser.length);
console.log('Platser MED bilder:', d.platser.filter(p => p.bild).length);
console.log('Platser UTAN bilder:', platserUtan.length);
console.log('');
console.log('=== NPCs UTAN BILDER ===');
npcsUtan.forEach(n => {
  console.log(n.namn + ' | ' + n.ras + ' | ' + n.titel);
});
console.log('');
console.log('=== PLATSER UTAN BILDER ===');
platserUtan.forEach(p => {
  console.log(p.namn + ' | ' + p.region);
});
