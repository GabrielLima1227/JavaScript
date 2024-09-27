//Switch: O switch pode ser uma maneira eficiente de lidar com múltiplos blocos de if e else if quando você está comparando o valor de uma única variável ou expressão com várias possibilidades.

/** 
let day = 1;

if (day === 1) {
    console.log("Domingo");
} else if (day === 2) {
    console.log("Segunda-feira");
} else if (day === 3) {
    console.log("Terça-feira");
} else if (day === 4) {
    console.log("Quarta-feira");
} else if (day === 5) {
    console.log("Quinta-feira");
} else if (day === 6) {
    console.log("Sexta-feira");
} else if (day === 7) {
    console.log("Sábado"); 
} else {
    console.log("dia inválido");
}
*/

//Ex: 01
let day = "Pizza";

switch (day) {
  case 1:
    console.log(`It is Monday`);
    break;
  case 2:
    console.log(`It is Tuesday`);
    break;
  case 3:
    console.log(`It is Wednesday`);
    break;
  case 4:
    console.log(`It is Thursday`);
    break;
  case 5:
    console.log(`It is Friday`);
    break;
  case 6:
    console.log(`It is Saturnday`);
    break;
  case 7:
    console.log(`It is Sunday`);
    break;
  default:
    console.log(`${day} is not a day of the week.`);
    break;
}

//Ex: 02
//Pode aplicar condições também
let testScore = 92;
let letterGrade;

switch (testScore) {
  case testScore > 90:
    letterGrade = "A";
    break;
  case testScore > 80:
    letterGrade = "B";
    break;
  case testScore > 70:
    letterGrade = "C";
    break;
  case testScore > 60:
    letterGrade = "D";
    break;
  case testScore > 50:
    letterGrade = "E";
    break;
  default:
    letterGrade = "F";
    break;
}
console.log(letterGrade);