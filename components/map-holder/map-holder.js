import React,{useEffect,useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import MapView from 'react-native-map-clustering';
import { StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import {initialPosition} from '../../config';
import useMarkers from '../../hooks/useMarkers'
import Direction from './components/direction';
import MyPlaceButton from '../buttons/my-place-button'
import findDestinationRegion from '../../utils/findDestinationRegion';

const MapHolder = () => {
  const markers = useMarkers();
  const dispatch = useDispatch();
  const {currentDeff,direction,userLocation} = useSelector(state => ({
    currentDeff: state.currentDeff,
    direction: state.direction,
    userLocation: state.userLocation,
  }));

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
  
  const myPlacePress = () => {
    mapRef.current.animateCamera({
      center: {
        longitude: userLocation[0],
        latitude: userLocation[1],
      },
      zoom: 15,
      altitude: 10000
    }, 1000)
  }

  useEffect(() => {
    if (mapRef.current && direction) {
        const region = findDestinationRegion(direction);
        mapRef.current.animateToRegion(region,1000);
    }
  },[dispatch,direction]);

    return (
        <MapView
        ref={mapRef}
        style={styles.mapStyle}
        initialRegion={initialPosition}
        showsUserLocation={true}
        loadingEnabled={true}
        >
          <TouchableOpacity onPress={myPlacePress}>
            <MyPlaceButton/>
          </TouchableOpacity>
          {markers}
          <Direction/>
        </MapView>
    )
  };

const styles = StyleSheet.create({
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },  
});

export default MapHolder;