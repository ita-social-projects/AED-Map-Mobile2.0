export default findDestinationRegion = (coords=[]) => {
    const coordsArr = Array.from(coords);

    const sortedByLongitudes = [...coordsArr].sort((a,b) => a['longitude']-b['longitude']);
    const sortedByLatitudes = [...coordsArr].sort((a,b) => a['latitude']-b['latitude']);

    const minLongitude = sortedByLongitudes[0]['longitude'];
    const maxLongitude = sortedByLongitudes[coordsArr.length - 1]['longitude'];

    const minLatitude = sortedByLatitudes[0]['latitude'];
    const maxLatitude = sortedByLatitudes[coordsArr.length - 1]['latitude'];

    const avgLongitude = (maxLongitude + minLongitude)/2;
    const avgLatitude = (maxLatitude + minLatitude)/2;

    const longitudeDelta = maxLongitude - minLongitude;
    const latitudeDelta = maxLatitude - minLatitude;

    return {
        longitude: avgLongitude,
        latitude: avgLatitude - longitudeDelta*0.4,
        longitudeDelta: longitudeDelta + longitudeDelta*0.8,
        latitudeDelta: latitudeDelta
    }
}