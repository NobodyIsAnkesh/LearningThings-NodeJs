const axios = require('axios');

let url = "https://bpm.toorakcapital.info/engine-rest/history/process-instance?processDefinitionKey=ShadowDueDelligence&finished=true";

async function test() {
    try {
        let arr = [];
        let list = await axios.get(url);
        // console.log(Object.keys(list));
        list.data.forEach(element => {
            if (element.state == 'COMPLETED') {
                // console.log(element);
                arr.push(element.businessKey);
            }
        });
        // for (let elem of list) {
        //     if (elem.state == 'ACTIVE')
        //         console.log(element);
        // }
        console.log(arr);
    } catch (error) {
        console.log(error);
    }
}

test();


// [ 'TY205577', 'BR846243', 'BR426010' ]
// [ 'TY205577', 'BR846243', 'BR426010', 'TY345688' ]
// [ 'TY205577', 'BR846243', 'BR426010', 'TY345688', 'BR346053', 'TY759542']

