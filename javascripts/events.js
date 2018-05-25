const validateZip = () => {
  const zipInput = $('#searchBar').val();
  if (zipInput.length === 5 && $.isNumeric(zipInput)) {
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
};

module.exports = {
  initializer,
};
