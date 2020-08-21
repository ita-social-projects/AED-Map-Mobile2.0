import React from 'react';
import {View,Image,StyleSheet} from 'react-native';
import destIcon from '../../../../assets/dest-icon/dest-icon.png'

const DestPin = () => {

    return  <View style={styles.pinBody}>
                <Image source={destIcon} style={styles.pinImage}/>
            </View>
}

const styles = StyleSheet.create({
    pinBody: {
        alignItems: 'center'
    },
    pinImage: {
        width: 40,
        height: 40
    }
})

export default DestPin;