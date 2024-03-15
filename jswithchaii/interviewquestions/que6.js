//string to json:stringify function is used to convert object to string
const user = {
    name: "abhishek jha",
    age: 20,
    hobbies: ["reading", "eating"]

}
const string = JSON.stringify(user);
console.log(string);
//json to sting :-PARSE is used to convert string to object
const string1 = ' { "name": "abhishek", "age": 20 }';
const obj = JSON.parse(string1);
console.log("string converted into object", obj);
const setting = {
    name: "abhishek",
    title: "jha",
    age: 20,
    kill: 23
}
const obj2 = JSON.stringify(setting, ["age", "kill"])//it will only stringify age and kill
console.log("new stirng to obj", obj2);