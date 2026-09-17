// // let myName  = "nayancy      "
// // let myChannel = "yt         "

// // console.log(myName.trueLength()) 

// let myHeros = ["thor, ironman"]
// let heroPower = {
//   thor : "hammer",
//   spiderman : "sling",

//   getSpiderPower : function(){
//     console.log(`Spidy power is ${this.spiderman}`);
//   }
// }

// Object.prototype.nayancy = function(){
//   console.log(`nayancy is present in all objects`);
// }

// Array.prototype.heynayancy= function(){
//   console.log(`nayancy says hello`);
// }
// // heroPower.nayancy()

// myHeros.nayancy()
// myHeros.heynayancy()
// heroPower.heynayancy() //=>not accessible


//INHERITENCE

const User = {
  name: "chai",
  email: ""
}

const teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssingment: 'JS assingment',
  fullTime: true,
  __proto__: TeachingSupport
}

teacher.__proto__ = User

//modern system
Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
  console.log(`${this}`)
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);

}
anotherUsername.trueLength()
"nayancy".trueLength()
"iceTea".trueLength()


