import React,{useState,useEffect,useRef} from 'react';
import MapView from 'react-native-map-clustering';
import { StyleSheet,Dimensions } from 'react-native';
import {initialPosition} from '../../config';
import * as Location from 'expo-location';
import useMarkers from '../../hooks/useMarkers'
import Direction from './components/direction';


const MapHolder = () => {

  const markers = useMarkers();
  const [location,setLocation] = useState();
  const [error,setErrorMsg] = useState();
  let mapRef= useRef(null);

  const onLayout = () => {
    if (mapRef.current) {
    //   mapRef.current.animateToRegion({
    //     latitude: 49.516218,
    //     longitude: 22.0300926,
    //     latitudeDelta: 0.3,
    //     longitudeDelta: 0.3
    // },3000)
      // mapRef.current.fitToSuppliedMarkers(['0','4'],{animated: true})
    //   mapRef.current.fitToCoordinates([
    //     { latitude: 37.8025259, longitude: -122.4351431 },
    //     { latitude: 37.7896386, longitude: -122.421646 },
    //     { latitude: 37.7665248, longitude: -122.4161628 },
    //     { latitude: 37.7734153, longitude: -122.4577787 },
    //     { latitude: 37.7948605, longitude: -122.4596065 },
    //     { latitude: 37.8025259, longitude: -122.4351431 }
    //   ],{animated: true,edgePadding: {top: 10,bottom: 10,left: 30,right: 30}})
    // }
  }

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
        ref={mapRef}
        style={styles.mapStyle}
        initialRegion={initialPosition}
        showsUserLocation={true}
        onLayout={onLayout}
        loadingEnabled={true}
        >
          {markers}
          {/* <Direction/> */}
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