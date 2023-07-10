import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req);
  res.send('testing');
});
app.listen(8080, () => console.log('server is listening'));
