// class public
class Ongkir {
   constructor(berat) {
      this.berat = berat;
      this.pajak = 500;
   }

   biaya() {
      return this.berat * 1000
   }

   totalBiaya() {
      return this.biaya() + this.pajak
   }
}

const laptop = new Ongkir(4);
laptop.pajak = 800
console.log(laptop.totalBiaya());

// class private
class Car {
   #color
   constructor(color) {
      this.#color = color;
   }

   colorCar() {
      console.log(`color car is ${this.#color}`);
   }
}

const result = new Car('red');
result.color = 'yellow';
result.colorCar();

// class Polymorphism
class People {
   constructor(name) {
      this.name = name;
   }

   greet() {
      return  `hello, good morning, my name is ${this.name}`
   }
}

class Person extends People {
   constructor(name) {
      super(name);
   }

   greet() {
      return `hallo, selamat pagi, nama saya adalah ${this.name}`
   }
}
const tanjiro = new Person('septian');
console.log(tanjiro.greet());