/**
 * = Operador de Atribuição
 * == Operador de Comparação (Compara se valores são iguais)
 * === Operador de Igualdade Estrita (Verifica se dois valores são iguais tanto no valor quanto no tipo (DataType).)
 * != Operador de Diferença (Compara se valores são diferentes)
 * !== Operador de Diferença Estrita (Verifica se dois valores são diferentes tanto no valor quanto no tipo (DataType).)
 */

const PI = 3.14;

// Ex: 01

if (PI == "3.14") {
  console.log("That is Pi");
} else {
  console.log("That is not Pi");
}

// Ex: 02

if (PI === "3.14") {
  console.log("That is Pi");
} else {
  console.log("That is not Pi");
}

// Ex: 03

if (PI != "3.14") {
  console.log("That is NOT Pi");
} else {
  console.log("That is Pi");
}
//Ex:04

if (PI !== "3.14") {
    console.log("That is NOT Pi");
  } else {
    console.log("That is Pi");
  }
