function convertToRoman(num) {
  let roman = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  let ret = '';

  for(let item in roman){
    if(num >= roman[item][0]){
      ret = `${ret}${roman[item][1].repeat(num / roman[item][0])}`;
      num = num % roman[item][0];
    }
  }

 return ret;
}

console.log(convertToRoman(26));
