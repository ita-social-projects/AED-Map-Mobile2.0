import React from 'react'
import Search from "../search";
import EmergencyButton from "../buttons/emergency-button";
import Popup from "../popup";
import {useSelector} from "react-redux";
import LoadingBar from "../loading-bar";

const ControlPanel = () => {

    const loading = useSelector((state) => state.loading);

    if(loading) {
        return <LoadingBar/>
    }

    return (
    <>
        <Search />
        <EmergencyButton/>
        <Popup/>
    </>
    )
};

export default ControlPanel;