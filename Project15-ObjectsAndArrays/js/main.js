// start with strings, numbers and booleans
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
const team2 = players.slice(); // copy of the array

// one day
// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
//or
const team5 = Array.from(players);
// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Antonio',
  age: 30
};

// and think we make a copy:
const hero = person; //NO!!! Will change. We made a REFERENCE.
// how do we take a copy instead?
const hero2 = Object.assign({}, person, {number: 21});
console.log(hero2);
// We will hopefully soon see the object ...spread
// const hero3 = {...hero} Not in JavaScript yet.
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const toni = {
  name: 'Antonio',
  age: 30,
  social: {
    twitter: '@tonio155',
    instagram: 'IlReddo'
  }
};

const dev = Object.assign({}, toni);

const dev2 = JSON.parse(JSON.stringify(toni));