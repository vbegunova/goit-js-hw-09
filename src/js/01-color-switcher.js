function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

start.addEventListener('click', () => {
  start.setAttribute('disabled', 'disabled');
  stop.removeAttribute('disabled');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stop.addEventListener('click', () => {
  clearInterval(timerId);
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', 'disabled');
});
