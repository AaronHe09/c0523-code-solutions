/* exported capitalizeWords */
function capitalizeWords(string) {
  const array = string.split(' ');
  let newString = '';

  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    newString += word[0].toUpperCase() + word.slice(1).toLowerCase();

    if (i < array.length - 1) {
      newString += ' ';
    }
  }
  return newString;
}
