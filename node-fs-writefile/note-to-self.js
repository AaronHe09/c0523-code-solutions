import { writeFile } from 'node:fs/promises';

const argv = process.argv[2] + '\n';

try {
  await writeFile('note.txt', argv);
} catch (error) {
  console.error(error);
}
