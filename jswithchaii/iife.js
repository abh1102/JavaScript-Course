//IMMEDIATELY INVOKED FUNCTON EXPRESSION
(function abhi() {
    console.log(`DB connected`);
})();
//AlWAYS USE SEMICOLON BETWEEN TWO IIFE FUNCTION TO EXECUTE
((name) => {
    console.log(`DBconnected`);
})('abhi');
((name) => {
    console.log(`DBconnected`);
})('abhi');

//abhi()
(function (x) {
    return (function (y) {
        console.log(x);
    })(1);
})(2);