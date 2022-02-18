const express = require('express')
const { scrapeShopify } = require('../app')
const path = require('path');

const PORT = 8080;
const app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/query/:query', (req, res) => {
  scrapeShopify(req.params.query)
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});