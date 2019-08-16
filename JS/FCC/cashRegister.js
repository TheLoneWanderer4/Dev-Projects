function checkCashRegister(price, cash, cid) {
  let ret = {status : '', change : []};
  let change = cash - price;

  // create a list of objects to represent the currency system
  var currency = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
  ];

  // turn the CID list into a register object using reduce, make it match the currency object so they can be easily compared
  let register = cid.reduce( (acc, curr) => {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total : 0} );

  // check the two edge cases, insufficient change and exact change. Handle as said by spec.
  if(register.total < change){
    ret.status = "INSUFFICIENT_FUNDS";
    return ret;
  }else if(register.total === change){
    ret.status = "CLOSED";
    ret.change = cid;
    return ret;
  }
  var changeToGive = currency.reduce( (acc, curr) => {
    let hold = 0;

    while(register[curr.name] > 0 && change >= curr.val){
        register[curr.name] -= curr.val;
        change -= curr.val;
        hold += curr.val;

        change = Math.round(change * 100) / 100;
    }
    if(hold > 0){
      acc.push([curr.name, hold]);
    }
    return acc;
  }, []); // this .reduce will return a list.

  if(change > 0 || changeToGive.length == 0){
    ret.status = "INSUFFICIENT_FUNDS";
    return ret;
  }else{
    ret.status = "OPEN";
    ret.change = changeToGive;
  }
  return ret;
}

console.log(checkCashRegister(19.5, 332, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 200]
]));
