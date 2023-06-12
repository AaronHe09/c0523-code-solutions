/* exported getStudentNames */
function getStudentNames(stduents) {
  const newArray = [];

  for (let i = 0; i < stduents.length; i++) {
    newArray.push(stduents[i].name);
  }
  return newArray;
}
