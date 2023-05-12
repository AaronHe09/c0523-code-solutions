/* exported isPalindromic */
function isPalindromic(string) {
  const newString = string
    .split('')
    .filter((word) => word !== ' ')
    .join('');

  let array = string.split('').reverse();
  array = array.filter((word) => word !== ' ');
  array = array.join('');

  if (newString === array) {
    return true;
  } else {
    return false;
  }
}
