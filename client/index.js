const request = require('superagent')
const config = require('../config')
const url = require('url').format(config[process.env.NODE_ENV || 'development'])

document.addEventListener('DOMContentLoaded', function () {
  console.log(url);
  request
    .get(`${url}/api/v1/`)
    .end((err, res) => {
      console.log(res.text)
    })
})

function refreshContent (tweets) {
  var div = document.createElement('div')
  document.body.appendChild(div)
  bindEventListeners(tweets)
}

function bindEventListeners () {}
