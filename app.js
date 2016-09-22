const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')


const api = require('./routes/api')

const app = express()

app.use(cors()) // allow ajax from localhost:8080
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/api/v1/', api)

app.get('/', function(req, res, next) {
  res.send('<h1>hello world.</h1>')
})
// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err // remove in production
  })
})

module.exports = app
