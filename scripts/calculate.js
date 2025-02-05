function calculateBMI(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    if (!height || !weight || !age || !gender) {
        alert("Please fill in all fields.");
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let weightStatus = '';

    if (bmi < 18.5) {
        weightStatus = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        weightStatus = 'Healthy';
    } else if (bmi >= 25.0 && bmi < 29.9) {
        weightStatus = 'Overweight';
    } else {
        weightStatus = 'Obese';
    }

    const resultMessage = `Your BMI is ${bmi} and you are classified as ${weightStatus}.`;
    alert(resultMessage);
}

document.querySelector('.calculate-form').addEventListener('submit', calculateBMI);