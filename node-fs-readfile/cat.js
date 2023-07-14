import { readFile } from 'node:fs/promises';

const fileArray = process.argv.slice(2);

async function print() {
  const array = await fileArray.map((file) => {
    try {
      const read = readFile(file, { encoding: 'utf8' });
      return read;
    } catch (error) {
      return error;
    }
  });

  const promises = await Promise.all(array);
  promises.forEach((promise) => console.log(promise));
}

print();
