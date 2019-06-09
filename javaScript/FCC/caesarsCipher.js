function rot13(str) {
  // LBH QVQ VG!
  let shiftBack = char => {
    let code = char.charCodeAt(0);
    if (code > 90 || code < 65) {
      return char;
    } else {
      if (code - 13 >= 65) {
        return String.fromCharCode(code - 13);
      } else {
        return String.fromCharCode(91 - (13 - (code - 65)));
      }
    }
  };

  let ret = "";
  for (let item in str) {
    ret += shiftBack(str[item]);
  }
  return ret;
}

// Change the inputs below to test
console.log(rot13("SERR-PBQR-PNZC!!"));
