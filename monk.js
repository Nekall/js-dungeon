/*
Le Monk commence avec 8 points de vie et 200 points de mana. Il a 2 points de dégât.
Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 PV. Elle coute 25 mana.
*/

class Monk extends Character {
  constructor(name = "Moana", hp = 8, mana = 200, dmg = 2) {
    super(name, hp, mana, dmg)
  }
}
