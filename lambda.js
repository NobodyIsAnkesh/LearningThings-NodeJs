var AWS = require('aws-sdk');
var s3 = new AWS.S3();
const axios = require('axios');
exports.handler = async (event) => {

    axios.defaults.headers.common['ignore-auth'] = 'true';
    console.log('event', JSON.stringify(event));
    let body = (event);
    let s3Values = [];
    // return body;
    let response = null;
    if (body['Records'].length) {
        let bodyArray = body['Records'];
        bodyArray.forEach(element => {
            let currentElement = JSON.parse(element.body);
            console.log(currentElement);
            s3Values.push(s3.getObject({
                Bucket: currentElement.body.s3BucketName,
                Key: currentElement.body.s3Key
            }).promise());
        });
        const data = await Promise.all(s3Values);
        // console.log(data);

        for (let i = 0; i < data.length; i++) {
            //converting text to json object
            let s3data = data[i].Body.toString('ascii');
            s3data = JSON.parse(s3data);
            let data = s3data.Data;
            let oldData = s3data.oldData;
            let newDocuments = data.filter(newDoc => oldData.every(oldDoc => newDoc.id != oldDoc.id));
            console.log(newDocuments);
        }
    }
};

