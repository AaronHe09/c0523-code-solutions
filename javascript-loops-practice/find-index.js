/* exported findIndex */
function findIndex(array, value) {
  let num = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      num = i;
      break;
    } else {
      continue;
    }
  }
  return num;
}
