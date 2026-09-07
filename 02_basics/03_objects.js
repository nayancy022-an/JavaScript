//singleton



Object.create // => constructor ke through object bnana


//object literals 

const mySym = Symbol("key1")

const jsUser = {

  name : "nayancy",
  "full name" : "nayancy kumari",
  [mySym] : "mykey1",
  age  : 18,
  location : "jaipur",
  email : "nayancy@gmail.com",
  isloggedIn : false,
  lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"]) 
console.log(typeof jsUser.mySym) 
console.log(jsUser[mySym]) 

jsUser.email = "nayancy56gmail.com"
Object.freeze(jsUser) //iske baad email me koi changes nhi kr skte

jsUser.email = "nayancy56chatgpt.com"

console.log(jsUser)

jsUser.greeting = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo());