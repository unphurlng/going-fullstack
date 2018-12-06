const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));

// FROM DAY 1
// function readData() {
//   const data = fs.readFileSync('./data/campgrounds.json', 'utf8');
//   return JSON.parse(data);
// }

// function saveData(campgrounds) {
//   const json = JSON.stringify(campgrounds, true, 2);
//   fs.writeFileSync('./data/campgrounds.json', json);
// }

app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgress://localhost:5432/banana';
const client = new Client(dbUrl);
client.connect();

app.get('/api/campgrounds', (req, res) => {
  client.query(`
    SELECT id, name FROM campgrounds;
  `)
    .then(result => {
      res.json(result.rows);
    });

  // FROM DAY 1  
  // const campgrounds = readData();
  // if(req.query.name) {
  //   const match = req.query.name.toLowerCase();
  //   const filtered = campgrounds.filter(c => {
  //     return c.name.toLowerCase().startsWith(match);
  //   });
  //   res.json(filtered);
  // }
  // else {
  //   res.json(campgrounds);
  // }
});

app.post('/api/campgrounds', (req, res) => {

  // FROM DAY 1
  // const campgrounds = readData();
  // const campground = req.body;
  // campground.id = shortid.generate();
  // campgrounds.push(req.body);
  // saveData(campgrounds);

  res.json(campground);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});