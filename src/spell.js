class Spell {

    static allSpells = []

    constructor (spell){
        this.title = spell.title,
        this.description = spell.description,
        this.spellDamageType = spell.damage_type,
        //this.spellBookID = spellBookID

        Spell.allSpells.push(this)

    }

    static createSpell(e){
        e.preventDefault()
        
        let spellTitle = e.target.children[2].value
        let spellDescription = e.target.children[5].value
        let spellDamageType = e.target.children[8].value
        const spellBookID = parseInt(e.target.parentElement.dataset.id)

        
        //let spellList = document.createElement('ul')
        
        console.log(spellTitle)
        console.log(spellDescription)
        console.log(spellDamageType)
        console.log(spellBookID)

        Spell.submitSpell(spellTitle, spellDescription, spellDamageType, spellBookID)
        

        //e.target.reset()
        debugger
       
        
    }

    // static renderSpell(spellList) {
    // const sTitle = this.title
    // const sDescription = this.description
    // const sDamageType = this.damage_type
    
    // }

    static submitSpell(spellTitle, spellDescription, spellDamageType, spellBookID) {

        let bodyData = {spellTitle, spellDescription, spellDamageType, spellBookID}
        let configObj = {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify(bodyData)
            // ({ spell: {
            //     spellTitle: spellTitle,
            //     spellDescription: spellDescription,
            //     spellDamageType: spellDamageType,
            //     spellBookID: spellBookID}

            // })
        }
        fetch(spellURL, configObj)
        .then(resp => resp.json())
        .then(spell  => {
            //debugger
            let newSpell = new Spell(spell)
            console.log(newSpell)
            
        })
    }
  
}