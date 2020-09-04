import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Polyline } from 'react-native-maps';
import { getDirection } from '../../../../redux/actions';

const Direction = () => {
	const dispatch = useDispatch();
	const {destLocation,userLocation,drivingMode,direction} = useSelector((state) => ({
		destLocation: state.destLocation,
		userLocation: state.userLocation,
		drivingMode: state.drivingMode,
		direction: state.direction
	}))

	useEffect(() => {
		if(destLocation && userLocation && drivingMode) {
			dispatch(getDirection({destLocation,userLocation,drivingMode}))
		}
	},[destLocation,userLocation,drivingMode])

    return (
		direction ? <Polyline
		coordinates={direction}
		/> : null
    )
}

export default Direction;