// const events = require('./events');

const printExtendedForecast = (data) => {
  console.log('dom', data);
  // let forecastOutput = '';
  // let conditions = [];
  // forecast.forecast.forEach((condition) => {
  //   conditions.push(condition.weather.main);
  // });
  // conditions = conditions.join(', ');
  // // for (let i = ...)
  // forecastOutput += `<div class="row">
  //                     <div class="col-sm-6 col-md-4">
  //                       <div class="thumbnail">
  //                         <img src="..." alt="...">
  //                           <div class="caption">
  //                             <h3>${data.list[i].clouds.dt_txt}</h3>
  //                             <h4>Temperature: ${data.list[i].main.temp}</h4
  //                             <h4>Conditions: ${conditions}</h4>
  //                             <h4>Air Pressure: ${data.list[i].main.pressure}</h4>
  //                             <h4>Wind Speed: ${data.list[i].wind.speed}</h4>
  //                           </div>
  //                       </div>
  //                     </div>
  //                   </div>`;
  // printToDom(forecastOutput, extendedForecast);
};

const printCurrentWeather = (weather) => {
  let output = '';
  let conditions = [];
  weather.weather.forEach((condition) => {
    conditions.push(condition.main);
  });
  conditions = conditions.join(', ');
  output += `<div class="jumbotron text-center">
              <div class="container">
                <h1>Current Weather</h1>
                <h2>${weather.name}</h2>
                <h3>Temperature: ${weather.main.temp}</h3>
                <h3>Conditions: ${conditions}</h3>
                <h3>Air Pressure: ${weather.main.pressure}</h3>
                <h3>Wind Speed: ${weather.wind.speed}</h3>
                <button class="btn btn-primary btn-lg extForecast" role="button">View 5 day forecast</button>
              </div>
            </div>`;
  printToDom(output);
  // events.forecastButton();
};

const printToDom = (stringz) => {
  $('#weatherContainer').html(stringz);
  // $('#extendedForecast').html(stringz);
};

module.exports = {
  printCurrentWeather,
  printExtendedForecast,
};
