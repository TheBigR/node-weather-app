const request = require('request')

const weatherUrl =
  'http://api.weatherstack.com/current?access_key=1bab0092f0d971df40a9ec8e8fef6791&query=37.8267,-122.4233'

request({ url: weatherUrl, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      '. It is currently ' +
      response.body.current.temperature +
      ' degrees out. it feels like ' +
      response.body.current.feelslike,
  )
})

const baseMapboxUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGhlYmlnciIsImEiOiJjamc3bzBnZGoyeDFjMnltb2c2ZzF6cDAzIn0.yRd_Rurd8tsHa8Za9mYVbg&limit=1'
request({ url: baseMapboxUrl, json: true }, (error, response) => {
  console.log(
    'longitude: ' +
      response.body.features[0].center[0] +
      ' latitude: ' +
      response.body.features[0].center[1],
  )
})
