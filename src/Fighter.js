/* Fighter class definition */
const Max_life = 100;
class Fighter {
    constructor(name, strenght, dexterity,  life = Max_life) {
    this.name = name;
    this.strenght = strenght; 
    this.dexterity = dexterity;
    this.life = life;
    }

    fight (oppenent) {
        let damage = Math.floor(Math.random() * this.strenght) - oppenent.dexterity;
        if(damage < 0){
            damage = 0;
        }
    
        oppenent.life = oppenent.life - damage;
        if(oppenent.life < 0){
            oppenent.life = 0;
        }

    }
};


module.exports = Fighter;