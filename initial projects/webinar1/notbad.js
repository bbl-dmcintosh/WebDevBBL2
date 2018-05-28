function notBad(str){
    var index1 = str.indexOf("not");
    var index2 = str.indexOf("bad");

    if(index2 > index1 && (index1 > -1)){
        if(index1 == 0){
            var message = "good" + str.substring(index2+3);
        }else{
            var message = str.substring(0, index1) + "good";
        }
    }else{
        var message = str;
    }
    return message;

}

console.log(notBad("dinner was not that bad"));
console.log(notBad("not bad, gus"));