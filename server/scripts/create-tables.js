const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/banana';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS campgrounds (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        forest VARCHAR(256),
        season VARCHAR(256),
        sites INTEGER,
        rvsites BOOLEAN
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });