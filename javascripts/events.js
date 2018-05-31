const towm = require('./towm');
const apiKeys = require('./apiKeys');

const validateZip = () => {
  const userInput = $('#searchBar')[0].value;
  if (userInput.length === 5 && $.isNumeric(userInput)) {
    towm.setZip(userInput);
  } else {
    alert('Oops! Please enter a five digit zip code');
  }
};

const forecastButton = (zipInput) => {
  $('.extForecast').on('click', towm.setExtdForecast(zipInput));
};

const searchEvents = () => {
  $('#searchButton').on('click', validateZip);
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      validateZip();
    }
  });
};

const initializer = () => {
  searchEvents();
  apiKeys.retrieveKeys();
};

module.exports = {
  initializer,
  forecastButton,
};
