let rgb1 = [];
let rgb2 = [];
let rgb3 = [];

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  do {
    rgb1 = `${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`;
  } while (rgb1 > 256);
  do {
    rgb2 = `${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`;
  } while (rgb2 > 256);
  do {
    rgb3 = `${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`;
  } while (rgb3 > 256);
  const rgb = `(${rgb1},${rgb2},${rgb3})`;
  color.textContent = rgb;
  document.body.style.backgroundColor = `rgb${rgb}`;
});

color.addEventListener('click', function (event) {
  navigator.clipboard.writeText(event.target.innerHTML);
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
