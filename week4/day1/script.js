// exercise 1

// function age(myAge) {
//     mum = myAge * 2;
//     dad = mum * 1.2;
//     console.log(`My age is ${myAge}. My mum is ${mum} and dad is ${dad}`);
// }

// age(26);





















// exercise 2

// function new_age(myAge){
//    return mum = myAge*2;  
// }

// console.log(new_age(26));

let obj = {
    firstname: "Ben",
    lastname: "Marothi",
    food: function () {
        console.log(`${this.firstname} likes to eat Hummus, the ${this.lastname}'s style`);
    }
}

console.log(obj.food());