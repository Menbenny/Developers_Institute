/*
🌟 Exercise 1 : Users
Instructions
<div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul>


Add the code above, to your HTML file

Using Javascript:
Retrieve the div and console.log it
Change the name “Pete” to “Richard”.
Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
Change each first name of the two <ul>'s to your name. (Hint : use a loop)

Bonus - Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.
*/

// const myDiv = document.querySelector("div");
// console.log(myDiv);

// var nym = document.getElementsByTagName("li")[1];
// nym.textContent = "Richard"
// console.log(nym);

// document.getElementsByTagName("li")[1].textContent = "Richard";

// const secondList = document.getElementsByClassName("list")[1];
// console.log(secondList);
// secondList.removeChild("li");

const lists = document.querySelectorAll(".list");
lists[1].children[1].remove();
console.log(lists[1]);


 