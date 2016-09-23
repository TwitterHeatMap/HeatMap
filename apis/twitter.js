var Twit = require('twit')
require('dotenv').config()

var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

module.exports = function (input) {
  return T.get('search/tweets', { q: input, count:10 })
          .then(function (result) {
            return result.data.statuses.map(function (status) {
              return status.text
            })
          })
}
