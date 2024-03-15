// const myarr = [0, 1, 2, 3, 4];
// const myheroes = ["ironman", "captain america"];
// const arr = new Array(1, 2, 3, 4, 8);
// console.log(myarr[1]);

// //Array methods
// myarr.push(45);
// myarr.pop();//pop element from last
// //If we want to insert element at front then we used unshift method
// //myarr.unshift(9);
// //shift is used to remove element from last
// myarr.shift();
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));
// console.log(myarr);
// //join function convert array to comma seperated string
// const newArr = myarr.join();
// console.log(newArr);

// //slice,splice
// console.log("A", myarr);
// const myn1 = myarr.slice(1, 3);
// console.log(myn1);
// console.log("B", myarr);//using slice
// const myn2 = myarr.splice(1, 3);
// console.log("C", myarr);//using splice
// console.log(myn2);
// //splice changes the original array by removing, 
// //replacing, or adding values and returns the 
// //affected values.

// //slice returns a piece of the array but 
// //it doesn't affect the original array.
function manipulate(arr){
arr.push(5)
arr=[1]
return arr;
}
list=[1,2,3,4]
manipulate(list)
console.log(list);
list=manipulate(list);
console.log(list);

