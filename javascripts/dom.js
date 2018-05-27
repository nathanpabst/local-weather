const printExtendedForecast = (data) => {
  // let forecastOutput = '';
  // let conditions = [];
  // forecast.forecast.forEach((condition) => {
  //   conditions.push(condition.weather.main);
  // });
  // conditions = conditions.join(', ');
  // forecastOutput += `<div class="list-group">
  //             <a href="#" class="list-group-item active">
  //               <h3 class="list-group-item-heading">Temperature: ${data.list.main.temp}</h3>
  //               <h4>Conditions: ${conditions}</h4>
  //               <h4>Air Pressure: ${data.list.main.pressure}</h4>
  //               <h4>Wind Speed: ${data.list.wind.speed}</h4>
  //             </a>
  //           </div>`;
  // printToDom(forecastOutput, extendedForecast);
};

const printCurrentWeather = (weather) => {
  let output = '';
  let conditions = [];
  weather.weather.forEach((condition) => {
    conditions.push(condition.main);
  });
  conditions = conditions.join(', ');
  output += `<div class="jumbotron">
              <div class="container">
              <h3>Temperature: ${weather.main.temp}</h3>
              <h3>Conditions: ${conditions}</h3>
              <h3>Air Pressure: ${weather.main.pressure}</h3>
              <h3>Wind Speed: ${weather.wind.speed}</h3>
              <p><a id="extForecast" class="btn btn-primary btn-lg" href="#" role="button">View 5 day forecast</a></p>
              </div>
            </div>`;
  printToDom(output);
};

const printToDom = (stringz) => {
  $('#weatherContainer').html(stringz);
  $('#extendedForecast').html(stringz);
};

module.exports = {
  printCurrentWeather,
  printExtendedForecast,
};
