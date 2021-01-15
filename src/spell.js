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
        console.log('Create Spell')
        
    }
  
}