document.getElementById("btn2").addEventListener("click", perform);

function perform() {
    let temperatureValue = parseFloat(document.getElementById("temp").value);
    let convertFrom = document.getElementById("choose").value;
    let convertTo = document.getElementById("choose1").value;
    let result = document.getElementById("result");



    if(temperatureValue==""||isNaN(temperatureValue)){
        alert("input a valid temprature");
    }

    if (convertFrom === "Celsius" && convertTo === "Fahrenheit") {
        result.innerHTML = (temperatureValue * 1.8 + 32).toFixed(2) + " °F";
    } else if (convertFrom === "Celsius" && convertTo === "Kelvin") {
        result.innerHTML = (temperatureValue + 273.15).toFixed(2) + " K";
    } else if (convertFrom === "Fahrenheit" && convertTo === "Celsius") {
        result.innerHTML = ((temperatureValue - 32) * 5/9).toFixed(2) + " °C";
    } else if (convertFrom === "Fahrenheit" && convertTo === "Kelvin") {
        result.innerHTML = ((temperatureValue - 32) / 1.8 + 273.15).toFixed(2) + " K";
    } else if (convertFrom === "Kelvin" && convertTo === "Celsius") {
        result.innerHTML = (temperatureValue - 273.15).toFixed(2) + " °C";
    } else if (convertFrom === "Kelvin" && convertTo === "Fahrenheit") {
        result.innerHTML = (1.8 * (temperatureValue - 273.15) + 32).toFixed(2) + " °F";
    } else {
        result.innerHTML = "Invalid !";
    }
}
