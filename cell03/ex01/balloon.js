let balloon = document.querySelector('.balloon');
let colors = ['red', 'green', 'blue'];
let currentColorIndex = 0;

balloon.onclick = function() {
  let currentSize = parseInt(window.getComputedStyle(balloon).getPropertyValue('width'));
  if (currentSize < 420) {
    balloon.style.width = (currentSize + 10) + 'px';
    balloon.style.height = (currentSize + 10) + 'px';
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[currentColorIndex];
  } else {
    balloon.style.width = '200px';
    balloon.style.height = '200px';
    balloon.style.backgroundColor = 'red';
    currentColorIndex = 0;
  }
};
