/* exported reverseWords */
function reverseWords(string) {
  const array = string.split(' ');
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].split('').reverse().join(''));
  }
  return newArray.join(' ');
}
