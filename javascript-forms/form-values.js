const form = document.getElementById('contact-form');
const formValues = {};

form.addEventListener('submit', function (e) {
  const formElements = document.getElementById('contact-form').elements;

  formValues.name = formElements[0].value;
  formValues.email = formElements[1].value;
  formValues.message = formElements[2].value;
  console.log(formValues);
  e.preventDefault();
  form.reset();
});
