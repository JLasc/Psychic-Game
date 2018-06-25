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
var gameover = true;


//Detects if what user key pressed is in alphaSplit index
    function keyShadow (x, y) {
        return y.indexOf(x) > -1
    }

//Typewriter effects
var i = 0;
var txt = 'What letter am I thinking of?';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typew").innerHTML += txt.charAt(i)
    i++;
    setTimeout(typeWriter, speed);
  }
}


/* ------------------------------------------------------------------------- */


//Event happens when key is pressed and finger lifted.
document.onkeyup = function(event) {



    // User interactions
    userKey = event.key;
    userKeyCode = event.keyCode
    shadow = keyShadow(userKey, alphaSplit)

  //Game Start
    if (gameover === true) {
        userArray = []
        document.getElementById("guess").innerHTML = userArray;
        if (userKeyCode === 32) {
        typeWriter()
        gameover = false;
        document.getElementById("win-lose").innerHTML = "The game has started, good luck!"
        compChoice()
        } else {
        document.getElementById("win-lose").innerHTML = "You need to press 'space' to start..."
        return null
        };
    }
    // Once game condition is playable, logs user key to userArray
    if (gameover === false) {
        if (shadow !== false) {
            userArray.push(userKey)
            document.getElementById("guess").innerHTML = userArray
            guesses--
        }
    };

    // Game logic 
    if (gameover === false) {
        if (userKey === compArray[0]) {  // User wins if guesses the correct letter, reset, and add 1 to wins.
            wins++
            gameover = true
            document.getElementById("win-lose").innerHTML = "You won! press 'space' to try again"
            guesses = 10
        } else if (userArray.length === 10) {  // If guesses hits 10, reset and add 1 to loses.
            loses++
            guesses = 10
            document.getElementById("win-lose").innerHTML = "You lost! Press 'space' to try again"
            gameover = true

    };
}

    //Scoreboard 
    scoreboard = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Loses: " + loses + "</p>" +
    "<p>Guesses: " + guesses + "</p>";
    document.getElementById("score").innerHTML = scoreboard;

};


