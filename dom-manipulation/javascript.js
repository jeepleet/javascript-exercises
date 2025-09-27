

// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");

const p = document.createElement("p");
p.textContent = "yo yo whats happening";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "Im a blue h3";
h3.style.color = "blue";
container.appendChild(h3);

const content1 = document.createElement("div");
content1.style.border = "1px solid black";
content1.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "Im in a div";
content1.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "me too!";
content1.appendChild(p2);

container.appendChild(content1);


content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
