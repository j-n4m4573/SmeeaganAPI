const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

mongoose.connect('mongodb://localhost/SmeeaganAPI');
