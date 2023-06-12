/* exported reverse */
function reverse(array) {
  const newArray = [];

  while (array.length >= 1) {
    newArray.push(array.pop());
  }
  return newArray;
}
