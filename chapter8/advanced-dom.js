// Advanced DOM Manipulation

// Creating elements dynamically
const container = document.getElementById("container");

// Method 1: createElement
const div = document.createElement("div");
div.textContent = "Created with createElement";
div.className = "dynamic-element";
container.appendChild(div);

// Method 2: innerHTML
container.innerHTML += "<p class='dynamic-element'>Created with innerHTML</p>";

// Method 3: insertAdjacentHTML
container.insertAdjacentHTML("beforeend", "<span class='dynamic-element'>Created with insertAdjacentHTML</span>");

// Editing elements
const elements = document.querySelectorAll(".dynamic-element");
elements.forEach((el, index) => {
  el.style.color = index % 2 === 0 ? "blue" : "red";
  el.setAttribute("data-id", index);
});

// Removing elements
setTimeout(() => {
  const firstElement = document.querySelector(".dynamic-element");
  if (firstElement) {
    firstElement.remove();
  }
}, 2000);

// Working with fragments for better performance
const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  li.textContent = `List item ${i + 1}`;
  fragment.appendChild(li);
}
const ul = document.createElement("ul");
ul.appendChild(fragment);
container.appendChild(ul);

// Cloning elements
const original = document.querySelector(".example");
if (original) {
  const clone = original.cloneNode(true);
  clone.textContent = "Cloned element";
  container.appendChild(clone);
}

// Working with attributes
const img = document.createElement("img");
img.src = "placeholder.jpg";
img.alt = "Placeholder image";
img.setAttribute("data-info", "dynamic-image");
img.classList.add("image-element");

// Working with styles
img.style.width = "100px";
img.style.height = "100px";
img.style.border = "2px solid blue";

// Working with datasets
img.dataset.category = "thumbnail";
img.dataset.index = "1";

container.appendChild(img);

// Template elements
const template = document.getElementById("item-template");
if (template) {
  const templateContent = template.content;
  const clone = document.importNode(templateContent, true);
  container.appendChild(clone);
}

// Working with forms dynamically
const form = document.createElement("form");
form.innerHTML = `
  <input type="text" name="username" placeholder="Username" required>
  <input type="email" name="email" placeholder="Email" required>
  <button type="submit">Submit</button>
`;

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  console.log("Username:", formData.get("username"));
  console.log("Email:", formData.get("email"));
});

container.appendChild(form);