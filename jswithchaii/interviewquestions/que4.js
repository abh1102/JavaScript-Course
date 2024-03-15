function a() {
    for (let i = 0; i < 3; i++) {//sing var only 3 will print 3 time because var has function scope {
        // for (var i = 0; i < 3; i++) { //using var only 3 will print 3 time because var has function scope
        setTimeout(function print() {
            console.log(i);
        }, i * 1000)
    }
} a()
for (var i = 0; i < 3; i++){
    function inner(){
        setTimeout(function print() {
            console.log(i);
        }, i * 1000)
    }
}inner()