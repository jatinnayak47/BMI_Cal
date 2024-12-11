const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (!height || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please provide a valid height.`;
    return; 
  }
  if (!weight || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight.`;
    return;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let bmiCategory;
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }
  results.innerHTML = `<span>BMI: ${bmi}</span><br><span>Category: ${bmiCategory}</span>`;
});
