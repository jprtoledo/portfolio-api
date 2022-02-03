const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.send('olá');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})