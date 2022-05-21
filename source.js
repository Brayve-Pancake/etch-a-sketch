// Identify where divs will be inserted
const container = document.querySelector(".container");
console.log(container)

// Create 16 divs and insert
for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("box", `${i}`);
  div.id = `${i}`;
  div.textContent = `test${i}`;
  container.appendChild(div);
};

// Hover
const boxes = document.querySelectorAll("div.box");
boxes.forEach((box) => {
  box.addEventListener("mouseenter", highlight);
});

function highlight(e) {
  let key = e.target.getAttribute("id");
  // This doens't work for some reason
  // const boxNode = document.querySelector(`div.${key}`);
  const boxNode = document.getElementById(`${key}`);
  boxNode.style.backgroundColor = "green";
}

// button to prompt user for display size
// limit of 100 (do while loop)
const btn = document.querySelector("button");
btn.addEventListener("click", promptUser);

function promptUser() {
  let width;
  do {
    width = prompt("Pick a number between 1-100 for grid width");
  } while (width > 100 || width < 1);
  removeChildren();
};

// remove existing grid
function removeChildren() {
  let child = container.lastElementChild; 
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  };
};
// retain original dimensions of grid

// width of new boxes = container.width / width rounded down.
// calculate the difference between OG cont.width and new cont.width
// add padding aroung container for consistency.

// replace with new grid of x dimension

