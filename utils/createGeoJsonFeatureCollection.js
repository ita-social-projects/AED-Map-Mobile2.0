const features = points => {
  if (typeof points === 'array') {
  return points.map(point => {
    return {
      type: 'Feature',
      id: point._id,
      geometry: {
        type: point.location.type,
        coordinates: point.location.coordinates
      },
      properties: {
        title: point.title
      }
    };
  });
  }
  else {
    return [{
      type: 'Feature',
      geometry: points,
      properties: {}
    }];
}
};

const createGeoJsonFeatureCollection = points => ({
  type: 'FeatureCollection',
  features: features(points)
});

export default createGeoJsonFeatureCollection;
