import destBetweenTwoPoints from './getDestBetweenTwoPoints';

const nearestDeff = (deffMap, userLocation) => {
    return deffMap
      .map(singleDef => {
        const pathLength = destBetweenTwoPoints(
          userLocation,
          singleDef.location.coordinates
        );
        return {
          id: singleDef._id,
          coordinates: singleDef.location.coordinates,
          pathLength
        };
      })
      .sort((a, b) => a.pathLength > b.pathLength);
  };

export default nearestDeff;