/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const array = string.split('');
  const letter1 = string[firstIndex];
  const letter2 = string[secondIndex];

  array[firstIndex] = letter2;
  array[secondIndex] = letter1;

  return array.join('');
}
