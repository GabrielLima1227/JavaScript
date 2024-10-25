/**
 * * getter = Um getter é um método que é chamado quando você acessa (ler) uma propriedade de um objeto.
 * * setter = Um setter é um método que é chamado quando você tenta modificar (escrever) uma propriedade de um objeto.
 * * Servem para validar e modificar valor ao ler/escrever uma propriedade.
 */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    //Poderia ser usado um operador ternario neste caso
    if (newWidth > 0) {
      //O uso do underscore (_) antes de uma propriedade em JavaScript é uma convenção que indica que a propriedade é privada ou protegida.
      this._width = newWidth;
    } else {
      //console.error é usado para exibir mensagens de erro no console do navegador ou no terminal.
      console.error('With must be a positive number');
    }
  }
  set height(newHeight) {
    //Poderia ser usado um operador ternario neste caso
    if (newHeight > 0) {
      //O uso do underscore (_) antes de uma propriedade em JavaScript é uma convenção que indica que a propriedade é privada ou protegida.
      this._height = newHeight;
    } else {
      //console.error é usado para exibir mensagens de erro no console do navegador ou no terminal.
      console.error('Height must be a positive number');
    }
  }
  /**
   * * ${}
   * * Legibilidade: O código fica mais fácil de ler e entender.
   * * Menos Concatenação: Reduz a necessidade de concatenar strings com o operador +.
   * * Flexibilidade: Você pode inserir expressões complexas, não apenas variáveis.
   */
  get width() {
    //.toFixed = Usado para formatar um número.
    return `${this._width.toFixed(1)}cm`;
  }
  get height() {
    //.toFixed = Usado para formatar um número.
    return `${this._height.toFixed(1)}cm`;
  }
  area() {
    return `${(this._width * this._height).toFixed(1)}cm`;
  }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area());

//Ex02

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstName) {
    if (typeof newFirstName === 'string' && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error('First Name must be a non-empty string');
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === 'string' && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error('Last Name must be a non-empty string');
    }
  }
  set age(newAge) {
    if (typeof newAge === 'number' && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error('Age must be a non-negative number');
    }
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  get age() {
    return this._age;
  }
}

const person = new Person('Spongebob', 'Squarepants', 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
