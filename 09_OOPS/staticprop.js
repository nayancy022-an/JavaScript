class User {
  constructor(name){
    this.name = name;
  }

  logMe(){
  console.log(`Username is ${this.name}`);
  }


  // static createId(){   => static methods are not accessible by the instance of the class, they are only accessible by the class itself.
  //   return `123`;
  // }
}

const nayancy = new User("nayancy")
console.log(nayancy.createId())


class Teacher extends User{
constructor(name, email){
  super(name)
  this.email = email
}
}

const chai = new Teacher("chai", "chai@tea.com")
chai.logMe()
console.log(chai.createId())