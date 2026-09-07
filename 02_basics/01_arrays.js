//arrays

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const myHeros = ["Iron Man", "Spider Man", "Thor", "Hulk", "Captain America"];

// const myArry2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myHeros[2]);

//ARRAY METHOS

// myArr.push(6)
// myArr.pop()

// myArr.unshift(0); //NOT efficient
// myArr.shift(); //NOT efficient  first elemnt gone

// console.log(myArr.includes(5)); //true
// console.log(myArr.indexOf(5)); //5

// const newArr = myArr.join();

// console.log(newArr);
// console.log(typeof newArr);


//SLICE AND SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(2, 5); //slice(start, end) end is not included

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);

//important differnece between slice and splice is that slice does not change the original array but splice does change the original array 