const PubSub = require('../helpers/pub_sub.js')

const SelectCountryView = function (element) {
 this.element = element;
};

SelectCountryView.prototype.bindEvents = function () {
  PubSub.subscribe("Countries:all-Countries", (event) => {
    const countries = event.detail;
    countries.forEach((country, index) => {
      const countryName = country.name;
      const option = document.createElement('option');
      option.textContent = countryName;
      option.value = index;
      this.element.appendChild(option);
    });
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectCountryView:selectedIndex', selectedIndex);
  })

};




module.exports = SelectCountryView;
