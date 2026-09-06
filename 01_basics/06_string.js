// we can use "" OR '' OR `` for string
// `` => template string => we can use variable inside string 

const name  =  "nayancy"
const repoCount = 50


console.log(name + repoCount + " Value");


console.log(`Hello  my name is ${name} and my repoCount is ${repoCount}`);


// declaration of string
const string1 = new String("Hello-World")  //object

console.log(string1[0]);
console.log(string1.__proto__);  //prototype of string1


console.log(string1.length);
console.log(string1.toUpperCase());
console.log(string1.charAt(4));
console.log(string1.indexOf('e'));

const newString  = string1.substring(0, 6)
console.log(newString);


const anotherString  = string1.slice(-8, 5)
console.log(anotherString);

const anotherString2  = "     World     "
console.log(anotherString2.trim());

const url = "https://nayancy.com/nayancy%20anand"

console.log(url.replace('%20', '-'))

console.log(url.includes('koo'))

console.log(string1.split(''))





