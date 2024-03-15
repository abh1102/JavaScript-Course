const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(buttons);
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        if (event.target.id === 'grey') {
            body.style.backgroundColor = 'gray';
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        if (event.target.id === 'purple') {
            body.style.backgroundColor = 'purple';
        }
        if (event.target.id === 'green') {
            body.style.backgroundColor = 'green';
        }
    })
})