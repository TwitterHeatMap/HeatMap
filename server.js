const app = require('./app')
const port = process.env.PORT || require('./config').development.port

app.listen(port, () => {
  console.log(`Server listening in on ${port}`)
})
