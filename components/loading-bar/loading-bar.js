import React from 'react'
import {BallIndicator} from 'react-native-indicators';
import {loadingBarConfig} from "../../config";

const LoadingBar = ({color}) => {
    return <BallIndicator style={{position: "relative"}} size={loadingBarConfig.size} color={color}/>
};

export default LoadingBar;