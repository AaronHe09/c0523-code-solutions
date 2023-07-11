import { readFile } from 'node:fs/promises';

async function read() {
  try {
    const file = `./${process.argv[2]}`;
    const data = await readFile(file, { encoding: 'utf8' });
    console.log(data);
  } catch (error) {
    console.log(error.messsage);
  }
}

read();
