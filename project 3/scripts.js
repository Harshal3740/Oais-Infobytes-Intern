function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(celsiusValue)) {
        // Convert Celsius to Fahrenheit
        const fahrenheitResult = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitResult.toFixed(2);
    } else if (!isNaN(fahrenheitValue)) {
        // Convert Fahrenheit to Celsius
        const celsiusResult = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusResult.toFixed(2);
    } else {
        alert('Please enter a valid temperature.');
    }
}
