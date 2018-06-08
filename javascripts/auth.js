const {setUID,} = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // user is signed in.
      setUID(user.uid);
      $('#authenticate').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#logOut, #favoritesBtn, #search, #weatherContainer, #favorites, #extendedForecast').removeClass('hide');
    } else {
      // no user is signed in.
      $('#authenticate').removeClass('hide');
      $('#authScreen').removeClass('hide');
      $('#logOut, #favoritesBtn, #search, #weatherContainer, #favorites, #extendedForecast').addClass('hide');
    }
  });
};

module.exports = {
  checkLoginStatus,
};
