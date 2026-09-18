const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI) //=>3.141592653589793


console.log(descriptor) //=> {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}

const chai = {
  name : "chai",
  price : 100,
  isAvailable : true,

  orderChai : function(){
    console.log("chai is not orderd");
  }


}
console.log(chai) //=> {name: 'chai', price: 100, isAvailable: true}
console.log(Object.getOwnPropertyDescriptor(chai, "name")) //=> {value: 'chai', writable: true, enumerable: true, configurable: true}

// Object.defineProperty(chai, 'name', {
//   writable: false,
 //enumerable: true, 

// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for(let [key, value] of Object.entries(chai)){
  if (typeof value !== "function"){

  
  console.log(`${key} : ${value}`);
  }
}

