/* exported reverseWord */
function reverseWord(word) {
  let i = word.length - 1;
  let newWord = '';

  while (i >= 0) {
    newWord += word[i];
    i--;
  }
  return newWord;
}
