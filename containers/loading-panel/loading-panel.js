import React from 'react'
import LoadingBar from "../../components/loading-bar";
import {Dimensions, StyleSheet, View} from "react-native";
import {appConfig} from "../../config";

const LoadingPanel = () => {
    return (
    <View style={styles.loadingBar}>
        <LoadingBar color={appConfig.primarySpinnerColor}/>
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