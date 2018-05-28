function drevil(amount){
    if(amount === 1000000){
        var message = amount + " dollars (pinky)";
    }else{
        var message = amount + " dollars";      
    }
    return message;
}

console.log(drevil(1000000));