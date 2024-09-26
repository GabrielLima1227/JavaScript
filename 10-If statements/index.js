//Instruções If =  Se a condição for verdadeira (true), o código dentro do bloco if será executado; caso contrário, ele será ignorado.

//Ex 01
let age = 25;
if (age >= 18) {
  console.log("You are old enough to enter this site");
} else {
  console.log("You must be 18+ to enter this site");
}

//Ex: 02
let time = 14;

if (time < 12) {
  console.log("Good Morning!");
} else {
  console.log("Good afternoon!");
}

// Ex: 03
let isStudent = false;
//Condicion a si mesmo
if (isStudent) {
  console.log("You are a student!");
} else {
  console.log("You are not a student!");
}

// Ex: 04
// Estrutura de controle condicional.
let age3;
if (age >= 100) {
  console.log("You are too old to enter this site!");
} else if (age3 == 0) {
  console.log("You can't enter, You were just born.");
} else if (age3 >= 18) {
  console.log("You are old enough to enter this site!");
} else if (age3 < 0) {
  console.log("Your age can't be below 0!");
} else {
  console.log("You must be 18+ to enter this site!");
}

//Ex: 05
//estrutura de controle condicional aninhada
let age2 = 25;
let hasLincense = true;

if (age2 >= 16) {
  console.log("You are old eough to drive!");

  if (hasLincense) {
    console.log("You have your license!");
  } else {
    console.log("you do not have your license yet!");
  }
} else {
  console.log("you must be 16+ to have a lincense");
}

// Ex: 06
const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn");
const resultElement = document.getElementById("resultElement");

myBtn.addEventListener("click", () => {
    age3 = myText.value;
    age3 = Number(age3);
  if (age3 >= 100) {
    resultElement.textContent = `You are too old to enter this site!`;
  } else if (age3 == 0) {
    resultElement.textContent = `You can't enter, You were just born.`;
  } else if (age3 >= 18) {
    resultElement.textContent = `You are old enough to enter this site!`;
  } else if (age3 < 0) {
    resultElement.textContent = `Your age can't be below 0!`;
  } else{
    resultElement.textContent = `You must be 18+ to enter this site!`;
  }
});
