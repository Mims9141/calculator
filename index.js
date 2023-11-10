const add = (a, b) => a + b;

const subtract = (a, b)=> a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let num1 = '';
let num2 = '';
let operator = '';

const operate = (num1, operator, num2) => {
    if(operator === '+'){
        return add(num1, num2);
    }
    if(operator === '-'){
        return subtract(num1, num2);
    }
    if(operator === 'x'){
        return multiply(num1, num2);
    }
    if(operator === '÷'){
        return divide(num1, num2);
    }
};

const display = document.getElementById('output');
const numbersBtn = document.querySelectorAll('.button.numbers');
const operatorBtn =document.querySelectorAll('.button.operators');
const equalsBtn = document.getElementById('solve');
const clearBtn = document.getElementById('clear');
const decimalBtn = document.getElementById('decimal')

let isFirstClick = true;
let firstDecimal = true;

numbersBtn.forEach(numbers => {
    numbers.addEventListener('click', () => {
        if (isFirstClick) {
            display.textContent = '';
            isFirstClick = false;
            firstDecimal = true; // Allow adding a decimal to the new number
        }

        display.textContent += numbers.textContent;
    });
});

operatorBtn.forEach(symbol => {
    symbol.addEventListener('click', () => {
        if (!isFirstClick) {
            if (operator !== '') {
                num2 = Number(display.textContent);
                display.textContent = operate(num1, operator, num2);
                num1 = Number(display.textContent);
            } else {
                num1 = Number(display.textContent);
            }
        }
        isFirstClick = true;
        operator = symbol.textContent;
        firstDecimal = true; // Reset firstDecimal whenever an operator is clicked
    });
});

decimalBtn.addEventListener('click', () => {
    if (display.textContent !== '' && firstDecimal) {
        display.textContent += '.';
        firstDecimal = false;
    }
});

equalsBtn.addEventListener('click', () => {
    if (!isFirstClick) {
        num2 = Number(display.textContent);
        display.textContent = operate(num1, operator, num2);
        isFirstClick = true;
        firstDecimal = true; // Reset firstDecimal after calculation
    }
});

clearBtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    firstDecimal = true;
    display.textContent = '0';
    isFirstClick = true;
});


// operatorBtn.forEach(symbol => {
//     symbol.addEventListener('click', () => {

//         if(isFirstClickOperator && operator === ''){
//         if(symbol.textContent === '+'){
//             // store number, operator and clear display
//             num1 = Number(display.textContent);
//             operator = '+';
//             isFirstClickOperator = false;
//         };

//         if(symbol.textContent === '-' && isFirstClickOperator){
//             // store number, operator and clear display
//             num1 = Number(display.textContent);
//             operator = '-';
//             isFirstClickOperator = false;
//         };

//         if(symbol.textContent === 'x' && isFirstClickOperator){
//             // store number, operator and clear display
//             num1 = Number(display.textContent);
//             operator = 'x';
//             isFirstClickOperator = false;
//         };
//         if(symbol.textContent === '÷' && isFirstClickOperator){
//             // store number, operator and clear display
//             num1 = Number(display.textContent);
//             operator = '÷';
//             isFirstClickOperator = false;
//         };
//         } else if(isFirstClickOperator == false){
//             num2 = Number(display.textContent);
//             display.textContent = operate(num1, operator, num2); 
//             num1 = Number(display.textContent);  
//             isFirstClickOperator = true;
//         } else if(isFirstClickOperator == true && operator !== '') {
//             if(symbol.textContent === '+'){
//                 // store number, operator and clear display
//                 num2 = Number(display.textContent);
//                 operator = '+';
//             };

//             if(symbol.textContent === '-' && isFirstClickOperator){
//                 // store number, operator and clear display
//                 num2 = Number(display.textContent);
//                 operator = '-';
//                 isFirstClickOperator = false;
//             };

//             if(symbol.textContent === 'x' && isFirstClickOperator){
//                 // store number, operator and clear display
//                 num2 = Number(display.textContent);
//                 operator = 'x';
//                 isFirstClickOperator = false;
//             };
//             if(symbol.textContent === '÷' && isFirstClickOperator){
//                 // store number, operator and clear display
//                 num2 = Number(display.textContent);
//                 operator = '÷';
//                 isFirstClickOperator = false;
//             };
//         } 
//     });
// });



