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

const btn = document.querySelectorAll('button');
const display = document.getElementById('output');
const numbersBtn = document.querySelectorAll('.button.numbers');
const operatorBtn =document.querySelectorAll('.button.operators');
const equalsBtn = document.getElementById('solve');
const clearBtn = document.getElementById('clear');

let isFirstClick = true;

numbersBtn.forEach(numbers => {
    numbers.addEventListener('click', () => {
         // Check if it's the first click
         if (isFirstClick) {
            // Clear the initial text content
            display.textContent = '';
            // Update the flag to false for subsequent clicks
            isFirstClick = false;
        };

        display.textContent += numbers.textContent;
    })
});

operatorBtn.forEach(symbol => {
    symbol.addEventListener('click', () => {

        if(symbol.textContent === '+'){
            // store number, operator and clear display
            num1 = Number(display.textContent);
            operator = '+';
            display.textContent = '';
        };

        if(symbol.textContent === '-'){
            // store number, operator and clear display
            num1 = Number(display.textContent);
            operator = '-';
            display.textContent = '';
        };

        if(symbol.textContent === 'x'){
            // store number, operator and clear display
            num1 = Number(display.textContent);
            operator = 'x';
            display.textContent = '';
        };

        if(symbol.textContent === '÷'){
            // store number, operator and clear display
            num1 = Number(display.textContent);
            operator = '÷';
            display.textContent = '';
        };
    
    });
});

equalsBtn.addEventListener('click', () =>{
    num2 = Number(display.textContent);
    display.textContent = operate(num1, operator, num2);

});

clearBtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = 0;
    isFirstClick = true;
});

// // Add click event listeners to each button
// btn.forEach(button => {
//     button.addEventListener('click', () => {
//         // Check if it's the first click
//         if (isFirstClick) {
//             // Clear the initial text content
//             display.textContent = '';
//             // Update the flag to false for subsequent clicks
//             isFirstClick = false;
//         };
        
//         const numbers = document.querySelectorAll('.button.numbers');
//         numbers.forEach(n => console.log(n.textContent));
//         // Append the text content of the clicked button to the display
//         if(display.textContent in numbers.textContent){
//             display.textContent += button.textContent;
//         } 
        
//         if(button.textContent === '+'){
//             // store numbers on display then clear display
//             num1 = Number(display.textContent);
//             display.textContent = '';
//         }else if(button.textContent === '='){
//             alert(display.textContent);

//             num2 = Number(display.textContent);
//             display.textContent = add(num1, num2);
//         } else if(button.textContent === 'AC'){
//             display.textContent = 0;
//             isFirstClick = true;
//             num1 = 0;
//             num2 = 0;
//         }
        


//     })
// })
