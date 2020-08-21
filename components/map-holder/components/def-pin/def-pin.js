import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import defIcon from '../../../../assets/def-icon/pin-icon.jpg'

const DefPin = ({title}) => {
    return  <View style={styles.pinBody}>
                <Image source={defIcon} style={styles.pinImage}/>
                <Text style={styles.pinText}>{title}</Text>
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

export default DefPin;