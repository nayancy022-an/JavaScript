// function sayHello() {
// console.log("H")
// console.log("e")
// console.log("l")
// console.log("l")
// console.log("o")

// }

// // sayHello();   //=>execution of function

// function addTwoNumbers(num1, num2) {   //num1 and num2 are parameters
//   //  let add = (num1 + num2);
//   //  return add;


//   return num1 + num2;
// }



// const result = addTwoNumbers(2, 3); // here 2 and 3 are arguments  //=>execution of function
// // console.log(result);

// function loginUserMessage(username = "sam" ){ // sam likh diye to undefined hoga nhi ab or aagr kuch paas kiye jaise nayancy to wo print hoga or agar kuch paas nhi kiya to default value sam print hoga
//     if(!username){
//   // if(username === undefined){
//        console.log("Please enter a username");
//        return
//   }
//   return `${username} just logged in`;
// }
// // console.log(loginUserMessage("nayancy"));
// console.log(loginUserMessage());  //=>execution of function


function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200, 300, 400, 500));


const user = {
  username : "nayancy",
  price  : 199 //agar yha pe price ki jagah prices kr diya to handleObject function me price ki value undefined aa jayegi
}

function handleObject(anyObject){

  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);
handleObject({

  username : "sam",
  price : 299
});


const myNewArray = [200, 400 , 100, 60]

function returnSecondValue(getArray){
  return getArray[3];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400 , 100, 60, 90, 80]));




 