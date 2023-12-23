// const myDiv = document.querySelector("div");
// console.log(myDiv);

// const myUl = document.querySelector("ul");console.log(myUl);

// const myLi = document.querySelector("ul.li")

const new_ul = document.querySelector("ul");

function changeHtml() {
    // div.innerHTML = "DOM_test";

    new_ul.innerHTML = `
    <li>This is a DOM manipulation</li>
    <li>This is a DOM manipulation</li>
`
    ;
}

function addListItem() {
    const newLi = document.createElement("li");
    const newText = document.createTextNode("new list item :) ");
    newLi.append(newText);

    newLi.innerHTML = input.value;
    ul.append(newLi);
    input.value = "";
}