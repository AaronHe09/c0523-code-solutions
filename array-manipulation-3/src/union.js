/* exported union */
function union(first, second) {
  const two = second.filter((v) => first.includes(v) === false);
  return first.concat(two);
}
