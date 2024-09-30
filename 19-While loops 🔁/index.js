//While loop = Repete um trecho de código ENQUANTO alguma condição for verdadeira.

// Ex: 01

// let username = "";

// while (username === "" || username === null) {
//   username = window.prompt(`Enter your name: `);
// }

// console.log(`Hello ${username}`);

// Ex: 02
//Executa primeiro e verifica a condição depois

// do {
//   username = window.prompt(`Enter your name: `);
// } while (username === "" || username === null);

// console.log(`Hello ${username}`);

// Ex: 03
let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Enter your username:");
  password = window.prompt("Enter your password:");

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("Invalid credentials! please try again.");
  }
}
