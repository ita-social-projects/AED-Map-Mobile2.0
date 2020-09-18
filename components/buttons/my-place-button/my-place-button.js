import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {myPlaceButtonConfig} from "../../../config";


const MyPlaceButton = () => {
  return (
    <View>
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
  myPlaceButtonImage: myPlaceButtonConfig.imageStyle
});
