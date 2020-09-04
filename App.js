import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet,View } from 'react-native';
import MainHolder from './components/main-holder';
import configureStore from './redux/store'

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
    backgroundColor: '#F5FCFF',
    position: 'relative'
  }
});
