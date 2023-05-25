# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  it returns the element that was interacted with
- What is the affect of setting an element to `display: none`?
  the element is completely removed from the html
- What does the `element.matches()` method take as an argument and what does it return?
  it takes a selector and returns truth or false
- How can you retrieve the value of an element's attribute?
  getAttribute method
- At what steps of the solution would it be helpful to log things to the console?
  everytime you need to see the return value of something
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  you would add eventlistener to all of the child elements instead of just the parent
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  you could create an object with the stored images and text contents and append the object property that matches e.target.getAttribute('data-view')

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
