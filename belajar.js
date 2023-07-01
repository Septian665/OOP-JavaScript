const firstName = 'ujang';   
const lastName = 'bogel';

const user = {
   firstName: 'budi',
   lastName: 'doremi',
   getFullName() {
      return this
   },
   getFullName1: () => {
      return this
   }
}

function persegi(s) {
   return s*s;
}
console.log(persegi(4));
console.log(user.getFullName());




// lanjut di video Javascript Class Inheritance Tutorial - Part 10