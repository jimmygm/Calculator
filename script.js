let numberButtons = document.querySelectorAll('.number-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let totalButton = document.querySelector('#total-btn');
let deleteButton = document.querySelector('#delete-btn');
let clearButton = document.querySelector('#clear-btn');
let display = document.querySelector('#number-display');

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

function addNumber(e) {
    currentNum += this.textContent;
    displayNumber(currentNum);
}

function addOperator(e) {
    if (operator) {
        // If there's already an operator, calculate the result
        calcAndResult();
        resetDisplay();
        // Save the next operator for the next operation
        operator = this.getAttribute('value');
    }

    if (!operator) {
        // If there's not an operator, add it to use it later
        operator = this.getAttribute('value');
        lastNum = +currentNum;
        resetDisplay();
    }
}

function totalResult(e) {
    if (operator) {
        // If there's already an operator, calculate the result
        calcAndResult();
        currentNum = lastNum;
        // Reset the operator
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

function displayNumber(number = '') {
    display.textContent = number;
}

function calcAndResult() {
    lastNum = operate(lastNum, +currentNum, checkOperator(operator));
    displayNumber(lastNum);
}

function resetDisplay() {
    currentNum = '';
}

function delResult(e) {
    // convert to array
    currentNum = currentNum.split('');
    // removes the last one
    currentNum.pop();
    // join it again
    currentNum = currentNum.join('');

    displayNumber(currentNum);
}

function clearResult() {
    lastNum = undefined;
    resetDisplay();
    displayNumber(currentNum);
}

let currentNum = '';
let lastNum;
let operator;

numberButtons.forEach((button) => {
    button.addEventListener('click', addNumber);
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', addOperator);
});

totalButton.addEventListener('click', totalResult);
deleteButton.addEventListener('click', delResult);
clearButton.addEventListener('click', clearResult);
