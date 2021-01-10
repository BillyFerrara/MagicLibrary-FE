class Spellbook{

    static allSpellbooks = []

    constructor(spellbook) {
        this.title = spellbook.title
        this.spells = spellbook.spells

        Spellbook.allSpellbooks.push(this)
    }

    static fetchSpellbooks() {
        fetch(spellbookURL)
        .then(res => res.json())
        .then(sb => 
            sb.forEach(spellbook => {
            let newSpellbook = new Spellbook(spellbook)
        console.log(newSpellbook)
        this.renderSpellbook()
        })) 
}

 static renderSpellbook(){

//    const sbUL = document.getElementById('spellbook-list')
   
//    const sbLI = document.createElement('li')
//    const p = document.createElement('p')
//    const spellUL = document.createElement('ul')
//    const spellP = document.createElement('p')
       

//     s.spells.forEach(spell => {
//       let newSpell = new Spell(spell)
//       debugger
//      })  
     
//    spellUL.append(spellP)

//    p.innerHTML = s.title
//    sbLI.append(p)
//    sbUL.append(sbLI, spellUL)

//       console.log(s.spells)


   }
   
}


//console.log('spellbook')