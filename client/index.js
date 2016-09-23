const request = require('superagent')
const config = require('../config')
const url = require('url').format(config[process.env.NODE_ENV || 'development'])
const mapFunctions = require('./mapFunctionsAndData')
const getFormData = require('get-form-data')
var initMap = mapFunctions.initMap
var toggleHeatmap = mapFunctions.toggleHeatmap
var changeGradient = mapFunctions.changeGradient
var changeRadius = mapFunctions.changeRadius
var changeOpacity = mapFunctions.changeOpacity
var map = initMap()
console.log(map.getCenter());
console.log(map.getCenter().lat());
document.addEventListener('DOMContentLoaded', function () {
  bindEventListeners()
  console.log(url);
})

function bindEventListeners () {
  document.getElementById('submit_keyword')
    .addEventListener("click", function(e) {
      e.preventDefault()
      var form = document.getElementById("form-keyword")
      var userInput = getFormData(form).userInput
      request
      .get(`${url}/api/v1/`)
      .query({userInput: userInput, lat: map.getCenter().lat(), lng: map.getCenter().lng()})
      .end((err, res) => {
        console.log(res.text)
      })
    })

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
  document.getElementById("setCenterToNewYork")
  .addEventListener("click", function(e) {
    mapFunctions.setCenterToNewYork()
  })
  document.getElementById("setCenterToLA")
  .addEventListener("click", function(e) {
    mapFunctions.setCenterToLA()
  })
  document.getElementById("setCenterToWashingtonDC")
  .addEventListener("click", function(e) {
    mapFunctions.setCenterToWashingtonDC()
  })
  document.getElementById("setCenterToSydney")
  .addEventListener("click", function(e) {
    mapFunctions.setCenterToSydney()
  })
  document.getElementById("setCenterToCanberra")
  .addEventListener("click", function(e) {
    mapFunctions.setCenterToCanberra()
  })
  document.getElementById("setCenterToWellington")
  .addEventListener("click", function(e) {
    mapFunctions.setCenterToWellington()
  })
}
