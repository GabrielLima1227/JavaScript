//Object = Uma coleção de propriedades e/ou métodos relacionados que podem representar objetos do mundo real (pessoas, produtos, lugares).
//Object = {key: value
//          function()}

const person01 = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 30,
  isEmployed: true,
  sayHello: () => console.log('Hi, I am Spongebob!'),
  sayBye: () => console.log('Goobye!'),
  eat: () => console.log('I am eating krabby patty'),
};
const person02 = {
  firstName: 'Patrick',
  lastName: 'Star',
  age: 42,
  isEmployed: false,
  sayHello: () => console.log('Hi, I am Patrick...'),
  sayBye: () => console.log('bye...'),
  eat: () => console.log('I am eating roast beff, chicken and pizza'),
};

console.log(person01.firstName);
console.log(person01.lastName);
console.log(person01.age);
console.log(person01.isEmployed);
person01.sayHello();
person01.sayBye();
person01.eat();

console.log(person02.firstName);
console.log(person02.lastName);
console.log(person02.age);
console.log(person02.isEmployed);
person02.sayHello();
person02.sayBye();
person02.eat();
