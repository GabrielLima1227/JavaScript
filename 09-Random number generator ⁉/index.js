//Gerador de números randômico
//O Math.random gera númeoros aleartorios entre 0 e 1
//Para que essa propriedade possa selecionar outros números, podemos multiplicar o Math.random() pelo número limite desejado, criando assim um intervalo específico.

// Ex:01
/**let randomNum = Math.floor(Math.random() * 100) + 1; //O +1 é para garantir que o 100 esteja no intervalo definido
console.log(randomNum);

const min = 50;
const max = 100;

let randomNum_2 = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum_2);
*/
// Ex: 02
 const myBtn = document.getElementById("myBtn");
 const label1 = document.getElementById("label1");
 const label2 = document.getElementById("label2");
 const label3 = document.getElementById("label3");
 const min = 1;
 const max = 6;  
 let randomNum1;
 let randomNum2;
 let randomNum3;

 myBtn.addEventListener("click", () => {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = `The random number is: ${randomNum1}`;
    label2.textContent = `The random number is: ${randomNum2}`;
    label3.textContent = `The random number is: ${randomNum3}`;

 })