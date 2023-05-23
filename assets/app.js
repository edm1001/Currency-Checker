// find api for currency exhange
const api = "https://v6.exchangerate-api.com/v6/43f6ab4d2d11aac016a3a298/latest/USD"

// connect the variables with HTML
let search = document.querySelector(".searchVal");
let convertBtn = document.querySelector(".convert");
let convertFrom = document.querySelector(".from");
let convertTo = document.querySelector(".to");
let convertedVal = document.querySelector(".converted");
let finalAmount = document.querySelector(".final-amount")

// create variables thta compare
let resultFrom ;
let resultTo;
let searchCurrency;

// event that changes currency from
convertFrom.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
// event that changes currency to
convertTo.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

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
        }).then(displayResults);
}

// display the results 
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    convertedVal.innerHTML = ((toRate/fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";

}
