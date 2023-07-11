import { writeFile, readFile } from 'node:fs/promises';

const file = await readFile('data.json', 'utf-8');
const parse = JSON.parse(file);

switch (process.argv[2]) {
  case 'read':
    try {
      const keys = Object.keys(parse.notes);
      keys.forEach((key) => console.log(`${key}: ${parse.notes[key]}`));
    } catch (error) {
      console.error(error);
    }
    break;
  case 'create':
    try {
      parse.notes[parse.nextId] = process.argv[3];
      parse.nextId = parse.nextId + 1;
      const string = JSON.stringify(parse);
      writeFile('data.json', string);
    } catch (error) {
      console.error(error);
    }
    break;
  case 'delete':
    try {
      delete parse.notes[process.argv[3]];
      const string = JSON.stringify(parse);
      writeFile('data.json', string);
    } catch (error) {
      console.error(error);
    }
    break;
  case 'update':
    try {
      parse.notes[process.argv[3]] = process.argv[4];
      const string = JSON.stringify(parse);
      writeFile('data.json', string);
    } catch (error) {
      console.error(error);
    }
    break;
}
