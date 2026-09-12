const myNums = [1,2,3,4,5,6,7,8,9,10];

// const myTotal = myNums.reduce(function ( acc, currVal) {
//   console.log(`acc: ${acc}, currVal: ${currVal}`);
//   return acc + currVal;
// }, 0)

//OR

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal)


const shoppingCart = [

  {

  itemName: "js course",
  price : 2999
  },
   {
    itemName : "python course",
    price : 1999
   },

   {
    itemName : "java course",
    price : 3999
   }

]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);