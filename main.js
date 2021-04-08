const game = new Game();

const grace = new Fighter();
const carl = new Assassin();
const draven = new Berzerker();
const moana = new Monk();
const ulder = new Paladin();


Array.prototype.sample = function() {
  return this[~~(Math.random() * this.length)];
}

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
    if(game.turnLeft == 0){
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
