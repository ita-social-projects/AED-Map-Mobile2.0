import React,{useEffect,useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import MapView from 'react-native-map-clustering';
import { StyleSheet,Dimensions, TouchableOpacity,View } from 'react-native';
import {cameraConfig, initialPosition} from '../../config';
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
        zoom: cameraConfig.zoom,
        altitude: cameraConfig.altitude
      };
      mapRef.current.animateCamera(camera,cameraConfig.animateDuration);
    }
  },[dispatch,currentDeff]);
  
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