class User{
  constructor(username, email, password){
    this.Username = username;
    this.email = email;
    this.password = password;
  }

  logMe(){
    console.log(`Username is ${this.Username} and email is ${this.email}`);
  }
}

class Teacher extends User{
  constructor(username, email, password){
    super(username) 
    this.email = email
    this.password = password
  
  }

  addCourse(){
    console.log(`A new course is added by ${this.Username}`);
  }
}

const chai = new Teacher("chai", "chi=hai@teacher.com", "123")

chai.addCourse()
const nayancy = new User("nayancy")

// nayancy.addCourse() not accessible because nayancy is not a teacher, it is a user.
nayancy.logMe()

console.log(chai ==  nayancy) //=> false
console.log(chai ==  Teacher) //=> false

console.log(chai instanceof Teacher) //=> true



