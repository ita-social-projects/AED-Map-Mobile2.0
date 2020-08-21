import React,{useState} from 'react';
import {Marker} from 'react-native-maps';
import DefPin from '../components/map-holder/components/def-pin'
import DestPin from '../components/map-holder/components/dest-pin'



const useMarkers = () => {
    const initLocation =  [{longitude: 24.031691,latitude: 49.841771},
        {longitude: 24.013691,latitude: 49.841771},
        {longitude: 24.056691,latitude: 49.841771},
        {longitude: 24.024691,latitude: 49.841771}];

    const [locations,setLocations] = useState(initLocation);

    const markers = locations.map((item,index) => (<Marker
        coordinate={{longitude: item.longitude,latitude: item.latitude}}
        key={index} identifier={`${index*2}`}
        >
                <DestPin title="Площа ринок"/>
         </Marker>))

    return markers
}

export default useMarkers;