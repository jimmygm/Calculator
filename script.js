let numberButtons = document.querySelectorAll('.number-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let totalButton = document.querySelector('#total-btn');

let numberDisplay = document.querySelector('#number-display');
let numberCarry = document.querySelector('#number-carry');

let currentNum = '';
let lastNum;
let operator;

numberButtons.forEach((button) => {
    button.addEventListener('click', addNumber);
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', addOperator);
});

totalButton.addEventListener('click', showResult);

function addNumber(e) {
    currentNum += this.textContent;
    showNumber(currentNum);
}

function addOperator(e) {
    if (operator) {
        lastNum = operate(lastNum, +currentNum, checkOperator(operator));
        showNumber(lastNum);
        currentNum = '';
        operator = this.getAttribute('value');
    }

    if (!operator) {
        operator = this.getAttribute('value');
        lastNum = +currentNum;
        currentNum = '';
    }
}

function showResult(e) {
    if (operator) {
        lastNum = operate(lastNum, +currentNum, checkOperator(operator));
        showNumber(lastNum);
        currentNum = lastNum;
        operator = false;
    }
}

function checkOperator(string) {
    switch (string) {
        case 'add':
            return add;
        case 'subtract':
            return subtract;
        case 'multiply':
            return multiply;
        case 'divide':
            return divide;
    }
}

function showNumber(number = '') {
    numberDisplay.textContent = number;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    return operator(num1, num2);
}
