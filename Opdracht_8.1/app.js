let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let answer;
let header = document.getElementById("answer");

function plus() {
answer = +number1.value + +number2.value;
header.innerText = "Het antwoord is " + answer;
}

function minus() {
    answer = +number1.value - +number2.value
    header.innerText = "Het antwoord is " + answer;
}

function divide() {
    answer = +number1.value / +number2.value
    header.innerText = "Het antwoord is " + answer;
}

function multiply() {
    answer = +number1.value * +number2.value
    header.innerText = "Het antwoord is " + answer;
}