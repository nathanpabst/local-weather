const {setUID,} = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // user is signed in.
      setUID(user.uid);
      // $('#favoritesBtn').removeClass('hide');
      $('#authenticate').addClass('hide');
      $('#authScreen').addClass('hide');
      // $('#logOut').removeClass('hide');
      // $('#search').removeClass('hide');
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
