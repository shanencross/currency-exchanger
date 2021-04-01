import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchange-rate-service.js';

$("form#currency-form").submit(function(event) {
  event.preventDefault();

  const moneyUSD = $("input#USD-input").val();
  const newCurrency = $("input#currency-input").val().toUpperCase();

  ExchangeRateService.fetchPairConversionData("USD", newCurrency, moneyUSD)
    .then(function(response) {
      if (response instanceof Error) {
        throw response;
      }
      if (response["result"] === "error") {
        $("#results").hide();
        $(".error-message-container").hide();
        $("#invalid-currency-message").show();
        $("#invalid-currency-message #invalid-currency").text(newCurrency);
      }
      else {
        const convertedMoney = response.conversion_result;
        $("#results span#converted-money").text(convertedMoney);
        $("#results span#new-currency").text(newCurrency);

        $(".error-message-container").hide();
        $("#results").show();
      } 
    })
    .catch(function(error) {
      $("#results").hide();
      $(".error-message-container").hide();
      $("#invalid-request-message").show();
      $("#invalid-request-error").text(error.message);
    });
});

