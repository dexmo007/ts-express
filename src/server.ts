import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.send(JSON.stringify({ hello: 'world' }));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
