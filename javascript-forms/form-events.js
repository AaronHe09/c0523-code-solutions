const inputs = document.getElementById('contact-form').elements;

function handleFocus(event) {
  console.log('focus was fired');
  console.log('event name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur was fired');
  console.log('event name: ', event.target.name);
}

function handleInput(event) {
  console.log('event name: ', event.target.name);
  console.log('event value: ', event.target.value);
}

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].nodeName !== 'BUTTON') {
    inputs[i].addEventListener('focus', handleFocus);
    inputs[i].addEventListener('blur', handleBlur);
    inputs[i].addEventListener('input', handleInput);
  }
}
