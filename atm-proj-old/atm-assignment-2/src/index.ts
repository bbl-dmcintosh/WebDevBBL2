import atmWS from './App';

atmWS.listen(3000, (err)=>{
    if(err){
        return console.log(err);
    }else{
        return console.log('atm webservice running on port 3000.');
    }
});
