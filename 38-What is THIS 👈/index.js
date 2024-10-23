/**
 * this. = Faz referência ao objeto onde THIS é usado (o objeto depende do contexto imediato)
 * person.name = this.name
 * ! Não usar com Arrow Functions
 */
const person01 = {
  name: 'Spongebob',
  favFood: 'hamburgers',
  sayHello: function () {
    console.log(`Hi, I am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

person01.sayHello();
person01.eat();

const person02 = {
  name: 'Patrick',
  favFood: 'ice cream',
  sayHello: function () {
    console.log(`Hi, I am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

person02.sayHello();
person02.eat();
