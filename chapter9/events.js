// JavaScript Events

// Different ways to add event listeners
const button = document.getElementById("click-btn");

// Method 1: addEventListener
button.addEventListener("click", function(e) {
  console.log("Button clicked!", e.target);
});

// Method 2: Inline event handler (not recommended)
// Defined in HTML as onclick="handleClick()"

// Event bubbling and capturing
const container = document.getElementById("event-container");
const child = document.getElementById("child-element");

// Capturing phase
container.addEventListener("click", function(e) {
  console.log("Container captured click");
}, true);

// Bubbling phase
container.addEventListener("click", function(e) {
  console.log("Container bubbled click");
}, false);

child.addEventListener("click", function(e) {
  console.log("Child clicked");
  // e.stopPropagation(); // Uncomment to stop bubbling
  // e.stopImmediatePropagation(); // Uncomment to stop all listeners
});

// Multiple event listeners on same element
const multiListenerBtn = document.getElementById("multi-btn");
multiListenerBtn.addEventListener("click", () => console.log("Listener 1"));
multiListenerBtn.addEventListener("click", () => console.log("Listener 2"));

// Mouse events
const mouseArea = document.getElementById("mouse-area");
mouseArea.addEventListener("mouseenter", () => console.log("Mouse entered"));
mouseArea.addEventListener("mouseleave", () => console.log("Mouse left"));
mouseArea.addEventListener("mousemove", (e) => {
  console.log(`Mouse position: X=${e.clientX}, Y=${e.clientY}`);
});

// Keyboard events
const input = document.getElementById("keyboard-input");
input.addEventListener("keydown", (e) => {
  console.log("Key down:", e.key, e.code);
});
input.addEventListener("keyup", (e) => {
  console.log("Key up:", e.key);
});
input.addEventListener("keypress", (e) => {
  console.log("Key press:", e.key);
});

// Form events
const form = document.getElementById("event-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
});
form.addEventListener("reset", () => {
  console.log("Form reset");
});

// Event delegation
const list = document.getElementById("delegation-list");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("List item clicked:", e.target.textContent);
  }
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked in list");
    e.target.parentElement.remove();
  }
});

// Custom events
const customBtn = document.getElementById("custom-btn");
customBtn.addEventListener("myCustomEvent", (e) => {
  console.log("Custom event received:", e.detail);
});

// Dispatch custom event
setTimeout(() => {
  const customEvent = new CustomEvent("myCustomEvent", {
    detail: { message: "Hello from custom event!" }
  });
  customBtn.dispatchEvent(customEvent);
}, 3000);

// Removing event listeners
const removableBtn = document.getElementById("removable-btn");
const clickHandler = () => console.log("This listener can be removed");
removableBtn.addEventListener("click", clickHandler);

// Remove after 5 seconds
setTimeout(() => {
  removableBtn.removeEventListener("click", clickHandler);
  console.log("Event listener removed");
}, 5000);

// Window events
window.addEventListener("load", () => console.log("Window loaded"));
window.addEventListener("resize", () => console.log("Window resized"));
window.addEventListener("scroll", () => console.log("Window scrolled"));

// Event object properties
document.addEventListener("click", (e) => {
  console.log("Event type:", e.type);
  console.log("Target:", e.target);
  console.log("Current target:", e.currentTarget);
  console.log("Timestamp:", e.timeStamp);
  console.log("Coordinates:", e.clientX, e.clientY);
});