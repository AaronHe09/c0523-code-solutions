const student = {
  firstName: 'Aaron',
  lastName: 'He',
  age: 21,
};
const vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2013,
};
const pet = {
  name: 'Rex',
  type: 'Poodle',
};

const fullName = `${student.firstName} ${student.lastName}`;
console.log('Value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Frac Operator';
console.log('Value of livesInIrvine: ', student.livesInIrvine);
console.log('Value of previousOccupation: ', student.previousOccupation);

vehicle.color = 'Silver';
vehicle.isConvertible = false;
console.log('Value of color: ', vehicle.color);
console.log('Value of isConvertible: ', vehicle.isConvertible);
console.log('Value of vehicle: ', vehicle);

delete pet.name;
delete pet.type;
console.log('Value of pet: ', pet);
