import React from 'react'
import LoadingBar from "../loading-bar";
import {Dimensions, StyleSheet, View} from "react-native";

const LoadingPanel = () => {
    return (
    <View style={styles.loadingBar}>
        <LoadingBar/>
    </View>
    );
};

const styles = StyleSheet.create({
    loadingBar: {
        position: "absolute",
        left: Dimensions.get("window").width /2 - 30,
        top: Dimensions.get('window').height /2 - 30,
        zIndex: 1
    },
});

export default LoadingPanel;