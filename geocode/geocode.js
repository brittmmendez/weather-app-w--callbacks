const request = require('request');

geocodeAddress=(address, callback)=>{
  let encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAOGmd8C9GSfQh543uE_r86Hr870X88004`,
    json: true
  }, (error, response, body)=>{
    if (error){
      callback('Unable to connect to Google Server')
    }else if (body.status === 'ZERO_RESULTS') {
      callback('Address Not Found')
    }else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports={
  geocodeAddress
}
