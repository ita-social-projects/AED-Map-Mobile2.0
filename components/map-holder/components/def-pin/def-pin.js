import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import defIcon from '../../../../assets/def-icon/pin-icon.jpg'
import defSelectedIcon from '../../../../assets/def-icon/pin-selected-icon.jpg'
import {useSelector} from 'react-redux';

const DefPin = ({id, title}) => {
    const {selectedDeff} = useSelector((state) => ({
      selectedDeff: state.selectedDeff,
    }))

    const getSource = (selected) =>  selected===id?defSelectedIcon:defIcon

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