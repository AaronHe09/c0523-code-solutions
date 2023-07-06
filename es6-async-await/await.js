import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function fetchOnce() {
  const data = await fetch('foo/bar.html');
  console.log(elapsed(), 'fetchOnce:', data);
}

async function fetchSeveral() {
  const data1 = await fetch('foo1/bar.html');
  console.log(elapsed(), 'fetchSeveral1:', data1);

  const data2 = await fetch('foo2/bar.html');
  console.log(elapsed(), 'fetchSeveral2:', data2);

  const data3 = await fetch('foo3/bar.html');
  console.log(elapsed(), 'fetchSeveral3:', data3);
}

async function fetchChained() {
  const data1 = await fetch('foo-chain/bar.html');
  console.log(elapsed(), 'fetchChained1:', data1);

  const data2 = await fetch(data1);
  console.log(elapsed(), 'fetchChained2:', data2);

  const data3 = await fetch(data2);
  console.log(elapsed(), 'fetchChained3:', data3);
}

await fetchOnce();
await fetchSeveral();
await fetchChained();
