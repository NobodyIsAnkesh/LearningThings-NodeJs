const express = require('express');
const app = express();
const { google } = require('googleapis');
var firebase = require("firebase/app");
// Add the Firebase products that you want to use
require("firebase/auth");

var firebaseConfig = {
    apiKey: "AIzaSyBNeMBcYJPRBQJZ_KPsrfdG4e6nIILXJU0",
    authDomain: "fir-49eba.firebaseapp.com",
    projectId: "fir-49eba",
    storageBucket: "fir-49eba.appspot.com",
    messagingSenderId: "719145606755",
    appId: "1:719145606755:web:bfd4ffd780055afc562256"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets');
firebase.auth().signInWithRedirect(provider);
// function googleSignInPopup() {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('https://www.googleapis.com/auth/spreadsheets');

//     firebase.auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             console.log("Here");
//             /** @type {firebase.auth.OAuthCredential} */
//             var credential = result.credential;

//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             console.log(user);
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             console.log(errorCode, errorMessage, email, credential);
//             // ...
//         });
// }
function googleSignInRedirectResult() {
    // [START auth_google_signin_redirect_result]
    firebase.auth()
        .getRedirectResult()
        .then((result) => {
            if (result.credential) {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // ...
            }
            // The signed-in user info.
            var user = result.user;
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    // [END auth_google_signin_redirect_result]
}


app.use('/home', (req, res) => {
    res.send(
        `<button onclick=${googleSignInRedirectResult()}>Consent for Google Spreadsheet</button>`
    );
});

// app.use('/authRedirect', async (req, res) => {
//     try {
//         let code = req.query.code;
//         res.redirect('/home');

//         const { tokens } = await oauth2Client.getToken(code);
//         console.log(tokens);
//         oauth2Client.setCredentials(tokens);

//         const drive = google.drive({
//             version: 'v3',
//             auth: oauth2Client
//         });

//         // const params = { pageSize: 3 };
//         const resonse = await drive.files.list();
//         console.log(resonse.data);
//     }
//     catch (err) {
//         console.log(err);
//     }

// });
// const oauth2Client = new google.auth.OAuth2(
//     '902351452420-7soek8c9ibfhfhsp09nagqv71dcou3tg.apps.googleusercontent.com',
//     '7m1GlUWFXXIYKhU2358f_XXv',
//     'http://localhost:3030/authRedirect'
// );

// const url = oauth2Client.generateAuthUrl({
//     // 'online' (default) or 'offline' (gets refresh_token)
//     access_type: 'offline',

//     // If you only need one scope you can pass it as a string
//     scope: 'https://www.googleapis.com/auth/drive.metadata.readonly'
// });

app.listen(3030, () => { console.log("server started at 3030") });
