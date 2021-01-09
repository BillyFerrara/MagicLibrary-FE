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
   renderSpellbook(newSpellbook)
   })) 
}

function renderSpellbook(newSpellbook){
   for ( let sb of newSpellbook) {

   const sbUL = document.getElementById('spellbook-list')
   
   const sbLI = document.createElement('li')
   const p = document.createElement('p')

   p.innerHTML = sb.title
   sbLI.appendChild(p)
   sbUL.appendChild(sbLI)
   }
}

fetchSpellbooks();