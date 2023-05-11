/* exported getValues */
function getValues(object) {
  const array = [];

  for (const value in object) {
    array.push(object[value]);
  }
  return array;
}
