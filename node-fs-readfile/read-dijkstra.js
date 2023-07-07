import { readFile } from 'node:fs/promises';

async function read() {
  try {
    const data = await readFile('./dijkstra.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

read();
