// const userInput = prompt("_ _ _ _ _ _ _ _ _")

// let inputPlayer_1 = prompt("Enter a word: ")

while (true) {
    const inputPlayer_1 = prompt("enter a word: ")

    if (inputPlayer_1.length < 8) {
        alert("the word must have a minimum of 8 letters");
    } else {
        let hiddenWord = '* '.repeat(inputPlayer_1.length);
        console.log(`Hidden word: ${hiddenWord}`);

        let guesses = [];
        let incorrectGuesses = 0;

        while(incorrectGuesses < 10) {
            const inputPlayer_2 = prompt("Player 2: Enter a letter: ");

            if (inputPlayer_2.length !== 1) {
                alert("Please enter a single letter: ");
                continue;
            }

            if (guesses.includes(inputPlayer_2)) {
                alert("You've already guessed that letter.");
                continue;
            }

            guesses.push(inputPlayer_2);

            if (inputPlayer_1.includes(inputPlayer_2)) {
                hiddenWord = hiddenWord(inputPlayer_1, guesses);
                console.log(`Correct guess: ${hiddenWord}`);

                if (hasPlayerWon(inputPlayer_1, guesses)) {
                    console.log("CONGRATS! YOU WIN!");
                    break;
                }
            } else {
                incorrectGuesses++;
                console.log(`Incorrect guess (${10 - incorrectGuesses} remaining): ${hiddenWord}`);

                if (incorrectGuesses === 10) {
                    console.log("YOU LOSE");
                }
            }

            console.log("Guesses:", guesses.join(','));
        }

        break;
    }

}

function hideWord(word, guesses) {
    let hidden = '';
    for (const letter of word) {
        if (guesses.includes(letter)) {
            hidden += letter;
        } else {
            hidden += '*';
        }
    }
    return hidden
}

function hasPlayerWon(word, guesses) {
    return hideWord(word, guesses) === word;
}