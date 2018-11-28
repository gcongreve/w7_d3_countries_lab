const Countries = require("./models/countries.js");
const SelectCountryView = require('./views/select_country_view.js');
const DisplayCountryView = require('./views/display_country_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countries = new Countries();
  countries.getCountries();
  countries.bindEvents();

  const selectElement = document.querySelector('#countries')
  const selectCountryView = new SelectCountryView(selectElement);
  selectCountryView.bindEvents();


  const displayCountry = document.querySelector('#country')
  const displayCountryView = new DisplayCountryView(displayCountry)
  displayCountryView.bindEvents();
});
