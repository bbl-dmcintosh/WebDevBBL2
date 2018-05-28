export class Promises {
    
    constructor(){ 
    }

    boughtPhone() : Promise<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve('my momma bought me a Google Pixel 2');
            }, 5000); //this will wait for 5 seconds before printing the resolve...
        });

        return promise;
        
        
    }

    showItOff() : Promise<any> {
        const secondPromise = new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve('I\'m so extra showing off my new Google Pixel 2');
            }, 5000); //this will wait for 5 seconds before printing the resolve...
        });

        return secondPromise;
    }
}
