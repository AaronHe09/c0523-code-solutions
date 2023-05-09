function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('value of convertMinutesToSeeconds: ', convertMinutesToSeconds(5));

function greet(name) {
  return `Hey, ${name}`;
}
console.log('value of greet: ', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('value of Getarea: ', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log(
  'value of getFirstName: ',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  return array.at(-1);
}
console.log(
  'value of getLastElement: ',
  getLastElement(['propane', 'and', 'propane', 'acessories'])
);
