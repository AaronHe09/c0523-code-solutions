/* exported ransomCase */
function ransomCase(string) {
  const newString = string.toLowerCase();
  let word = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      word += newString[i];
    } else {
      word += newString[i].toUpperCase();
    }
  }
  return word;
}
