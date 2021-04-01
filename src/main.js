import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchange-rate-service.js';

$("form#currency-form").submit(function(event) {
  event.preventDefault();

  const moneyUSD = $("input#USD-input").val();
  const newCurrency = $("input#currency-input").val();

ExchangeRateService.fetchExchangeRateData()
  .then(function(response) {
    if (newCurrency in response.conversion_rates) {
      const exchangeRate = response.conversion_rates[newCurrency] 
      const convertedMoney = moneyUSD * exchangeRate;

      $("#results span#converted-money").text(convertedMoney)
      $("#results span#new-currency").text(newCurrency);

      $("#invalid-currency-message").hide();
      $("#collecting-input").hide();
      $("#results").show();
    }
    else {
      $("#invalid-currency-message").show();
      $("#invalid-currency-message #invalid-currency").text(newCurrency);
    }
  });
});

