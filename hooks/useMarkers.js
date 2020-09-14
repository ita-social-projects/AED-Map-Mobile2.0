import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Marker} from 'react-native-maps';
import DefPin from '../components/map-holder/components/def-pin'
import DestPin from '../components/map-holder/components/dest-pin'
import { getAllDeffs, getDeff, setSelectedDeff } from '../redux/actions';



const useMarkers = () => {
    const deffData = useSelector((state) => state.deffData)
    const [locations,setLocations] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(getAllDeffs());
    },[dispatch])

    useEffect(() => {
        setLocations(deffData);
    },[dispatch,deffData])

    const handleMarkerClick = (event) => {
        dispatch(setSelectedDeff(event.nativeEvent.id))
        dispatch(getDeff(event.nativeEvent.id))
    }

    const markers = locations.map((item) => (
    <Marker
        coordinate={{longitude: item.location.coordinates[0],latitude: item.location.coordinates[1]}}
        key={item._id} 
        identifier={`${item._id}`}
        onPress={handleMarkerClick}
        >
                <DefPin id={item._id} title={item.title}/>
    </Marker>))

    return markers
}

export default useMarkers;