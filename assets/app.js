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
let resultTo
let searchCurrency;


// use the Api to exchange the value to correct conversion

