import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchange-rate-service.js';

$("form#currency-form").submit(function(event) {
  event.preventDefault();

  let response = ExchangeRateService.fetchExchangeRateData();
  response.then(function(nextResponse) {
    console.log(nextResponse);
  });
});

