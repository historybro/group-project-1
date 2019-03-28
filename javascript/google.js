//google authentication

var config = {
    apiKey: "AIzaSyCaDb4CUy9YF5R-ZmLiyfNHuWvMsgyk_KA",
    authDomain: "train-homework-31db7.firebaseapp.com",
    databaseURL: "https://train-homework-31db7.firebaseio.com",
    projectId: "train-homework-31db7",
    storageBucket: "train-homework-31db7.appspot.com",
    messagingSenderId: "387430691482"
};

firebase.initializeApp(config);

var database = firebase.database();

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//firebase.auth().languageCode = 'pt';
// To apply the default browser preference instead of explicitly setting it.
firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
}).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});

firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
    }
    // The signed-in user info.
    var user = result.user;
}).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});