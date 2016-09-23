const router = require('express').Router()

router.post('/', (req, res, next) => {
})

router.get('/', (req, res, next) => {
  console.log(req.query);
  res.send('Hello world.')
})

module.exports = router
