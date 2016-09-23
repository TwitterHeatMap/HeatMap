var Twit = require('twit')
require('dotenv').config()

// var userInput = 'donald trump'
// var geoCodes = '40.775828,-74.025021,5km'

var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

function getTweets(userInput, geoCodes) {
  console.log('I am in getTweets now')
  return new Promise(function(resolve, reject) {
    T.get('search/tweets', { q: userInput, geocode: geoCodes, count:100 }, function(err, data, response) {
      var result = []
       data.statuses.forEach( function (status) {
        result.push(status.text)
      })
      if(err) {
        reject(err)
      } else {
        console.log('result from getTweets func is: ', result)
        resolve(result)
      }
    })
  })
}

module.exports = {
  getTweets:getTweets
}


// var options = {
//   provider: 'google',
//
//   // Optional depending on the providers
//   httpAdapter: 'https', // Default
//   apiKey: process.env.YOUR_API_KEY, // for Mapquest, OpenCage, Google Premier
//   formatter: null         // 'gpx', 'string', ...
// }
//
// var geocoder = NodeGeocoder(options)

// geocoder.geocode('manhattan, new york', function(err, res) {
//   console.log(res)
//   console.log('latitude: ',res[0].latitude)
//   console.log('longitude: ', res[0].longitude)
// })
