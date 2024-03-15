// const fun = (function (a) {
//     delete a
//     return a;
// })(5);
// console.log(fun);
// // to print only keys from object
// const user = {
//     name: "abhishek",
//     age: "20",
//     "my name is abhishek jha": true
// }
// for (key in user) {
//     console.log(key);
// }
// //printing values of key
// for (key in user) {
//     console.log(user[key]);
// }
// const obj = {
//     a: "one",
//     b: "two",
//     a: "three"

// }
// console.log(obj);
//VERY VERY IMPORTANT QUESTION
const a = 123;
const b = { key: "b" };// in JavaScript, when you use an object as a key in another object, it will implicitly call toString() method on the object to convert it into a string. 
//So, b is coerced into a string. 
const c = { key: "c" };//The result would be something like "[object Object]". Therefore, this line is equivalent to a["[object Object]"] = 123.
a[b] = 123;
a[c] = 456;
console.log(a[b]);
//Now, when you try to access a[b],
// it will again coerce b into a string. 
//Therefore, it's equivalent to a["[object Object]"]. Since a has been modified twice, both assignments essentially set the same property "[object Object]" with different values. The last assignment wins. So, a["[object Object]"] is 456.

