//when we declare object using new keyword then that is
// considered as singleton object
const tinderuser = new Object()//this is a singleton object
const user = {

}
user.id = "145abc"
user.name = "pragya"
user.isLoggedIn = false
console.log(user);
// fname: {
//     username: {
//         fullname: {
//             firstname: "abhishek";
//             lastname: "jha"
//         }
//     }
// }
//console.log(fname.username.fullname);

//combinbing object
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
//const obj3={obj1,obj2};
//const obj3 = Object.assign({},obj1, obj2)
const obj3 = { ...obj1, ...obj2 }
console.log(obj3);
console.log(Object.keys(user));//it will return all the keys of object in form of array
console.log(Object.values(user));//it will return all the keys of object in form of array
console.log(Object.entries (user));//it will return all the keys of object in form of array