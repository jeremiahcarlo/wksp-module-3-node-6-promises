// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position
const rp = require('request-promise');

const position = {
  latitude: 45.497118,
  longitude: -73.579044
};

function getCurrentTemperatureAtPosition(position) {
  const url = `https://api.darksky.net/forecast/e1c69a2783accda23a4d76e4ff30860e/${position.latitude},${position.longitude}`;
  return rp(url)
    .then(res => {
      const location = JSON.parse(res);
      return {
        temperature: location.currently.temperature
      };
    })
    .catch(err => console.log(err));
}

// With async and await
// async function getCurrentTemperatureAtPosition(position) {
//   const url = `https://api.darksky.net/forecast/e1c69a2783accda23a4d76e4ff30860e/${position.latitude},${position.longitude}`;
//   try {
//     let res = await rp(url);
//     const location = JSON.parse(res);
//     return {
//       temperature: location.currently.temperature
//     };
//   } catch (err) {
//     console.error(err);
//   }
// }
getCurrentTemperatureAtPosition(position);

module.exports = getCurrentTemperatureAtPosition;