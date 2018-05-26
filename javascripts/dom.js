
const currentWeather = (weather) => {
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
              <p><a class="btn btn-primary btn-lg" href="#" role="button">View 5 day forecast</a></p>
              </div>
            </div>`;
  printToDom(output);
};

const printToDom = (stringz) => {
  $('#weatherContainer').html(stringz);
};

module.exports = {
  currentWeather,
};
