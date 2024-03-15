const nums = [1, 2, 3, 4, 5]
// // const morethantwo = nums.map((num, i, arr) => {
// //     return num * 3;
// // });
// // console.log(morethantwo);
// const morethantwo = nums.map((num) => {
//     return num > 2;
// });
// console.log(morethantwo);
const morethantwo = nums.filter((num, i, arr) => {
    return num > 2;
});
console.log(morethantwo);