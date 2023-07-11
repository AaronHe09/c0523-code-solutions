import { writeFile, readFile } from 'node:fs/promises';

const argv = process.argv.slice(2);

try {
  const string = await readFile(argv[0], 'utf8');
  await writeFile(argv[1], string);
} catch (error) {
  console.error(error);
}
