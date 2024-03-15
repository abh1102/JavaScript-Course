//DATE IS AN OBJECT IN JAVASCRIPT
let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toISOString());
console.log(mydate.toJSON());
//locastring return exact time long with exact date
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
let date = new Date(2024, 0, 4, 5, 3);
console.log(date.toLocaleString());
date.toLocaleString('default',{
    weekday:'long'
})