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

console.log(addFriend(user, 'Pete'));
