function palindrome(str) {
  // Good luck!
  let regEx = /\W+|_/gi;

  str = str.split(regEx).join('').toLowerCase();

  console.log(str);

  let firstHalf = str.slice(0,Math.floor(str.length/2));
  let secondHalf = str.slice(Math.ceil(str.length/2),str.length);

  secondHalf = secondHalf.split('').reverse().join('');

  console.log(firstHalf);
  console.log(secondHalf);

  return firstHalf == secondHalf;
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));
