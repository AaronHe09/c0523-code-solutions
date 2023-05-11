/* exported numVowels */
function numVowels(string) {
  if (string === '') {
    return 0;
  } else {
    return string.match(/[aeiou]/gi).length;
  }
}
