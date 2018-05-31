// const events = require('./events');

const printExtendedForecast = (data) => {
  let forecastOutput = '';
  forecastOutput += `<h1 class="text-center">${data.city.name} Five Day Forecast</h1>`;
  for (let i = 4; i < data.list.length; i += 8) {
    let whichDay = '';
    whichDay = new Date(data.list[i].dt * 1000).toString();
    const weatherImage = data.list[i].weather[0].icon;
    const imageUrl = `http://openweathermap.org/img/w/${weatherImage}.png`;
    forecastOutput += `<div class="row">
                      <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                          <img class="weatherIcons" src="${imageUrl}" alt="weather-icon">
                            <div class="caption">
                              <h2>${Math.round(data.list[i].main.temp)}&deg; F</h2>
                              <h4>${data.list[i].weather[0].main}</h4>
                              <h4>Air Pressure: ${data.list[i].main.pressure}</h4>
                              <h4>Wind Speed: ${data.list[i].wind.speed}</h4>
                              <h3>${whichDay}</h3>
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
                <h1>${weather.name}</h1>
                <p>Current Weather</p>
                <h2>${Math.round(weather.main.temp)}&deg; F</h2>
                <h3>${conditions}</h3>
                <h3>Air Pressure: ${weather.main.pressure}</h3>
                <h3>Wind Speed: ${weather.wind.speed}</h3>
                <button class="btn btn-primary btn-lg extForecast" role="button">View 5 day forecast</button>
              </div>
            </div>`;
  printToDom(output);
};

const printToDom = (stringz) => {
  $('#weatherContainer').html(stringz);
};

module.exports = {
  printCurrentWeather,
  printExtendedForecast,
};
