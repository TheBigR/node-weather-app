const request = require('request')

const forecast = (lon, lat, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=1bab0092f0d971df40a9ec8e8fef6791&query=' +
    lat +
    ',' +
    lon
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to reach weather service', undefined)
    } else if (response.body.error) {
      callback('Unable to find location', undefined)
    } else {
      const foreString =
        response.body.current.weather_descriptions[0] +
        '. It is currently ' +
        response.body.current.temperature +
        ' degrees out. it feels like ' +
        response.body.current.feelslike
      callback(undefined, foreString)
    }
  })
}

module.exports = forecast
