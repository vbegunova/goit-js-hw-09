import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonStart = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');

const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let targetDate;
buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    targetDate = selectedDates[0].getTime();
    if (targetDate > Date.now()) {
      buttonStart.disabled = false;
    } else {
      Notify.warning('Please choose a date in the future');
      buttonStart.disabled = true;
    }
  },
};

flatpickr(input, options);

buttonStart.addEventListener('click', () => {
  buttonStart.disabled = true;
  input.disabled = true;

  const intervalId = setInterval(() => {
    const currentDate = Date.now();
    const leftTime = targetDate - currentDate;

    const date = convertMs(leftTime);
    days.innerHTML = addLeadingZero(date.days);
    hours.innerHTML = addLeadingZero(date.hours);
    minutes.innerHTML = addLeadingZero(date.minutes);
    seconds.innerHTML = addLeadingZero(date.seconds);

    if (leftTime <= 1000) {
      clearInterval(intervalId);
    }
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
