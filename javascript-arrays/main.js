const colors = ['red', 'white', 'blue'];
const students = ['bob', 'joe', 'peter', 'jimmy'];
const numberOfStudents = students.length;
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];

for (let i = 0; i < colors.length; i++) {
  console.log(`values of colors[${i}]`, colors[i]);
}

console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);
colors[2] = 'green';
console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);
console.log('Value of colors: ', colors);

console.log(`There are ${numberOfStudents} students in the class.`);
console.log(`The last student in the array is ${lastStudent}.`);
console.log('Value of students: ', students);
