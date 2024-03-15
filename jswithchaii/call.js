function setUsername(username) {
    this.username = username
}
function createUser(username, email, password) {
  setUsername.call(this,username)
    this.email = email
   // this.username=username
    this.password = password

    //setUsername(username);

}

const user = new createUser("abhi", "abhi@gmial.com", "13254")
console.log(new createUser("abhi", "abhi@gmial.com", "13254"));