import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

app.use(express.json());

// gets a list of notes in an array
app.get('/api/notes', async (req, res) => {
  try {
    const data = await fetchFile();
    const array = [];

    for (const note in data.notes) {
      array.push(data.notes[note]);
    }
    res.status(200).json(array);
  } catch (error) {
    res.status(500).json({ error: 'Error reading file' });
    console.error(error);
  }
});

// gets a single note by id
app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await fetchFile();
    const id = req.params.id;

    if (idErrorHandler(id, data, res)) return;
    res.status(200).json(data.notes[id]);
  } catch (error) {
    res.status(500).json({ error: 'Error reading file' });
    console.log(error);
  }
});

// post a new note
app.post('/api/notes', async (req, res) => {
  try {
    const data = await fetchFile();
    const body = req.body;
    const id = data.nextId;

    if (Object.keys(body).length === 0) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }

    try {
      body.id = data.nextId;
      data.notes[id] = body;
      data.nextId++;
      await writeFileDataJson(data);
      res.status(201).json(body);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error reading file' });
    console.error(error);
  }
});

// delete note
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await fetchFile();
    const id = req.params.id;

    if (idErrorHandler(id, data, res)) return;
    try {
      delete data.notes[id];
      await writeFileDataJson(data);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error reading file' });
    console.error(error);
  }
});

// replace a note
app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = await fetchFile();
    const id = req.params.id;
    const body = req.body;

    if (idErrorHandler(id, data, res)) return;
    try {
      body.id = id;
      data.notes[id] = body;
      await writeFileDataJson(data);
      res.status(200).json(body);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error reading file' });
    console.error(error);
  }
});

app.listen(8080, () => {
  console.log('listening to 8080');
});

// parses data.json and returns it
async function fetchFile() {
  const notes = await readFile('data.json', 'utf8');
  const notesParsed = JSON.parse(notes);
  return notesParsed;
}

// checks to see if id isNaN, negative or if the id note exists
function idErrorHandler(id, data, res) {
  if (isNaN(id)) {
    res.status(400).json({ error: 'not a number' });
    return true;
  }
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive number' });
    return true;
  }
  if (!data.notes[id]) {
    res.status(404).json(`cannot find note with id ${id}`);
    return true;
  }
}

async function writeFileDataJson(data) {
  await writeFile('data.json', JSON.stringify(data));
}
