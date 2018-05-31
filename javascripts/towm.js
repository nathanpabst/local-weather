const dom = require('./dom');

let towmKey = '';
let zipInput = '';

const setKey = (key) => {
  towmKey = key;
};

const setZip = (userInput) => {
  zipInput = userInput;
  setCurrentWeather();
};

const setCurrentWeather = () => {
  getCurrentWeather()
    .then((result) => {
      dom.printCurrentWeather(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

const getCurrentWeather = () => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?zip=${zipInput},us&appid=${towmKey}&units=imperial`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const setExtdForecast = () => {
  getExtdForecast()
    .then((result) => {
      dom.printExtendedForecast(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

const getExtdForecast = () => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipInput},us&appid=${towmKey}&units=imperial`)
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
  setZip,
};
