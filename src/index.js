import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyExchange, convert, backConvert} from './currencyex';

// Business Logic





// UI Logic


function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  document.querySelector('#currency').value = null;
  CurrencyExchange.getCurrency(currency)
    .then(function(response) {
      const resp = response;
      let rate = resp.conversion_rates.USD;
      let usd = document.querySelector('#userNumber1').value;
      document.querySelector('#conversion1').innerText =  "The currency converted from USD to " + currency + " is " + convert(usd,rate);
    });
}

function handleAnySubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency2').value;
  document.querySelector('#currency2').value = null;
  CurrencyExchange.getCurrency(currency)
  .then(function(response) {
    console.log(response)
    const resp = response;
    let changeRate = document.querySelector('#currencyChange').value;
    let rate = resp.conversion_rates[changeRate]
    console.log(rate);
    let anyCurr = document.querySelector('#userNumber2').value;
    document.querySelector('#conversion2').innerText =  "The currency converted from" + currency + " to " + changeRate + " is " + backConvert(anyCurr,rate);
  });

}

window.addEventListener("load", function(){
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
  document.querySelector('#form2').addEventListener('submit', handleAnySubmission);
});