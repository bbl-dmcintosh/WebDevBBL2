const promise3 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('my mom bought me an iphone.');
    }, 5000);
});

const promise4 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('i showed off my new iphone.');
    }, 4000);
});

//this will return the promise which resolves fastest
//Promise.race([promise3, promise4]).then ( value => {
 //   console.log(value);
//});

//this will return an array of promises
Promise.all([promise3, promise4]).then ( value => {
    console.log(value);
});