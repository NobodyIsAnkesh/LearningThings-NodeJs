const axios = require('axios');

let url = "http://localhost:8080/engine-rest/process-definition/key/ShadowDueDelligence/start";

async function start() {
    for (let i = 1; i < 5000; i++) {
        try {
            const body = {
                businessKey: i
            };
            await axios.post(url, body);
        } catch (error) {
            console.log(error);
        }
    }
}

start();

