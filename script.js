const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const textBox = document.getElementById("textBox");
const result = document.getElementById("result");
let temp;

function convert() {
    temp = Number(textBox.value);
    result.style.color = "black";
    if (isNaN(temp)) {
        result.textContent = "*Please enter a valid number";
        result.style.color = "red";
        return;
    }

    if(toFahrenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(5) + " ℉";
    } else if (toCelcius.checked) {
        temp = (temp - 32) / (9 / 5); 
        result.textContent = temp.toFixed(5) + " ℃";
    } else {
        result.textContent = "*Please select a unit";
        result.style.color = "red";
    }
}

function reset() {
    toFahrenheit.checked = false;
    toCelcius.checked = false;
    result.textContent = "";
    result.style.color = "black";
}

document.getElementById("toggleThemeButton").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});