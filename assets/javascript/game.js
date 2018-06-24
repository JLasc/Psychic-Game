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
var gameover;


//Detects if user key pressed is in alphaSplit index
function isUserInArray (x, y) {
    test = y.indexOf(x) > -1
    if (test) {
        userArray.push(x);
        document.getElementById("guess").innerHTML = userArray;
    } else if (x === "Enter") {
        document.getElementById("guess").innerHTML = " ";
    } else {
        console.log(x)
    }
}


/* ------------------------------------------------------------------------- */


//Event happens when key is pressed and finger lifted.
document.onkeyup = function(event) {

    // User interactions
    userKey = event.key;
    userKeyCode = event.keyCode;
    console.log(userKeyCode)
    isUserInArray(userKey, alphaSplit);

    //10 Guess countdown
    if (userKeyCode === 13) {
        //
    } else if (userArray.length === 10) {
        //
    } else {
        guesses--
    }

    //Press enter to start a new game
    if (userKey === "Enter") {
        compChoice()
        alert("New game has started")
        console.log(compArray)
    };

    //Win-loss conditional
    if (userKey === compArray[0]) {
        userArray = []
        document.getElementById("guess").innerHTML = "You won! Press 'space' to outsmart the Psychic again."
        wins++
        guesses = 10
        gameover = true;
    } else if (userArray.length === 10) {
        loses++
        userArray = []
        document.getElementById("guess").innerHTML = "You lost! Press 'space' to try again"
        gameover = true;
    } else if ((userKeyCode === 32) && (gameover)) {
        compChoice()
        console.log(compArray)
        userArray = []
        guesses = 10
        document.getElementById("guess").innerHTML = " "
        document.getElementById("guess").style.color = "black"
        gameover = false;
    }


    if ((gameover) && (userKeyCode !== 32)) {
        document.getElementById("guess").style.color = "red"
        document.getElementById("guess").innerHTML = "Please press spacebar to try again."
    } 


    //Scoreboard 
    scoreboard = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Loses: " + loses + "</p>" +
    "<p>Guesses: " + guesses + "</p>";
    document.getElementById("score").innerHTML = scoreboard;

};


