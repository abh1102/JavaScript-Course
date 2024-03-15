const account_Id = 1234;
let email = "abhishek@gmail.com";
var password = "12345";
let accountState;
console.log(account_Id);
console.table([account_Id, email, password, accountState]);
// it is beeter to not use var keyword for declaring variable
// due to problem of block scope  and functional scope
console.log(typeof null);//null is an object in js
console.log(typeof account_Id);
console.log(typeof undefined);