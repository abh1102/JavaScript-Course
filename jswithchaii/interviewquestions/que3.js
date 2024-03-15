const e = 1
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e
            }
};
    }
} console.log(sum(1)(2)(3)(4));
var count = 0;
(function print() {
    if (count === 0) {
        let count = 1;//variable shadowing print 1
        console.log(count);
    }
    console.log(count);//print 1 s
})();
//creating function
//Example of closure
function createBase(num1) {
    return function second(num2) {
        console.log(num1 + num2);
    }
}
var addsix = createBase(6);
addsix(57)
addsix(89)