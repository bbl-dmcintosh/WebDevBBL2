var correctLetters = ['P', 'L', 'E', 'A', 'S', 'E'];
var guess = ['_', '_', '_', '_', '_', '_'];
var userGuess;
const readline = require('readline');
var points = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//function definition
function guessLetter(letter){
    var foundOne = false;
    if(guess.indexOf(letter)> -1){
        console.log("Whoops. You already guessed that...")
    }else{
        correctLetters.forEach(function(correctLetter, index){
            if(letter.toUpperCase() === correctLetter){
                guess[index] = letter;
                points+=20;
                foundOne = true;
                console.log("Yay! You guessed a letter!");
            }
        });
        if(foundOne===false){
            points-=10;
        }
        console.log(guess);
    } 
}

var guessAgain = function(){
    rl.question('Guess a letter...any letter...', (answer) => {
        guessLetter(answer);
        if(guess.toString() === correctLetters.toString()){
            console.log("You're too good. You win! :)");
            console.log("You got a final score of: " + points + "/120.");
            rl.close();
        }else{
            guessAgain();
        }     
    });
}
console.log("Welcome to the Word Guesser Game!");
console.log("Try to guess the 'magic' word ;)");
guessAgain();


