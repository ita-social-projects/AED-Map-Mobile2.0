import React from 'react'
import MapHolder from '../map-holder'
import EmergencyButton from '../buttons/emergency-button'
import NavBar from '../nav-bar'
import Search from '../search'
import Popup from '../popup'

const MainHolder = () => {

    return (
        <>    
            <Search />
            <MapHolder/>  
            <EmergencyButton/> 
            <Popup/> 
        </>
    )
}

export default MainHolder;