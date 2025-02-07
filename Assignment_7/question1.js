var randomNumber = Math.floor(Math.random() * 100) + 1;
var guess = 0;
var attempts = 0;

while (guess !== randomNumber) {
    guess = prompt("Guess a number between 1 and 100:");
    guess = parseInt(guess, 10);
    attempts++;

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess > randomNumber) {
        alert("Too high! Try again.");
    } else if (guess < randomNumber) {
        alert("Too low! Try again.");
    } else {
        alert("Correct! You guessed the number in " + attempts + " attempts.");
    }
}
