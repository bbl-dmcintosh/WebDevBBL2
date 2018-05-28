function pluralize(noun, num){
    var sentence;
    if(num == 1){
        sentence = num + " " + noun;
    }else{
        if(noun=="goose"){
            sentence = num + " geese";
        }else if(noun == "person"){
            sentence = num + " people";
        }else if(noun == "sheep"){
            sentence = num + " sheep";
        }else{
            sentence = num + " " + noun + "s";
        }
    }
    return sentence;
}

console.log(pluralize("cat", 5));
console.log(pluralize("person", 6));
console.log(pluralize("dog", 1));
