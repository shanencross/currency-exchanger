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
        displayInvalidCurrencyMessage(newCurrency);
      }
      else {
        const convertedMoney = response.conversion_result;
        displayResult(convertedMoney, newCurrency);
      } 
    })
    .catch(function(error) {
      displayInvalidRequestMessage(error.message);
    });
});

function displayResult(convertedMoney, newCurrency) {
  $("#results span#converted-money").text(convertedMoney);
  $("#results span#new-currency").text(newCurrency);
  $(".error-message-container").hide();
  $("#results").show();
}

function displayInvalidCurrencyMessage(invalidCurrency) {
  $("#results").hide();
  $(".error-message-container").hide();
  $("#invalid-currency-message").show();
  $("#invalid-currency-message #invalid-currency").text(invalidCurrency);
}

function displayInvalidRequestMessage(message) {
  $("#results").hide();
  $(".error-message-container").hide();
  $("#invalid-request-message").show();
  $("#invalid-request-error").text(message);
}
