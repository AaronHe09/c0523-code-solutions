/* exported filterOutNulls */
function filterOutNulls(values) {
  const newArray = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] === null) {
      continue;
    } else {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
