import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Animated} from 'react-native';

const emergencySize = 125;

const EmergencyButton = () => {
  const [emergencyBleepWidth] = useState(new Animated.Value(emergencySize));
  const [emergencyOpacity] = useState(new Animated.Value(1));

//   const emergencyPress = () => {
//     const nearbyDefs = nearestDefsSelector({featureCollection, userLocation});
//     setPopupData({
//       type: 'default',
//       id: nearbyDefs[0].id
//     });

//     setOrigin(userLocation);
//     const {coordinates} = nearbyDefs[0];
//     setDestination(coordinates);

//     setMapParameters({
//       coordinates,
//       zoom: 15
//     });
//   };

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(emergencyBleepWidth, {
            toValue: emergencySize,
            duration: 0,
            useNativeDriver: false
          }),
          Animated.timing(emergencyBleepWidth, {
            toValue: emergencySize * 1.3,
            duration: 1000,
            useNativeDriver: false
          })
        ]),
        Animated.sequence([
          Animated.timing(emergencyOpacity, {
            toValue: 0.5,
            duration: 0,
            useNativeDriver: false
          }),
          Animated.timing(emergencyOpacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
          })
        ])
      ]),
      {
        iterations: -1
      }
    ).start();
  }, []);

  const buttonStyle = {
    ...styles.emergencyBtnBleep,
    width: emergencyBleepWidth,
    height: emergencyBleepWidth,
    borderRadius: Animated.divide(emergencyBleepWidth, 2),
    opacity: emergencyOpacity,
    transform: [
      {
        translateX: Animated.divide(emergencyBleepWidth, -2)
      },
      {
        translateY: Animated.divide(emergencyBleepWidth, -2)
      }
    ]
  };

  return (
    <View style={styles.emergencyButtonHolder}>
      <Animated.View style={buttonStyle} />

      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emButtonText}>
          {'Натисніть \nдля швидкого\n пошуку'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default EmergencyButton;

const styles = StyleSheet.create({
  emergencyButtonHolder: {
    position: 'absolute',
    bottom: 50
  },
  emergencyButton: {
    backgroundColor: '#d00',
    width: emergencySize,
    height: emergencySize,
    borderRadius: emergencySize / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  emergencyBtnBleep: {
    position: 'absolute',
    backgroundColor: '#900',
    top: '50%',
    left: '50%'
  },
  emButtonText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#fff'
  }
});
