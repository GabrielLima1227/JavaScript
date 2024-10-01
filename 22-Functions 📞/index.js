//Funções = Funções são trecho de códigos declarados uma única vez, mas que podem ser usados quando quiser e onde desejas.
//Quando a função é chamada ela excuta um código.

// Ex: 01
/**
 * * Parâmetros são variáveis que você define dentro dos parênteses ao criar uma função. Eles servem como entrada de dados para a função.
 * * Esses parâmetros são temporários: existem apenas enquanto a função está em execução e são destruídos assim que a execução da função termina.
 * * Eles são usados para permitir que diferentes valores sejam passados para a função, tornando-a flexível e reutilizável.
 */
function happyBirthday(username, age) {
  console.log("Happy Birthday to you!");
  console.log(`Happy Birthday dear ${username}!`);
  console.log(`You are ${age} years old`);
}

happyBirthday("Gabriel", 20);
happyBirthday("Bob Esponja", 30);
happyBirthday("Patrick Estrela", 37);

// Ex: 02
/**
 * * O return permite que a função envie um resultado de volta para a parte do código que a chamou.
 * * A função para de executar quando atinge o return.
 * * Nem todas as funções precisam de return, mas ele é essencial quando você precisa de um valor como resultado da função.
 */
function add(x, y) {
  // let result = x + y;
  // return result;
  return x + y;
}
function subtract(x, y) {
  // let result = x - y;
  // return result;
  return x - y;
}
function multiply(x, y) {
  // let result = x * y;
  // return result;
  return x * y;
}
function divide(x, y) {
  // let result = x / y;
  // return result;
  return x / y;
}
// let answer = add(2, 3);
// console.log(answer);

console.log(divide(2, 3));

// Ex: 03

function add(x, y) {
    return x + y;
  }
  function subtract(x, y) {
    return x - y;
  }
  function multiply(x, y) {
    return x * y;
  }
  function divide(x, y) {
    return x / y;
  }
function isEven(number){
    return number % 2 === 0 ? "This number is Even" : "This number is Odd";
}
console.log(isEven(2));
function isValidEmail(email){
    // if(email.includes("@") && email.includes(".com")){
    //     return true;
    // }else{
    //     return false;
    // }

    return email.includes("@") && email.includes(".com") ? true : false
}
console.log(isValidEmail("Bro@fake.com"));
console.log(isValidEmail("ElonMuskfake.com"));
console.log(isValidEmail("Zuckerborg@fake"));