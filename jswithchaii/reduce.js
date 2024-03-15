let arr = [8, 2, 5, 3,2]
let avg = arr.reduce((accum, current, index, array) => {
    let total = accum + current;
    if (index === array.length - 1) {
        return total / array.length
    }
    return total

})
console.log(avg);