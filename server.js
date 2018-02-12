const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
var routes = require('./routes.js');

app.use(cors())
app.use('/app', express.static('app'))
app.use(bodyParser.json())
app.use(routes); // define routes last always



app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
