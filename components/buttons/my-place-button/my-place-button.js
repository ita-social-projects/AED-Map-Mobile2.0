import React from 'react';
import {StyleSheet, View, Image} from 'react-native';


const MyPlaceButton = () => {
  return (
    <View style={styles.myPlaceButtonHolder}>
        <Image 
        style={styles.myPlaceButtonImage}
        source={{
          uri:
            'https://icon-library.com/images/android-location-icon/android-location-icon-20.jpg' 
        }}/>
    </View>
  );
};
export default MyPlaceButton;

const styles = StyleSheet.create({
  myPlaceButtonImage: {
    width: 30,
    height: 30,
    margin: 10,
  },
});
