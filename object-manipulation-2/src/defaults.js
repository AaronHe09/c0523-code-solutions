/* exported defaults */
function defaults(target, source) {
  for (const prop in source) {
    if (prop in target === false) {
      target[prop] = source[prop];
    }
  }
  return target;
}
