class Animal {
   constructor(name) {
      this.name = name;
   }

   speak() {
      console.log(`${this.name} membuat sebuah suara 1`);
   }

   move() {
      console.log(`${this.name} membuat sebuah gerakan 2`)
   }
}

class Dog extends Animal {
   constructor(name, breed) {
      super(name);
      this.breed = breed;
   }

   jump() {
      console.log(`${this.name} which breed is ${this.breed} is jumping with happy face 3`);
   }

   speak() {
      super.speak(); //super memanggil method yg ada di class parent terlebih dahulu
      console.log(`${this.name} is barking right now 4`);
   }
}

const result = new Dog('boby','pitbull');
result.move();
result.speak();
result.jump();

