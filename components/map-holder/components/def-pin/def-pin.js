import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import defIcon from '../../../../assets/def-icon/pin-icon.jpg'
import defSelectedIcon from '../../../../assets/def-icon/pin-selected-icon.jpg'
import {useSelector} from 'react-redux';
import {deffPinConfig} from "../../../../config";

const DefPin = ({id, title}) => {
    const {selectedDeff} = useSelector((state) => ({
      selectedDeff: state.selectedDeff,
    }));

    const getSource = (selected) => selected === id ? defSelectedIcon : defIcon;

    return  <View style={styles.pinBody}>
                <Image source={getSource(selectedDeff)} style={styles.pinImage}/>
                <Text numberOfLines={2} style={styles.pinText(selectedDeff === id)}>{title}</Text>
            </View>
};

const styles = StyleSheet.create({
    pinBody: {
        alignItems: 'center'
    },
    pinImage: {
        width: deffPinConfig.imageWidth,
        height: deffPinConfig.imageHeight
    },
    pinText: (selected) => ({
        padding: 2,
        marginTop: 2,
        maxWidth: deffPinConfig.textWidth,
        fontWeight: 'bold',
        fontSize: deffPinConfig.fontSize,
        borderWidth: 0.5,
        backgroundColor: deffPinConfig.backgroundColor,
        borderRadius: 3,
        borderColor: selected ? deffPinConfig.selectedBorderColor : deffPinConfig.borderColor,
        textAlign: 'center'
    })
});

export default DefPin;