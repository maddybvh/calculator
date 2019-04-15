function add (a,b) {
	return Number(a) + Number(b);
}

function subtract (a, b) {
	return Number(a) - Number(b);
}

function multiply (a, b) {
    return Number(a) * Number(b);
}

function divide (a, b) {
    if (b == 0){return 'ERROR'}
    else{return Number(a) / Number(b);}
}

function operate (operator, a, b){
    switch(operator){
        case '+': 
            return add (a, b);
        case '-': 
            return subtract(a, b); 
        case "*": 
            return multiply(a, b);
        case "/": 
            return divide(a, b); 
    }
}

function operate1 (operator, a){
    switch (operator){
        case 'sign':
            return (-1) * Number(a);
        case 'root':
            return Math.sqrt(a);
        case 'per':
            return 100 * Number(a);
    }
}

var accumulator = 0;
var currentValue = null;
var operation = null;
var dec = null;

function display (number){
    number = number.toString();
    if (number.length > 8){
         number = number.slice(0,7);
        }
    document.getElementById('screen').innerHTML = `${number}`
}

//CLEAR
document.getElementById("clear").addEventListener("click", function(){
    if (operation){document.getElementById(operation).style.backgroundColor = 'red';} 
    accumulator = 0;
    currentValue = null;
    operation = null;
    display(accumulator)
});


//NUMBER BUTTONS
const buttons = document.querySelectorAll('.numButton');
buttons.forEach((button) => {button.addEventListener('click', (e) => {
    if (operation){document.getElementById(operation).style.backgroundColor = 'red';}
    if (currentValue) {
        currentValue = currentValue + button.id;
    }
    else {
        currentValue = button.id;
    }
    display(currentValue);
  });
});

//OPERATORS (2 variables)
const ops = document.querySelectorAll('.op');
ops.forEach((button) => {button.addEventListener('click', (e) => {
    if (currentValue){
        accumulator = currentValue;
        currentValue = null;
        document.getElementById('screen').innerHTML = `${accumulator}`
        operation = button.id;
        document.getElementById(operation).style.backgroundColor = 'maroon';
    }
});
})

//OPERATORS (1 variable)
const ops1 = document.querySelectorAll('.op1');
ops1.forEach((button) => {button.addEventListener('click', (e) => {
    if (currentValue == null){currentValue = accumulator}
    currentValue = operate1(button.id, currentValue);
    display(currentValue);
});
})

//DECIMAL
document.getElementById("decimal").addEventListener("click", function(){
    if (currentValue == null){currentValue = 0}
    if (dec == null) {
        document.getElementById('decimal').style.backgroundColor = 'gray';
        currentValue = currentValue + '.'
        display(currentValue);
    }
});

//EQUALS
document.getElementById("=").addEventListener("click", function(){
    if (operation){document.getElementById(operation).style.backgroundColor = 'red';}
    accumulator = operate(operation, accumulator, currentValue);
    display(accumulator);
    currentValue = null;
});