class Game {
    constructor(turnLeft){
      this.turnLeft = 10;
    }

    firstInstructions(){
      console.log("You have 10 rounds to fight !");
      console.log("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――");
      console.log("Here are the characteristics of the fighters:");
      game.watchStats()
    }

    newTurn(){
      this.turnLeft = this.turnLeft - 1;
      game.watchStats(); //a chaque nouveau tour on affiche les stats des perso
    }

    watchStats(){
      console.log("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――");
      let arrayCharacters = [grace, carl, ulder, moana, draven];
      arrayCharacters.forEach((warrior) => {
        console.log(`[${warrior.status}]${warrior.name} (${warrior.nameClass}) currently has ${warrior.hp} life points, ${warrior.mana} mana points, ${warrior.dmg} damage points.`);
      });
      console.log("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――");
    }
}
