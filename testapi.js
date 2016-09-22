var Twit = require('twit')
require('dotenv').config()

var userInput = 'donald trump'

var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


T.get('search/tweets', { q: userInput, count:10 }, function(err, data, response) {
  console.log(data)
  // data.statuses.forEach( function (status) {
  //   console.log(status.text)
  // })
})
