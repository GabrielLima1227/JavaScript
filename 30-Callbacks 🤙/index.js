//callback = são funções passadas como argumentos para outras funções e que são executadas em um momento posterior.
/**
 * Usado para manipular operações assíncronas:
 * 1. Ler arquivos
 * 2. Network Request
 * 3. Interação com database
 *
 * "Ei, quando terminar, ligue para o próximo."
 */

//Ex01
function hello(callback) {
  console.log('Hello!');
  callback();
}
function wait() {
  console.log('Wait!');
}
function leave() {
  console.log('Leave!');
}
function goodbye() {
  console.log('Goodbye!');
}

hello(leave);

//Ex02

sum(displayPage, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById('myH1').textContent = result;
}
