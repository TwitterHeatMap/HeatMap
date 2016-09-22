const request = require('superagent')
const config = require('../config')
const url = require('url').format(config[process.env.NODE_ENV || 'development'])
const mapFunctions = require('./mapFunctionsAndData')
var initMap = mapFunctions.initMap
var toggleHeatmap = mapFunctions.toggleHeatmap
var changeGradient = mapFunctions.changeGradient
var changeRadius = mapFunctions.changeRadius
var changeOpacity = mapFunctions.changeOpacity
initMap()
document.addEventListener('DOMContentLoaded', function () {
  bindEventListeners()
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

}

function bindEventListeners () {
  document.getElementById("toggleHeatmap")
  .addEventListener("click", function(e) {
    toggleHeatmap()
  })
  document.getElementById("changeGradient")
  .addEventListener("click", function(e) {
    changeGradient()
  })
  document.getElementById("changeRadius")
  .addEventListener("click", function(e) {
    changeRadius()
  })
  document.getElementById("changeOpacity")
  .addEventListener("click", function(e) {
    changeOpacity()
  })
}
