/* exported pick */
function pick(source, key) {
  const object = {};

  for (let i = 0; i < key.length; i++) {
    if (source[key[i]] === undefined) {
      continue;
    } else {
      object[key[i]] = source[key[i]];
    }
  }
  return object;
}
