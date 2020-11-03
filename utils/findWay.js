const token = 'pk.eyJ1IjoiZGVzdHJvYm8iLCJhIjoiY2tlMDI4ZWRwM3F0NDJ3bXF1NzUxN3FuNiJ9.4bNIJcEIljAIZfY9iNCQFg';

const findWay = async(from,to,moveType) => {
    try{
    const coordinates = await fetch(`https://api.mapbox.com/directions/v5/mapbox/${moveType}/${from[0]}%2C${from[1]}%3B${to[0]}%2C${to[1]}?alternatives=false&geometries=geojson&steps=false&access_token=${token}`)
    const data = await coordinates.json();

    if (data.message) {
        throw new Error(data.message)
    }

    return {
        coordinates: data.routes[0].geometry.coordinates,
        duration: data.routes[0].duration
    };
    }
    catch(err) {
        throw new Error(err.message);
    }
}

export default findWay
