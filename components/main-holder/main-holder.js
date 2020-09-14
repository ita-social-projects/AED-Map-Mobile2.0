import React from 'react'
import MapHolder from '../map-holder'
import EmergencyButton from '../buttons/emergency-button'
import Search from '../search'
import Popup from '../popup'
import useServices from "../../hooks/useServices";
import {useSelector} from "react-redux";
import { StatusBar } from 'expo-status-bar';

const MainHolder = () => {

    const {userLocation,currentDeff} = useSelector((state) =>({
        userLocation: state.userLocation,
        currentDeff : state.currentDeff
    }));

    useServices();

    return (
        <>     
            <StatusBar style="light" />
            <Search />
            <MapHolder/>  
            {userLocation && <EmergencyButton/>}
            {currentDeff && <Popup/>}
        </>
    )
};

export default MainHolder;