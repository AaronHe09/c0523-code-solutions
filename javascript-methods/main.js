const num1 = 5;
const num2 = 7;
const num3 = 10;
const maximumValue = Math.max(num1, num2, num3);

console.log('Value of maximumValue: ', maximumValue);

const heroes = ['superman', 'spiderman', 'batman', 'antman'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex: ', randomIndex);

const randomHero = heroes[randomIndex];
console.log('Value of randomHero: ', randomHero);

const library = [
  { title: 'Book1', author: 'bob' },
  { title: 'Book2', author: 'dylan' },
  { title: 'Book3', author: 'jacob' },
];
const lastBook = library.pop();
console.log('Value of lastBook: ', lastBook);

const firstBook = library.shift();
console.log('Value of firstBook: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library: ', library);

const fullName = 'Aaron He';
const firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName: ', sayMyName);
