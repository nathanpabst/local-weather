let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const getFavorites = () => {
  return new Promise((resolve, reject) => {
    const savedLocationsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/locations.json`,
    })
      .done((allLocationsObj) => {
        if (allLocationsObj !== null) {
          Object.keys(allLocationsObj).forEach((fbKey) => {
            allLocationsObj[fbKey].id = fbKey;
            savedLocationsArray.push(allLocationsObj[fbKey]);
          });
        }
        resolve(savedLocationsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const saveFavoritesToDb = (newLocation) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/locations.json`,
      data: JSON.stringify(newLocation),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  saveFavoritesToDb,
  getFavorites,
};
