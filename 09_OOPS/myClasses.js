/*class User {
  constructor(username, email, password){
    this.Username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
   return `${this.password} encrypted`;
  
  }

  changeUsername(){
    return `Username changed to ${this.Username.toUpperCase()}`;
  }
}


const nayancy = new User("nayancy", "nancy@gmail.com", "123")

console.log(nayancy.encryptPassword());
console.log(nayancy.changeUsername());*/



//behind the scene

function User(username, email, password){
  this.Username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
   return `${this.password} encrypted`;

}
User.prototype.changeUsername = function(){
return `Username changed to ${this.Username.toUpperCase()}`;
}

const tea = new User("tea", "tea@gmail.com", "tea123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


