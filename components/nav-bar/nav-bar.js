import React, {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Image
} from 'react-native';
import { setDrivingMode, setDeff, setDestLocation } from '../../redux/actions';

// const additionalStyle = {
//   driving: {
//     lineColor: '#00f',
//     lineDasharray: [3, 0]
//   },
//   cycling: {
//     lineColor: '#00f',
//     lineDasharray: [2, 2]
//   },
//   walking: {
//     lineColor: '#00f',
//     lineDasharray: [1, 3]
//   }
// };

const MoveTypes = () => {
  const [directionValue] = useState(new Animated.ValueXY({x: -200, y: 0}));
  const dispatch = useDispatch()
  const destLocation = useSelector((state) => state.destLocation)

  const currentDeff = useSelector(state => state.currentDeff)

  const setAsDestination = () => {
      if(currentDeff){
        dispatch(setDestLocation(currentDeff.location.coordinates))
      }
  };

  return (
    <Animated.View style={[styles.driveTypes]}>
      <TouchableOpacity onPress={
        () => {
          dispatch(setDrivingMode('driving')),
          setAsDestination()
        }
      }>
        <View style={styles.driveTypeButton}>
          <Image
            style={styles.driveImg}
            source={require('../../assets/move-types/directions_car.png')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={
        () => {
          dispatch(setDrivingMode('cycling')),
          setAsDestination()
        }
      }>
        <View style={styles.driveTypeButton}>
          <Image
            style={styles.driveImg}
            source={require('../../assets/move-types/directions_bicycle.png')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={
        () => {
          dispatch(setDrivingMode('walking')),
          setAsDestination()
        }
      }>
        <View style={styles.driveTypeButton}>
          <Image
            style={styles.driveImg}
            source={require('../../assets/move-types/directions_pedestrian.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={
        () => {
          dispatch(setDrivingMode(null));
          dispatch(setDeff(null));
          dispatch(setDestLocation(null));
        }
      }>
        <View style={styles.closeTypeButton}>
          <Image
            style={styles.driveImg}
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
    backgroundColor: '#282c34',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  driveTypeButton: {
    width: 40,
    height: 40,
    padding: 3,
    textAlign: 'center'
  },
  closeTypeButton: {
    width: 40,
    height: 40,
    padding: 5,
    textAlign: 'center'
  },
  driveImg: {
    width: '100%',
    height: '100%',
    tintColor: '#fff'
  }
});