const lightBulb = document.querySelector('.light-bulb');
const container = document.querySelector('.container');

function lightSwitch(e) {
  if (e.target.className === 'light-bulb light') {
    lightBulb.className = 'light-bulb dark';
    container.className = 'container background-dark';
  } else {
    lightBulb.className = 'light-bulb light';
    container.className = 'container background-light';
  }
}

lightBulb.addEventListener('click', lightSwitch);
