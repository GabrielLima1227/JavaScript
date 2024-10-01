//String Slicing = .slice() é usado para extrair uma parte de uma string, retornando uma nova string que contém os caracteres selecionados ✂️
//String.slice(Start, End);
//O metodo .slice não altera a string original

//Ex: 01 Não dinâmico 
const fullName = "Gabriel de Lima Sousa";

let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(16, 21);

let firstChar = fullName.slice(0,1);
//Números negativos no .slice() são usados para contar a partir do final da string. 
//Por exemplo, str.slice(-3) retorna os últimos três caracteres da string.
let lastChar = fullName.slice(-1); //Refere-se ao último caractere da da string

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

// Ex: 02 Dinâmico

firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);

// Ex: 03
const email = "Bro1@gmail.com"

let userName = email.slice(0, email.indexOf("@"));  
let extension = email.slice(email.indexOf("@") + 1)

console.log(userName);
console.log(extension);