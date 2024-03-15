const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        results.innerText = `Please enter valid data${height}`;
    } else {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        results.innerText = "Your BMI is: " + bmi;
    }
    function resetForm() {
        document.getElementById("Form").reset();
      }
})
