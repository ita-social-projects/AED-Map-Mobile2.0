import React,{useState,useEffect,useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import MapView from 'react-native-map-clustering';
import { StyleSheet,Dimensions } from 'react-native';
import {initialPosition} from '../../config';
import * as Location from 'expo-location';
import useMarkers from '../../hooks/useMarkers'
import Direction from './components/direction';
import { setUserLocation } from '../../redux/actions';

const MapHolder = () => {

  const markers = useMarkers();
  const dispatch = useDispatch();
  const {currentDeff,destination} = useSelector(state => ({
    currentDeff: state.currentDeff,
    destination: state.destination
  }))
  
  let mapRef= useRef(null);

  useEffect(() => {
    if (mapRef.current && currentDeff) {
        mapRef.current.fitToSuppliedMarkers([currentDeff._id],{animated: true})
    }
  },[currentDeff])

  useEffect(() => {
    if (mapRef.current && destination) {
        mapRef.current.fitToCoordinates(destination,{animated: true})
    }
  },[destination])

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let {coords} = await Location.getCurrentPositionAsync({});
      let {latitude,longitude} = coords;

      dispatch(setUserLocation([longitude,latitude]));
    })();
  },[]);

    return (
        <MapView
        ref={mapRef}
        style={styles.mapStyle}
        initialRegion={initialPosition}
        showsUserLocation={true}
        loadingEnabled={true}
        >
          {markers}
          <Direction/>
        </MapView>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
});

export default MapHolder;