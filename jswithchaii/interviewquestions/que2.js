function square(num) {
    return num * num;
}

function displaysquare(fn) {
    console.log("square is" + fn(5));
}

displaysquare(square)