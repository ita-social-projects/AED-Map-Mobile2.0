import React from 'react'
import MapHolder from '../../components/map-holder'
import LoadingPanel from "../loading-panel";
import { StatusBar } from 'expo-status-bar';
import useServices from "../../hooks/useServices";
import Search from "../../components/search";
import Popup from "../popup";
import EmergencyButton from "../../components/buttons/emergency-button";
import {useSelector} from "react-redux";
import {useNetInfo} from "@react-native-community/netinfo";


const MainHolder = () => {
    const {isConnected} = useNetInfo();
    const {loading,currentDeff,userLocation} = useSelector((state) => ({
        userLocation: state.userLocation,
        currentDeff : state.currentDeff,
        loading: state.loading
    }));
    useServices();

    return (
        <>
            <StatusBar style="light" />
            {isConnected && <Search/>}
            <MapHolder/>
            {loading && <LoadingPanel/>}
            {isConnected && userLocation && !currentDeff && <EmergencyButton/>}
            {isConnected && currentDeff && <Popup/>}
        </>
    )
};

export default MainHolder;