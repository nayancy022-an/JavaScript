// const user = {
//   username : "nayancy",
//   loginCount : 9,
//   signedIn : true,

//   getUserDetail: function(){
//     // console.log("Got user details from database");
//     console.log( this)
//   }
// }

// console.log(user.username);
// console.log(user.getUserDetail());


// const promiseOne = new Promise()
// const date  = new Date()  //=> new - constructor function

function User(username, loginCount, isLoggedIn){
  this.username = username; // left value = variable, right value = parameter
  this.loginCount = loginCount;
  this.isLoggedIn - isLoggedIn

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }

  return this  //ye nhi krte tb bhi values milti hi hai
}

const userOne = new User("hitesh", 10, true) //=> function invocation12
const userTwo = new User("nayancy", 11, false);

console.log(userOne.constructor);
// console.log(userTwo)

//constructor funtion har baar ek nya instance deta hai

