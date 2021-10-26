// call the packages we need
const AWS = require('aws-sdk')
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors())
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8008;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/:a/ankesh/:d/', function (req, res) {
    console.log(req.params.a);
    console.log(req.params.d);
    console.log(req.query.level);
    console.log(req.query.code);
    let code = req.query.code;
    let q = { code };
    //   q['code'] = req.query.code;
    q['level'] = parseInt(req.query.level);
    const s3 = new AWS.S3()
    AWS.config.update({ accessKeyId: 'something', secretAccessKey: 'something', region: 'ap-south-1' })

    // Tried with and without this. Since s3 is not region-specific, I don't
    // think it should be necessary.
    // AWS.config.update({region: 'us-west-2'})

    const myBucket = 'test-bucket-stream'
    const myKey = 'viewerdocs/3061-covid-19-flattering-the-curve.pptx'
    const signedUrlExpireSeconds = 60 * 60

    const url = s3.getSignedUrl('getObject', {
        Bucket: myBucket,
        Key: myKey,
        Expires: signedUrlExpireSeconds,
    })
    //  console.log(url);
    var encodedUrl = encodeURIComponent(url);
    //  console.log(encodedUrl);
    res.send(q);
    //res.send(`<iframe src='https://docs.google.com/viewer?url=${encodedUrl}&embedded=true' height='300px' width='800px'></iframe>`);
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
