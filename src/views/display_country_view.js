const PubSub = require('../helpers/pub_sub.js')

const DisplayCountryView = function (container) {
  this.container = container;
};

DisplayCountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country', (event) => {
    const country = event.detail;
    this.render(country);
  })
};

DisplayCountryView.prototype.render = function (country) {

  this.container.innerHTML = '';

  this.createElement('h3', country.name);

  this.createElement('h5', country.region);

  this.createImage(country.flag);

  this.createLanguageList(country.languages);

};

DisplayCountryView.prototype.createElement = function (tag, value) {
  const element = document.createElement(tag);
  element.textContent = value;
  this.container.appendChild(element);

};

DisplayCountryView.prototype.createImage = function (flag) {
  const element = document.createElement("img");
  element.src = flag;
  this.container.appendChild(element);
};

DisplayCountryView.prototype.createLanguageList = function (languages) {
  const unorderedList = document.createElement('ul');

  languages.forEach((language) => {
    const element = document.createElement('li');
    element.textContent = language.name;
    unorderedList.appendChild(element);
  });

  this.container.appendChild(unorderedList);
};



module.exports = DisplayCountryView;
