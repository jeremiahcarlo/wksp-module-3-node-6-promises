// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
// Again here you should re-use two previously created functions, plus the `getDistance` function provided to you in `workshop.js`.
//
// One of the functions does address ==> position and the other simply does nothing ==> position.
// The `getDistance` function needs the two positions to compute the final value.

// Euclidian distance between two points
function getDistance(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
    );
  }
  
  // Given an address (a string), returns the distance between that address and the ISS
  // You'll need to use getDistance, getIssPosition and getAddressPosition
  const getIssPosition = require('./exercise-1');
  const getAddressPosition = require('./exercise-2');
  
  function getDistance(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
    );
  }
  
  function getDistanceFromIss(address) {
    return getIssPosition()
      .then(ISSCoordinates => {
        const coordinates = {
          latitude: parseInt(ISSCoordinates.lat),
          longitude: parseInt(ISSCoordinates.lng)
        };
  
        return getAddressPosition(address)
          .then(position => {
            return getDistance(position, ISSCoordinates);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }
  
  // With await and async
  async function getDistanceFromIss(address) {
    try {
      let ISSCoordinates = await getIssPosition();
      let position = await getAddressPosition(address);
      return getDistance(position, ISSCoordinates);
    } catch (err) {
      console.error(err);
    }
  }
  
  getDistanceFromIss('12 yvon-cousineau').then(distance =>
    console.log(`Distance between the two points: ${distance}`)
  );