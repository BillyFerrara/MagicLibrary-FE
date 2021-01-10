class Spellbook{
    constructor(title) {
        this.title = title
    }
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
   const spellUL = document.createElement('ul')
   const spellP = document.createElement('p')
      // needs a const for a new spell form 

    s.spells.forEach(spell => {
      let newSpell = new Spell(spell)
      debugger
     })  
     
   spellUL.append(spellP)

   p.innerHTML = s.title
   sbLI.append(p)
   sbUL.append(sbLI, spellUL)

      console.log(s.spells)
   }
   
}


//console.log('spellbook')