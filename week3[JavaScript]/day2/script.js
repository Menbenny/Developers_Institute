/*###################################################################################################################
🌟 Exercise 1: Your Favorite Food
Instructions
Store your favorite food into a variable.

Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

Console.log I eat <favorite food> at every <favorite meal>

For example

If your favorite food is "chocolate", 
and your favorite meal of the day is "dinner", 
you will console.log 
I eat chocolate at every dinner
*/

// var favouriteFood = "Smoked Salmon";

// var favouriteMeal = "Lunch";

// console.log(`I have ${favouriteFood} everyday for ${favouriteMeal}`)



/*
###################################################################################################################
🌟 Exercise 2 : Series
Instructions
Part I
Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory

Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory

*/

// const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// var myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];



// var  myWatchedSeriesLength = myWatchedSeries.length;

// var myWatchedSeriesSentence = myWatchedSeries.join(` `);

// var myWatchedSeriesSentence = myWatchedSeries.splice(3, 0, " and");

// console.log(myWatchedSeriesSentence);

// console.log(`I watched ${myWatchedSeriesLength} series. Namely ${myWatchedSeriesSentence}`);

/*
Part II
Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.

Add, at the end of the array, the name of another series you watched.

Add, at the beginning of the array, the name of your favorite series.

Delete the series “black mirror”.
Console.log the third letter of the series “money heist”.

Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.*/

// myWatchedSeries[2] = "friends";


// myWatchedSeries.push("Ancient Apocolypse");


// myWatchedSeries.unshift("Blue area")

// myWatchedSeries.splice(1,1);

// console.log(myWatchedSeries[1][2]);

// console.log(myWatchedSeries);

/*
###################################################################################################################
🌟 Exercise 3 : The Temperature Converter
Instructions

Store a celsius temperature into a variable.

Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

*/

// var tempC = 30;

// var fahrenheit = (tempC / 5) * 9 + 32;

// console.log(`${tempC}°C is ${fahrenheit}°F`);

/*
###################################################################################################################
🌟 Exercise 4 : Guess The Answers #1
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



For example

console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5


Using the code below:

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: a and b are integar variables, hence = 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: ading integars 21 and 2 = 23
    // Actual:23



What will be the outcome of a + b in the first expression ?
What will be the outcome of a + b in the second expression ?
What is the value of c? undefined

Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');

two integars plus a concatinated string which only adds itself a an elemnt to the numerical sum

 75
*/

/*
###################################################################################################################
Exercise 5 : Guess The Answers #2
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



For example

typeof("potato")
// Prediction: Vegetable
// Actual: String


What is the output of each of the expressions below?


typeof(15)
// Prediction: numerical input
// Actual: number

typeof(5.5)
// Prediction: numerical input 
// Actual: number 

typeof(NaN)
// Prediction: statement 
// Actual: true

typeof("hello")
// Prediction: word in quotes
// Actual: string

typeof(true)
// Prediction: dataType
// Actual: boolean

typeof(1 != 2)
// Prediction: expression
// Actual: boolean

"hamburger" + "s"
// Prediction: concatination 
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: deconcatination 
// Actual: hamburger 

"1" + "3"
// Prediction: string concatination 
// Actual: 13

"1" - "3"
// Prediction: numerical expression 
// Actual: -2

"johnny" + 5
// Prediction: string plus integar, two different data types
// Actual: NaN

// "johnny" - 5
// Prediction: two different data types
// Actual: NaN

99 * "hello"
// Prediction: two different data types
// Actual: NaN

1 != 1
// Prediction: Boolean expression
// Actual: false

1 == "1"
// Prediction: boolean data type expression (Similarity expression)
// Actual: true

1 === "1"
// Prediction: comparison expression 
// Actual: true
*/


/*
###################################################################################################################
Exercise 6 : Guess The Answers #3
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



What is the output of each of the expressions below?


5 + "34"
// Prediction: two different types of data types integar and string concatinated 
// Actual: 534

5 - "4"
// Prediction: JavaScript should be converting the string automatically to match woth the integar in order to execute the given code.
// Actual: 1

10 % 5
// Prediction: remainder expression or modulus  
// Actual: 0

5 % 10
// Prediction:
// Actual:

"Java" + "Script"
// Prediction: concatinating two strings
// Actual: JavaScript

" " + " "
// Prediction: adding spaces 
// Actual: " "

" " + 0
// Prediction: adding a space to the integar
// Actual:' 0'

true + true
// Prediction: the value of boolean true is equal to one 
// Actual: 2

true + false
// Prediction: same as 1 + 0
// Actual: 1

false + true
// Prediction: 0 + 1
// Actual: 1

false - true
// Prediction: 0 - 1
// Actual: -1 

!true
// Prediction: 
// Actual:

3 - 4
// Prediction: numerical expression 
// Actual: -1

"Bob" - "bill"
// Prediction: expression seems to be applicable to number, these aren't 
// Actual: NaN
*/


