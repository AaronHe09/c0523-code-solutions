/* exported isLowerCased */
function isLowerCased(word) {
  let bool = true;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      continue;
    } else {
      bool = false;
      break;
    }
  }
  return bool;
}
