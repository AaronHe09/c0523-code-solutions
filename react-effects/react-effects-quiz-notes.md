# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  A component is mounted when react renders it for the first time and builds the inital DOM from the components
- What is a React Effect?
  useEffect lets you execute a piece of code during certain parts of a components lifecycle.
- When should you use an Effect and when should you not use an Effect?
  You should use an Effect when synchronizing with external systems and you shouldn't be using an effect with write pure functions
- When do Effects run?
  Effects will run after the componenet is mounted or unmounted, when a state is changed, and after every render depending on what you pass as your second argument.
- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  Effect dependencies are the states you use inside of the useEffect function and you can declare them by passing in an array of states as the second argument to useEffect
- Why would you want to clean up from an Effect?
  it allows us to stop side effects that no longer need to be executed before our component
- How do you clean up from an Effect?
  with a return arrow function
- When does the cleanup function run?
  when the component unmounts

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
