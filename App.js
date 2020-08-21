import React from 'react';
import { StyleSheet,View } from 'react-native';
import MainHolder from './components/main-holder';


export default function App() {

  return (
    <View style={styles.container}>
     <MainHolder/>
    </View>
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
