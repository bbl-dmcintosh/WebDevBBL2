"use strict";
//creating promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello, girls');
    }, 5000); //this will wait for 5 seconds before printing the resolve...
});
const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello, boys');
    }, 5000); //this will wait for 5 seconds before printing the resolve...
});
console.log('this is the first step');
//actual calling of the promise
promise.then((result) => {
    //if no error
    console.log('this is the 2nd step', result);
    secondPromise.then((result) => {
        console.log(result);
    });
}, (error) => {
    //if error
    console.log('error');
});
console.log('this is the 3rd step');
