/* exported intersection */
function intersection(first, second) {
  const one = first.filter((v) => second.includes(v) === true);
  return one;
}
