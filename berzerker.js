/*
Le Berzerker commence avec 8 points de vie et 0 point de mana. Il a 4 points de dégât.
Le Berzerker aura une attaque spéciale Rage lui donnant +1 pour ses attaques pour tout le reste de la partie mais lui enlevant 1 hp.
Elle coûte 0 mana. Elle peut être appelée plusieurs fois (par exemple, si le Berzerker a fait son attaque spéciale 2 fois,
ses attaques infligeront 4 + 2 = 6 points de dégât).
*/

class Berzerker extends Character {
  constructor(name = "Draven", hp = 8, mana = 0, dmg = 4) {
    super(name, hp, mana, dmg)
  }
}
