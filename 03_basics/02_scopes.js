//jb browser me console ke through scope check krte hai to wo aalg hai or node ke through scope check krte hai to wo aalg hai


// // var c =300
// let a = 300
// if(true){
// let a = 10
// const b = 20
// console.log("INNER: ", a);
// }

// for(let i = 0; i<array.length; i++){
//   const element = array[i];
// }


// console.log("a is: ", a);
// // console.log("b is: ", b);



// function one(){
// const username = "nayancy"

// function two(){
//   const website = "youtube"
//   console.log(username);
// }

// // console.log(website);

// two();

// }

// one();


if(true){
  const username = "hitesh"
  if(username === "hitesh"){
    const website = " yotube"
    console.log(username + website);
  }

  // console.log(username);

}


//<--------------------INTERESTING--------------------->

//ist way of making function
function addone(value){
  return num + 1;
}

addone(5);


//2nd way of making function
const addTwo = function(num){
  return num + 2
}

addTwo(5);