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
   renderSpellbook(sb)
   })) 
}

function renderSpellbook(sb){
   for ( let s of sb) {

   const sbUL = document.getElementById('spellbook-list')
   
   const sbLI = document.createElement('li')
   const p = document.createElement('p')

   p.innerHTML = s.title
   sbLI.append(p)
   sbUL.append(sbLI)
   }
}

fetchSpellbooks();