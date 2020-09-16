import React from 'react'
import {View, StyleSheet, Dimensions} from "react-native";
import {BallIndicator} from 'react-native-indicators';

const LoadingBar = () => {
    return (
        <View style={styles.container}>
            <BallIndicator size={60}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: Dimensions.get("window").width /2 - 30,
        top: Dimensions.get('window').height /2 - 30,
        zIndex: 1
    },
});

export default LoadingBar;