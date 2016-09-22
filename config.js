module.exports = {
  proxy: {
    protocol: 'http',
    hostname: 'localhost',
    port: 5050
  },
  development: {
    protocol: 'http',
    hostname: 'localhost',
    port: 3000
  },
  production: {
    protocol: 'https',
    hostname: 'tweetheatmap.herokuapp.com',
    port: process.env.PORT
  }
}
