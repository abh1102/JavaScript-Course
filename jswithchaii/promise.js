//promise is used when we have to do multiple asynchronous operation at a time
//it takes multiple  callback function
const promiseone = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("abhi and pragya");
        resolve()
    }, 1000)
})
//The callback to execute when the Promise is resolved.
promiseone.then(function () {
    console.log("promise consumed");
})
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promise");
        resolve()
    }, 1000)
}).then(function () {
    console.log("promise  2 consumed")
})
const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "abhishek", email: "abhi@gmail.com" })
    })
}).then(function (user) {
    console.log(user.username)
})
//USE OF REJECT
const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "pragya" })
        }
        else {
            reject('something went wrong')
        }
    }, 1000)
})
promisefour.then((user) => {
    console.log(user);
    return user.username
    //in chaining we pass the upcoming value as a function
}).then((username) => {
    console.log(username);



}).catch((error) => {
    console.log(error);

}).finally((pr) => {
    console.log("promise is either solved or reject");
})
const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "abhi" })
        }
        else {
            reject('blunder')
        }
    }, 1000)
})
async function consumepromisefive() {
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
    }

} consumepromisefive()
fetch('https://api.github.com/users/abh1102')
    .then((abc) => {
        return abc.json()
    }).then((data) => {
        console.log(data)
    }).catch((error) => console.log(error))

const promisesix = new Promise(function (resolve, reject) {
    setInterval(function () {
        console.log("pragya")

    }, 1000)
})