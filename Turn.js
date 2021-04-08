class Turn extends Game {
  constructor(turnLeft) {
    super(turnLeft)
  }

  startTurn(){
    console.log(`It's turn ${game.turnLeft}`);
    let arrayCharacters = ["grace", "carl", "ulder", "moana", "draven"];
    arrayCharacters.forEach((warrior) => {
      warrior = eval(warrior);
      if(warrior.status != "dead"){
        console.log(`Your current fighter is : ${warrior.name}`);
        let victim;
        let potion;
        while (typeof victim == "undefined" || !arrayCharacters.includes(victim) || eval(victim) == warrior || eval(victim).status == "dead"){
          victim = window.prompt(`What is your target ? \n • grace \n • carl \n • ulder \n • moana \n • draven \n\n Or you can choose to drink a suspicious potion: 🧪 \n • potion`)
          if(victim == "potion"){
            potion = true;
            break;
          } else {
            potion = false;
          }
        }
        if(potion == true){
          warrior.takePotion()
        } else{
          victim = eval(victim);
          if(warrior.mana >= warrior.specialMana){
            let answer = window.prompt(`Do you want to use your special attack✨ ? \n • yes ?`)
            if(answer.toLowerCase() == "yes"){
              victim.takeDamage((warrior.dmg + warrior.specialDmg));
              warrior.dealSpecialAttack(victim);
            } else {
              victim.takeDamage(warrior.dmg);
              warrior.dealDamage(victim);
            }
          } else {
            victim.takeDamage(warrior.dmg);
            warrior.dealDamage(victim);
          }
        }
      }
    });
  }
}
