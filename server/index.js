const express = require('express')
const { scrapeShopify } = require('../app')
const path = require('path');

const PORT = 3000;
const app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/s', (req, res) => {
  scrapeShopify()
  res.json({
    message: 'scraping'
  })
})

app.get('/query/:query', (req, res) => {
  console.log(req.params.query)
})

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});

app.listen(8080);