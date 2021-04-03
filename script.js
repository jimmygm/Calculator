let numberButtons = document.querySelectorAll('.number-btn');
let display = document.querySelector('#display span');
let currentNum;

numberButtons.forEach((button) => {
    button.addEventListener('click', addNumber);
});

function addNumber(e) {
    display.textContent += +this.textContent;
    currentNum = +display.textContent;
    console.log(currentNum);
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
