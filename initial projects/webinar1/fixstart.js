function fixStart(str){
    var newStr = str.substring(1).split(str[0]).join("*");
    newStr = str[0] + newStr;
    return newStr;
}

console.log(fixStart("DDADVDE!"));