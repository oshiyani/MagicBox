var randomnumber = Math.floor(Math.random() * 100) + 1;
var attempts = 10; // Set maximum attempts
var level = 1;
var boxCount = 0;

document.getElementById('btn').addEventListener('click', function () {
    var guess = parseInt(document.getElementById('guessinput').value);

    for (let i = attempts; i > 0; i--) {
        if (guess === randomnumber) {
            boxCount++;
            document.getElementById('locked').src = 'unlock image.png'; // Unlocking the lock

            display("Congrats! You guessed the number in " + (11 - i) + " attempts.");

            randomnumber = Math.floor(Math.random() * (100 * level)) + 1; // Increase range for next level
            attempts = 10; // Reset attempts

            setTimeout(function () {
                document.getElementById('locked').src = 'lock image.avif'; // Locking the image again
                level++; // Increase level
                display("Guess the number for Level " + level); // Next level message
                document.getElementById('guessinput').value = ''; // Clear the input field
            }, 1000);

            if (boxCount === 5) {
                display("Congratulations! You won the game!");
                document.getElementById('btn').disabled = true; // Disable button after 5 levels
                document.getElementById('guessinput').disabled = true; // Disable input field
            }

            break;
        } else if (guess < randomnumber) {
            display("Your number is too low, try again!");
        } else {
            display("Your number is too high, try again!");
        }

        attempts--;
        break; // Exit loop after one attempt
    }

    if (attempts === 0 && guess !== randomnumber) {
        display("Game Over! Try again.");
    }
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}
