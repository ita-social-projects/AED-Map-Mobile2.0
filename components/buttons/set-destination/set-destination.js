import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { setDestLocation } from '../../../redux/actions';


const SetDestination = () => {
    const dispatch = useDispatch();
    const currentDeff = useSelector(state => state.currentDeff)

  const setAsDestination = () => {
      if(currentDeff){
        dispatch(setDestLocation(currentDeff.location.coordinates))
      }
  };

  return (
    <View style={styles.destHolder}>
      <TouchableOpacity onPress={setAsDestination}>
        <Text style={styles.destBtn}>Встановити кінцеву точку</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetDestination;

const styles = StyleSheet.create({
  destBtn: {
    color: '#fcfcfc',
    lineHeight: 25,
    fontSize: 16
  },
  destHolder: {
    position: 'absolute',
    top: 50,
    right: 0,
    padding: 10,
    backgroundColor: '#282c34'
  }
});
