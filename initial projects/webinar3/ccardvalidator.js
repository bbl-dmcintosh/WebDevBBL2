function validateCreditCard(creditCard){
    var diffDigits = false;
    var cardDigits = [];
    var sumDigits  = 0;
    var valid      = true;
    
    console.log("Entered Card:" + creditCard);
    console.log("Validating...");
    cardDigits = creditCard.split("-").join("").split("");
    
    for(var i=0; i < cardDigits.length; i++){
        if(isNaN(cardDigits[i])){
            valid = false;
        }
        if(cardDigits[0] != cardDigits[i]){
            diffDigits = true;
        }
        sumDigits = sumDigits + Number(cardDigits[i]);
    }

    if(valid === true){
        if(cardDigits.length != 16 || sumDigits <= 16 || cardDigits[cardDigits.length-1]%2 != 0 || !diffDigits){
            valid = false;
        }
    }
    console.log("Validation complete!");
    console.log("------------------------------------------------------------");
    if(valid){
        console.log("The entered card number has been determined to be valid.");
    }else{
        console.log("Sorry, the card number has been determined to be invalid.");
    }

    return;
}

validateCreditCard("1111-1111-0000");
validateCreditCard("5339-1111-0102-9082");

