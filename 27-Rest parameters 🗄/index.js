//rest parameters = (...rest) permite que você capture um número indefinido de argumentos passados para uma função em forma de um array.

//spread = O operador spread é usado para "espalhar" ou "desestruturar" elementos de um array ou objeto.
//rest = O operador rest é usado para reunir os argumentos de uma função em um array ou para agrupar os elementos de uma coleção (como arrays ou objetos).

//Ex: 01

function openFrige(...foods) {
  //Rest
  console.log(...foods); //Spread
}
function getFood(...foods) {
  //Rest
  return foods;
}

const food01 = 'pizza';
const food02 = 'hamburger';
const food03 = 'hotdog';
const food04 = 'sushi';
const food05 = 'ramen';

openFrige(food01, food02, food03, food04, food05);

const foods = getFood(food01, food02, food03, food04, food05);

console.log(foods);

//Ex: 02

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

function avg(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`);

const total02 = avg(1, 2, 3, 4, 5);

console.log(`Your total is $${total02}`);

//Ex03

function combineStrings(...strings) {
  return strings.join(' ');
}

const fullName = combineStrings('Mr.', 'Spongebob', 'III');

console.log(fullName);
