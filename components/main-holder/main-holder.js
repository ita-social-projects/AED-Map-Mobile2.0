import React from 'react'
import MapHolder from '../map-holder'
import EmergencyButton from '../buttons/emergency-button'
import NavBar from '../nav-bar'

const MainHolder = () => {

    return (
        <>    
            <MapHolder/>
            <NavBar/>  
            <EmergencyButton/>  
        </>
    )
}

export default MainHolder;