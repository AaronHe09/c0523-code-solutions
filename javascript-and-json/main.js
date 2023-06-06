const books = [
  { isbn: '1234567', title: 'book1', author: 'author 1' },
  { isbn: '1123456', title: 'book2', author: 'author 2' },
  { isbn: '1223456', title: 'book3', author: 'author 3' },
];
const booksJson = JSON.stringify(books);
const student = '{"id":"12345", "student":"pablo"}';
const studentParse = JSON.parse(student);

console.log('value of books: ', books);
console.log('type of books: ', typeof books);

console.log('value of booksJson: ', booksJson);
console.log('type of booksJson: ', typeof booksJson);

console.log('value of student:  ', student);
console.log('typoe of student: ', typeof student);

console.log('value of studentParse: ', studentParse);
console.log('type of studentParse: ', typeof studentParse);
