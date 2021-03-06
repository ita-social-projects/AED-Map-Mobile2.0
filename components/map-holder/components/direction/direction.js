import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Polyline } from 'react-native-maps';
import { getDirection } from '../../../../redux/actions';
import {directionTypeConfig} from "../../../../config";

const Direction = () => {
	const dispatch = useDispatch();
	const {destLocation,userLocation,drivingMode,direction,searchLocation} = useSelector((state) => ({
		destLocation: state.destLocation,
		userLocation: state.userLocation,
		drivingMode: state.drivingMode,
		direction: state.direction,
		searchLocation: state.searchLocation,
	}));

	useEffect(() => {
		const location = (userLocation || searchLocation);
		if(destLocation && location && drivingMode) {
			dispatch(getDirection({destLocation, location, drivingMode}))
		}
	},[destLocation,userLocation, searchLocation ,drivingMode]);

    return (
		direction ?
			<Polyline
      	strokeColor={directionTypeConfig[drivingMode].lineColor}
		strokeWidth={directionTypeConfig[drivingMode].lineWidth}
		lineDashPattern={directionTypeConfig[drivingMode].lineDashPattern}
		coordinates={direction}
		/> : null
    )
};

export default Direction;