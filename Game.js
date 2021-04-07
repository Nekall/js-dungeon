class Game {
    constructor(turnLeft){
      this.turnLeft = 10;
    }

    firstInstructions(){
      console.log("Welcome adventurer, take your first fighter!");
      console.log("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――");
      console.log("Here are the characteristics of the fighters:");
      game.watchStats()
      console.log("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――");
    }

    newTurn(){
      this.turnLeft = this.turnLeft - 1;
      game.watchStats(); //a chaque nouveau tour on affiche les stats des perso
    }

    watchStats(){
      console.log(`[${grace.status}]${grace.name} (${grace.nameClass}) currently has ${grace.hp} life points, ${grace.mana} mana points, ${grace.dmg} damage points.`);
      console.log(`[${carl.status}]${carl.name} ((${carl.nameClass}) currently has ${carl.hp} life points, ${carl.mana} mana points, ${carl.dmg} damage points.`);
      console.log(`[${ulder.status}]${ulder.name} (${ulder.nameClass}) currently has ${ulder.hp} life points, ${ulder.mana} mana points, ${ulder.dmg} damage points.`);
      console.log(`[${moana.status}]${moana.name} (${moana.nameClass}) currently has ${moana.hp} life points, ${moana.mana} mana points, ${moana.dmg} damage points.`);
      console.log(`[${draven.status}]${draven.name} (${draven.nameClass}) currently has ${draven.hp} life points, ${draven.mana} mana points, ${draven.dmg} damage points.`);
    }
}
