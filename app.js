const express = require('express')
const app = express()
const mongoose = require('mongoose');
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/SmeeaganAPI');

var router = express.Router();

app.use('/api', router);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(3000, () => {
//   console.log('App listening on port 3000!')
// })





app.listen(port);
console.log('Server listening on port ' + port);
