import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;
  let firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountPromises = Number(amount.value);

  if (firstDelay < 0 || delayStep < 0 || amountPromises <= 0) {
    Notify.warning('Please, fill the fields with valid values');
    return;
  }

  for (let i = 1; i <= amountPromises; i++) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 5000,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          timeout: 5000,
        });
      });
    firstDelay += delayStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
