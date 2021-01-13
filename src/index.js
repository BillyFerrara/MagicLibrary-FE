const spellbookURL = 'http://localhost:3000/spellbooks'
const spellURL = 'http://localhost:3000/spells'

const createSpellbookForm = document.getElementById("Spellbook-form")
//console.log('index.js')


Spellbook.fetchSpellbook();

createSpellbookForm.addEventListener('submit', Spellbook.formHandler)

