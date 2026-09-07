// const tinderUser = {};

// tinderUser.isLoggedIn = false;

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "nayancy",
//             lastname: "anand"
//         }
//     }
// };

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1 : "a", 2: "b", 3: "c"};
// const onj2 = {4 : "d", 5: "e", 6: "f"};
// // const obj3 = Object.assign({}, obj1, obj2); 
// // console.log(obj3);


// const obj3 = {...obj1, ...onj2};
// // console.log(obj3);

// const users = [
// {
//   id: 1,
//   email : "h@email.com"

// },
// {
//   id: 1,
//   email : "h@email.com"

// },
// {
//   id: 1,
//   email : "h@email.com"

// },


// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLogged"));


//<------------------DESTRUCTURING--------------------->

const course = {
  coursename: "english speaking",
  price : 999,
  courseInstructor : "Nayancy Anand",
}

// course.courseInstructor

const {courseInstructor : instructor} = course; //agar hum courseInstructor ko alag variable me store karna chahte hai to hum is tarah se kar sakte hai.

// console.log(courseInstructor);

console.log(instructor);


// <-------API's------->
// {

//   name: "nayancy",
//   coursename : "english speaking",
//   price : "free"
// }

//array ke form me bhi API milti hai 
[
  {},
  {},
]

//Method

// const navbar = ({compnay}) => {



// }

// navbar(compnay = "nayancy")   //destructuring in function parameter 


