# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  it returns the value of the element being targeted
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  bubbling allows event listener to capture the targeted event
- What DOM element property tells you what type of element it is?
  event.target.tagName
- What does the `element.closest()` method take as its argument and what does it return?
  it takes a class or id as the argument and returns the first element that matches the argument
- How can you remove an element from the DOM?
  .remove method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by adding the eventlistener to the parent element have all other elements nested inside the parent element.

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
