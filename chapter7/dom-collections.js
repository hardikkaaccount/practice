// DOM Collections: NodeList vs HTMLCollection

// HTMLCollection example
const divs = document.getElementsByTagName("div");
const classes = document.getElementsByClassName("example");

// NodeList example
const allDivs = document.querySelectorAll("div");
const childNodes = document.body.childNodes;

// Key differences:
// 1. HTMLCollection is always live (updates automatically)
// 2. NodeList can be live or static
// 3. HTMLCollection is only for element nodes
// 4. NodeList can contain any node type

// Converting to arrays for easier manipulation
const divsArray = Array.from(divs);
const allDivsArray = Array.from(allDivs);

// Iterating through HTMLCollection
for (let i = 0; i < divs.length; i++) {
  console.log(divs[i].tagName);
}

// Using forEach with HTMLCollection (converted to array)
divsArray.forEach(div => {
  console.log(div.className);
});

// Iterating through NodeList
allDivs.forEach(div => {
  console.log(div.tagName);
});

// Live vs Static behavior demonstration
const container = document.getElementById("container");

// This HTMLCollection is live
const liveCollection = document.getElementsByClassName("item");

// This NodeList is static
const staticList = document.querySelectorAll(".item");

// Adding a new element
const newItem = document.createElement("div");
newItem.className = "item";
newItem.textContent = "New Item";
container.appendChild(newItem);

// liveCollection will automatically include the new item
// staticList will NOT include the new item

console.log("Live collection length:", liveCollection.length);
console.log("Static list length:", staticList.length);

// Converting collections for advanced operations
const itemTexts = Array.from(liveCollection).map(item => item.textContent);
const filteredItems = Array.from(staticList).filter(item => item.textContent.includes("Item"));

// Creating elements from collections
Array.from(liveCollection).forEach((item, index) => {
  item.style.backgroundColor = index % 2 === 0 ? "lightblue" : "lightgreen";
});