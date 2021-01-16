class Spell {

    static allSpells = []

    constructor (spell){
        this.title = spell.title,
        this.description = spell.description,
        this.damage_type = spell.damage_type

        Spell.allSpells.push(this)

    }

    static createSpell(e){
        e.preventDefault()
        
        let spellTitle = e.target.children[2].value
        let spellDescription = e.target.children[5].value
        let spellDamageType = e.target.children[8].value
        //const spellBookID = parseInt(e.target.parentElement.id)
        //let spellList = document.createElement('ul')
        
        console.log(spellTitle)
        console.log(spellDescription)
        console.log(spellDamageType)
       //console.log(spellBookID)

        // const spell = Spell.submitSpell(spellTitle, spellDescription, spellDamageType)

        
        Spell.submitSpell(spellTitle, spellDescription, spellDamageType)
        e.target.reset()
       
        
    }

    // static renderSpell(spellList) {
    // const sTitle = this.title
    // const sDescription = this.description
    // const sDamageType = this.damage_type
    
    // }

    static submitSpell(spellTitle, spellDescription, spellDamageType) {

        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify({
                spellTitle: spellTitle,
                spellDescription: spellDescription,
                spellDamageType: spellDamageType

            })
        }
        fetch(spellURL, configObject)
        .then(resp => resp.json())
        .then(spell => {

            let newSpell = new Spell(spell.attributes)
            
        })
    }
  
}