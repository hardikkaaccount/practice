// Calculator Project

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldResetScreen = false;

// Update display
function updateDisplay() {
  display.textContent = currentInput;
}

// Append number
function appendNumber(number) {
  if (currentInput === '0' || shouldResetScreen) {
    currentInput = number;
    shouldResetScreen = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

// Append decimal
function appendDecimal() {
  if (shouldResetScreen) {
    currentInput = '0.';
    shouldResetScreen = false;
    updateDisplay();
    return;
  }
  
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

// Handle operator
function handleOperator(nextOperation) {
  const inputValue = parseFloat(currentInput);
  
  if (operation !== null) {
    calculate();
  }
  
  previousInput = inputValue;
  operation = nextOperation;
  shouldResetScreen = true;
}

// Calculate
function calculate() {
  if (operation === null || shouldResetScreen) return;
  
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;
  
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error';
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }
  
  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay();
}

// Clear calculator
function clear() {
  currentInput = '0';
  previousInput = '';
  operation = null;
  updateDisplay();
}

// Delete last digit
function deleteDigit() {
  if (currentInput.length === 1) {
    currentInput = '0';
  } else {
    currentInput = currentInput.slice(0, -1);
  }
  updateDisplay();
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    
    if (!isNaN(parseInt(value))) {
      appendNumber(value);
    } else if (value === '.') {
      appendDecimal();
    } else if (value === 'C') {
      clear();
    } else if (value === '←') {
      deleteDigit();
    } else if (value === '=') {
      calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
      handleOperator(value);
    }
  });
});

// Initialize display
updateDisplay();