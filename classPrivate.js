// class private
class Ongkir {
   #pajak
   constructor(berat) {
      this.beratBarang = berat;
      this.#pajak = 500;
   }

   biaya() {
      return this.beratBarang * 1000
   }

   totalBiaya() {
      return this.biaya() + this.#pajak
   }
}

const laptop = new Ongkir(4);
laptop.pajak = 800
console.log(laptop.totalBiaya());

// class inheritance
class People {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}

class Person extends People {
   constructor(name, age, job) {
      super(name, age);
      this.job = job;
   }
}

const tanjiro = new Person('kamado tanjiro', 20, 'demon slayer');
console.log(tanjiro.name);
console.log(tanjiro.age);
console.log(tanjiro.job);

