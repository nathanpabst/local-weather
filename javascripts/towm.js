const dom = require('./dom');

let towmKey = '';

const setKey = (key) => {
  towmKey = key;
};

const searchCurrentWeather = (txt) => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?zip=${txt},us&appid=${towmKey}&units=imperial`)
      .done((result) => {
        console.log(result);
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};
// const searchFiveDay = (txt) => {
//   return new Promise((resolve, reject) => {
//     $.ajax(`https://api.openweathermap.org/data/2.5/forecast?zip=${txt},us&appid=${towmKey}`)
//       .done((result) => {
//         console.log(result);
//         resolve(result);
//       })
//       .fail((err) => {
//         reject(err);
//       });
//   });
// };

const displayResults = (searchText) => {
  searchCurrentWeather(searchText)
    .then((result) => {
      console.log(result);
      dom.currentWeather(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

module.exports = {
  displayResults,
  searchCurrentWeather,
  setKey,
};
