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

// remove existing grid
// retain original dimensions of grid

// replace with new grid of x dimension

