//object can be declared in two waya
//1:-Literal,2:-constructor
//object.create //creating object using constructor

const mysybmol = Symbol("key");


const user = {
    [mysybmol]: "mykey1",
    name: "Abhishek",
    "full name": "pragya mohan",
    name2: "pragya",
    age: 23,
    email: "ahishekjha2507@gmail.cokm"
}
//acessing objject
console.log(user.name);
console.log(user[mysybmol]);//datatype is of string type
console.log(user["name2"]);
console.log(user["full name"]);

user.email = "abhi.com";
//with the help of freeze anyone can't change the vslue inside object
//Object.freeze(user)
user.greeting = function () {
    console.log("hello")
}
user.greeting2=function(){
    console.log(`hello js user,${this.name2}`);
}
console.log(user.greeting2());
// console.log(user.greeting);
// console.log(user.greeting());



