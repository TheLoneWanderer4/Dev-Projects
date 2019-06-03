function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.split('');
  var toRemove = '()–_[{}]:;\',. ?/*^><0';
  toRemove.split('');

  var toKeep = [];

  for(var i = 0; i<str.length; i++){
    if(!(toRemove.includes(str[i]))){
      toKeep += str[i];
    }
  }

  toKeep = toKeep.split('')

  console.log(toKeep);

  const strHold = toKeep.join();
  toKeep.reverse();

  if (toKeep.join() == strHold){
    return true;
  }
  return false;
}

function convertToRoman(num) {
  var ret = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

  for (var i = 0; i<decimal.length; i++){
    while(num%decimal[i] < num){
      ret += roman[i]
      num -= decimal[i]
    }
  }

  return ret;

}

var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
  switch(card){
    case card > 0:
      return count + ' Bet';
      break;
    default:
      return count + ' Hold';
      break;
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

function dice(x){
  return Math.floor(Math.random() * (x + 1));
}

function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = arr.map((x) => `<li class="text-warning">${x}</li>)`);
  // change code above this line

  return resultDisplayArray;
}

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let x = quoteSample.match(myRegex); // Change this line

let hello = "   Hello, World!  ";
let wsRegex = /^\s*|\s*$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line

function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0,0,'DarkSalmon', "BlanchedAlmond")
  // change code above this line
  return arr;
}

// do not change code below this line
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is','fun'];
  return sentence;
}

// do not change code below this line
let humans = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  let people = [Alan, Jeff,Sarah, Ryan];
  for(let i = 0; i<people.length;i++){
    if(!(people[i] in obj)){
      return false;
    }
  }
  return true;
  // change code above this line
}

console.log(isEveryoneHere(humans));
