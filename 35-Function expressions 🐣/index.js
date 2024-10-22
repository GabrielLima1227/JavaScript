/**
 * * Função declarativa (também chamadas de funções nomeadas) = Uma maneira de definir funções com um nome explícito.
 * * Possuem uma declaração de nome, permitindo que sejam chamadas em qualquer lugar do código, mesmo antes da definição (devido ao hoisting).
 * * Podem ser definidas de forma independente e reutilizadas em diferentes partes do código.
 * * Podem ser chamadas antes da sua declaração, pois são hoisted.
 */

//Ex01
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
const evenNums = numbers.filter(evenNum);
const oddNums = numbers.filter(oddNum);
const totals = numbers.reduce(total);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(totals);

function square(element) {
  return Math.pow(element, 2);
}
function cube(element) {
  return Math.pow(element, 3);
}
function evenNum(element) {
  return element % 2 === 0;
}
function oddNum(element) {
  return element % 2 !== 0;
}
function total(accumulate, element) {
  return accumulate + element;
}

/**
 * * Função expressa (também chamadas de funções anônimas) = Uma maneira de definir funções como valores ou variáveis.
 * * Não possuem uma declaração de nome para a função (são anônimas).
 * * São geralmente atribuídas a variáveis, podendo ser passadas como argumentos para outras funções.
 * ! Não podem ser chamadas antes da sua definição, pois não são hoisted.
 * ! Limitada em questão de reutilização.
 */

//Ex01
const hello = function () {
  console.log('Hello');
};

hello();

//Ex02
/**
 * * Permite agendar a execução de uma função ou de um trecho de código após um determinado período de tempo.
 * ! O tempo é definido em Ms (Milisegundos).
 * setTimeout()
 * */
//Tempo em ms
setTimeout(function () {
  console.log('Hello');
}, 3000);

//Ex03
const numbers02 = [1, 2, 3, 4, 5, 6];

const squares02 = numbers02.map(function (element) {
  return Math.pow(element, 2);
});

console.log(squares);

const cubes02 = numbers02.map(function (element) {
  return Math.pow(element, 3);
});

console.log(cubes02);

const evenNum02 = numbers02.filter(function (element) {
  return element % 2 === 0;
});

console.log(evenNum02);

const oddNum02 = numbers02.filter(function (element) {
  return element % 2 !== 0;
});

console.log(oddNum02);

const total02 = numbers02.reduce(function (accumulate, element) {
  return accumulate + element;
});

console.log(total02);
