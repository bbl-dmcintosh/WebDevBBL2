function mixUp(str1, str2){
    var result1 = str1.substring(0, 2) + str2.substring(2);
    var result2 = str2.substring(0, 2) + str1.substring(2);
    var message = result1 + " " + result2;
    return message
}

console.log(mixUp("Brad", "Angelina"));