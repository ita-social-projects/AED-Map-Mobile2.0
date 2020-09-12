import React,{useState,useEffect,useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import MapView from 'react-native-map-clustering';
import { StyleSheet,Dimensions } from 'react-native';
import {initialPosition} from '../../config';
import * as Location from 'expo-location';
import useMarkers from '../../hooks/useMarkers'
import Direction from './components/direction';
import { setUserLocation } from '../../redux/actions';
import findDestinationRegion from '../../utils/findDestinationRegion';

const MapHolder = () => {
  const markers = useMarkers();
  const dispatch = useDispatch();
  const {currentDeff,direction} = useSelector(state => ({
    currentDeff: state.currentDeff,
    direction: state.direction
  }))
  
  let mapRef= useRef(null);

  useEffect(() => {
    if (mapRef.current && currentDeff) {
      const camera = {
        center: {
          longitude: currentDeff.location.coordinates[0],
          latitude: currentDeff.location.coordinates[1]
        },
        zoom: 15,
        altitude: 10000
      };
      mapRef.current.animateCamera(camera,{duration: 1000});
    }
  },[dispatch,currentDeff]);

  useEffect(() => {
    if (mapRef.current && direction) {
        const region = findDestinationRegion(direction);
        mapRef.current.animateToRegion(region,1000);
    }
  },[dispatch,direction]);

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