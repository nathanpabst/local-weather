const dom = require('./dom');
// const events = require('./events');

let towmKey = '';

const setKey = (key) => {
  towmKey = key;
};

const setCurrentWeather = (searchText) => {
  getCurrentWeather(searchText)
    .then((result) => {
      dom.printCurrentWeather(result);
      // events.forecastButton(searchText);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

const getCurrentWeather = (txt) => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?zip=${txt},us&appid=${towmKey}&units=imperial`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const setExtdForecast = (searchText) => {
  getExtdForecast(searchText)
    .then((result) => {
      console.log('from towm', result);
      dom.printExtendedForecast(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

const getExtdForecast = (txt) => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://api.openweathermap.org/data/2.5/forecast?zip=${txt},us&appid=${towmKey}`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  setCurrentWeather,
  getCurrentWeather,
  setExtdForecast,
  getExtdForecast,
  setKey,
};
