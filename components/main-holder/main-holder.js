import React from 'react'
import MapHolder from '../map-holder'
import LoadingPanel from "../loading-panel";
import { StatusBar } from 'expo-status-bar';
import useServices from "../../hooks/useServices";
import Search from "../search";
import Popup from "../popup";
import EmergencyButton from "../buttons/emergency-button";
import {useSelector} from "react-redux";


const MainHolder = () => {
    const {loading,currentDeff,userLocation} = useSelector((state) => ({
        userLocation: state.userLocation,
        currentDeff : state.currentDeff,
        loading: state.loading,
    }));
    useServices();
    return (
        <>
            <StatusBar style="light" />
            <Search/>
            <MapHolder/>
            {loading && <LoadingPanel/>}
            {userLocation && !currentDeff && <EmergencyButton/>}
            {currentDeff && <Popup/>}
        </>
    )
};

export default MainHolder;