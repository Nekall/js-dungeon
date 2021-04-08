class Paladin extends Character {
  constructor(name = "Ulder", hp = 16, mana = 160, dmg = 3) {
    super(name, hp, mana, dmg)
    this.specialMana = 40;
    this.specialDmg = 1;
    this.specialHp = 5;
    this.nameClass = "paladin 🩹";
  }
}
