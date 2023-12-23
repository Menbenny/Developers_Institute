/*
                            Document Object Model
*/

// const myDiv = document.querySelector("div");

// console.log(myDiv);

// const ourDiv = document.querySelector("body");
// console.log(ourDiv.firstElementChild);
// const ourDiv2 = document.querySelector("div");
// console.log(ourDiv2);

// const myUl = document.querySelector("body");
// console.log(myUl.secondElementChild);
// const myUL = document.querySelector("ul");
// console.log(myUL);

// const pete = document.querySelector("ul");
// console.log(pete.lastElementChild);
// const secondIL = document.querySelectorAll("li");
// console.log(secondIL[1]);


// // For creating an HTML tag with DOM
// const myNewElement = document.createElement("li");
// // adding content to the newly created tag
// myNewElement.textContent = "Binyamin";
// myUL.append(myNewElement);

// const body = document.querySelector("body");

// const newHeader = document.createElement("h2");
// newHeader.textContent = "This is the Header";
// body.append(newHeader);


// const DIV = document.querySelector("#container");
// const DIV2 = document.querySelector();

// // checking for attributes
// console.log(DIV.hasAttribute("id"));

// null is not an empty string, undefined is an undefined string 
const a = document.querySelector("a");
aHref = a.getAttribute("href");
console.log(aHref);

aHreflang = a.getAttribute("hreflang");
console.log(aHreflang);

aRel = a.getAttribute("rel");
console.log(aRel);

aTarget = a.getAttribute("target");
console.log(aTarget);

aType = a.getAttribute("type");
console.log(aType);
