export default class CurrencyExchange {  
  static getCurrency(currency) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, currency]);
        } else {
          reject([response, currency]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}