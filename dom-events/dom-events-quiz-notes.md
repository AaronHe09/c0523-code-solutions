# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  for debugging and to verify the values of variables and functions
- What is the purpose of events and event handling?
  events help identify user input and will execute functions based on the event
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addeventlistener
- What is a callback function?
  a function passed within another function as an argument
- What object is passed into an event listener callback when the event fires?
  event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it shows what element addeventlistener is being applied to. you can check by console.logging event obejct
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  first function will not execute until the addeventlistener triggers while second function executes right away.

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
