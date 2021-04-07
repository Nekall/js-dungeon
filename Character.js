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
    console.log(`${this.name} is attacking ${victim.name}. He deals him ${this.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left.`);
    if(victim.hp < 1){
      victim.status = "dead";
      this.mana = this.mana + 20;
      console.log(`${victim.name} is dead 💀`);
    }
  }
}
