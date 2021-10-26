const axios = require('axios');

const data = {
  "processInstanceIds": [
    "c1ca3c61-71a9-11eb-ac7c-227918d193c7"
  ],
  "processInstanceQuery": {
    "processDefinitionKey": "workflow"
  },
  "variables": {
    "myVariableName": {
      "value": "myStringValue"
    }
  }
};

// axios.post('http://localhost:8080/engine-rest/process-instance/variables-async', data)
//   .then((res) => {
//     console.log(res.status);
//     console.log('Body: ', res.data);
//   }).catch((err) => {
//     console.error(err);
//   });

axios.post('http://localhost:8080/camunda/api/engine/engine/default/task?assignee=John&processInstanceId=e990ddce-6974-11eb-8ddf-227918d193c7')
  .then((res) => {
    console.log(res.status);
    console.log('Body: ', res.data);
  }).catch((err) => {
    console.error(err);
  });