class Spell {

    static allSpells = []

    constructor (spell){
        this.title = spell.title,
        this.description = spell.description,
        this.spellDamageType = spell.damage_type,
        this.spellbookID = spell.spellbook_id

        Spell.allSpells.push(this)

    }

    static createSpell(e){
        e.preventDefault()
        
        let spellTitle = e.target.children[2].value
        let spellDescription = e.target.children[5].value
        let spellDamageType = e.target.children[8].value

        let spellbookID = parseInt(e.target.parentElement.dataset.id)

        let spellList = e.target.nextElementSibling
        //debugger

        
        //let spellList = document.createElement('ul')
        
        console.log(spellTitle)
        console.log(spellDescription)
        console.log(spellDamageType)
        console.log(spellbookID)

        Spell.submitSpell(spellTitle, spellDescription, spellDamageType, spellbookID, spellList)
        debugger

        e.target.reset()
        
       
        
    }

    

    renderSpell(spellList) {
        const spellLI = document.createElement('li')
        const spellDiv = document.createElement('div')
        spellDiv.dataset.id = this.id

        debugger
        spellLI.innerText = `${this.title, this.description, this.damage_type}`
        spellLI.dataset.id = this.spellbook_id
        
        
        spellDiv.append(spellLI)
        spellList.append(spellLI)
        
    }

    static submitSpell(spellTitle, spellDescription, spellDamageType, spellbookID, spellList) {

        //let bodyData = {spell}
        let configObj = {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify({
            
                title: spellTitle,
                description: spellDescription,
                damage_type: spellDamageType,
                spellbook_id: spellbookID

            })
        }
        fetch(spellURL, configObj)
        .then(resp => resp.json())
        .then(spell  => {
            //debugger
            let newSpell = new Spell(spell)
            console.log(newSpell)
            newSpell.renderSpell(spellList)
        })
    }
  
}