let a=300
if(true){
    let a=10
    const b=4
    var c=741

}
//console.log(a);//this will also show error
//console.log(b);//this will show error
console.log(c);//this willl print 741

//NESTED SCOPE
function one(){
    const username="abhi"
//nested function takes the data of function 1
    function two(){
        const website="youtube"
        console.log(username);
    }
   // console.log(website);//this will show error
    two();
}one()

console.log(addone(8));
function addone(num){
    return num+1
}

console.log(addtwo(4));//this wil show 
const addTwo=function (num){
    return num+2
}
// console.log(addone(4));