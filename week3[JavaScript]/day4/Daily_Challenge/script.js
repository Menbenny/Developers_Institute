/*
Instructions
Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
For example, “The movie is not that bad, I like it”.

Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
For example, the result here should be : “The movie is good, I like it”
If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
Example:

  Your string is : 'This dinner is not that bad ! You cook well', 
  --> the result is : 'This dinner is good ! You cook well'

  Your string is : 'This movie is not so bad !' 
  --> the result is : 'This movie is good !'

  Your string is : 'This dinner is bad !' 
  --> the result is : 'This dinner is bad !'
  */


let string = "not bad";

wordNot = string.substring(0, 3);
wordBad = string.substring(4, 8);

let sentence = `The weather is ${wordNot} ${wordBad} today, we like it`; 

var new_string = string.replace("not bad", "good");



if (wordNot > wordBad) {
    console.log(`The weather is ${new_string} today, love it.`);
} else {
    console.log(sentence);
}

// console.log(new_string);









//   var sentence = ["not", "bad"];

//   var wordNot = sentence[0];

//   var wordBad = sentence[1];

// userInput = prompt("Enter a sentence: ")

// arr = userInput.split(" ");

// console.log(arr);

// if (wordBad > wordNot) {
//     arr.push("Good")
//     console.log(arr);
// }




// let paragraph = "The area is not so bad";

// arr = paragraph.split(" ");

// console.log(arr);

// console.log(arr[0]);