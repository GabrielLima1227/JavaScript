//Logical Operators = Os Logical Operator servem para controlar o fluxo de decisões em um programa, permitindo que você combine ou modifique expressões booleanas (verdadeiro ou falso).
/**
 * And = &&
 * Or = ||
 * Not = !
 */

// Ex: 01
const temp = -250;

if (temp > 0 && temp <= 30) {
  console.log("The weather is GOOD");
} else {
  console.log("The weather is BAD");
}

/**
 * * Demonstração utilizando um operador ternário.
 * let weather = temp > 0 && temp<= 30 ? "The weather is GOOD" : "The weather is BAD";
 * console.log(weather);
 */

// Ex: 02

if (temp <= 0 || temp > 30) {
  console.log("The weather is BAD");
} else {
  console.log("The weather is GOOD");
}

/**
 * * Demonstração utilizando um operador ternário.
 * temp <= 0 || temp > 30 ? "The weather is BAD" : "The weather is GOOD";
 * console.log(weather);
 */

// Ex: 03

const isSunny = false;

if(!isSunny){
    console.log("It is CLOUNDY ");
}else{
    console.log("It is not SUNNY");
}

/**
 * * Demonstração utilizando um operador ternário.
 * let sky = !isSunny ? "It is CLOUNDY " : "It is not SUNNY";
 * console.log(sky);
 */