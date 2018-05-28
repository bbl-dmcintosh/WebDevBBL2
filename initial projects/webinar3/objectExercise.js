var faveFoodie = {
    title: "cereal",
    servings: 1,
    ingredients: ["cereal", "milk"]
}

console.log(faveFoodie.title);
console.log("serves:" + faveFoodie.servings);

faveFoodie.ingredients.forEach(function(ingredient){
    console.log(ingredient);
});

var books = [
    {
        title: "the king lebron james bible",
        author: "lebron james",
        alreadyRead: false
    },
    {
        title: "the dictionary",
        author: "unknown",
        alreadyRead: true      
    },
    {
        title: "fifty shades of boring",
        author: "someone really boring",
        alreadyRead: false
    }
];

books.forEach(function(book){
    console.log(book.title);
    console.log(book.author);
   if(book.alreadyRead){
       console.log("you already read "+ book.title + " by " + book.author);
   }else{
    console.log("you still need to read "+ book.title + " by " + book.author);     
   }
});