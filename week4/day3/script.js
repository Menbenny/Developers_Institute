// If the answer is false: "No problem, Goodbye."
// 
// 




// console.log(randomNumber);

// function playTheGame() {

//     result = confirm("Ready to Play?") 

//         if (result === false) {
//            alert("Goodbye.")
//         } else if (result === true ){

//         }
        
//     user_input = prompt("Enter a number between 0 and 10")
    
//     let randomNumber = Math.floor((Math.random()) * 10);
    
//     if (user_input=isNaN(user_input))
//     return false;
//     {
//         alert("Sorry Not a Number, Goodbye.");
//     } 
        
//     if (user_input != randomNumber) {
//         alert("No problem, Goodbye.");
//     } else if (user_input=randomNumber) {
            
//         }
    
        
// }

// playTheGame()


// function playTheGame() {

//     // Ask the user if they want to play the game

//     const wantToPlay = confirm("Do you want to play the game?");
  
//     if (!wantToPlay) {

//       // If the user doesn't want to play, show the goodbye message

//       alert("No problem, Goodbye");
//     } else {

//       // If the user wants to play, ask for a number between 0 and 10

//       let userInput = prompt("Enter a number between 0 and 10:");
  
//       // Check the validity of the user's input

//       if (userInput === null) {

//         // If the user cancels the prompt or clicks 'Cancel'

//         alert("Goodbye");
//       } else {
//         // Convert the user's input to a number

//         const userNumber = parseInt(userInput);
  
//         // Check if the user's input is a valid number between 0 and 10

//         if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
//           alert("Sorry, it's not a valid number, Goodbye");
//         } else {

//           // If the user entered a valid number, generate a random computer number between 0 and 10

//           const computerNumber = Math.floor(Math.random() * 11); // Random number between 0 and 10
  
//           // Display both numbers to the user

//           alert(`Your number: ${userNumber}\nComputer's number: ${computerNumber}`);
  
//           // Compare the user's number with the computer's number and announce the winner
          
//           if (userNumber === computerNumber) {
//             alert("Congratulations! You guessed the correct number!");
//           } else {
//             alert("Sorry, try again next time!");
//           }
//         }
//       }
//     }
//   }
  
// var answer = 'yes'  



// function playTheGame () {
//     let check = confirm('Ready to Play?');
//     if (check = false) {
//         console.log(`No problem, Goodbye!`);
//     } else if (check) {
//         let user = prompt("Enter a number")

//         if (isNaN(user)) {
//             alert('Not a number, Goodbye')
//         }

//         else if(user > 10 || user < 0){
//             alert('Sorry not a good number, goodbye')
//         } 
//         else if(user <= 10 || user < 0){

//             function randomNumber() {
//                 const random_num = Math.floor(Math.random() * 11);
//                 return random_num
//             }

//             // let computerNumber = randomNumber();
//             compareNumbers(user, computerNumber)
//         }

//     }
//     else {
//         alert('No problem, goodbye')
//     }

    
// }

// use return (to exit the function)after every prompt

// function randomNumber() {
//     return Math.floor(math.random() * 10) + 1;
// }

// function compareNumbers(userNumber, computerNumber) {

// }

// CALCULATOR CLUE
/*

console.log(eval("" + "+" + "2"));

the eval() function gives the sum of the strings:

*/


// 

// result = prompt(eval("" + "" + ""))

// calculator = eval(result)

// console.log(calculator)
// alert(calculator)


// ####################################################################################################################################


function playGame() {
    const play = confirm("Would you like to play the game?");

    // if the answer is false
    if (!play) {
        alert("No problem, Goodbye!")
    } else {
        const userInput = prompt("Please enter a number between 0 and 10: ");


        // Checking validity
        if (userInput === null || isNaN(userInput)) {
            alert("Sorry, Not a number, Goodbye.");
        } else {
            const userNumber = parseFloat(userInput);

            if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
                alert("Sorry, Not a good number, Goodbye.");
            } else {
                const computerNumber = Math.floor(Math.random() * 11);
                alert(`Your number: ${userNumber}\nComputer's number: ${computerNumber}`)
            }
        }
    }
}

// PART II

// function compareNumbers(userNumber, computerNumber) {
//     if (userNumber == computerNumber) {
//         alert("WINNER")
//     } else if (userNumber > computerNumber) {
//         alert("Your number is bigger than the computer's guess again.")
//     }

//     if (userNumber < computerNumber) {
//         alert("Your number is smaller than the computer's, guess again.")
//     }
// }

function comparenumbers(userNumber, computerNumber) {

    let numGuesses = 0;

    while (numGuesses < 3) {
        if (userNumber === computerNumber) {
            alert("WINNER");
            return;
        } else if (userNumber > computerNumber) {
            userNumber = prompt("Your number is bigger than the computer's, guess again");
        } else if (userNumber < computerNumber) {
            userNumber = prompt("Yoour number is smaller than the computer's")
        }

        numGuesses++;
    }

    alert("Out of chances");
}

playGame();