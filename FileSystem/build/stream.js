"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
//readStream is a child of event emitter
let data = '';
var readStream = fs.createReadStream('./data/file.txt', 'utf8');
readStream.on('data', (chunk) => {
    data += chunk;
})
    .on('end', () => {
    console.log(data);
})
    .on('error', (err) => {
    console.log(err);
});
