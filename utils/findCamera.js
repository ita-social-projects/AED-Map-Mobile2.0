export default findCamera = (coords=[]) => {
    const coordsArr = Array.from(coords);

    const sortedByLongitudes = coordsArr.sort((a,b) => a['longitude']-b['longitude']);
    const sortedByLatitudes = coordsArr.sort((a,b) => a['latitude']-b['latitude']);

    const minLongitude = sortedByLongitudes[0]['longitude'];
    const maxLongitude = sortedByLongitudes[coordsArr.length - 1]['longitude'];

    const minLatitude = sortedByLatitudes[0]['latitude'];
    const maxLatitude = sortedByLatitudes[coordsArr.length - 1]['latitude'];

    const avgLongitude = coordsArr.reduce((a,b) =>(a + b['longitude']), 0)  / coordsArr.length;
    const avgLatitude = coordsArr.reduce((a,b) =>(a + b['latitude']), 0) / coordsArr.length;

    const maxDelta = Math.max((maxLongitude - minLongitude),(maxLatitude-minLatitude));

    return {
        center: {
            longitude: avgLongitude,
            latitude: avgLatitude,
        },
        zoom: 10000*maxDelta,
        altitude: 1000000*maxDelta
    }
}