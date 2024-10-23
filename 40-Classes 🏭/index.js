/**
 * class = (Recurso ES6) fornece uma estrutura mais limpa e uma maneira mais objetiva de trabalhar com objetos em comparação com funções construtoras tradicionais.
 * Ex: palavra-chave static, encapsulamento, herança
 */

class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  /**
   * * O método toFixed() é usado para formatar um número usando notação de ponto fixo.
   */
  displayProduct() {
    console.log(`Product ${this.name}`);
    console.log(`Product ${this.price.toFixed(2)}`);
  }

  calculateTotal(saleTax) {
    return this.price + this.price * saleTax;
  }
}

const saleTax = 0.05;

const product1 = new Product('Shirt', 19.99);
const product2 = new Product('Pants', 22.5);
const product3 = new Product('Underwear', 100.0);

const total1 = product1.calculateTotal(saleTax);
const total2 = product2.calculateTotal(saleTax);
const total3 = product3.calculateTotal(saleTax);

product1.displayProduct();
console.log(`Total price (with tax): ${total1.toFixed(2)}`);
product2.displayProduct();
console.log(`Total price (with tax): ${total2.toFixed(2)}`);
product3.displayProduct();
console.log(`Total price (with tax): ${total3.toFixed(2)}`);
