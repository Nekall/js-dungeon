class Assassin extends Character {
  constructor(name = "Carl", hp = 6, mana = 20, dmg = 6) {
    super(name, hp, mana, dmg)
    this.specialMana = 20;
    this.specialDmg = 1;
    this.specialHp = 0;
    this.nameClass = "assassin 🗡️";
  }
}
