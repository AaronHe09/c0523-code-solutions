# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async function declaration creates a binding of a new async function to a given name
  The await operator is used to wait for a Promise and get its fulfillment value
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async/await is easier to read compared to promises
  async/await uses try catch blocks instead of .then .catch
- When do you use `async`?
  when you want to make a function into a async function
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  you use await when the function is async. Do not use it in a sync function because it does nothing
- How do you handle errors with `await`?
  with an if statement or .catch method
- What do `try`, `catch` and `throw` do? When do you use them?
  The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed.
  The throw statement allows you to create a custom error.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  if you forget await on a promise, the promise never settles. Nothing will be able to handle the rejection
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await. its much cleaner to read and easier to code with.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
