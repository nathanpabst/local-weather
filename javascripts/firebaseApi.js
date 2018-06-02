let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const saveLocationInDb = (newLocation) => {
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
  saveLocationInDb,
};
