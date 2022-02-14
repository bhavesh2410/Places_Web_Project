const axios = require('axios');
const HttpError = require('../models/http-error');

const API_KEY = 'AIzaSyAmfTHhCnWNHlRDOZvArTLb3d4lbmQg9Hc';

async function getCoordsForAddress(address) {
  //   const response = await axios.get(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //       address
  //     )}&key=${API_KEY}`
  //   );

  //   const data = response.data;

  //   if (!data || data.status === 'ZERO_RESULTS') {
  //     const error = HttpError(
  //       'Could not find location for specified address',
  //       422
  //     );
  //     throw error;
  //   }

  //   console.log(data);

  //   const coordinates = data.results[0].geometry.location;

  //   return coordinates;
  return {
    lat: 40.7484474,
    lng: -73.9871516,
  };
}

module.exports = getCoordsForAddress;
