const towm = require('./towm');
const apiKeys = require('./apiKeys');

const validateZip = () => {
  const zipInput = $('#searchBar')[0].value;
  // console.log('from events', zipInput);
  if (zipInput.length === 5 && $.isNumeric(zipInput)) {
    towm.setCurrentWeather(zipInput);
    forecastButton(zipInput);
  } else {
    alert('Oops! Please enter a five digit zip code');
  }
};

const forecastButton = (zipInput) => {
  $('.extForecast').on('click', towm.setExtdForecast(zipInput));
  // $('#weatherContainer').addClass('hidden');
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
  // forecastButton();
  apiKeys.retrieveKeys();
};

module.exports = {
  initializer,
};
