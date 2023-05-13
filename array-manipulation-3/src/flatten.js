/* exported flatten */
function flatten(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let p = 0; p < array[i].length; p++) {
        newArray.push(array[i][p]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
