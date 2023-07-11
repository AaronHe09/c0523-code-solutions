import express from 'express';

const app = express();
const grades = {};
let nextId = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];

  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const body = req.body;

  body.id = nextId;
  grades[nextId] = body;
  nextId++;
  res.status(201).send(body);
});

app.listen(8080, () => {
  console.log('listening to 8080');
});
