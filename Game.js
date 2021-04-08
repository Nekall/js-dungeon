class Game {
    constructor(turnLeft){
      this.turnLeft = 5;
    }

    firstInstructions(){
      console.log("You have 5 rounds to fight !");
      console.log("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――");
      console.log("Here are the characteristics of the fighters:");
      game.watchStats()
    }

    newTurn(){
      this.turnLeft = this.turnLeft - 1;
      game.watchStats();
    }

    watchStats(){
      console.log("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――");
      let arrayCharacters = [grace, carl, ulder, moana, draven, arcacir, deusleo];
      arrayCharacters.forEach((warrior) => {
        console.log(`[${warrior.status}]${warrior.name} (${warrior.nameClass}) currently has ${warrior.hp} life points, ${warrior.mana} mana points, ${warrior.dmg} damage points.`);
      });
      console.log("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――");
    }
}
