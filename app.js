const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./routes/api')
const app = express()

app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/api/v1/', api)


// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err // remove in production
  })
})

module.exports = app
