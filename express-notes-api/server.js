import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

app.use(express.json());

// gets a list of notes in an array
app.get('/api/notes', async (req, res) => {
  const data = await fetchFile();
  const array = [];

  for (const note in data.notes) {
    array.push(data.notes[note]);
  }
  res.status(200).send(array);
});

// gets a single note by id
app.get('/api/notes/:id', async (req, res) => {
  const data = await fetchFile();
  const id = req.params.id;

  idErrorHandler(id, data, res);
  res.status(200).send(data.notes[id]);
});

// post a new note
app.post('/api/notes', async (req, res) => {
  const data = await fetchFile();
  const body = req.body;
  const id = data.nextId;

  if (Object.keys(body).length === 0) {
    res.status(400).send({ error: 'content is a required field' });
    return;
  }

  try {
    body.id = data.nextId;
    data.notes[id] = body;
    data.nextId++;
    await writeFile('data.json', JSON.stringify(data));
    res.status(201).send(body);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An unexpected error occurred.' });
  }
});

// delete note
app.delete('/api/notes/:id', async (req, res) => {
  const data = await fetchFile();
  const id = req.params.id;

  idErrorHandler(id, data, res);
  try {
    delete data.notes[id];
    await writeFile('data.json', JSON.stringify(data));
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An unexpected error occurred.' });
  }
});

// replace a note
app.put('/api/notes/:id', async (req, res) => {
  const data = await fetchFile();
  const id = req.params.id;
  const body = req.body;

  idErrorHandler(id, data, res);
  try {
    body.id = id;
    data.notes[id] = body;
    await writeFile('data.json', JSON.stringify(data));
    res.status(200).send(body);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('listening to 8080');
});

// parses data.json and returns it
async function fetchFile() {
  try {
    const notes = await readFile('data.json', 'utf8');
    const notesParsed = JSON.parse(notes);
    return notesParsed;
  } catch (error) {
    console.error(error);
  }
}

// checks to see if id isNaN, negative or if the id note exists
function idErrorHandler(id, data, res) {
  if (isNaN(id)) {
    res.status(400).send({ error: 'not a number' });
    return;
  }
  if (id < 0) {
    res.status(400).send({ error: 'id must be a positive number' });
    return;
  }
  if (!data.notes[id]) {
    res.status(404).send(`cannot find note with id ${id}`);
  }
}
