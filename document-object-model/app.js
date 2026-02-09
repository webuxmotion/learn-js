console.log("app.js running");

let colorIndex = 0;

const COLORS = ["#222529", "#272A36", "#35383F"];

const updateColor = () => {
  if (colorIndex >= COLORS.length) {
    colorIndex = 0;
  }

  const color = COLORS[colorIndex];

  document.body.style.background = color;

  colorIndex++;
};

setInterval(updateColor, 1000 * 60);

document.body.style.transition = "300ms";