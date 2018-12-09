const fs = require('fs');
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/banana';
const client = new Client(databaseUrl);

client.connect();

client.query(`
  SELECT = name, forest, season, sites, rvsites FROM campgrounds;
`)
  .then(results => {
    fs.writeFileSync(
      'campground.json',
      JSON.stringify(results.rows, true, 2)
    );
  },
  err => console.log(err)
  )
  .then(() => {
    client.end();
  })
  .catch(err => {
    console.log(err);
  });