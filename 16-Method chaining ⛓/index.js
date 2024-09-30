//Metohd Chaining = Refere-se à técnica de encadear vários métodos consecutivos em um único comando.

let userName = window.prompt("Enter your username: ");

//NO Method Chaining

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();

userName = letter + extraChars;
console.log(userName);

//Method Chaining
//Isso me lambra um combo de video game
userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
console.log(userName);