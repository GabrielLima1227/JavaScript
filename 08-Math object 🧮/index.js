//Math = É um objeto embutido que fornece propriedades e métodos para realizar operações matemáticas.

/**
 * Sempre que precisar fazer alguma operação matemática, procurar primeiro por aqui!
 * * Valor de Pi
 * Math.PI
 * * Valor da base logaritma natural
 * Math.E
 * * Arredondamento de valores para o inteiro mais próximo
 * Math.round();
 * * Arredondamento para o valor inteiro abaixo mais próximo 
 * Math.floor();
 * * Arredondamento para o valor inteiro acima mais próximo
 * Math.ceil();
 * * Remove a parte decimal de um número, retornando apenas a parte inteira
 * Math.trunc (Se diferencia do floor quando se trata de números negativos)
 * * Calcular Exponenciação 
 * Math.pow(x,y);
 * * Calcular Raiz Quadrada
 * Math.sqrt();
 * * Calcular o Logaritmo 
 * Math.log();
 * * Calcular o Seno
 * Math.sin();
 * * Calcular Coseno
 * Math.cos();
 * * Calcular a Tangente
 * Math.tan();
 * * Pegar o valor absoluto de um número (o número sem seu sinal)
 * Math.abs();
 * * Pegar o "Sinal" de um número
 * Math.sign();
 * * Pegar o maior número entre um conjunto de valores fornecidos
 * Math.Max();
 * * Pega o menor número entre um conjunto de valores fornecidos
 * Math.min();andom number generator
 */

let x = 3.5;
let y = 2;
let z;

z = Math.round(x);
console.log(z);
z = Math.floor(x);
console.log(z);
z = Math.ceil(x);
console.log(z);
z = Math.trunc(x);
console.log(z);
z = Math.pow(x, y);
console.log(z);