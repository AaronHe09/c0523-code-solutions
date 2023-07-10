import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const argv = process.argv[3];
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[4]);

switch (argv) {
  case 'plus':
    console.log('result: ', add(a, b));
    break;
  case 'minus':
    console.log('result: ', subtract(a, b));
    break;
  case 'over':
    console.log('result: ', divide(a, b));
    break;
  case 'times':
    console.log('result: ', multiply(a, b));
    break;
}
