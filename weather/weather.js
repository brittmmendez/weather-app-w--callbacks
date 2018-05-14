const request = require('request');

getWeather= (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/f4e35530b3613dd34d6ef61b6d97792b/${latitude},${longitude}`,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    }else{
      callback('Unable to connect to Forecast.io Server');
    }
  });
}

module.exports={
  getWeather
}
