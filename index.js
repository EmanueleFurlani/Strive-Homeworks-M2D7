// EX11) Write a function to add a new link into the navbar

function finalLink() {
const navBar = document.querySelector("nav");
const newA = document.createElement("a");
newA.href = "#";
newA.innerText = "New Link";
navBar.appendChild(newA);
}
//finalLink();

// EX12) Write a function to change the color of the main title

const jumbo = document.querySelector(".jumbotron");
const mainTitle = jumbo.querySelector("h1");
mainTitle.addEventListener("mouseover", () => {
mainTitle.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// EX13) Write a function to change the background of the jumbotron
jumbo.addEventListener("click", () => {
jumbo.classList.remove("bg-dark");
jumbo.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// EX14) Write a function to remove all the links under "Elsewhere"
const eLinks = document.querySelector("aside div:nth-child(3) ol.list-unstyled");
const eTag = document.querySelector("aside div:nth-child(3) h4");

eTag.addEventListener("click", () => {
eLinks.innerHTML = "";
});

//EX15) Write a function to change the column size for heading in jumbotron
//EX16) Write a function to remove the "Search" magnifying glass icon
//EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
//EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
//EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
//EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name