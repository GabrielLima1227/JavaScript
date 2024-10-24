//static = Define propriedades ou métodos que pertencem à classe em si, e não às instâncias (objetos) criadas a partir dela. Isso significa que você pode acessar um método ou propriedade estática diretamente pela classe, sem precisar criar um objeto dela.
//Em resumo, conseguimos acessar os métodos de uma classe sem precisar instanciar um objeto.

//Ex01

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircunference(radius) {
    return 2 * this.PI * radius;
  }
  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircunference(10));
console.log(MathUtil.getArea(10));

//Ex02

class User {
  static userCount = 0;

  constructor(userName) {
    this.userName = userName;
    User.userCount++;
  }
  static getUserCount() {
    console.log(`There are ${User.userCount} users online`);
  }
  sayHello() {
    console.log(`Hello, my username is ${this.userName}`);
  }
}

const user1 = new User('Spongebob');
const user2 = new User('Patrick');
const user3 = new User('Sandy');

console.log(user1.userName);
console.log(user2.userName);
console.log(user3.userName);
User.getUserCount();

user1.sayHello();
user2.sayHello();
user3.sayHello();
