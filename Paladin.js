/*
Le Paladin commence avec 16 points de vie et 160 points de mana. Il a 3 points de dégât.
Le Paladin aura une attaque spéciale Healing Lighting, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.
*/

class Paladin extends Character {
  constructor(name = "Ulder", hp = 16, mana = 160, dmg = 3) {
    super(name, hp, mana, dmg)
    this.specialMana = 40;
    this.specialDmg = 1;
    this.specialHp = 5;
    this.nameClass = "paladin 🩹";
  }
}
