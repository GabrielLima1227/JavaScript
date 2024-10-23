//Arrow Functions = São uma forma mais concisa de escrever funções em JavaScript.
//(Parâmetros) => Algum código.

//Ex01

/**
 * const hello = function (name, age) {
 *   console.log(`Hello ${name}`);
 *  console.log(`You are ${age} years old`);
 * };
 * hello();
 */

//Arrow Form

const hello = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are ${age} years old`);
};

hello('Bro', 25);

//Ex02
setTimeout(() => console.log('Hello'), 3000);

// function hello02() {
//   console.log('Hello');
// }

//Ex03

const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);

// console.log(squares);

// function square(element) {
//   return Math.pow(element, 2);
// }

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

// function cube(element) {
//     return Math.pow(element,3);
// }

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);

// function evenNum(element) {
//     return element % 2 === 0;
// }

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

// function oddNum(element) {
//     return element % 2 !== 0;
// }

const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);

// function total(accumulate, element){
//     return accumulate += element;
// }

const total = numbers.reduce((accumulate, element) => (accumulate += element));
console.log(total);
