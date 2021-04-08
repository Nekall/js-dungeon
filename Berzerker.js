class Berzerker extends Character {
  constructor(name = "Draven", hp = 8, mana = 0, dmg = 4) {
    super(name, hp, mana, dmg)
    this.specialMana = 0;
    this.specialDmg = 1;
    this.specialHp = -1;
    this.nameClass = "berzerker 🛡️";
  }
}
