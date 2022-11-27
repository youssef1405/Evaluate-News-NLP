const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
  // res.sendFile(path.resolve('src/client/views/index.html'));
});

app.get('/test', (req, res) => {
  res.send(mockAPIResponse);
});

app.listen(3000, () => {
  console.log('App listening on port 3000...');
});
