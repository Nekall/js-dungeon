class Monk extends Character {
  constructor(name = "Moana", hp = 8, mana = 200, dmg = 2) {
    super(name, hp, mana, dmg)
    this.specialMana = 25;
    this.specialDmg = -1;
    this.specialHp = 7;
    this.nameClass = "monk 🙏";
  }
}
