const button = document.getElementById("main-action-button");
const products = document.getElementById("products");

button.onclick = function () {
    products.scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu-item > a");
let buttons = document.getElementsByClassName("product-button");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        const link = document.getElementById(links[i].getAttribute("data-link"));
        link.scrollIntoView({behavior: "smooth"});
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        const button = document.getElementById("order");
        button.scrollIntoView({behavior: "smooth"});
    }
}