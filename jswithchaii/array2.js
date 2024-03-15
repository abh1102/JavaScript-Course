const marvel_hero = ["Ironman", "black widow", "spiderman"];
const dc_hero = ["batman", "superman", "flash"];
marvel_hero.push(dc_hero);
console.log(marvel_hero);//push return the same arr
//concat
const all_heroes = marvel_hero.concat(dc_hero);
//concat merge two different array as single unity
console.log(all_heroes);
//spread method
const all_new_heroes = [...marvel_hero, ...dc_hero];
console.log(all_new_heroes);
const another_array = [1, 2, 3, 4[5, 6, 7, 8[3, 4, 5, 6]]];
//flat returns a new array with all sub-array elements concatenated into it recursuively upto the specified depth

const reusable_array = another_array.flat(Infinity);
console.log(reusable_array);
console.log(Array.from("pragya"));//it will  seperate all element of single string
console.log(Array.from({ name: "pragya" }));//this wil return an empty array
//we can also convert a variable into arrray

var score1 = 100;
var score2 = 200;
var score3 = 300;
console.log((Array.of(score1, score2, score3)));