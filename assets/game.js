
//Psychic Game Variables
var computerChoices = "abcdefghijklmnopqrstuvwxyz"
var wins = 0;
var losses = 0;
var guesses = 11;
var computerGuess = computerGuess;
var usedArray = [];

// Created variables that hold references to the places in the HTML where I want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text")
var winsText = document.getElementById("wins-text")
var lettersguessed = document.getElementById("lettersguessed-text")
var lossesText = document.getElementById("losses-text")
var guessesleftText = document.getElementById("guessesleft-text")

//Generates random Computer Letter
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

//Created a function that uses random whole number generated above to select a random letter from the array and assigns it to the var computerChoice
function myGuess() {
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
}
//Captures my input
document.onkeyup = function(event) {
    var userGuess = event.key;

// When I guess a correct letter add a win, guesses don't change, alert congrats
if (userGuess === computerGuess) {
wins++;
guesses = 11;
usedArray = [];
alert("Congratulations! You guessed " + computerGuess + " which is correct!");
console.log(computerGuess)
}
//When I guess a wrong letter guesses goes down by 1 
myGuess();
if (userGuess !== computerGuess) {
guesses--;
}
//When I have no more attempts, add a loss and reset guesses to zero 
if (guesses == 0) {
losses++;
usedArray = []
guesses = 11;
}
///This prevents a repeated letter from printing
if (usedArray.indexOf(userGuess) >= 0) {

//The array has my incorrect letters to my array and prints it to HTML
} else {
    usedArray.push(userGuess);
    document.getElementById('playerGuess').innerHTML = usedArray;
    console.log(usedArray);
}

//Hides directions...
directionsText.textContent = "";


// Displays my guesses, wins, losses, guess remaining
userChoiceText.textContent = "You chose: " + userGuess;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesleftText.textContent = "Guesses remaining: " + guesses;
}
