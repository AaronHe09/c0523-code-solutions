import { writeFile } from 'node:fs/promises';

const randomNum = Math.random().toString() + '\n';

try {
  await writeFile('random.txt', randomNum);
} catch (error) {
  console.error(error);
}
