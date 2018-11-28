const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Countries = function () {
  this.countries = null;

};

Countries.prototype.getCountries = function () {
  const requestHelper =  new RequestHelper("https://restcountries.eu/rest/v2/all");
  requestHelper.get((data) => {
        console.log(data);
            console.log(typeof data);
    const countriesArray = Object.values(data);
    this.countries = countriesArray;

    PubSub.publish("Countries:all-Countries", this.countries)
  });

};


Countries.prototype.getCountry = function (index) {
  return this.countries[index];
};

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectCountryView:selectedIndex', (event) => {
    const selectedIndex = event.detail;
    const country = this.getCountry(selectedIndex);
    PubSub.publish('Countries:selected-country', country);
  })

};


module.exports = Countries;
