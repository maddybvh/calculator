function add (a,b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function power(a , b) {
	return a ** b;
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
        case "**": 
            return power(a, b);
    }
}

let accumulator = 0;

//buttons
document.getElementById("clear").addEventListener("click", function(){
    accumulator = 0;
    document.getElementById('screen').innerHTML = `${accumulator}`
});

