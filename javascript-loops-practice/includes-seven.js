/* exported includesSeven */
function includesSeven(array) {
  let bool = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      bool = true;
    } else {
      continue;
    }
  }
  return bool;
}
