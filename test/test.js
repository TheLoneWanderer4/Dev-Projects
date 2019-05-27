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

console.log(convertToRoman(4));
