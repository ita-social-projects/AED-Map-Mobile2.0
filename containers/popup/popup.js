import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {StyleSheet, View, Animated, PanResponder} from 'react-native';
import DefInfoContent from '../../components/def-info';
import {appConfig, popupConfig} from '../../config';
import { setDeff } from '../../redux/actions';

const {maxPopupYOffset, gotoPopupYOffset, maxYVelocity} = popupConfig;

const Popup = () => {
  const [popupValue] = useState(new Animated.Value(0));

  const dispatch = useDispatch();
  const currentDeff = useSelector((state) => state.currentDeff);

  useEffect(() => {
    slidePopupWindow(0.5);
  }, [currentDeff]);

  const panResponder = PanResponder.create({
    onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {
      popupValue.setOffset(popupValue._value);
      popupValue.setValue(0);
    },
    onPanResponderMove: (e, gestureState) => {
      const generalOffset = popupValue._value + popupValue._offset;
      let allowMoving = true;
      if (generalOffset < maxPopupYOffset || generalOffset > 0) {
        allowMoving = false;
      }
      Animated.event([null, {dy: allowMoving && popupValue}],{useNativeDriver: false})(e, gestureState);
    },
    onPanResponderRelease: (e, {vy}) => {
      popupValue.flattenOffset();
      const generalOffset = popupValue._value + popupValue._offset;

      if (generalOffset > gotoPopupYOffset || vy > maxYVelocity) {
        dispatch(setDeff(null));
      } else if (generalOffset < gotoPopupYOffset) {
        slidePopupWindowToTop(0.5);
      }
    }
  });

  const slidePopupWindow = speed => {
    if (currentDeff) {
      Animated.spring(popupValue, {
        toValue: gotoPopupYOffset,
        speed,
        useNativeDriver: false
      }).start();
    } else {
      Animated.spring(popupValue, {
        toValue: 0,
        speed,
        useNativeDriver: false
      }).start();
    }
  };

  const slidePopupWindowToTop = speed => {
    if (currentDeff) {
      Animated.spring(popupValue, {
        toValue: maxPopupYOffset + 1,
        speed,
        useNativeDriver: false
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.popupOuter, {top: popupValue}]}>
      <Animated.View style={styles.popupHandle} {...panResponder.panHandlers}>
        <View style={styles.handleStick} />
      </Animated.View>
      {currentDeff && <DefInfoContent />}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  popupOuter: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: appConfig.backgroundColor,
    borderTopColor: '#000'
  },
  popupHandle: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderTopColor: '#000'
  },
  handleStick: {
    backgroundColor: '#fff',
    width: 45,
    height: 2,
    alignSelf: 'center'
  }
});

export default Popup;
