//Arays = Arrays são estruturas de dados que permitem armazenar múltiplos valores em uma única variável.

/**
 * * Serve para adicionar um ou mais elementos ao final do array.
 * .push();
 * * Remove e retornar o último elemento de um array.
 * .pop();
 * * Serve para adicionar um ou mais elementos no início de um array.
 * .unshift();
 * * Remove e retornar o primeiro elemento de um array.
 * .shift(); 
 * * É usada para ordenar os elementos de um array.
 * .sort();
 * * É usado para inverter a ordem dos elementos de um array.
 * .reverse();
 * ! Alguns Metódos de Strings também funcionam em arrays.
 * * É usada para obter o número de elementos presentes no array. (Parecido com oq aprendemos em Strings Methods)
 * .leght
 * * Procura o índice (Posição) de um determinado elemento dentro do array.
 * .indexOf("");
 */

// Ex: 01
let fruit = ["apple", "orange"];

console.log(fruit[0]);
console.log(fruit[1]);
fruit.push("cocounut"); //Adicionando elemento no final do array
console.log(fruit[2]); //Demonstrando que o elemento adicionado
console.log(fruit.pop()); //Retorna o último elemento e discarta depois
console.log(fruit[2]); //Demonstrando que o elemento foi descartado
fruit.unshift("pear"); //Adicionando elemento no inicio do array
console.log(fruit[0]); //Demonstrando que o elemento adicionado
console.log(fruit.shift()); //Retorna o primeiro elemento e discarta depois
console.log(fruit[0]); //Demonstrando que o elemento foi descartado (Outro elemento tomou a sua posição)

// Ex: 02

let numOfFruit = fruit.length;
console.log(numOfFruit); //Tamanho do array 
let index = fruit.indexOf("apple"); 
console.log(index); //Posição da palavra buscada
//O método .idexOf retorna -1 quando não acha o elemento buscado

// Ex: 03
//Mesclando as coisas 
for (let i = 0; i < fruit.length; i++)  {
    console.log(fruit[i]);
}

console.log(fruit.sort());
console.log(fruit.sort().reverse());