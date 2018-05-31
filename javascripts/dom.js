// const events = require('./events');

const printExtendedForecast = (data) => {
  console.log('dom', data);
  let forecastOutput = '';
  // let conditions = [];
  // data.list.weather.main.forEach((condition) => {
  //   conditions.push(condition.weather.main);
  // });
  // conditions = conditions.join(', ');
  for (let i = 4; i < data.list.length; i += 8) {
    forecastOutput += `<div class="row">
                      <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                          <img src="..." alt="...">
                            <div class="caption">
                              <h3>${data.city.name}</h3>
                              <h4>Day: ${data.list[i].dt_txt}</h4>
                              <h4>Temperature: ${data.list[i].main.temp}</h4>
                              <h4>Conditions: ${data.list[i].weather.main}</h4>
                              <h4>Air Pressure: ${data.list[i].main.pressure}</h4>
                              <h4>Wind Speed: ${data.list[i].wind.speed}</h4>
                            </div>
                        </div>
                      </div>
                    </div>`;
  }
  printToDom(forecastOutput);
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
};

const printToDom = (stringz) => {
  $('#weatherContainer').html(stringz);
  // $('#extendedForecast').html(stringz);
};

module.exports = {
  printCurrentWeather,
  printExtendedForecast,
};
