export default findCamera = (coords=[]) => {
    const coordsArr = Array.from(coords);

    const sortedByLongitudes = coordsArr.sort((a,b) => a['longitude']-b['longitude']);
    const sortedByLatitudes = coordsArr.sort((a,b) => a['latitude']-b['latitude']);

    const minLongitude = sortedByLongitudes[0]['longitude'];
    const maxLongitude = sortedByLongitudes[coordsArr.length - 1]['longitude'];

    const minLatitude = sortedByLatitudes[0]['latitude'];
    const maxLatitude = sortedByLatitudes[coordsArr.length - 1]['latitude'];

    return {
        center: {
            longitude: (maxLongitude + minLongitude) / 2,
            latitude: (maxLatitude + minLatitude) / 2,
        },
        zoom: 1000000*(maxLongitude - minLongitude),
        altitude: 1000000*(maxLongitude - minLongitude)
    }
}