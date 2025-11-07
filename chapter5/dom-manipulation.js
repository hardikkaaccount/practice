// DOM Manipulation

// Selecting elements
const heading = document.getElementById("main-heading");
const paragraphs = document.getElementsByClassName("content");
const firstPara = document.querySelector("p");
const allParas = document.querySelectorAll("p");

// Creating elements
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
newDiv.className = "new-element";

// Modifying elements
heading.style.color = "blue";
heading.style.fontSize = "24px";

// Adding elements to the DOM
document.body.appendChild(newDiv);

// Event handling
const button = document.getElementById("click-me");
button.addEventListener("click", function() {
  alert("Button clicked!");
});

// Changing content
const contentDiv = document.getElementById("content");
contentDiv.innerHTML = "<p>This content was added dynamically</p>";

// Working with attributes
const image = document.querySelector("img");
if (image) {
  image.setAttribute("src", "new-image.jpg");
  image.setAttribute("alt", "New Image");
  image.setAttribute("title", "New Image Description")
}

// Traversing the DOM
const list = document.querySelector("ul");
const firstListItem = list.firstElementChild;
const lastListItem = list.lastElementChild;
const parentOfList = list.parentElement;

// Removing elements
const elementToRemove = document.querySelector(".remove-me");
if (elementToRemove) {
  elementToRemove.remove();
}

// Working with classes
const toggleDiv = document.getElementById("toggle");
toggleDiv.classList.add("active");
toggleDiv.classList.remove("hidden");
toggleDiv.classList.toggle("highlight");

// Forms and input handling
const form = document.getElementById("user-form");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
    
    // Clear form
    form.reset();
  });
}

// Creating a simple todo list
function createTodoList() {
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  
  if (todoInput && todoList) {
    const addButton = document.getElementById("add-todo");
    addButton.addEventListener("click", function() {
      if (todoInput.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = todoInput.value;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
          listItem.remove();
        });
        
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = "";
      }
    });
  }
}

// DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is fully loaded");
  createTodoList();
});

// Window events
window.addEventListener("resize", function() {
  console.log("Window resized");
});

window.addEventListener("scroll", function() {
  console.log("Page scrolled");
});