// var first = "Benjamin";
// var last_name = "Marothi";

// var names = first.concat(" " + last_name)

// console.log(names);

// let x = "green" + "apple";
// console.log(x);

// let addressNumber = 25;
// let addressStreet = "sokolov";
// let country = "Israel";

// let globalAddress = `My address is ${addressNumber} ${addressStreet} ${country}`;

// console.log(globalAddress);

// let  birthYear = 1997;
// let futureYear = 2025;
// let age = futureYear - birthYear;

// console.log(`I will be ${age} years old in 2025`);

//                  Arrays

// let users = ["Shimon", "Margy", "Dinush"];
// console.log(users[0][3]);

//              Arrays methods 

// let colors = ["blue", "yellow", "green"];
// colors.push("orange");
// console.log(colors);
// colors.pop();
// console.log(colors);

// let colors = ["blue", "yellow", "green"];
// colors.splice(3, 0, "black", "white", "gold");

// edits the original array, for subsituting depending on the given position. (x, y) where x is the editing start position, and y is the number of elements removed.

// console.log(colors);

// let animals = ['cat','dog','fish','rabbit','cow'];

// console.log(animals[1]);

// animals.splice(3, 1, "horse");

// substitutes position 3 with the given elements

// console.log(animals);

// console.log(`testing alert`);
// alert("click ok to continue");
// console.log(`End of alert test`);

let userAnswer = confirm("Are you over 18?");

if (userAnswer === true) {
    alert(`Welcome` + ` ` + prompt(`Enter your name`))
} else {
    alert(`You are under age `)
}

console.log(userAnswer);

// console.log(`Here we are again live server`);