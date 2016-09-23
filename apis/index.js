var twitter = require('./twitter')
var getSentiment = require('./getSentiment')
var keyword = 'hillary clinton'

twitter(keyword)
  .then(function (tweets) {
    return Promise.all(tweets.map(function (tweet) {
      return getSentiment(tweet)
    }))
  })
  .then(function (sentimentObjects) {
    return sentimentObjects.filter(function (sentimentObject) {
      return ((sentimentObject.result.score > 0.3) || (sentimentObject.result.score < -0.3))
    }).map(function (sentimentObject) {
        console.log(`Tweet: ${sentimentObject.text} | Confidence: ${sentimentObject.result.score} | Sentiment: ${sentimentObject.result.sentiment}`)
        return sentimentObject.result.sentiment
    })
  })
  .then(function (sentiments) {
      console.log('Done!')
  })
  .catch(function (err) {
    console.log(err)
  })
