// For loops

// for (let i = 0; i < 11; i++){
//     console.log(i);
// }

// Looping through an Array

// let colors = ["red", "yellow", "black", "pink"];

// for (let i = 0; i < colors.length; i ++) {
//     console.log(colors[i]);
// }

// If the number of elemts is known, i < 4
// If the number is unknown array.length is used 


// for (i = 1; i <= 15; i ++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`);
//     }
// }

// let person = [{
//     firstName: "John",
//     lastName: "Doe",
//     age: 25
// },{
//     firstName: "Chris",
//     lastName: "Mellow",
//     age: 25
// },{
//     firstName: "Peter",
//     lastName: "Parker",
//     age: 25
// }]

// For in loop to iterate through objects

// for (let element of person ) {
//   for (key in element) {
//     if (key === "firstName"){
//         console.log(element[key]);
//     }
//   }
// }

// names = "binyamin";

// console.log(typeof(names));

// for (elements in names) {
//     if (typeof(names) != string){
//         pass
//     } else if(typeof(names) === string) {

//     }
// }

let names = ["john", "sarah", 23, "Rudolf", 34];

for (let name of names){
    console.log(name);
    if (typeof name === "string"){
        if (name[0] !== name[0].toUpperCase()){
            name = name[0].toUpperCase() + name.slice(1);
        } 
        console.log(name);
    }
}