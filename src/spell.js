class Spell {

    static allSpells = []

    constructor (spell){
        this.title = spell.title,
        this.description = spell.description,
        this.damage_type = spell.damage_type

        Spell.allSpells.push()

    }

    static createSpell(e){
        e.preventDefault()
        
        const spellTitle = e.target.children[2].value
        const spellDescription = e.target.children[5].value
        const spellDamageType = e.target.children[8].value

        console.log(spellTitle)
        console.log(spellDescription)
        console.log(spellDamageType)
        
    }
  
}