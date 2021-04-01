import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

console.log(process.env.API_KEY);

let response = fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
  .then(function(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .catch(function(error) {
    return error;
  });

response.then(function(nextResponse) {
  console.log(nextResponse);
});

