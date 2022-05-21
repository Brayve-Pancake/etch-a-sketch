// Identify where divs will be inserted
const container = document.querySelector(".container");

// Global variables
const ogContainerWidth = document.querySelector(".container").offsetWidth;
let mode = "default";
let opacity;

// Initialise grid
const initWidth = 4;
createNewGrid(initWidth);

const btnRainbow = document.querySelector("button.rainbows");
btnRainbow.addEventListener("click", rainbow);

const btnShade = document.querySelector("button.shade");
btnShade.addEventListener("click", shade);

const btn = document.querySelector("button.change");
btn.addEventListener("click", generateNewGrid);

function rainbow() {
  mode = "rainbow";
}

function shade() {
  mode = "shade";
  opacity = 0.1;
};

function generateNewGrid() {
  let containerWidth;
  do {
    containerWidth = prompt("Pick a number between 1-100 for grid width");
  } while (containerWidth > 100 || containerWidth < 1);
  removeChildren();
  createNewGrid(containerWidth);
};

function removeChildren() {
  let child = container.lastElementChild; 
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  };
};

function createNewGrid(numCellsWide) {
  let totalGridElems = numCellsWide * numCellsWide;
  const cellWidth = defineBoxWidth(numCellsWide);

  // Create multiple divs
  for (let i = 0; i < totalGridElems; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.id = `${i}`;

    // Set box dimensions
    div.style.width = `${cellWidth}px`;
    div.style.height = `${cellWidth}px`;
    container.appendChild(div);
  };
  // Add color to boxes
  addHover();
  // center the container contents
  setContainerBuffer(numCellsWide);
};

function addHover() {
  const boxes = document.querySelectorAll("div.box");
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", highlight);
  });
};

function highlight(e) {
  let key = e.target.getAttribute("id");
  const boxNode = document.getElementById(`${key}`);

  // consider new button modes
  if (mode == "rainbow") {
    boxNode.style.backgroundColor = getRandomColor();
  } else if (mode == "shade") {
    // Identify the opacity of node
    let alpha = Number(boxNode.style.backgroundColor.replace(/^.*,(.+)\)/,'$1'));
    if (alpha < 1) {
      alpha += 0.1;
    }
    boxNode.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
  } else {
    boxNode.style.backgroundColor = "black";
  }
}

function setContainerBuffer(numCellsWide) {
  let boxWidth = defineBoxWidth(numCellsWide);
  let contWidthDifference = ogContainerWidth - (boxWidth * numCellsWide);
  container.style.padding = `${contWidthDifference/2}px`;
};

function defineBoxWidth(numCellsWide) {
  let boxWidth = Math.floor(ogContainerWidth/numCellsWide);
  return boxWidth;
};

// Create random color helper1
const getRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};
// Create random color helper2
const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};