const textBox = document.getElementById("textBox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const btnSubmit = document.getElementById("btnSubmit");
const resultConversion = document.getElementById("resultConversion");

function convertToFahrenheit(number) {
  return number * (9 / 5) + 32;
}
function convertToCelsius(number) {
  return ((number - 32) * 5) / 9;
}

btnSubmit.addEventListener("click", function () {
  if (toFahrenheit.checked) {
    resultConversion.textContent = convertToFahrenheit(Number(textBox.value)) + "ºF";
  } else if (toCelsius.checked) {
    resultConversion.textContent = convertToCelsius(Number(textBox.value))+ "ºC";
  } else {
    resultConversion.textContent = "Select a Unit";
  }
});