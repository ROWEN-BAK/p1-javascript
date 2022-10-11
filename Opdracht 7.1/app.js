let product = prompt("Hoe duur is uw product?");

let budget = 100;

if(product < budget) {
    document.getElementById("text").innerText = "U heeft genoeg geld!";
    document.getElementById("text").style.color = "green"
    console.log('%cU heeft genoeg geld!', 'color: green;');
} else {
    console.log('%cHelaas, te weinig geld.', 'color: red;')
    document.getElementById("text").innerText = "Helaas, te weinig geld.";
    document.getElementById("text").style.color = "red"
}