//map() = Aceita um callback e aplica essa função a cada elemento de um array, retornando um novo array.
// map() X forEach() = A diferença crucial entre eles, é que a função map() retorna um novo array.

//Ex01
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(elemnet) {
  return Math.pow(elemnet, 2);
}
function cube(elemnet) {
  return Math.pow(elemnet, 3);
}

//Ex02

const students = ['Spongebob', 'Patrick', 'Squidward', 'Sandy'];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element) {
  return element.toUpperCase();
}
function lowerCase(element) {
  return element.toLowerCase();
}

//Ex03

const dates = ['2020-1-10', '2025-2-20', '2026-3-30'];
const datesFomat = dates.map(formatDates);

console.log(datesFomat);

function formatDates(element) {
  const parts = element.split('-');
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
