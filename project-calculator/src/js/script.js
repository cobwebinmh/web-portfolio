// Находим элементы
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '0';
let firstOperand = null;
let operator = null;
let shouldReset = false;

// Обрабатываем нажатия
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!isNaN(value) || value === '.') {
      appendNumber(value);
    } else if (value === 'AC') {
      clear();
    } else if (value === '±') {
      toggleSign();
    } else if (value === '%') {
      percent();
    } else if (value === '=') {
      calculate();
    } else {
      chooseOperator(value);
    }

    updateDisplay();
  });
});

// Функции логики
function appendNumber(num) {
  if (shouldReset) {
    currentInput = num === '.' ? '0.' : num;
    shouldReset = false;
  } else if (num === '.' && currentInput.includes('.')) {
    return;
  } else {
    currentInput = currentInput === '0' && num !== '.' ? num : currentInput + num;
  }
}

function updateDisplay() {
  display.textContent = currentInput;
}

function clear() {
  currentInput = '0';
  firstOperand = null;
  operator = null;
  shouldReset = false;
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
}

function percent() {
  currentInput = (parseFloat(currentInput) / 100).toString();
}

function chooseOperator(op) {
  if (operator !== null) calculate();
  firstOperand = currentInput;
  operator = op;
  shouldReset = true;
}

function calculate() {
  if (operator === null || shouldReset) return;

  const a = parseFloat(firstOperand);
  const b = parseFloat(currentInput);

  switch (operator) {
    case '+':
      currentInput = (a + b).toString();
      break;
    case '−':
      currentInput = (a - b).toString();
      break;
    case '×':
      currentInput = (a * b).toString();
      break;
    case '÷':
      currentInput = b !== 0 ? (a / b).toString() : 'Error';
      break;
  }

  operator = null;
  shouldReset = true;
}