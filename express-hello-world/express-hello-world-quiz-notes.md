# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Express middleware are functions that come into play after the server receives the request and before the response is sent to the client. The functions have access to the request object and the response object
- What is Express middleware useful for?
  Making changes to the request and the response objects, ending the request-response cycle, and calling the next middleware function in the stack.
- How do you mount a middleware with an Express application?
  the use method with an optional path and a callback function
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  request, response, next, and error

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
