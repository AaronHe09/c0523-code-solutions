const $countdown = document.querySelector('.countdown-display');
let counter = 3;
const interval = setInterval(function () {
  if (counter >= 1) {
    $countdown.textContent = counter;
    counter--;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}, 1000);
