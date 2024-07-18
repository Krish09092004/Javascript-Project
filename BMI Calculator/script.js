const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please enter valid input for height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please enter valid input for weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi > 0 && bmi < 18.6) {
      result.innerHTML = `Your bmi is ${bmi} and you are under weight`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `your bmi is ${bmi} and you are in normal range`;
    } else {
      result.innerHTML = `your bmi is ${bmi} and you are over weight`;
    }
  }
});
