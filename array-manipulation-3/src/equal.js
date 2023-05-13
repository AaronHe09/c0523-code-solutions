/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  if (typeof first[0] === 'object') {
    let string = '';
    const string2 = '';

    for (let i = 0; i < first.length; i++) {
      for (const prop in first) {
        string += prop.toString();
        string += first[prop].toString();
      }
      for (let i = 0; i < second.length; i++) {
        for (const prop in first) {
          string += prop.toString();
          string += first[prop].toString();
        }
      }
    }
    if (string === string2) {
      return true;
    } else {
      return false;
    }
  } else if (first.toString() === second.toString()) {
    return true;
  } else {
    return false;
  }
}
