// name = prompt("Please enter name: ")

// function infoAboutPerson(name, age, favourite_color) {
//     console.log("Your name is " + name + ". Your age is: " + age + ". Your favourite color is: " + favourite_color);
// }

// option 1 - variable arguments
// name = "Ben"
// age = "30"
// favourite_color = "Turqoise"

// option 2 - keyword arguments
// Ususally for a lot of arguments


// infoAboutPerson(name = "Juli", age = "31", favourite_color 
// = "black")

// option 3 - positional arguments 
// Better for a few arguments (5) 

// infoAboutPerson("Juli","31",  
// "black")


// function changeEnough(itemPrice, amountOfChange) {
    
//     let total_amountOfChange = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.10 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01 
//     if ()
// }


// Too 


// Exercise 1 

// part 1

// function infoAboutMe() {
//     console.log(`I am Binyamin, the 26 years old guitar player. `);
// }
// infoAboutMe()

// // part 2

// function infoAboutPerson(personName, personAge, personFavouriteColor) {
//     console.log(`Your name is ${personName}, you are ${personAge} years old and you like ${personFavouriteColor} things :)`);
// }

// infoAboutPerson("Lolo", "31", "Scarlet-Blue")

// exercise 2 

// function calculateTip() {
//     let bill = prompt("Hey John, please enter the bill total: ");
//     let tip = 0;
//     if (bill < 50) {
//         tip = bill * 0.2;
//        }
//     if (bill == 50 && bill <= 200) {
//         tip = bill * 0.15;
//     }
    
//     if (bill > 200) {
//         tip = bill * 0.1;
//     }
//     console.log(`Bill Total: ${bill}$
//     Tip Total: ${tip.toFixed(2)}$`);
// }
// calculateTip()

// Exercise 3

// function isDivisible() {
//     for (let i = 0; i <= 500; i++) {
//         if (i % 23 == 0) {
           
//         console.log(i);
       
//         }
//         let sum = 0;
//     // sum += i;
//     // console.log(`The sum is ${sum}`)
//     }
    
// }
// isDivisible()

// function calculateSum() {
//     let sum = 0;
//     for (let i =0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             sum += i
//         }
//     }
//     console.log("Sum of item divisable by 23: ", sum);
// }

// calculateSum();

// exercise 4 : shopping list 

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shopping_list = [
//     "banana",
//     "orange",
//     "apple",
// ]

// function myBill() {
//     let total = 0;

//     for (const item of shopping_list) {
//         if (item in stock) {
//             if (stock[item] > 0) {
//                 total += prices[item];
//                 stock[item] -= 1
//             } else {
//                 console.log(`Sorry,${item}s are out of stock`);
//             }
//         } else {
//             console.log(`Sorry, ${item} is not available`);
//         }
//     }

//     return total;
// }

// const totalBill = myBill();
// console.log("Total Bill: ", `${totalBill}$`);


// \\Exercise 5

// function changeEnough(itemPrice, amountOfChange) {
//     const quartersValue = 0.25;                                                                                                            
//     const dimevalue = 0.10;
//     const nickelsValue = 0.05;
//     const penniesValue = 0.01;

//     const totalChange = (
//         amountOfChange[0] * quartersValue +
//         amountOfChange[1] * dimevalue +
//         amountOfChange[2] * nickelsValue +
//         amountOfChange[3] * penniesValue
//     );

//     return totalChange >= itemPrice;

// }

// changeEnough()

// EXERCISE 6

function hotelCost() {
    let numberOfNights;
    while (true) {
        const input = prompt("Enter the number of nights to spend at the hotel: ");
        numberOfNights = parseInt(input);
        if(!isNaN(numberOfNights)) {
            break;
        }
    }
    // Return thee cost hiya!
    return numberOfNights * 140;
}

function planeRideCost() {
    let destination;
    while (true) {
        destination = prompt("Enter your destination (London, Paris or Other): ").toLowerCase();
        if (destination === "london" || destination === "paris" || destination === "other" ) {
            break;
        }
    }

    switch (destination) {
        case "london":
            return 183;
        case "paris":
            return 220;
        case "other":
            return 300;
    }
}

function rentalCarCost() {
    let numberOfDays;
    while (true) {
        const input = prompt("Enter the nuber of days to rent a car: ")
        numberOfDays =parseInt(input);
        if (!isNaN(numberOfDays)) {
            break;
        }
    }

    let cost = numberOfDays * 40;
    if (numberOfDays > 10) {

        // applying 5% of discount cost = cost * 0.95
        cost *= 0.95 
    }

    return cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    const totalCost = hotel + plane + car;

    console.log(`
    The hotel cost: ${hotel}
    The plane cost: ${plane}
    The car cost: ${car}

    The total amount for your vacation will be: ${totalCost}
    `);
}