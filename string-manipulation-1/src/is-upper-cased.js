/* exported isUpperCased */
function isUpperCased(word) {
  let bool = true;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      continue;
    } else {
      bool = false;
      break;
    }
  }
  return bool;
}
