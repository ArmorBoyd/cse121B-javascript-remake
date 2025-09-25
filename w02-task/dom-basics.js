const newParagrah = document.createElement("p");
newParagrah.innerText = ("Added with JS");
document.body.appendChild(newParagrah);

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "Added with JS";
sect.appendChild(para);

const image = document.createElement("img");
image.setAttribute("src", "https://picsum.photos/200");
image.setAttribute("alt", "Random Image from picsum");
sect.appendChild(image);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</></ul>"
sect.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>"
document.body.appendChild(newSection)

const newSections = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basicssss"
newSections.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "This was added through Javascript!"
newSections.appendChild(newP);
sect.appendChild(newSections);