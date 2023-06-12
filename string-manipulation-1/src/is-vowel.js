/* exported isVowel */
function isVowel(char) {
  const vowel = ['a', 'e', 'i', 'o', 'u', 'y', 'w'];

  if (vowel.find((e) => e === char.toLowerCase()) === undefined) {
    return false;
  } else {
    return true;
  }
}
