const towm = require('./towm');
const apiKeys = require('./apiKeys');

const validateZip = () => {
  const zipInput = $('#searchBar')[0].value;
  if (zipInput.length === 5 && $.isNumeric(zipInput)) {
    towm.displayResults(zipInput);
  } else {
    alert('Oops! Please enter a five digit zip code');
  }
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
};

module.exports = {
  initializer,
};
