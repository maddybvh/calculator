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
    return Number(a) / Number(b);
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

var accumulator = 0;
var currentValue = 0;
var operation = null;

function displayAccumulator (accumulator){
    document.getElementById('screen').innerHTML = `${accumulator}`
}

function displayCurrentValue (currentValue){
    document.getElementById('screen').innerHTML = `${currentValue}`
}

//CLEAR
document.getElementById("clear").addEventListener("click", function(){
    accumulator = 0;
    currentValue = 0;
    displayAccumulator(accumulator)
});


//NUMBER BUTTONS
const buttons = document.querySelectorAll('.numButton');
buttons.forEach((button) => {button.addEventListener('click', (e) => {
    if (operation){
        accumulator = operate(operation, accumulator, button.id)
        document.getElementById(`${operation}`).style.backgroundColor = 'red';
    }
    else{
        accumulator = button.id
    }
    displayAccumulator(button.id);
  });
});

//OPERATORS
const ops = document.querySelectorAll('.op');
ops.forEach((button) => {button.addEventListener('click', (e) => {
    operation = button.id;
    document.getElementById(`${button.id}`).style.backgroundColor = 'maroon';
});
})

//EQUALS
document.getElementById("=").addEventListener("click", function(){
    displayAccumulator(accumulator);
});