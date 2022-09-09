import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyExchange, convert} from './currencyex';

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
  document.querySelector('#showResponse').innerText = `This currency is ${currency[0].conversion_rates.USD} in US $
  This currency is ${currency[0].conversion_rates.KWD} in Kuwaiti $
  This currency is ${currency[0].conversion_rates.BHD} in Bahrain $
  This currency is ${currency[0].conversion_rates.GBP} in Pound $
  This currency is ${currency[0].conversion_rates.EUR} in Euro $
  This currency is ${currency[0].conversion_rates.CAD} in Canadian $`;
}

function printError(error) {
  console.log(error);
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency data for ${error[2]} ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  document.querySelector('#currency').value = null;
  CurrencyExchange.getCurrency(currency)
    .then(function(response) {
      console.log(response)
      const resp = response;
      let rate = resp[0].conversion_rates.USD;
      let usd = document.querySelector('#userNumber1').value;
      document.querySelector('#conversion1').innerText = convert(usd,rate);
    });
}

window.addEventListener("load", function(){
  this.document.querySelector('form').addEventListener('submit', handleFormSubmission);
});