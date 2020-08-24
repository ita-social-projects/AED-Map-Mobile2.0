import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Image
} from 'react-native';

const MoveTypes = () => {
  const [directionValue] = useState(new Animated.ValueXY({x: -200, y: 0}));

//   useEffect(() => {
//     if (directionType) {
//       displayWayBasedOnType();
//     }
//   }, [directionType]);

//   useEffect(() => {
//     slideDirectionWindow();
//   }, [destination]);

//   const displayWayBasedOnType = async () => {
//     if (destination) {
//       setDirectionData({geoData: null});
//       const geoData = await getDirectionData(
//         origin,
//         destination,
//         directionType
//       );
//       setDirectionData({
//         geoData,
//         directionType,
//         additionalStyle: additionalStyle[directionType]
//       });
//     }
//   };
//   const slideDirectionWindow = () => {
//     if (destination) {
//       Animated.spring(directionValue, {
//         toValue: {x: 0, y: 0},
//         speed: 15
//       }).start();
//     } else {
//       Animated.spring(directionValue, {
//         toValue: {x: -200, y: 0},
//         speed: 15
//       }).start();
//     }
//   };
  return (
    <Animated.View style={[styles.driveTypes]}>
      <TouchableOpacity>
        <View style={styles.driveTypeButton}>
          <Image
            style={styles.driveImg}
            source={require('../../assets/move-types/directions_car.png')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.driveTypeButton}>
          <Image
            style={styles.driveImg}
            source={require('../../assets/move-types/directions_bicycle.png')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.driveTypeButton}>
          <Image
            style={styles.driveImg}
            source={require('../../assets/move-types/directions_pedestrian.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
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
    position: 'absolute',
    left: -200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200
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