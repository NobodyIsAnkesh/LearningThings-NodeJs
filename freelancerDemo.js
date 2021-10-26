const express = require('express');
const app = express();
const { google } = require('googleapis');
const fs = require('fs');

app.use('/home', (req, res) => {
    res.send(
        `<a href=${url}><h1>Consent for Google drive<h1></a>`
    );
});

app.use('/authRedirect', async (req, res) => {
    try {
        let code = req.query.code;
        res.redirect('/home');

        const { tokens } = await oauth2Client.getToken(code);
        // console.log(tokens);
        oauth2Client.setCredentials(tokens);

        const drive = google.drive({
            version: 'v3',
            auth: oauth2Client
        });

        var fileMetadata = {
            'name': 'something.xlsx'
        };
        var media = {
            mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            body: fs.createReadStream('files/something.xlsx')
        };
        drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
        }, function (err, file) {
            if (err) {
                // Handle error
                console.error(err);
            } else {
                console.log('File: ', file.data);
            }
        });
    }
    catch (err) {
        console.log(err);
    }

});
const oauth2Client = new google.auth.OAuth2(
    '902351452420-7soek8c9ibfhfhsp09nagqv71dcou3tg.apps.googleusercontent.com',
    '7m1GlUWFXXIYKhU2358f_XXv',
    'http://localhost:3030/authRedirect'
);

const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',

    // If you only need one scope you can pass it as a string
    scope: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/spreadsheets',
    ]
});

app.listen(3030, () => { console.log("server started at 3030") });
