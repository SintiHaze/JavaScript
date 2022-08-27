// Select color picker
var picker = document.getElementById("colorPicker");
// Select size input
var heightEl = document.getElementById("inputHeight");
var widthEl = document.getElementById("inputWidth");
//
const table = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', function(evt) {
  evt.preventDefault()
  const height = heightEl.value;
  const width = widthEl.value;
  
  makeGrid(height, width);
});

function makeGrid(height, width) {
  const tableElement = document.createElement('table');
  for (let i = 0; i < height; i++) {
    const trElement = document.createElement('tr');
    for (let x = 0; x < width; x++) {
      trElement.appendChild(document.createElement('td'));
    }
    tableElement.appendChild(trElement);
  }
  table.innerHTML = '';
  table.appendChild(tableElement);

}

// Event listener to update color
let color = picker.value;

picker.onchange = function() {
  color = this.value;
}

// Function activated on user click
function respondToClick(event) {
  if (event.target.nodeName.toLowerCase() === 'td') {
    event.target.style.backgroundColor = color;
  }
}

table.addEventListener("click", respondToClick);

