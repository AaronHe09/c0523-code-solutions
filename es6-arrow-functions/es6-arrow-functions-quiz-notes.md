# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  () => expression
  () => {return expression}
  e => expression
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  it will automatically return the expression without having to type return
- When using _concise body syntax_, how do you return an object literal?
  you need to wrap the object literal in parentheses
- In the expression
  `js
    foo(() => 42);
    `
  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?
    0
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    an arrow function
- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function
    (y) => {
    console.log(`4y = ${4 * y}`);
    }
  - How many arguments does the arrow function take?
    1
  - What value does it return?
    none
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    arrow function
  - When does the arrow function's code get executed?
    when bar is called
- How does the value of `this` differ between standard functions and arrow functions?
  value of this is defined by the calling object in a standard function and value of this is taken from the lexical scope in an arrow function

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
