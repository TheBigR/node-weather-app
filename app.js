const request = require('request')
const geocode = require('./utils/geocode')

// const weatherUrl =
//   'http://api.weatherstack.com/current?access_key=1bab0092f0d971df40a9ec8e8fef6791&query=37.8267,-122.4233'

// request({ url: weatherUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   }
//   else{
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         '. It is currently ' +
//         response.body.current.temperature +
//         ' degrees out. it feels like ' +
//         response.body.current.feelslike,
//     )
//   }
// })

// const baseMapboxUrl =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGhlYmlnciIsImEiOiJjamc3bzBnZGoyeDFjMnltb2c2ZzF6cDAzIn0.yRd_Rurd8tsHa8Za9mYVbg&limit=1'
// request({ url: baseMapboxUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log('Error connecting to geocoding API')
//   } else if (response.body.features.length === 0) {
//     console.log('Location not found!')
//   } else {
//     console.log(
//       'longitude: ' +
//         response.body.features[0].center[0] +
//         ' latitude: ' +
//         response.body.features[0].center[1],
//     )
//   }
// })

geocode('Boston', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
