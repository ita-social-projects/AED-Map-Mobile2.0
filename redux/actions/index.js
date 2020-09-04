import {
    SET_DEFFS_DATA, 
    SET_DEFF, 
    SET_USER_LOCATION, 
    SET_DESTINATION_LOCATION, 
    GET_DEFFS_DATA,
    GET_DEFF, 
    SET_DRIVING_MODE, 
    GET_DIRECTION, 
    SET_DIRECTION,
    SET_SEARCH_LOCATION
} from '../types/index'

const getAllDeffs = () => {
    return {
        type: GET_DEFFS_DATA,
        payload: null
    }
}

const getDeff = id => {
    return {
        type: GET_DEFF,
        payload: id
    }
}

const setDeffs = deffs => {
    return {
        type: SET_DEFFS_DATA,
        payload: deffs
    }
}

const setSearchLocation = search => {
    return {
        type: SET_SEARCH_LOCATION,
        payload: search
    }
}

const setDeff = deff => {
    return {
        type: SET_DEFF,
        payload: deff
    }
}

const setUserLocation = location => {
    return {
        type: SET_USER_LOCATION,
        payload: location
    }
}

const setDestLocation = location => {
    return {
        type: SET_DESTINATION_LOCATION,
        payload: location
    }
}

const setDrivingMode = mode => {
    return {
        type: SET_DRIVING_MODE,
        payload: mode
    }
}

const getDirection = direction => {
    return {
        type: GET_DIRECTION,
        payload: direction
    }
}

const setDirection = direction => {
    return {
        type: SET_DIRECTION,
        payload: direction
    }
}

export {
    setDeff,
    setDeffs,
    setUserLocation,
    setDestLocation,
    setDrivingMode,
    setDirection,
    getAllDeffs,
    getDeff,
    getDirection,
    setSearchLocation
}