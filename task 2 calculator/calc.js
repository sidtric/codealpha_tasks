let display = document.querySelector('.display');

//  input to display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}