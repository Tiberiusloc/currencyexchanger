import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyExchange, convert, backConvert} from './currencyex';

// Business Logic





// UI Logic


function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  CurrencyExchange.getCurrency(currency)
    .then(function(response) {
      const resp = response;
      let rate = resp.conversion_rates.USD;
      let usd = document.querySelector('#userNumber1').value;
      document.querySelector('#conversion1').innerText =  "The currency converted from USD to " + currency + " is " + convert(usd,rate);
      document.querySelector('#currency').value = null;
      document.querySelector('#userNumber1').value = null;
    });
}

function handleAnySubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency2').value;
  CurrencyExchange.getCurrency(currency)
    .then(function(response) {
      const resp = response;
      let changeRate = document.querySelector('#currencyChange').value;
      let rate = resp.conversion_rates[changeRate];
      console.log(rate);
      let anyCurr = document.querySelector('#userNumber2').value;
      document.querySelector('#conversion2').innerText =  "The currency converted from " + currency + " to " + changeRate + " is " + backConvert(anyCurr,rate);
      document.querySelector('#currency2').value = null;
      document.querySelector('#userNumber2').value = null;
      document.querySelector('#currencyChange').value = null;
    });

}

window.addEventListener("load", function(){
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
  document.querySelector('#form2').addEventListener('submit', handleAnySubmission);
});