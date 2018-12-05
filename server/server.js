const express = require('express');
const app = express();
const shortid = require('shortid');
const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/campgrounds.json', 'utf8');
  return JSON.parse(data);
}

function saveData(campgrounds) {
  const json = JSON.stringify(campgrounds, true, 2);
  fs.writeFileSync('./data/campgrounds.json', json);
}

app.use(express.json());

app.get('/api/campgrounds', (req, res) => {
  const campgrounds = readData();
  res.json(campgrounds);
});

app.post('/api/campgrounds', (req, res) => {

  const campgrounds = readData();
  const campground = req.body;
  campground.id = shortid.generate();
  campgrounds.push(req.body);
  saveData(campgrounds);

  res.json(campground);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});