function verbing(str){
    if(str.length >= 3 ){
        if(!str.endsWith("ing")){
            var result = str + "ing";
        }else{
            var result = str + "ly";
        }
    }else{
        var result = str;
    }
    return result;
}

console.log(verbing("go"));