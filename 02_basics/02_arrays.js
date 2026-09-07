const marvel_heros = ["thor", "ironman", "spiderman", "hulk", "black widow"];

const dc_heros = ["batman", "superman", "wonder woman", "flash", "aquaman"];

// Accessing array elements
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  //array ke andar array aa gya hai
// console.log(marvel_heros[3][1]); 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);               //returns newarray and does not change the original array


// const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator
// console.log(all_new_heros);


// const another_array = [1,2,3,[4,5,6],7, [6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity) //flat method flattens the array and returns a new array

// console.log(real_another_array);


console.log(Array.isArray("nayancy"))
console.log(Array.from("nayancy")) //converts string into array
console.log(Array.from({name: "nayancy"})) //converts object into array

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1, score2, score3)) //creates an array from the given arguments


