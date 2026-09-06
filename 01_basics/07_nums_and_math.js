// const score = 400


// //explicitly declare the type of variable

// const balance = new Number(1000)
// console.log(balance)

// console.log(balance.toString())
// console.log(typeof balance.toString())
// console.log(balance.toFixed(2));

// const otherNumber = 23.977
// const anotherNumber = 123.977

// console.log(anotherNumber.toPrecision(4)) //
// console.log(otherNumber.toPrecision(3)) //24.0

// const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"))  //1,00,000
// console.log(hundreds.toLocaleString("en-US"))  //1,000,000


// <--------------MATHS--------------->

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.min(4, 7, 1, 9));
console.log(Math.max(4, 7, 1, 9));


console.log(Math.random());  //in between 0 to 1

console.log((Math.random() * 10) + 1); 
console.log(((Math.random() * 10) + 1));  


const min = 10
const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //in between 10 to 20