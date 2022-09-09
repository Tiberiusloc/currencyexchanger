import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyExchange } from './currencyex';

// Business Logic

async function getCurrency(currency) {
  const response = await CurrencyExchange.getCurrency(currency);
  if (response.main) {
    printElements(currency)
  } else {
    printError(currency)
  }
}


// UI Logic

function printElements(currency) {
  document.querySelector('#showResponse').innerText = `This currency is ${currency}`
}

function printError(currency, error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency data for ${currency}:${error}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  document.querySelector('#currency').value = null;
  getCurrency(currency);
}

window.addEventListener("load", function(){
  this.document.querySelector('form').addEventListener('submit', handleFormSubmission);
})