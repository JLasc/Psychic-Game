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


//Detects if user key pressed is in alphaSplit index
function isUserInArray (x, y) {
    test = y.indexOf(x) > -1
    return console.log(test) 
}


//need to fix push to userArray
//need to fix displaying userArray on page

/* ------------------------------------------------------------------------- */


//Event happens when key is pressed and finger lifted.
document.onkeyup = function(event) {

    // User interactions
    userKey = event.key;
    userKeyCode = event.keyCode;
    console.log(userKeyCode)
    test1 = isUserInArray(userKey, alphaSplit);
    console.log(test1);
    isUserInArray(userKey, alphaSplit);


    if (gameover === true) {
        if (userKeyCode === 13) {
        gameover = false;
        document.getElementById("guess").innerHTML = "The game has started, good luck!"
    } else {
        document.getElementById("guess").innerHTML = "You need to press 'enter' to start..."
        return null
    }
}
    
    //Win-loss conditional
    if (gameover === false) {
        
        if (userKey === compArray[0]) {  // User wins if guesses the correct letter
            userArray = []
            document.getElementById("guess").innerHTML = "You won! Press 'enter' to outsmart the Psychic again."
            wins++
            guesses = 10
            gameover = true;
        } else if (userArray.length === 10) {  // If guesses hits 10, reset and add 1 to loses.
            loses++
            userArray = []
            document.getElementById("guess").innerHTML = "You lost! Press 'enter' to try again"
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
    }
        


        if ((gameover) && (userKeyCode !== 32)) {
            document.getElementById("guess").style.color = "red"
            document.getElementById("guess").innerHTML = "Please press 'space' to try again."
        } 
    


    //Scoreboard 
    scoreboard = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Loses: " + loses + "</p>" +
    "<p>Guesses: " + guesses + "</p>";
    document.getElementById("score").innerHTML = scoreboard;
    document.getElementById("guess").innerHTML = userArray;

};


