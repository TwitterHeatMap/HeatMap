const router = require('express').Router()
const tweets = require('../lib/getTweetsByLocation')
const sentiment = require('../lib/getFilteredSentiments')

router.post('/', (req, res, next) => {
})

router.get('/', (req, res, next) => {
  var userInput = 'brangelina'
  var geoCodes = '34.0209282,-118.4918063,5km'
  tweets.getTweets(userInput, geoCodes)
    .then(function (data) {
      console.log(sentiment(data))
      return sentiment(data)
    })

})

module.exports = router
