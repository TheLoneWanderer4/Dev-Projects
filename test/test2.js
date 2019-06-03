let users = {
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
};

function isEveryoneHere(obj) {
  // change code below this line
  let people = ['Alan', "Jeff", "Sarah", "Ryan"];
  for(let i = 0; i<people.length;i++){
    if(!(people[i] in obj)){
      return false;
    }
  }
  return true;
  // change code above this line
}

function countOnline(obj) {
  // change code below this line
  let ret = 0;
  for(let user in obj){
    console.log(user);
    if(obj[user].online == true){
      ret++;
    }
  }
  return ret;
  // change code above this line
}

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line
  userObj.data.friends.push(friend);

  return userObj;
  // change code above this line
}

function reverseString(str) {
  str = [...str]
  ret = []
  for(let i=0;i<str.length;i++){
    ret.unshift(str[i]);
  }
  return ret.join('');
}
function findLongestWordLength(str) {
  let ret = 0;
  str = str.split(' ')
  for(let i=0;i<str.length;i++){
    if(str[i].length > ret){
      ret = str[i].length;
    }
  }

  return ret;
}

function largestOfFour(arr) {
  // You can do this!
  let ret = [];
  let hold = 0;
  for(let i=0;i<arr.length;i++){
    for(let x=0;x<arr[i].length;x++){
      if(arr[i][x] > hold){
        hold = arr[i][x];
      }
    }
    ret.push(hold);
  }
  return ret;
}

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let test = str.slice(str.length - target.length, str.length)
  console.log(test);
  return test == target;
}

function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num < 0){
    return '';
  }
  let ret = [];
  for(let i=0;i<=num;i++){
    ret.push(str);
  }
  return ret.join('');
}

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length < num){
    return str;
  }
  return str.slice(0, num) + '...';
}

function titleCase(str) {
  str = str.split(' ');
  let ret = [];
  for(let i=0;i<str.length;i++){
    let first = str[i].slice(0,1);
    let rest = str[i].slice(1,str.length+1);
    let hold = first.toUpperCase() + rest.toLowerCase();
    ret.push(hold);
  }
  return ret.join(' ');
}

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  arr2.splice(n,0,...arr1);
  return arr2;
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  ret = [];
  for(let i=0;i<arr.length;i++){
    if(!(Boolean(arr[i]) == false)){
      ret.push(arr[i]);
    }
  }
  return ret;
}

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let ret = [];
  for(var i=0;i<arr.length-size+1;i+=size){
    let hold = [];
    for(let x=0;x<size;x++){
      hold.push(arr[i+x]);
    }
    ret.push(hold);
  }
  if(i != arr.length){
    ret.push(arr.slice(i,arr.length));
  }
  return ret;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
