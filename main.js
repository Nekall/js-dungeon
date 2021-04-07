//Comment ce déroule une partie ?
/*
  1 -> Je crée une instance de game
  2 -> Je crée 5 instance, 1 par perso
  3 -> Premier tour > J'affiche les stats
  4 -> Un personnage est séléctionné (celui qui va attaquer)
  5 -> Ce perso doit attaquer, le joueur choisis une cible ?      )
  6 -> La cible prend des damages, sont état est                  } 5 fois
  6 ->  confirmée par l'affichage de des hp (mort ou pas)         )
  7 -> Le prochain personnage est séléctionné pour attaquer
  8 -> Au bout des 5 attaques, un tour est compté.
  9 -> Les stats sont affiché de nouveau...etc
  ...10 -> Rendu au tour n°10, check quel perso a le plus de vie
  11  -> Celui ayant le plus de vie est le.la gagnant.e = affichage winScreen
  */


const game = new Game();

const grace = new Fighter();
const carl = new Assassin();
const ulder = new Berzerker();
const moana = new Monk();
const draven = new Paladin();


game.firstInstructions();

const turn1 = new Turn();
