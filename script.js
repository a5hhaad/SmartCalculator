function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    let result;

    // Replace '^' with '**' for exponentiation in JavaScript
    const expression = display.value.replace(/\^/g, '**');

    try {
        // Handle square root
        if (expression.includes('√')) {
            const parts = expression.split('√');
            if (parts[1]) {
                const number = parseFloat(parts[1]);
                result = Math.sqrt(number);
            }
        } else {
            result = eval(expression); // Evaluate the expression safely
        }
        
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
