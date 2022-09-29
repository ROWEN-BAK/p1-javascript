let button = document.getElementById("button");
let button2 = document.getElementById("button2")
let paragraph = document.getElementById("paragraph")
let body = document.getElementById("body")

let count = 0;
let count2 = 0;

function counter() {
    count += 1;
    paragraph.innerText = count + " keer op geklikt";
    paragraph.style.backgroundColor = "blue"
    paragraph.style.color = "red"
    body.style.backgroundColor = "blue"
}

function counter2() {
    count -= 1;
    paragraph.innerText = count + " keer op geklikt";
    paragraph.style.backgroundColor = "red"
    paragraph.style.color = "blue"
    body.style.backgroundColor = "red"
}
