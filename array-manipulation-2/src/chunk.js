/* exported chunk */
function chunk(array, size) {
  const newArray = [];
  let tempArray = [];
  let n = 1;

  for (let i = 0; i < array.length; i++) {
    if (n < size) {
      tempArray.push(array[i]);
      n++;
    } else if (n === size) {
      tempArray.push(array[i]);
      newArray.push(tempArray);
      tempArray = [];
      n = 1;
    }
  }

  if (tempArray.length > 0) {
    newArray.push(tempArray);
  }
  return newArray;
}
