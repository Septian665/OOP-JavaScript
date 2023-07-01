class User {
   constructor(name, age) {
      this._name = name,
      this._age = age
   }
   sayHi() {
      console.log(`nama saya ${this._name} dan umur saya adalah ${this._age} tahun`);
   }

   // getter
   get name() {
      return this._name
   }
   get age() {
      return this._age
   }

   // setter
   set name(value) {
      this._name = value;
   }
   set age(value) {
      this._age = value;
   }
}

console.log(typeof User);
let result = new User();
let result2 = new User();
let result3 = new User();

result.name = 'septian';
result.age = 23;
result.sayHi();

result2.name = 'ujang';
result2.age = 21;
result2.sayHi();

result3.name = 'budi';
result3.age = 19;
result3.sayHi();