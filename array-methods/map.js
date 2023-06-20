const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const array = prices.map((p) => ({ price: p, salePrice: p / 2 }));
console.log(array);

const formatted = prices.map((p) => '$' + p.toFixed(2));
console.log(formatted);
