class Spellbook{

    static allSpellbooks = []

    constructor(spellbook) {
        this.id = spellbook.id
        this.title = spellbook.title
        this.spells = spellbook.spells

        Spellbook.allSpellbooks.push(this)
    }

//     static fetchSpellbook() {
//         fetch(spellbookURL)
//         .then(res => res.json())
//         .then(sb => 
//             sb.forEach(spellbook => {
//             let newSpellbook = new Spellbook(spellbook)
//         console.log(newSpellbook)
        
//         newSpellbook.renderSpellbooks()
//         })) 
// }

static fetchSpellbook() {
    fetch(spellbookURL)
        .then(res => res.json())
        .then(sb =>
            sb.forEach(spellbook => {
                let newSpellbook = new Spellbook(spellbook)
                newSpellbook.renderSpellbook()
            }
        )
    )
} 

    static renderSpellbooks(){
        
        for(let spellbook of this.allSpellbooks){
            
            spellbook.renderSpellbook()
            
        }
    }

     renderSpellbook(){

        
        const sbUL = document.getElementById('spellbook-list')
        const spellbookDiv = document.createElement('div')
        spellbookDiv.dataset.id = this.id
        const spellLI = document.createElement('li')
        

        const spellbookTitle = document.createElement('h3')
        spellbookTitle.classList.add('sb-name')
        spellbookTitle.innerText = `Spellbook Title: ${this.title}`
        spellbookTitle.append(spellLI)

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
        // spellForm.addEventListener("submit", Spell.createSpell)

        spellForm.addEventListener("submit", (e) => { Spell.createSpell(e) });

        const spellList = document.createElement('ul')
        this.spells.forEach(spell => {
            let spellObj = new Spell(spell)
            spellObj.renderSpell(spellList)
        })
        
        spellbookDiv.append(spellbookTitle, spellForm, spellList)
        sbUL.append(spellbookDiv)
        
        
        
   }

   static formHandler(e) {
       e.preventDefault()
       const title = document.querySelector("#title").value
       Spellbook.postSpellbook(title)
       e.target.reset()
   }

   static postSpellbook(title){
    let bodyData = {title} 
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "accept":"application/json"
        },
        body: JSON.stringify(bodyData)
    }
    fetch(spellbookURL, configObject)
    .then(resp => resp.json())
    .then(sb =>  {
        let newSpellbook = new Spellbook(sb)
        newSpellbook.renderSpellbook()
        
    }) 
   }
   
}


//console.log('spellbook')