const express = require('express');
const app = express();
const api = require('./routes/apiRoutes');
const scraper = require('./routes/scraperRoutes');

app.use('/api', api);
app.use('/scraper', scraper);

// On écoute le port 3000
app.listen(3200, function () {
  console.log('Example app listening on port 3200!');
});