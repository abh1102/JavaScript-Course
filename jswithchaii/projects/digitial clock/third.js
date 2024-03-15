const clock = document.querySelector('#clock')
console.log(clock);

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
    //console.log(date.toLocaleTimeString());
}, 1000)

