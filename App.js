import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet,View } from 'react-native';
import MainHolder from './containers/main-holder';
import configureStore from './redux/store'
import {appConfig} from "./config";

const store = configureStore();

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
      <MainHolder/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: appConfig.backgroundColor,
    position: 'relative'
  }
});
