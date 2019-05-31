// This is a prety basic javascript script to emulate the combat of the board game risk.

function dice(x){
  return Math.floor(Math.random() * (x + 1));
}

function attackDice(x){
    if(x > 3){
        return 3;
    }
    else if(x == 3){
        return 2;
    }
    else if(x == 2){
        return 1;
    }
    else{
        return 0;
    }
}

function defDice(x){
  if(x >= 2){
    return 2;
  }
  else if(x > 0){
    return 1;
  }
  else{
    return 0;
  }
}

function combat(x){
  var ret = 0;
  var hold = 0;
  for(var i = 0; i<x; i++){
    hold = dice(6);
    if(hold > ret){
      ret = hold;
    }
  }
  return ret;
}

function attack(x){
  return combat(attackDice(x));
}

function defense(x){
  return combat(defDice(x));
}

function main(){
  // Include prompt module.
  var prompt = require('prompt');

  // This json object is used to configure what data will be retrieved from command line.
  var prompt_attributes = [{name: 'attacking armies: ',}, {name: 'defending armies: ',}];

  prompt.start();

  prompt.get(prompt_attributes, function (err, result) {
      if (err) {
          console.log(err);
          return 1;
      }
      else {
          // Get user input from result object.
          var armiesAttack = result['attacking armies: '];
          var armiesDefend = result['defending armies: '];

          while(armiesAttack > 0 && armiesDefend > 0){
              attackRoll = attack(armiesAttack);
              defendRoll = defense(armiesDefend);
              if(defendRoll >= attackRoll){
                armiesAttack --;
              }else{
                armiesDefend --;
              }
          }
          console.log('Attacking left:');
          console.log(armiesAttack);
          console.log("Defending left:");
          console.log(armiesDefend);
      }
  });
}

main();
