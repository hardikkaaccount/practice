// Color Changer Project

const colorBox = document.getElementById('color-box');
const changeColorBtn = document.getElementById('change-color');
const colorCode = document.getElementById('color-code');

// Generate random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate random RGB color
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Update color display
function updateColor() {
  const colorType = Math.random() > 0.5 ? 'hex' : 'rgb';
  const color = colorType === 'hex' ? getRandomColor() : getRandomRGB();
  
  colorBox.style.backgroundColor = color;
  colorCode.textContent = color;
}

// Event listener for button
changeColorBtn.addEventListener('click', updateColor);

// Initialize with a random color
updateColor();

// Also change color on spacebar press
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    updateColor();
  }
});