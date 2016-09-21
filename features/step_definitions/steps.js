var assert = require('cucumber-assert')
var Url = require('url')
var extend = require('xtend')

var config = require('../../config')

module.exports = function () {

  this.Given('I am viewing the page at "$string"', function (pathname) {
    console.log('pathname', pathname)
    browser.url(`http://localhost:5050${pathname}`) // hardcoded localhost
    // real world example below
    // browser.url(Url.format(extend(config.proxy, { pathname: pathname })))
  })

  this.Then('I can see the header item "$string"', function (text, callback) {
    var listItemExists = browser.waitForExist(`h1=${text}`)
    assert.equal(listItemExists, true, callback)
  })

}
