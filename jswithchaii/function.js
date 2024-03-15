// // function add(n1, n2) {
// //     console.log(n1 + n2);
// //     // return result;

// // }
// //add(5,6);
// function add(n1, n2) {
//     // console.log(n1 + n2);
//     let result = n1 + n2
//     return result;

// }

// const result = add(5, null);
// console.log("Result", result);
// function loginusermessage(username = "sam") {
//     if (username === undefined) {
//         console.log("please enter the username");
//         return;
//     }
//     return `${username} just logged in`

// }
// console.log(loginusermessage());//This will return undefined
// console.log(loginusermessage("abhishek"));
//we use rest operator when we insert multiple parameters in function
function abhi(...num){
    console.log(num);
}
abhi(100,200,344)
let obj1={name:"abhi"}
let obj2=obj1
console.log(obj1.name);
console.log(obj2.name);
obj2.name="pragya  love you"
console.log(obj2.name);
console.log(obj1.name);
