"use strict"; //treat all JS code as newer version


//alert(1 + 3)  //we are using nodejs, not browser

// console.log(3 + 3)  
// //Code readibility should be high

// let name = "nayancy"   //string
// let age  = 18          //number => 2 to power 53
// let isLoggedIn = false //boolean => true/false
//                         //bigint 
//                         //string => ""
// let state               //null =>standalone value  //is a type of object
//                         // undefined =>     type=>undefined
//                         // symbol => unique
//                         //object


// console.log(typeof age);


//primitive

//7 types : String, Number. Boolean, null, undefined, symbol, BigInt

const score  = 100
const scoreValue = 100.3

const id  = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 7328219824172019n

// Reference (Non Primitive) returnType => function

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj" , "doga"]

     let myObj = {
    name  :"nayancy",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);