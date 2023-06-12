/* exported titleCase */
function titleCase(string) {
  const conjunctions = ['for', 'and', 'nor', 'but', 'or', 'yet', 'so', 'the'];
  const prepositions = [
    'across',
    'after',
    'at',
    'before',
    'between',
    'by',
    'during',
    'from',
    'in',
    'into',
    'of',
    'on',
    'to',
    'through',
    'under',
    'with',
    'without',
  ];
  const array = string.split(' ');
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i].toLowerCase();

    if (i === 0) {
      if (word === 'javascript:') {
        newArray.push('JavaScript:');

        if (array[i + 1].includes('-') === true) {
          const splitWord = array[i + 1].split('-');
          const capWord1 =
            splitWord[0].charAt(0).toUpperCase() +
            splitWord[0].slice(1).toLowerCase();
          const capWord2 =
            splitWord[1].charAt(0).toUpperCase() +
            splitWord[1].slice(1).toLowerCase();
          const combinedWord = capWord1 + '-' + capWord2;
          newArray.push(combinedWord);
        } else {
          const cappedWord =
            array[i + 1].charAt(0).toUpperCase() +
            array[i + 1].slice(1).toLowerCase();
          newArray.push(cappedWord);
        }
        i++;
        continue;
      } else {
        const capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        newArray.push(capWord);
        continue;
      }
    }

    if (word === 'javascript') {
      newArray.push('JavaScript');
      continue;
    } else if (word === 'api') {
      newArray.push('API');
      continue;
    }

    if (
      conjunctions.includes(word) === true ||
      prepositions.includes(word) === true
    ) {
      newArray.push(word.toLowerCase());
    } else if (word.includes(':') === true || word === 'javascript:') {
      if (word === 'javascript:') {
        newArray.push('JavaScript:');
      } else {
        const capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        newArray.push(capWord);
      }

      if (array[i + 1].includes('-') === true) {
        const splitWord = array[i + 1].split('-');
        const capWord1 =
          splitWord[0].charAt(0).toUpperCase() +
          splitWord[0].slice(1).toLowerCase();
        const capWord2 =
          splitWord[1].charAt(0).toUpperCase() +
          splitWord[1].slice(1).toLowerCase();
        const combinedWord = capWord1 + '-' + capWord2;
        newArray.push(combinedWord);
      } else {
        const cappedWord =
          array[i + 1].charAt(0).toUpperCase() +
          array[i + 1].slice(1).toLowerCase();
        newArray.push(cappedWord);
      }
      i++;
    } else if (word.includes('-')) {
      const splitword = word.split('-');
      const capWord1 =
        splitword[0].charAt(0).toUpperCase() +
        splitword[0].slice(1).toLowerCase();
      const capWord2 =
        splitword[1].charAt(0).toUpperCase() +
        splitword[1].slice(1).toLowerCase();
      const combinedWord = capWord1 + '-' + capWord2;
      newArray.push(combinedWord);
    } else {
      const capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
      newArray.push(capWord);
    }
  }
  newArray = newArray.join(' ');
  return newArray;
}
