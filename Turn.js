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
    console.log(`It's turn ${game.turnLeft}`);
    let arrayCharacters = ["grace", "carl", "ulder", "moana", "draven"];
    arrayCharacters.forEach((warrior) => {
      warrior = eval(warrior);
      console.log(`Your current fighter is : ${warrior.name}`);
      let victim;
      while (typeof victim == "undefined" || !arrayCharacters.includes(victim) || eval(victim) == warrior || eval(victim).status == "dead"){
        victim = window.prompt(`What is your target ? \n grace, carl, ulder, moana, draven`)
      }
      victim = eval(victim);
      victim.takeDamage(warrior.dmg);
      warrior.dealDamage(victim);
    });
  }
}
