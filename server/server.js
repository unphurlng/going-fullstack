const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));

app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgress://localhost:5432/banana';
const client = new Client(dbUrl);
client.connect();

app.get('/api/campgrounds', (req, res) => {
  client.query(`
    SELECT id, name, forest, season, sites FROM campgrounds;
  `)
    .then(result => {
      res.json(result.rows);
    });

  app.get('/api/campgrounds/:id', (req, res) => {
    client.query(`
      SELECT * FROM campgrounds WHERE id = $1;
    `,
    [req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  });
});

app.post('/api/campgrounds', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO campgrounds (name, forest, season, sites)
    VALUES($1, $2, $3, $4)
    RETURNING id, name, forest, season, sites;
  `,
  [body.name, body.forest, body.season, body.sites])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});