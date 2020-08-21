import React,{useState,useEffect} from 'react';
import MapView from 'react-native-map-clustering';
import { StyleSheet,Dimensions } from 'react-native';
import {initialPosition} from '../../config';
import * as Location from 'expo-location';
import useMarkers from '../../hooks/useMarkers'


const MapHolder = () => {

  const markers = useMarkers();
  const [location,setLocation] = useState();
  const [error,setErrorMsg] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  },[]);

    return (
        <MapView
        style={styles.mapStyle}
        initialRegion={initialPosition}
        showsUserLocation={true}
        >
          {markers}
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