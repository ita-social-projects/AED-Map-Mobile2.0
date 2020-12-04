import React,{useEffect,useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import MapView from 'react-native-map-clustering';
import { StyleSheet,Dimensions, TouchableOpacity,View } from 'react-native';
import {cameraConfig, initialPosition} from '../../config';
import useMarkers from '../../hooks/useMarkers'
import Direction from './components/direction';
import MyPlaceButton from '../buttons/my-place-button'
import findDestinationRegion from '../../utils/findDestinationRegion';
import {zoomInPoint} from "../../utils/mapZoom";

const MapHolder = () => {
  const markers = useMarkers();
  const dispatch = useDispatch();
  const {
      currentDeff,
      direction,
      userLocation,
      searchLocation
  } = useSelector(state => ({
    currentDeff: state.currentDeff,
    direction: state.direction,
    userLocation: state.userLocation,
    searchLocation: state.searchLocation
  }));
  let mapRef= useRef(null);

  useEffect(() => {
    if (mapRef.current && currentDeff) {
      zoomInPoint(mapRef,currentDeff.location.coordinates)
    }
  },[dispatch,currentDeff]);

  useEffect(() => {
      if (mapRef.current && searchLocation) {
          zoomInPoint(mapRef,searchLocation);
      }
  },[dispatch,searchLocation]);

  const myPlacePress = () => {
    mapRef.current.animateCamera({
      center: {
        longitude: userLocation[0],
        latitude: userLocation[1],
      },
      zoom: cameraConfig.zoom,
      altitude: cameraConfig.altitude
    }, cameraConfig.animateDuration)
  };

  useEffect(() => {
    if (mapRef.current && direction) {
        const region = findDestinationRegion(direction);
        mapRef.current.animateToRegion(region,cameraConfig.animateDuration);
    }
  },[dispatch,direction]);

    const myPlaceButton = userLocation
        ? (<TouchableOpacity style={styles.myPlaceButton} onPress={myPlacePress}>
            <MyPlaceButton/>
          </TouchableOpacity>)
        : null;

    return (
        <View>
          {myPlaceButton}
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
        </View>
    )
  };

const styles = StyleSheet.create({
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    myPlaceButton: {
      position: "absolute",
      top: 10,
      left: 5,
      zIndex: 1
    }
});

export default MapHolder;
