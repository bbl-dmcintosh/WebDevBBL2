"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
//Asynchronous - non-blocking.
//Synchronous - we are blocking the execution of the main thread.
//Streaming - we read chunks of the file.
fs.readFile('./data/file.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    else {
        console.log(data);
        return data;
    }
});
