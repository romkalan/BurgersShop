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

const orderAction = document.getElementById("order-action");
let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let forms = [burger, name, phone];

orderAction.onclick = function () {
    let hasError = false;

    forms.forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if (!hasError) {
        forms.forEach(item => {
           item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с Вами!");
    }
}

const currencyChangeButton = document.getElementById("change-currency");
let prices = document.getElementsByClassName("products-item-price");

currencyChangeButton.onclick = function (e) {
    let currentCurrency = e.target.innerText;
    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 88;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    }
    else if (currentCurrency === "BYN") {
        newCurrency = "€";
        coefficient = 0.9;
    }
    else if (currentCurrency === "€") {
        newCurrency = "¥";
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency;
    for (let i = 0; i < prices.length; i++) {
        const currentPrice = (+prices[i].getAttribute("data-base-price") * coefficient).toFixed(0);
        prices[i].innerText = `${currentPrice} ${newCurrency}`;
    }
}