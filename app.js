



// console.log(bmi);

const BmiCal = () => {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height) * 10000).toFixed(1)
    console.log(bmi);

    document.getElementById('bmiCalcutation').innerHTML = 'Your Body BMI: ' + bmi
    // document.getElementById('message').innerHTML = message

    // if (bmi <= 24.9) {
    //     document.getElementById('message').innerHTML = 'You are Underweight'
    // } else if (bmi >= 25 && bmi <= 29.9) {
    //     document.getElementById('message').innerHTML = 'You are Healthy'

    // } else {
    //     document.getElementById('message').innerHTML = 'You are Overweight'

    // }
}

const render = () => {
    window.location.reload()
}