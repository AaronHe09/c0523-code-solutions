/* exported unique */
function unique(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}
