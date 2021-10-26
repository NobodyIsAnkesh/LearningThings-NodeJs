const AWS = require("aws-sdk");
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
const { unzipSync } = require('zlib');

let x = async () => {
    //...initialize bucket, filename and target_filename here
    try {
        /**
         * Step 1: Get stream of the file to be extracted from the zip
         */
        const file_stream = await s3
            .getObject({ Bucket: 'comprehend-output-testing-purpose', Key: '760361958090-CLN-361b4fd7c8195119074dbd9e4d19f198/output/output.tar.gz' })
            .promise();


        // const firstIndexOf = (c, ...vars) => Math.min(...vars.map(v => c.indexOf(v)).filter(n => n > -1));
        // const lastIndexOf = (c, ...vars) => Math.max(...vars.map(v => c.lastIndexOf(v)));

        // let t = raw => unzipSync(raw)
        //     .toString('utf-8')
            // .split('\0ustar')
            // .slice(1)
            // .map(c =>
            //     JSON.parse(
            //         c.substring(firstIndexOf(c, '{', '['), lastIndexOf(c, '}', ']') + 1)
            //     )
            // );
        let j = t(file_stream.Body);
        // let j = JSON.parse(s.substring(s.indexOf('{'), s.lastIndexOf('}')+1));
        console.log(j);
    } catch (error) {
        console.log("Error: ", error.message, error.stack);
    }
};

x();

function t(raw){
    let s = unzipSync(raw).toString('utf-8');
    return JSON.parse(s.substring(s.indexOf('{'), s.lastIndexOf('}')+1));
}
