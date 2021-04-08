/*
L'Assassin commence avec 6 points de vie et 20 points de mana. Il a 6 points de dégât.
L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour.
Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort,
l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.
*/

class Assassin extends Character {
  constructor(name = "Carl", hp = 6, mana = 20, dmg = 6) {
    super(name, hp, mana, dmg)
    this.specialMana = 20;
    this.specialDmg = 1;
    this.specialHp = 0;
    this.nameClass = "assassin 🗡️";
  }
}
