// find api for currency exhange
const api = "https://v6.exchangerate-api.com/v6/43f6ab4d2d11aac016a3a298/latest/USD"

// connect the variables with HTML
const search = document.querySelector(".searchVal");
const convertBtn = document.querySelector(".convert");
const convertFrom = document.querySelector(".from");
const convertTo = document.querySelector(".to");
const convertedVal = document.querySelector(".converted");

// create variables thta compare
let resultFrom ;
let resultTo;
let searchCurrency;

// event that changes currency from
convertFrom.addEventListener('change', (e) => {
    resultFrom = `${e.target.value}`;
});
// event that changes currency to
convertTo.addEventListener('change', (e) => {
    resultTo = `${e.target.value}`;
});
// for when value is updated
function updateValue(e) {
    searchValue = e.target.value;
}

convertBtn.addEventListener("click", getResults);

// use the Api to get conversion results
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults)
}
