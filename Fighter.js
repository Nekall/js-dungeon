class Fighter extends Character {
  constructor(name = "Grace", hp = 12, mana = 40, dmg = 4) {
    super(name, hp, mana, dmg)
    this.specialMana = 20;
    this.specialDmg = 1;
    this.specialHp = 0;
    this.nameClass = "fighter 🥊";
  }
}
