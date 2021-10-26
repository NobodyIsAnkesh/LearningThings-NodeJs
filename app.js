const { Worker } = require('worker_threads');

const worker = new Worker(`./service.js`);
worker.on('message', message => console.log(message));
worker.postMessage('ping');