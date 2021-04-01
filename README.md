# Currency Exchanger

#### Learning project for Epicodus class. Application for converting currency using exchange rate API

#### By Shanen Cross

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery
* Webpack
* ESLint
* Babel

## Description

A learning project for the Epicodus coding school, made to practice using APIs. Website application for converting from one currency to another, using the proper exchange rate. Uses ExchangeRate-API to get currency exchange rates.

## Setup/Installation Requirements

This application uses _ExchangeRate-API_. You'll first need to access their website and create a free account to obtain your own API key for the application to use.
* Go to [the ExchangeRate-API website](https://www.exchangerate-api.com/)
* Follow the instructions to sign up for a free key under their Free Plan, entering in your email and desired password
* The site should provide you with an API key

To install locally:
* Install git
* Install [npm](https://www.npmjs.com/), the JavaScript package manager. For development, I used npm version 6.14.10
* Use _git clone_ this repository to a local directory
* Install the necessary modules by executing _npm install_ on the command line

To set up your API key:
* Create a file named _.env_ and place it you your repository's root directory
* Inside _.env_, enter the following, but replace the text "yourAPIkey" with the API key you obtained from the ExchangeRate-API website:
`API_KEY=yourAPIKey`
* Save your _.env_ file

To run the application:
* Excute _npm run start_ on the command line to build the project and run a local server. The website will automatically open in your web browser
* OR, execute _npm run build_ on the command line to build the project, and then open dist/index.html in your web browser.

## Known Bugs

None.

## License

[MIT](LICENSE)

Copyright (c) 2021 Shanen Cross