let currentInput = '0';

function appendSymbol(symbol) {
    if (currentInput === '0') {
        currentInput = symbol;
    } else {
        currentInput += symbol;
    }
    updateScreen();
}

function updateScreen() {
    const outputScreen = document.getElementById('output');
    outputScreen.textContent = currentInput;
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateScreen();
    } catch (error) {
        currentInput = 'Error';
        updateScreen();
    }
}

function clearScreen() {
    currentInput = '0';
    updateScreen();
}

function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    updateScreen();
}