function randomChance(num){
    var quarters = num;
    //Did you win?
    while(quarters > 0){
    if((Math.floor(Math.random() * 100) + 1 === 27)){
      console.log("You finally won!");
      quarters = quarters + Math.floor(Math.random(num) * 51)+50;
      console.log("Now you have a total of", quarters);
    }
    else{
      console.log("Keep trying!");
      quarters--;
      if (quarters === 0){
        console.log("You lost, now you have", quarters, "quarters.");
      }
    }
  }
}

randomChance(200);