//Spread Operator = ... Permite que um iterável, como arrays ou strings, seja expandido em elementos separados (desempacota os elementos).

//O método .join() em JavaScript é usado para unir todos os elementos de um array em uma única string, separando-os por um delimitador que você especifica.

// Ex:01

let username = "Gabriel de Lima";
let letters = [...username].join("-");

console.log(letters);

// Ex: 02

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "patatoes"]
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);