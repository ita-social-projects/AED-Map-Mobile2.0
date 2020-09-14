import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import defIcon from '../../../../assets/def-icon/pin-icon.jpg'
import destIcon from '../../../../assets/dest-icon/dest-icon.png'
import {useSelector} from 'react-redux';

const DefPin = ({id, title}) => {
    const {selectedDeff} = useSelector((state) => ({
      selectedDeff: state.selectedDeff,
    }))

    const getSource = (selected) =>  selected===id?destIcon:defIcon

    return  <View style={styles.pinBody}>
                <Image source={getSource(selectedDeff)} style={styles.pinImage}/>
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