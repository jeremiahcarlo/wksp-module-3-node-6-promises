// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// While it's useful to get the current temperature for a specific lat/lng,
// most often we want to provide the name of a place instead.
//
// You already created a function that can do address ==> position,
// and one that can do position ==> temperature. For this exercise,
// re-use these two functions to create one that goes directly from address ==> temperature.
//
// You can copy/paste your code from the previous exercises,
// or require them at the top of this file.
// Remember to _export_ them from their file, if you plan on _requiring_ them.

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
const getCurrentTemperatureAtPosition = require('./exercise-3');
const getAddressPosition = require('./exercise-2');

function getCurrentTemperature(address) {
  return getAddressPosition(address).then(res => {
    return getCurrentTemperatureAtPosition({
      latitude: res.lat,
      longitude: res.lng
    });
  });
}

// With async and await
// async function getCurrentTemperature(address) {
//   try {
//     let res = await getAddressPosition(address);
//     const coordinates = {
//       latitude: res.lat,
//       longitude: res.lng
//     };
//     return await getCurrentTemperatureAtPosition(coordinates);
//   } catch (err) {
//     console.error(err);
//   }
// }
getCurrentTemperature('12 yvon-cousineau');