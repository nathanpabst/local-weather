const towm = require('./towm');
const apiKeys = require('./apiKeys');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

const validateZip = () => {
  const userInput = $('#searchBar')[0].value;
  if (userInput.length === 5 && $.isNumeric(userInput)) {
    towm.setZip(userInput);
  } else {
    alert('Oops! Please enter a five digit zip code');
  }
};

const getSavedLocationsEvent = () => {
  // $(document).on('click', '.saveLocation', (e) => {

  firebaseApi.getSavedLocations()
    .then((locationsArray) => {
      dom.domString(locationsArray);
    })
    .catch((error) => {
      console.error('error in finding saved locations', error);
    });
};

const saveLocationEvent = () => {
  $(document).on('click', '.saveLocation', (e) => {
    const locationToAddCard = $(e.target).closest('.location');
    const locationToAdd = {
      name: locationToAddCard.find('.locationName').text(),
      temp: locationToAddCard.find('.locationTemp').text(),
      conditions: locationToAddCard.find('.locationConditions').text(),
      airPressure: locationToAddCard.find('.locationAirPressure').text(),
      windSpeed: locationToAddCard.find('.locationWindSpeed').text(),
      isScary: false,
    };
    firebaseApi.saveLocationInDb(locationToAdd)
      .then(() => {
        alert('location saved');
      })
      .catch((error) => {
        console.error('error in saving location', error);
      });
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
  saveLocationEvent();
  getSavedLocationsEvent();
};

module.exports = {
  initializer,
  forecastButton,
  saveLocationEvent,
  getSavedLocationsEvent,
};
