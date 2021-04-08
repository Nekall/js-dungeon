class Wizard extends Character {
  constructor(name = "Arcacir", hp = 10, mana = 200, dmg = 2) {
    super(name, hp, mana, dmg)
    this.specialMana = 25;
    this.specialDmg = 7;
    this.specialHp = 0;
    this.nameClass = "demon 🩹";
  }
}
