/*1 tour précisement déconstruit
Ce perso doit attaquer, le joueur choisis une cible ?
La cible prend des damages, sont état est
confirmée par l'affichage de des hp (mort ou pas)
*/


class Turn extends Game {
  constructor(turnLeft) {
    super(turnLeft)
  }

  startTurn(){
    console.log(`It's turn ${this.turnLeft}`);
  }

  selectCharacter(){
    let arrayCharacters = ["grace", "carl", "ulder", "moana", "draven"];


  }
}
