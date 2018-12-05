const express = require('express');
const app = express();
const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/campgrounds.json', 'utf8');
  return JSON.parse(data);
}

// app.use(express.json());

app.get('/api/campgrounds', (req, res) => {
  const campgrounds = readData();
  res.json(campgrounds);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});