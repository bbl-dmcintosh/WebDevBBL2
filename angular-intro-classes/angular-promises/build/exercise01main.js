"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise01_1 = require("./exercise01");
let promisesInstance = new exercise01_1.Promises();
promisesInstance.boughtPhone().then((result) => {
    console.log(result);
});
promisesInstance.showItoff().then((result) => {
    console.log(result);
});
