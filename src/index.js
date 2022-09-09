import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currencyex';

// Business Logic

function getCurrency(currency) {
  let promise = CurrencyExchange.getCurrency(currency);
  promise.then(function(currency) {
    printElements(currency);
  }, function(currency) {
    printError(currency);
  });
}



// UI Logic

function printElements(currency) {
  console.log(currency);
  document.querySelector('#showResponse').innerText = `This currency is ${currency[0].conversion_rates.USD}`;
}

function printError(error) {
  console.log(error);
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency data for ${error}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  document.querySelector('#currency').value = null;
  getCurrency(currency);
}

window.addEventListener("load", function(){
  this.document.querySelector('form').addEventListener('submit', handleFormSubmission);
});