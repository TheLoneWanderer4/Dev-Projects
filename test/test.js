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

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: () => "This dog has ${dog.numLegs} legs."
};

function Cat(name){
  this.name = name;
}
Cat.prototype.color = 'tabby';
Cat.prototype.legs = 4;

let rudy = new Cat('rudy');
let skittles = new Cat('skittles');
skittles.color = 'grey';

function Animal(){}

Animal.prototype = {
  constructor:Animal,
  eat : (toEat) => `${toEat} ${toEat} ${toEat}`,
  numLimbs : 4
}

function Dog(name){
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);

let callie = new Dog('callie');
let test = new Animal();

function Player(color){
  this.color = color;
  this.nations = [];
}

function Nation(name, owner){
  this.name = name;
  this.owner = owner;
}

let animals = (() => {
  let ret = {
    animal : () => {},
    dog : (name) => {this.name = name},
  }
  ret.animal.prototype = {
    constructor:ret.animal,
    eat : (toEat) => `${toEat} ${toEat} ${toEat}`,
    numLimbs : 4
  }
  ret.dog.prototype = Object.create(ret.animal.prototype);
  return ret;
}) ();

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

workWindow.tabClose(1);

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookList, bookName) {
  let books = [...bookList];

  books.push(bookName);
  return books;
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList, bookName) {
  let books = [...bookList];

  if (books.indexOf(bookName) >= 0) {

    books.splice(books.indexOf(bookName) , 1);

    // Add your code above this line
    }
  return books;
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// the global variable
var watchList = [
                 {
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line

var filteredList = watchList.filter(item => ((item['imdbRating'] >= 8))).map(item => ({title: item['Title'], rating:item['imdbRating']}));

let averageRating = watchList.filter(item => (item['Director'] == 'Christopher Nolan')).map(item => (item['imdbRating'])).reduce( (acc, cur) => parseFloat(acc) + parseFloat(cur)) / watchList.filter(item => (item['Director'] == 'Christopher Nolan')).length;


// Add your code above this line

function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a,b){
    return a > b;
  });

  // Add your code above this line
}

function splitify(str) {
  // Add your code below this line
  return str.split(/\W+/);

  // Add your code above this line
}
// the global variable
var globalTitle = " Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.toLowerCase().split(/\W+/).filter(item => item.match(/\w+/)).join('-');
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);
