/* exported zip */
function zip(first, second) {
  let length = 0;
  const newArray = [];

  if (first.length > second.length) {
    length = second.length;
  } else {
    length = first.length;
  }

  for (let i = 0; i < length; i++) {
    const array = [];

    array.push(first[i]);
    array.push(second[i]);
    newArray.push(array);
  }
  return newArray;
}
