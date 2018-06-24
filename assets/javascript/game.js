/* Start of Psuedo-code */

/* 
1. The Psychic Game pits a user against the computer in a guessing game. 
2. At game start, the computer will choose a letter A-Z.
3. The user will guess the letter by pressing keys on their keyboard.
4. The user will only have 10 tries to guess the correct word.
5. After 10 tries, unless the user guesses correctly, the game will reset.
6. User score respectively to win/loss will increment 

*/


/* --- Global Elements --- */ 

//Arrays that holds alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//Splits string into a new array
var alphaSplit = alphabet.split("");

// Function that allows computer to choose letter from array
function compGuess () {
    return alphaSplit[Math.floor(Math.random() * alphaSplit.length)];
}

// Empty user array to hold event key
var userArray = [];

var testArray = [compGuess()]

/* ------------------------------------------------------------------------- */



//Event happens when key is pressed and finger lifted.
document.onkeyup = function(event) {

    // userGuess holds what button the user presses
    userGuess = event.key; 

    userArray = [userGuess];

    console.log(userArray);






}