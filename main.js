var game = new Game();

var grace = new Fighter();
var carl = new Assassin();
var draven = new Berzerker();
var moana = new Monk();
var ulder = new Paladin();

function finalMessage(){
  console.log("Winner is :");
  let arrayCharacters = [grace, carl, ulder, moana, draven];
  arrayCharacters.forEach((warrior) => {
    if(warrior.status == "winner"){
      console.log(warrior.name);
    }
  });

}


function startGame(){

  game.firstInstructions();
  const turn = new Turn();

  while(true){
    if(game.turnLeft == 8){
      let arrayCharacters = [grace, carl, ulder, moana, draven];
      arrayCharacters.forEach((warrior) => {
        if(warrior.status == "playing"){
          warrior.status = "winner";
        }
      });
      break;
    }

    turn.startTurn();
    game.newTurn();
  }
  finalMessage();
}
