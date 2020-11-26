import React, {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Image
} from 'react-native';
import { setDrivingMode, setDeff, setDestLocation, setDirection } from '../../redux/actions';
import {appConfig, navBarConfig} from "../../config";

const MoveTypes = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  const currentDeff = useSelector(state => state.currentDeff);

  const setAsDestination = () => {
      if(currentDeff){
        dispatch(setDestLocation(currentDeff.location.coordinates))
      }
  };

  return (
    <Animated.View style={[styles.driveTypes]}>
      <TouchableOpacity onPress={
        () => {
          setActive(0)
          dispatch(setDrivingMode('driving')),
          setAsDestination()
        }
      }>
        <View style={active === 0 ? styles.driveTypeButtonActive : styles.driveTypeButton }>
          <Image
            style={ styles.driveImg }
            source={require('../../assets/move-types/directions_car.png')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
          onPress={
        () => {
          setActive(1)
          dispatch(setDrivingMode('cycling')),
          setAsDestination()
        }
      }>
        <View style={active === 1 ? styles.driveTypeButtonActive : styles.driveTypeButton }>
          <Image
            style={ styles.driveImg }
            source={require('../../assets/move-types/directions_bicycle.png')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={
        () => {
          setActive(2)
          dispatch(setDrivingMode('walking')),
          setAsDestination()
        }
      }>
        <View style={active === 2 ? styles.driveTypeButtonActive : styles.driveTypeButton }>
          <Image
              style={ styles.driveImg }
            source={require('../../assets/move-types/directions_pedestrian.png')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={
        () => {
          dispatch(setDrivingMode(null));
          dispatch(setDeff(null));
          dispatch(setDestLocation(null));
          dispatch(setDirection(null))
        }
      }>
        <View style={styles.closeTypeButton}>
          <Image
            style={styles.closeImg}
            source={require('../../assets/move-types/close_cross.png')}
          />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default MoveTypes;

const styles = StyleSheet.create({
  driveTypes: {
    padding: 10,
    backgroundColor: appConfig.backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  driveTypeButton: navBarConfig.typeButtonStyle(3),
  driveTypeButtonActive: {
    width: 40,
    height: 40,
    padding: 2,
    textAlign: "center",
    margin: 'auto',
    backgroundColor: appConfig.backgroundActiveColor,
    borderRadius: 25,
  },
  closeTypeButton: navBarConfig.typeButtonStyle(5),
  driveImg: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  closeImg: {
    width: '100%',
    height: '100%',
    tintColor: 'red'
  }
});
