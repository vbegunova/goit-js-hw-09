function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
stop.disabled = true;

start.addEventListener('click', () => {
  start.disabled = true;
  stop.disabled = false;
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stop.addEventListener('click', () => {
  clearInterval(timerId);
  start.disabled = false;
  stop.disabled = true;
});
