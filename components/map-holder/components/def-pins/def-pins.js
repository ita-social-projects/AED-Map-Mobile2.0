import React from 'react'
import {Image,Text,View} from 'react-native'
import {Marker} from 'react-native-maps'
import img from '../../../../assets/def-icon/pin-icon.jpg'

const DefPins = () => {

    return (
        <>
            <Marker
            coordinate={{longitude: 24.031691,latitude: 49.841771}}
            >
                <View style={{alignItems: 'center'}}>
                    <Image source={img} style={{width: 40,height: 40}}/>
                    <Text>Площа ринок</Text>
                </View>
            </Marker>
            <Marker
            coordinate={{longitude: 24.013691,latitude: 49.841771}}
            >
                <View style={{alignItems: 'center'}}>
                    <Image source={img} style={{width: 40,height: 40}}/>
                    <Text>Площа ринок</Text>
                </View>
            </Marker>
            <Marker
            coordinate={{longitude: 24.056691,latitude: 49.841771}}
            >
                <View style={{alignItems: 'center'}}>
                    <Image source={img} style={{width: 40,height: 40}}/>
                    <Text>Площа ринок</Text>
                </View>
            </Marker>
            <Marker
            coordinate={{longitude: 24.024691,latitude: 49.841771}}
            >
                <View style={{alignItems: 'center'}}>
                    <Image source={img} style={{width: 40,height: 40}}/>
                    <Text>Площа ринок</Text>
                </View>
            </Marker>
        </>
    )
}

export default DefPins;