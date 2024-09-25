/** 
 * Tipos de conveção = Mudanças de DataType de um "valor" para outro
 * Ex: (Strings, numbers, booleans)
 */

// Ex01
let age = window.prompt("How old are you ?");
age = Number(age);
age += 1;
console.log(age, typeof age);

// Ex02
let x = "Pizza";
let y = "Pizza";
let z = "Pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);