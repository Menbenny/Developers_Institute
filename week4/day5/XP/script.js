// const div = document.getElementById("container");
// console.log(div);

// new_pete = document.getElementsByClassName("list")[0];

// function changeHtml(new_pete) {

//     new_pete.innerHTML = `
//     <li>Jeff</li>
    
    
    
//     `



// }


// const listElement = document.getElementsByClassName("list")[0];

// function changeHtml() {
//     // Get the <li> element containing "Pete"
//     const peteElement = listElement.querySelector("li:nth-child(2)");

//     if (peteElement) {
//         // Change the content of the <li> element to "Jeff"
//         peteElement.textContent = "Jeff";
//     }
// }

// const container = document.getElementById("container");
// console.log(container);

// const peteLi = document.querySelector(".list:nth-child(1) li:nth-child(2)");
// peteLi.textContent = "Richard";

// const sarahLi = document.querySelectorAll(".list:nth-child(2) li:nth-child(2)");
// sarahLi.remove();

// const uls = documnet.querySelectorAll(".list");


// for (const ul of uls) {
//     const firstName = ul.firstElementChild.textContent;
//     ul.firstElementChild.textContent = "YourName";
// }

// EXERCISE 2

// const div = document.querySelector("div");
// div.style.backgroundColor = "lightblue";
// div.style.padding = "10px";

// const jphnLi = document.querySelector("li:nth-child(1)");
// johnLi.style.display = "none";


// const peteLi = document.querySelector("li:nth-child(2)");
// peteLi.style.border = "1px solid black";

// document.body.style.fontSize = "20px";

// if (div.style.backgrounfColor === "lightblue") {
//     alert(
//         "Hello John and Pete."
//     );
// }

// EXERCISE 3

// const navBar = document.getElementById("navBar");
// navBar.setAttribute("id", "socialNetworkNavigation");

// const newLi = document.createElement("li");
// const newText = document.createTextNode("Logout");
// newLi.appendChild(newText);
// document.querySelector("ul").appendChild(newLi);

// const firstLi = document.querySelector("ul").firstElementChild;
// const lastLi = document.querySelector("ul").lastElementChild;
// console.log(firstLi.textContent);
// console.log(lastLi.textContent);

// EXERCISE 4

// Exercise 4: My Book List

const allBooks = [
    {
        title: "Book 1",
        author: "Author 1",
        image: "image1.jpg",
        alreadyRead: true
    },
    {
        title: "Book 2",
        author: "Author 2",
        image: "image2.jpg",
        alreadyRead: false
    }
];

const listBooks = document.querySelector(".listBooks");
const table = document.createElement("table");
listBooks.appendChild(table);

for (const book of allBooks) {
    const row = document.createElement("tr");
    
    const titleCell = document.createElement("td");
    titleCell.textContent = book.title + " written by " + book.author;
    row.appendChild(titleCell);
    
    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";
    imgCell.appendChild(img);
    row.appendChild(imgCell);
    
    if (book.alreadyRead) {
        titleCell.style.color = "red";
    }
    
    table.appendChild(row);
}
