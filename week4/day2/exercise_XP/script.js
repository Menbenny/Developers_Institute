// exercise 1

// part I

// function infoAboutMe() {
//     console.log(`Binyamin, outstanding Haifian developer living in exceptionally exquisite abode. `);
// }

// infoAboutMe();


// part II


// function infoAboutPerson(personName, personAge, personFavouriteColor) {
//     console.log(`This is ${personName} with an obsession for ${personFavouriteColor} ornaments, which explains living at the age of ${personAge}`);
// }

// infoAboutPerson('Gabby', '27', 'Blackpearl');

/*🌟 Exercise 2 : Tips
Instructions
John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

Create a function named calculateTip() that takes no parameter.

Inside the function, use prompt to ask John for the amount of the bill.

Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function.
*/

// let bill;
// let tip;

// function billTip(){
//     bill = Number(prompt("Enter the bill amonunt: "));

//     if(bill < 50) 
//     {tip = bill/100*20;}
//     // {console.log(`The tip amount is: ${tip}$ 
//     //             The final amount is: ${bill + tip}$
//     // `)};

//     if(50 <= bill <= 200) 
//     {tip = bill/100*15;}
//     // {console.log(`The tip amount is: ${tip}$ 
//     //             The final amount is: ${bill + tip}$
//     // `)};

//     if(bill > 200) 
//    { tip = Math.round(bill/100*10);}
//     console.log(`The tip is: ₪${tip} 
//                 Final bill amount: ₪${bill + tip}
//     `);
     
// }

// billTip();




// bill = prompt("Enter the bill amount: ")

// if (bill <= 50) {
//     tip = bill/100 * 20;
//     // return tip
//     console.log(tip);
// }


/*🌟 Exercise 3 : Find The Numbers Divisible By 23
Instructions
Create a function call isDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.

Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313


Bonus: Add a parameter divisor to the function.

isDivisible(divisor)

Example:
isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
*/

// function isDivisible(){
//     for (let i =0; i <= 500;i++){
//         if (i % 23 == 0){
            
//             // let sum = sum(i)
//             console.log(i);
//         }
//     }
// }

// isDivisible()

function isDivisible(divisor){
    for (let i =0; i <= 500;i++){
        if (i % divisor == 0){
            
            // let sum = sum(i)
            console.log(i);
        }
    }
}

isDivisible(30)