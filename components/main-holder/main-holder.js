import React from 'react'
import MapHolder from '../map-holder'
import EmergencyButton from '../buttons/emergency-button'
import NavBar from '../nav-bar'
import Search from '../search'
import Popup from '../popup'
import SetDestination from '../buttons/set-destination'

const MainHolder = () => {

    return (
        <>    
            <Search />
            <MapHolder/>
            <NavBar/>   
            <EmergencyButton/> 
            <Popup/> 
            <SetDestination/>
        </>
    )
}

export default MainHolder;