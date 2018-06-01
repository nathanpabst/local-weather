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

const saveLocationButton = () => {
  $(document).on('click', '.saveLocation', function (e) {
    const whoDis = $(e.target).closest('.container');
    console.log(whoDis);
  });
};

const forecastButton = (zipInput) => {
  $(document).on('click', '.extForecast', towm.setExtdForecast);
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
  forecastButton();
  saveLocationButton();
};

module.exports = {
  initializer,
  forecastButton,
  saveLocationButton,
};
