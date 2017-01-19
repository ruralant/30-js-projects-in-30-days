const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am a %s string!', 'human');
//ES2015
//console.log(`Hello, I am ${var}`, 'human');

// Styled
console.log('%c I am a styled text', 'color: white; font-size: 20px; background: blue; text-shadow: 3px 3px 0 red');

// warning!
console.warn('Warning!');

// Error :|
console.error('Error!!!');

// Info
console.info('I am an Info message');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('icecream'), 'That is wrong!');

// clearing
//console.clear();

// Viewing DOM Elements
console.log('normal console log: ', p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd();
});

dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd();
});

// counting
console.count('Antonio');
console.count('Antonio');
console.count('Antonio');
console.count('Antonio');

console.count('Rossi');
console.count('Rossi');
console.count('Rossi');
console.count('Rossi');
console.count('Rossi');
console.count('Rossi');
console.count('Rossi');
console.count('Rossi');
console.count('Rossi');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/tonio155')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

