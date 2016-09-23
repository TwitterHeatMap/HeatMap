var unirest = require('unirest')
require('dotenv').config()

module.exports = function (input) {
  return new Promise (function (resolve, reject) {
    unirest.get(`https://jamiembrown-tweet-sentiment-analysis.p.mashape.com/api/?text=${input}`)
    .header("X-Mashape-Key", process.env.MASHAPE_KEY)
    .header("Accept", "application/json")
    .end(function (result) {
      resolve({text: input, result: result.body})
    })
  })
}
