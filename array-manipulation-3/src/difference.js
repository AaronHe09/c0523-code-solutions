/* exported difference */
function difference(first, second) {
  const one = first.filter((v) => second.includes(v) === false);
  const two = second.filter((v) => first.includes(v) === false);
  return one.concat(two);
}
