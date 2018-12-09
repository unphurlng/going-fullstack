const express = require('express');
const app = express();
const morgan = require('morgan');
const campgrounds = require('./lib/routes/campgrounds');
const forests = require('./lib/routes/forests');
const client = require('./db-client');

app.use(morgan('dev'));
app.use(express.json());


// Connect to pg
// const Client = pg.Client;
// const dbUrl = 'postgress://localhost:5432/banana';
// const client = new Client(dbUrl);
// client.connect();
// End connect to pg

// app.get('/api/campgrounds', (req, res) => {
//   client.query(`
//     SELECT id, name, forest, sites, rvwaste
//     FROM campgrounds;
//   `)
//     .then(result => {
//       res.json(result.rows[0]);
//     });
// });

// app.get('/api/campgrounds/:id', (req, res) => {
//   client.query(`
//     SELECT * FROM campgrounds WHERE id = $1;
//   `,
//   [req.params.id])
//     .then(result => {
//       res.json(result.rows[0]);
//     });
// });

// app.post('/api/campgrounds', (req, res) => {
//   const body = req.body;

//   client.query(`
//     INSERT INTO campgrounds (name, forest, sites, rvwaste)
//     VALUES($1, $2, $3, $4)
//     RETURNING id, name, forest, sites, rvwaste;
//   `,
//   [body.name, body.forest, body.sites, body.rvwaste])
//     .then(result => {
//       res.json(result.rows[0]);
//     });
// });

app.use('/api/forests', forests);
app.use('/api/campgrounds', campgrounds);
// const app = require('./lib/app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
