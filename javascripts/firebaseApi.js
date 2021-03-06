let firebaseConfig = {};
let uid = '';

const setUID = (newUID) => {
  uid = newUID;
};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const saveScaryWeatherInDb = (updateLocation, locationId) => {
  updateLocation.uid = uid;
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.databaseURL}/locations/${locationId}.json`,
      data: JSON.stringify(updateLocation),
    })
      .done((modifiedLocation) => {
        resolve(modifiedLocation);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const deleteFavoriteFromDb = (locationId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/locations/${locationId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getFavorites = () => {
  return new Promise((resolve, reject) => {
    const savedLocationsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/locations.json?orderBy="uid"&equalTo="${uid}"`,
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
  newLocation.uid = uid;
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
  setUID,
  saveFavoritesToDb,
  getFavorites,
  deleteFavoriteFromDb,
  saveScaryWeatherInDb,
};
