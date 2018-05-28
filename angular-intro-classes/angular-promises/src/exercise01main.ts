 import {Promises} from './exercise01';

 let promisesInstance = new Promises();

promisesInstance.boughtPhone().then((result) => {
    console.log(result);
});

promisesInstance.showItOff().then((result) => {
    console.log(result);
});
