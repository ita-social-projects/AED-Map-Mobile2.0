import React from 'react'
import {BallIndicator} from 'react-native-indicators';

const LoadingBar = ({color}) => {
    return <BallIndicator size={60} color={color}/>
};

export default LoadingBar;