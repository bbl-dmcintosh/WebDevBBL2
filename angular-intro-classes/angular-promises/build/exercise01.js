"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Promises {
    constructor() {
    }
    boughtPhone() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('my momma bought me a Google Pixel 2');
            }, 5000); //this will wait for 5 seconds before printing the resolve...
        });
        return promise;
    }
    showItoff() {
        const secondPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('I\'m so extra showing off my new Google Pixel 2');
            }, 5000); //this will wait for 5 seconds before printing the resolve...
        });
        return secondPromise;
    }
}
exports.Promises = Promises;
