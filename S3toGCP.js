// /**
//  * TODO(developer): Uncomment the following lines before running the sample.
//  */
// // The ID of your GCS bucket
// const bucketName = 'toorak-aws-landing-bucket';

// // The path to your file to upload
const filePath = './credit.pdf';

// // The new ID for your GCS file
// const destFileName = 'test/Appraisal.pdf';

// // Imports the Google Cloud client library
// const { Storage } = require('@google-cloud/storage');

// Load the AWS SDK
var AWS = require('aws-sdk');
var region = "us-east-1";
var secretName = "gcp-dev-tl-ue1-sm/cloudStorage";
// var secret;
// var decodedBinarySecret;



// Create a Secrets Manager client
var client = new AWS.SecretsManager({
  region: region
});



// // In this sample we only handle the specific exceptions for the 'GetSecretValue' API.
// // See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
// // We rethrow the exception by default.



// // client.getSecretValue({ SecretId: secretName }, function (err, data) {
// //   if (err) {
// //     console.log(err);
// //   }
// //   else {
// //     // Decrypts secret using the associated KMS CMK.
// //     // Depending on whether the secret is a string or binary, one of these fields will be populated.
// //     // if ('SecretString' in data) {
// //     //   secret = data.SecretString;
// //     // } else {
// //     //   let buff = new Buffer(data.SecretBinary, 'base64');
// //     //   decodedBinarySecret = buff.toString('ascii');
// //     // }
// //     // console.log(data.SecretString);
// //     let x = JSON.parse(data.SecretString);
// //     console.log(x);
// //     console.log("Yo");
// //     // console.log(decodedBinarySecret);
// //   }
// // });
// let storage;

// async function tt() {
//   try {
//     let y = await client.getSecretValue({ SecretId: secretName }).promise();
//     let credentials = JSON.parse(y.SecretString);
//     console.log(credentials);

//     // Creates a client
//     storage = new Storage({
//       projectId: credentials.project_id,
//       // keyFilename: j,
//       credentials: credentials
//     });

//     uploadFile().catch(console.error);

//   } catch (error) {
//     console.log(error);
//   }
// }

// async function uploadFile() {
//   await storage.bucket(bucketName).upload(filePath, {
//     destination: destFileName,
//   });

//   console.log(`${filePath} uploaded to ${bucketName}`);
// }

// tt();

/**
 * TODO(developer): Uncomment the following lines before running the sample
 */
// The ID of your GCS bucket
const bucketName = 'toorak-aws-landing-bucket';

// The new ID for your GCS file
const destFileName = 'Shhhhhhh.pdf';

// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');

// Import Node.js stream
const stream = require('stream');

async function test() {
  try {
    let y = await client.getSecretValue({ SecretId: secretName }).promise();
    let credentials = JSON.parse(y.SecretString);
    console.log(credentials);

    // Creates a client
    let storage = new Storage({
      projectId: credentials.project_id,
      credentials: credentials
    });

    // Get a reference to the bucket
    const myBucket = storage.bucket(bucketName);

    // Create a reference to a file object
    const file = myBucket.file(destFileName);

    var s3 = new AWS.S3();
    var params = {
      Key: 'Appraisal Review 541.pdf',
      Bucket: 'comprehend-output-testing-purpose'
    };

    // var ffile = require('fs').createWriteStream("./credit.pdf");

    // await new Promise(function (resolve, reject) {
    //   resolve(s3.getObject(params).createReadStream().pipe(ffile));
    // })

    // await s3.getObject(params).createReadStream().pipe(ffile);

    // await storage.bucket(bucketName).upload(filePath, {
    //   destination: destFileName,
    // });

    let rere = await s3.getObject(params).promise();

    // console.log(rere.Body.toString());

    // Create a pass through stream from a string
    const passthroughStream = new stream.PassThrough();
    passthroughStream.write(rere.Body);
    passthroughStream.end();

    // await Promise.all([passthroughStream.pipe(file.createWriteStream())]);
    let x = new Promise((resolve, reject) => {
      passthroughStream.pipe(file.createWriteStream()).on('finish', () => {
        resolve(console.log("completedddddd");
      });
    });

    await x;

    console.log(`${destFileName} uploaded to ${bucketName}`);

  } catch (error) {
    console.log(error);
  }
}

test();



// # This function for read / download file from s3 bucketconst s3download = function (params) { return new Promise((resolve, reject) => { s3.createBucket({ Bucket: BUCKET_NAME        /* Put your bucket name */ }, function () { s3.getObject(params, function (err, data) { if (err) { reject(err); } else { console.log("Successfully dowloaded data from  bucket"); resolve(data); } }); }); }); }