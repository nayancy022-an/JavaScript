function multiplyBy5(num){
  return num*5
}
multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score 

}

createUser.prototype.incrememt = function(){
  this.score++
}
createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`)
}

const chai = new createUser("nayancy" , 25)
const tea = new createUser("hitesh" , 28)

chai.printMe()
tea.printMe()


/*here's what happend behind the scene when the new keywod is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. this means that it has access to the properties and methods defined on the contructor's prototype

The contructor is called: The contructor fucntion is called with the specified arguments and with the specified arguments and this is bound to the newly created object. IF no explicit return vaclue is specified from the contructor.  

The new object is returned : after the constructor function has been called, if it doesn't return a non-primitivr value(object, array, function, etc), the newly created object is returned

*/