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

    static renderSpellbooks(){
        for(let spellbook of this.allSpellbooks){
            spellbook.renderSpellbook()
            
        }
    }

     renderSpellbook(){

        const spellbookForm = document.getElementById('#spellbook-form')
        const sbUL = document.getElementById('spellbook-list')
        const spellbookDiv = document.createElement('div')
        

        const cardDiv = document.createElement('div')
        

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

        
        spellbookDiv.append(spellbookTitle, spellForm)
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