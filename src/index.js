const spellbookURL = 'http://localhost:3000/spellbooks'
const spellURL = 'http://localhost:3000/spells'

//console.log('index.js')
function fetchSpellbooks()
{
   fetch(spellbookURL)
   .then(res => res.json())
   .then(sb => sb.forEach(spellbook => {
      let newSpellbook = new Spellbook(spellbook.title)
   console.log(newSpellbook)
   renderSpellbook(Spellbook)
   })) 
}

function renderSpellbook()