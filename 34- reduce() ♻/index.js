//.reduce() = É utilizado para reduzir um array a um único valor, aplicando uma função a cada elemento do array, que acumula um resultado.

//Ex01

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
  return accumulator + element;
}

/**
*Como funciona a execução:

*Na primeira chamada do reduce(), o accumulator inicia com o primeiro elemento do array (que é 5), e o element é o segundo elemento (30).
*As chamadas subsequentes do reduce() processam cada elemento do array até que todos os elementos tenham sido somados.

*Passo a passo:

*1ª iteração:
*
*accumulator: 5 (primeiro elemento)
*element: 30
*Soma: 5 + 30 = 35

*2ª iteração:
*
*accumulator: 35
*element: 10
*oma: 35 + 10 = 45

*3ª iteração:
*
*accumulator: 45
*element: 25
*Soma: 45 + 25 = 70

*4ª iteração:
*
*accumulator: 70
*element: 15
*Soma: 70 + 15 = 85

*5ª iteração:
*
*accumulator: 85
*element: 20
*Soma: 85 + 20 = 105
*
 */

//Ex02

const grades = [75, 50, 90, 80, 65, 95];
const maximun = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximun);
console.log(minimum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}
function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
