//Operador Ternário = É um "atalho" para if e else, permitindo que você faça uma verificação de condição e escolha entre dois resultados de forma mais compacta.
//Condição ? codeIfTrue : codeIfFAls;

//Ex: 01 
let age = 21;
let mensage = age >= 18 ? "You're an adult" : "You're a minor";
console.log(mensage);
//Em Alternativa a isso.
/**
 * let age = 21;
 * let mensagem; 
 * if(age >= 18){
 *  mensagem = "You're an adult";
 * }else{
 *  mensagem = "You're a minor";
 * }
 * console.log(mensage);
*/

//Ex: 02
let time = 16;
let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
console.log(greeting);

//Ex: 03 
//Operadores Ternários com Boolean
let isStudent = false;
let mensage2 = isStudent ?  "You are a Student" : "You are not a Student";
console.log(mensage2);

//Ex: 04
let puchaseAmount = 125;
let discount = puchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${puchaseAmount - puchaseAmount * (discount/100)}`);