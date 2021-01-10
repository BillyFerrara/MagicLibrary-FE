class Spellbook{

    static allSpellbooks = []

    constructor(spellbook) {
        this.title = spellbook.title
        this.spells = spellbook.spells

        Spellbook.allSpellbooks.push(this)
    }

    static fetchSpellbook() {
        fetch(spellbookURL)
        .then(res => res.json())
        .then(sb => 
            sb.forEach(spellbook => {
            let newSpellbook = new Spellbook(spellbook)
        console.log(newSpellbook)
        this.renderSpellbooks()
        })) 
}

    static renderSpellbook(){
        for(let spellbook of this.allSpellbooks){
            spellbook.renderSpellbook()
        }
    }

    static renderSpellbooks(){

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
        const sbUL = document.getElementById('spellbook-list')
        const spellbookDiv = document.createElement('div')
        spellbookDiv.classList.add('sb-card')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('sb-card-body')

        const spellbookTitle = document.createElement('h3')
        spellbookTitle.classList.add('sb-name')
        spellbookTitle.innerText = `Spellbook Title: ${this.title}`

        const spellForm = document.createElement('form')
        spellForm.classList.add('form-container')
        spellForm.innerHTML += `
            <h3>Add Spells to your Spellbook</h3>
            <label for="spell">Spell Title</label>
            <input type="text" id="title" name="title"><br>
            <label for="description">Description</label>
            <input type="text" id="description" name="description"><br>
            <label for="damage_type">Damage Type</label>
            <input type="text" id="damage_type" name="damage_type">
            <input id="create-spell" type="submit" name="submit" value="Create Spell">
        `
        spellForm.addEventListener("submit", Spell.createSpell)

        spellbookDiv.append(cardDiv, spellbookTitle, spellForm)
        sbUL.append(spellbookDiv)
   }
   
}


//console.log('spellbook')