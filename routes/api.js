const router = require('express').Router()

router.post('/', (req, res, next) => {
})

router.get('/', (req, res, next) => {
  res.send('Hello world.')
})

module.exports = router
