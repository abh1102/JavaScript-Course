console.log(Math);
//NOTE:-Math.abs convert negative value into positive value;
console.log(Math.abs(-4))
//Math.round function return round of  value;
console.log(Math.round(4.6));
console.log(Math.floor(7.8));
console.log(Math.ceil(6.3));
console.log(Math.min(2, 4, 1, 5, 56, 7, 8, -2));
console.log(Math.max(3, 5, 67, 8, 2, 4, 6, 77, 87, 65, 4));
//NOTE:-for generating random number we use math.random it give value between 0 to 1;
console.log(Math.random());
const max = 100
const min = 50;
//VERY IMPORTANT FORMULA
var otp = Math.round(Math.random() * (max - min + 1) + min);
console.log("otp are", otp);