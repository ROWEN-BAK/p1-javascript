let count = 0;
let button = document.getElementById("button");

function counter() {
    if(count < 10){
count += 1;
document.getElementById("text").innerText = count;}
else{
    count = 0;
    document.getElementById("text").innerText = count;
}
}