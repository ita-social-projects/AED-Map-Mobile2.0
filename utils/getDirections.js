const getDirections = (arr = []) => {
    return arr.map(item => ({longitude: item[0],latitude: item[1]}))
}

export default getDirections;