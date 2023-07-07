import { readFile } from 'node:fs/promises';

const fileArray = process.argv.slice(2);

async function print() {
  await Promise.all(
    fileArray.map(async (file) => {
      try {
        const data = await readFile(`./${file}`, { encoding: 'utf8' });
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    })
  );
}

print();
