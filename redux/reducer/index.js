import {initialPosition} from '../../config'
import { 
    SET_DESTINATION_LOCATION, 
    SET_USER_LOCATION,
    SET_DEFFS_DATA, 
    SET_DEFF, 
    SET_DRIVING_MODE, 
    SET_DIRECTION,
    SET_SEARCH_LOCATION ,
    SET_LOADING
} from '../types'

const initialState = {
    deffData: [],
    currentDeff: null,
    mapPosition: initialPosition,
    userLocation: null,
    searchLocation: '',
    destLocation: null,
    drivingMode: null,
    direction: null,
    loading: false,
    error: null,
}

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_LOADING:
            return {...state,loading: action.payload};
        case SET_DEFFS_DATA:
            return {...state,deffData: action.payload};
        case SET_DEFF:
            return {...state,currentDeff: action.payload};
        case SET_DESTINATION_LOCATION:
            return {...state,destLocation: action.payload} ;
        case SET_SEARCH_LOCATION:
            return {...state,searchLocation: action.payload};
        case SET_USER_LOCATION:
            return {...state,userLocation: action.payload};
        case SET_DRIVING_MODE:
            return {...state,drivingMode: action.payload};
        case SET_DIRECTION:
            return {...state,direction: action.payload};
        default: 
            return state
    }
}

export default reducer;