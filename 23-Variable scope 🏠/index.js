//Variable Scope = Onde uma variavel é reconhecida e acessada (Local Scope ou Global Scope)

/**
 * * var: Tem escopo de função ou global e permite hoisting (içamento).
 * * let: Tem escopo de bloco e permite reatribuição.
 * * const: Tem escopo de bloco, não permite reatribuição, mas objetos e arrays podem ser modificados.
 */

// Ex: 01

// function function1() {
//     let x = 1; 
//     console.log(x);
// }
// function function2() {
//     let y = 2; 
//     console.log(y);
// } 
// function1();
// function2();    

// Ex: 02

// function function1() {
//     let x = 1; 
//     console.log(y);
// }
// function function2() {
//     let y = 2; 
//     console.log(x);
// } 
// function1();
// function2();    

// Ex: 03

let x = 3; 

function function1() {
    // Váriaveis locais tem prioridade
    let x = 1;
    console.log(x);
}
function function2() {
    // Váriaveis locais tem prioridade
    let x = 2;
    console.log(x);
} 
function1();
function2();    