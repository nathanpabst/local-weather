const printFavorites = (locationsArray) => {
  let favoritesOutput = '';
  favoritesOutput += `<h1 class="text-center">My Favorites</h1>`;
  locationsArray.forEach((location, index) => {
    favoritesOutput += `<div class="row">
                          <div class="col-sm-6 col-md-4">
                            <div class="thumbnail location" data-firebase-id="${location.id}">
                            <a class="btn deleteLocation">X</a>
                              <h1 class="text-center locationName">${location.name}</h1>
                              <p class="text-center">Current Weather</p>
                              <h2 class="text-center locationTemp">${location.temp}</h2>
                              <h3 class="text-center locationConditions">${location.conditions}</h3>
                              <h3 class="text-center locationAirPressure">${location.airPressure}</h3>
                              <h3 class="text-center locationWindSpeed">${location.windSpeed}</h3>
                              <button class="btn btn-danger btn-lg markAsScary" role="button">I'm Scared</button>
                            </div>
                          </div>
                        </div>`;
  });
  printToDom(favoritesOutput);
};

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
              <div class="container location">
                <h1 class="locationName">${weather.name}</h1>
                <p>Current Weather</p>
                <h2 class="locationTemp">${Math.round(weather.main.temp)}&deg; F</h2>
                <h3 class="locationConditions">${conditions}</h3>
                <h3 class="locationAirPressure">Air Pressure: ${weather.main.pressure}</h3>
                <h3 class="locationWindSpeed">Wind Speed: ${weather.wind.speed}</h3>
                <button class="btn btn-primary btn-lg extForecast" role="button">View 5 day forecast</button>
                <button class="btn btn-primary btn-lg saveLocation" role="button">Add to favorites</button>
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
  printFavorites,
};
