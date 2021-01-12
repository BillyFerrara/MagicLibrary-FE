const spellbookURL = 'http://localhost:3000/spellbooks'
const spellURL = 'http://localhost:3000/spells'
const createSpellbook = document.getElementById('Spellbook-form')
//console.log('index.js')


Spellbook.fetchSpellbook();

createSpellbook.addEventListener('submit', Spellbook.formHandler)
// Spell.renderSpell();