# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  The basic operations on data in a SQL table are often referred to as CRUD operations, which stands for Create, Read, Update, and Delete.
- How do you add a row to a SQL table?
  INSERT INTO (name of table) (ATTRIBUTES)
  VALUES (value of attributes)
- How do you add multiple rows to a SQL table at once?
  by specifying more than one tuple of values, separated by commas.
- How do you update rows in a database table?
  UPDATE (name of table)
  SET (attribute) = value
- How do you delete rows from a database table?
  DELETE
  from (name of table)
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  so you dont update or delete the entire table
- How do you accidentally delete or update all rows in a table?
  without adding where clause
- How do you get back the modified row without a separate `select` statement?
  RETURNING clause

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
