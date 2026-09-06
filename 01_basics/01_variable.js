const accountId = 144533
let accountEmail = "nayancy66@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //not preferrable
let accountState;

//accountId = 2  //not allowed

accountEmail = "hc@gmail.com"
accoundPassword = "123323"
accountCity = "Bengaluru"

console.log(accountId);

/*
  prefer not to use var because of issue in block scope and fucntional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])