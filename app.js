const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv= yargs
  .options({
    address: {
        demand: true,
        alias: 'a',
        describe: 'Address to fetch weathe for',
        string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
  if (errorMessage){
    console.log(errorMessage)
  }else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatheResults) =>{
      errorMessage ? console.log(errorMessage) : console.log(`It's currently ${weatheResults.temperature}, but it feels like ${weatheResults.apparentTemperature}`);
    });
  }
});
