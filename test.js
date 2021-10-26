const express = require('express');
const app = express();
const axios = require('axios');

app.use('/START', async (req, res) => {
    let arr = [];
    arr.push(axios.get('https://jsonplaceholder.typicode.com/users'));
    arr.push(axios.get('https://jsonplaceholder.typicode.com/posts'));

    let a = await Promise.all(arr);
    
    res.json(a.map(x => x.data));
});

app.use('/', (req, res) => {res.send("values");})

app.listen(4000, () => { console.log("server started at 4000") });