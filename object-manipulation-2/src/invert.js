/* exported invert */
function invert(source) {
  const obj = {};

  for (const prop in source) {
    obj[source[prop]] = prop;
  }
  return obj;
}
