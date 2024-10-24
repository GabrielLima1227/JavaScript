//inheritace = É um conceito que permite que uma classe (chamada de classe filha ou subclasse) herde propriedades e métodos de outra classe (chamada de classe pai ou superclasse).

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}
//A palavra extends é usada para criar uma subclasse (Classe Filha) que herda as características da superclasse (Classe Pai).
class Rabbit extends Animal {
  name = 'Rabbit';

  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = 'Fish';
  swim() {
    console.log(`This ${this.name} is swiming`);
  }
}
class Hawk extends Animal {
  name = 'Hawk';
  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
const fish = new Fish();
console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();
const hawk = new Hawk();
console.log(fish.alive);
hawk.eat();
hawk.sleep();
hawk.fly();
