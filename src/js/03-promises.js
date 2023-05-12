import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amountProm = document.querySelector('input[name="amount"]');
const start = document.querySelector('button[type="submit"');

start.addEventListener('click', onClick);
let stepDelay;
let counter;

function onClick(evt) {
  evt.preventDefault();

  const delay = Number(firstDelay.value);
  const step = Number(delayStep.value);
  const amount = Number(amountProm.value);
  stepDelay = 0;
  counter = 0;

  if (delay < 0 || step < 0 || amount <= 0) {
    alert('Please, fill the fields with valid values');
  } else {
    if (amount) {
      start.disabled = true;
    }

    setTimeout(() => {
      stepDelay += delay;
      counter += 1;
      createPromise(counter, stepDelay);

      if (counter === amount) {
        start.disabled = false;
        return;
      }

      const intervalId = setInterval(() => {
        stepDelay += step;
        counter += 1;

        if (counter === amount) {
          start.disabled = false;
          clearInterval(intervalId);
        }
        createPromise(counter, stepDelay);
      }, step);
    }, delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  })
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
        timeout: 10000,
      });
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
        timeout: 10000,
      });
    });
}
