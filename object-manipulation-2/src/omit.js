/* exported omit */
function omit(source, key) {
  const obj = {};

  for (const prop in source) {
    if (key.includes(prop) === false) {
      obj[prop] = source[prop];
    }
  }
  return obj;
}
