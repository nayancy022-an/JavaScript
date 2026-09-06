//Stach (Primitive) ,   Heap(Non-Primitive)

let myName = "nayancy"  //stored in stack

let anotherName = myName  //anotherName is stored in stack and it will have the value of myName

console.log(myName);
console.log(anotherName);

myName = "Nayancy"  //myName is updated in stack

let userOne = {
  email:"user1@gmail.com",
  upi : "user1"
}

let userTwo = userOne  //userTwo is stored in stack and it will have the reference of userOne which is stored in heap

userTwo.email = "nayancy@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);

