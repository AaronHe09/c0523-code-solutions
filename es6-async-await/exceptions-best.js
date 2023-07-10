import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  const data = await fetch('foo', false);
  console.log(elapsed(), 'throwOnce:', data);
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  const data1 = await fetch('foo1', false);
  console.log(elapsed(), 'throwSeveral1:', data1);

  const data2 = await fetch('foo2', true);
  console.log(elapsed(), 'throwSeveral2:', data2);

  const data3 = await fetch('foo3', false);
  console.log(elapsed(), 'throwSeveral3:', data3);
}

async function throwChained() {
  const data1 = await fetch('foo-chain', true);
  console.log(elapsed(), 'throwChained1:', data1);

  const data2 = await fetch(data1, true);
  console.log(elapsed(), 'throwChained2:', data2);

  const data3 = await fetch(data2, true);
  console.log(elapsed(), 'throwChained3:', data3);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.log(elapsed(), 'throw Rejected:', error.message);
}
