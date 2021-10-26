
var AWS = require('aws-sdk');
async function x() {
    var s3 = new AWS.S3();
    var params = {
        Key: 'ACCOUNT/28cbb962-c4f6-4bbb-b330-4f14cea08da9/LOAN/TY461265/DOCUMENTS/1635230072148/BINH TRAN - Credit Report (604)  10-01-2020_4126.pdf/LINES-48783.txt',
        Bucket: 'textract-data-uat-tl-ue1-s3'
    };

    let rere = await s3.getObject(params).promise();

    console.log(rere.Body.toString());
}

x();
