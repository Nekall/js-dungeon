class Demon extends Character {
  constructor(name = "Deusleo", hp = 8, mana = 30, dmg = 5) {
    super(name, hp, mana, dmg)
    this.specialMana = 20;
    this.specialDmg = 0;
    this.specialHp = 0;
    this.nameClass = "demon 🩹";
  }
}
