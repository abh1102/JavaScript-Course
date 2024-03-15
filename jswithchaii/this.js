const user = {
    username: "abhishek",
    age: 23,
    welcomemsg: function () {
        console.log(`${this.username},welcome in the world of javasdc `);
        console.log(this);
    }
}
//WINDOW OBJECT IS THE GLOBAL OBJECT IN JAVASCRIPT
user.welcomemsg()
user.username = "pragya"
user.welcomemsg()
console.log(this)
// function abhi(){
//     console.log(this);
// }abhi()
const one=()=>{
    let username="abhishek"
    console.log(this);
}
one()