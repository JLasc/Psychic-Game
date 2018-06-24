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

//Splits alphabet string into a new array
var alphaSplit = alphabet.split(""); 

// Function that allows computer to choose letter from array
function compGuess () {
    return alphaSplit[Math.floor(Math.random() * alphaSplit.length)];
}

//Function that stores compGuess in compArray
function compChoice () {
    compArray = [];
    t = compGuess();
    return compArray.push(t)
}

//Empty array for userGuess & compArray
var userArray = [];
var compArray = [];

//Win-Loss variables
var wins = 0;
var loses = 0;
var guesses = 10;

//Detects if user key pressed is in alphaSplit index
function isUserInArray (x, y) {
    test = y.indexOf(x) > -1
    if (test) {
        userArray.push(x);
        document.getElementById("guess").innerHTML = userArray;
    } else if (x === "Enter") {
        document.getElementById("guess").innerHTML = " ";
    } else {
        document.getElementById("guess").innerHTML = "This is not a real guess."
    }
}


/* ------------------------------------------------------------------------- */



//Event happens when key is pressed and finger lifted.
document.onkeyup = function(event) {

    // User process
    
    userKey = event.key
    isUserInArray(userKey, alphaSplit)

    if (userKey === "Enter") {
        compChoice()
        alert("game has started")
    }; 

    if (userArray.length === 10) {
        loses++
        compChoice()
        userArray = [];
        document.getElementById("guess").innerHTML = "Press any key to play again"
    };

   
    





};

