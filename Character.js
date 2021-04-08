class Character {
  constructor(name, hp, mana, dmg) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.dmg = dmg;
    this.status = "playing";
  }

  takeDamage(dmgReceived){
    this.hp = this.hp - dmgReceived;
    if(this.hp < 0){
      this.hp = 0;
    }
  }

  dealDamage(victim){
    console.log(`${this.name} attacks ${victim.name}. He·r deals him ${this.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left.`);
    if(victim.hp < 1){
      victim.status = "dead";
      this.mana = this.mana + 20;
      console.log(`${victim.name} is dead 💀`);
    }
  }

  dealSpecialAttack(victim){
    this.hp = this.hp + this.specialHp;
    this.dmg = this.dmg + this.specialDmg;
    this.mana = this.mana - this.specialMana;
    console.log(`${this.name} (${this.nameClass}) now has ${this.hp} life points, ${this.mana} mana points, ${this.dmg} damage points.`);
    console.log(`So, ${this.name} attacks ${victim.name} with his special attack ✨. He·r deals him ${(this.dmg)} damages. ${victim.name} got ${victim.hp} lifepoints left.`);
    if(victim.hp < 1){
      victim.status = "dead";
      this.mana = this.mana + 20;
      console.log(`${victim.name} is dead 💀`);
    }
  }


  takePotion(){
    console.log(`🧪 ${this.name} drinks the suspicious potion let's see the effects of this potion...`);
    let power = [-1, -4, -3, -2, -1, 1, 2, 3, 4, 1].sample();
    let effect = [1, 2].sample();
    if(effect == 1) {
      this.dmg = this.dmg + power;
      console.log(`${power} point on the damage points`);
    } else {
      this.hp = this.hp + power;
      console.log(`${power} point on the life points`);
    }
    console.log(`...${this.name} now has ${this.hp} life points, ${this.mana} mana points, ${this.dmg} damage points.`);
  }
}
