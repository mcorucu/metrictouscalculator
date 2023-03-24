document.addEventListener("DOMContentLoaded", function () {
    const valueToConvert = document.getElementById("valueToConvert");
    const metricToUS = document.getElementById("metricToUS");
    const usToMetric = document.getElementById("usToMetric");
    const resultValue = document.getElementById("resultValue");

    function convertMetricToUS(value) {
        // Replace this function with your desired metric to US conversion formula
        return value * 3.28084; // Example: meters to feet conversion
    }

    function convertUSToMetric(value) {
        // Replace this function with your desired US to metric conversion formula
        return value / 3.28084; // Example: feet to meters conversion
    }

    metricToUS.addEventListener("click", function () {
        const convertedValue = convertMetricToUS(parseFloat(valueToConvert.value));
        resultValue.textContent = convertedValue.toFixed(2);
    });

    usToMetric.addEventListener("click", function () {
        const convertedValue = convertUSToMetric(parseFloat(valueToConvert.value));
        resultValue.textContent = convertedValue.toFixed(2);
    });
});
