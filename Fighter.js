/*
Le Fighter commence avec 12 points de vie (hp) et 40 points de mana (mana). Il a 4 points de dégât (dmg).
Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts. Jusqu'au prochain tour, il prendra
2 dégâts de moins par coup reçu. Elle coute 20 mana.
*/


class Fighter extends Character {
  constructor(name = "Grace", hp = 12, mana = 40, dmg = 4) {
    super(name, hp, mana, dmg)
    this.specialMana = 20;
    this.specialDmg = 1;
    this.specialHp = 0;
    this.nameClass = "fighter 🥊";
  }
}
