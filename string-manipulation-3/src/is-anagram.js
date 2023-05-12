/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const array1 = firstString.split('').filter((word) => word !== ' ');
  const array2 = secondString.split('').filter((word) => word !== ' ');

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1) {
      return false;
    } else {
      const index = array2.indexOf(array1[i]);
      array2.splice(index, 1);
      continue;
    }
  }
  return true;
}
