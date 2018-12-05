const express = require('express');
const app = express();

app.get('/api/campgrounds', (req, res) => {
  console.log(req.url);

  res.json([
    { name: 'Trout Creek Campground' },
    { name: 'House Rock Campground' }
  ]);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});