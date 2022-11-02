let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let answer;
let header = document.getElementById("answer");

function plus() {
    if (number1.value <= 0 || number2.value <= 0) {
        header.innerText = "Helaas het getal is te laag!";
      } else {
        answer = +number1.value + +number2.value;
        header.innerText = "Het antwoord is " + answer;
      }
}

function minus() {
    if (number1.value <= 0 || number2.value <= 0) {
        header.innerText = "Helaas het getal is te laag!";
      } else {
        answer = +number1.value - +number2.value;
        header.innerText = "Het antwoord is " + answer;
      }
}

function divide() {
    if (number1.value <= 0 || number2.value <= 0) {
        header.innerText = "Helaas het getal is te laag!";
      } else {
        answer = +number1.value / +number2.value;
        header.innerText = "Het antwoord is " + answer;
      }
}

function multiply() {
    if (number1.value <= 0 || number2.value <= 0) {
        header.innerText = "Helaas het getal is te laag!";
      } else {
        answer = +number1.value * +number2.value;
        header.innerText = "Het antwoord is " + answer;
      }
}

