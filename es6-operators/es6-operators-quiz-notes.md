# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The logical AND operator returns true only if both operands are true, otherwise it returns false.
  the logical OR operator returns true if one of operands is true, otherwise it returns false.
  And operator can be used outside of if statement to prevent an error message
  Or operator can be used oustide of if statement to provide a default value if a value does not exist
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  evaulating an expression from left to right and it applies because both operators evaulates from left to right
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  nullish coalesing operator returns the left side value if it is not null or undefined. otherwise it returns the right side value.
  it is different from or operator because it checks if the left side is truthy
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ternary operator is a shorthand for if/else statment. if/else statment can be written as a block of code while ternary cannot.
- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
  you would use it when accessing an objects property or calling a function
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

...array or ...object. can be spread inside of other arrays or objects.

- What data types can be spread into an array? Into an object?
  only array can be spread into an array while u can spread an object or array into an object.
- How does spread syntax differ from rest syntax?
  Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
