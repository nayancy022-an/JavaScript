class User {
  constructor(email, password){
  this.email = email;
  this.password = password;
  }

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
     this._email = value.toUpperCase()
  }

  get password(){
    return `${this._password} is the password`;
  }
  set password(value){
    this._password = value.toUpperCase() //maximum callstack size exceeded because of infinite loop, so we need to use different name for the property and the setter/getter method.
  }
}

const hitesh = new User("n@gmail.com", "abs")
console.log(hitesh.password);
console.log(hitesh.email);
