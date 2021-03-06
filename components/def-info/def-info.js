import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Platform,
  Linking
} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import { setDeff } from '../../redux/actions';
import NavBar from '../nav-bar';
import {appConfig, popupConfig} from '../../config';
import useNextDeff from "../../hooks/useNextDeff";
import LoadingBar from "../loading-bar";
import {formatPhoneNumber} from "../../utils/formatPhoneNumber";
import getReadableDuration from "../../utils/getReadableDuration";

const DefInfoContent = () => {
  const findNext = useNextDeff();

  const dispatch = useDispatch();
  const {currentDeff,userLocation,loading, duration} = useSelector((state) => ({
    currentDeff: state.currentDeff,
    userLocation: state.userLocation,
    duration: state.duration,
    loading: state.deffLoading}));

  if (loading) {
    return (
          <View style={styles.loadingBar}>
            <LoadingBar color={appConfig.secondarySpinnerColor}/>
          </View>
    )
  }

  const makePhoneCall = phoneNumber => {
    let phoneNum;
    if (Platform.OS === 'android') {
      phoneNum = `tel:${phoneNumber}`;
    } else {
      phoneNum = `telprompt:${phoneNumber}`;
    }
    Linking.openURL(phoneNum);
    dispatch(setDeff(null));
  };

  const phoneRenders =
    currentDeff.phone &&
    currentDeff.phone.map(singlePhone => {
      return (
        <TouchableOpacity key={singlePhone} style={styles.phone}>
          <Button
            color="gray"
            key={singlePhone}
            title={formatPhoneNumber(singlePhone)}
            onPress={() => makePhoneCall(singlePhone)}
          />
        </TouchableOpacity>
      );
    });

  return (
    <View style={styles.contentHolder}>
      <ScrollView style={styles.currentInfo}>
        {userLocation ? (
            <TouchableOpacity style={styles.nextBtn} onPress={findNext}>
              <Text>Знайти наступний дефібрилятор</Text>
            </TouchableOpacity>) : null}
        <View style={styles.title}>
          {userLocation ? <NavBar/> : null}
          {duration && <Text style={styles.duration}>Приблизний час в дорозі: {getReadableDuration(duration)}</Text>}
          <Text style={styles.popupText}>{currentDeff.title}</Text>
        </View>
        <Text style={styles.popupText}>{currentDeff.address}</Text>
        {currentDeff.additional_information ? (
            <Text style={styles.popupText}>
              {currentDeff.additional_information}
            </Text>
        ) : null}
        {currentDeff.phone.length ? (
            <>
              <Text style={styles.popupText}>Телефони:</Text>
              {phoneRenders}
            </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default DefInfoContent;

const styles = StyleSheet.create({
  popupText: {
    fontSize: 20,
    color: popupConfig.textColor,
    paddingBottom: Platform.OS === 'ios' ? 0 : 5,
    marginBottom: 5
  },
  nextBtn: {
    alignItems: 'center',
    backgroundColor: popupConfig.nextButtonColor,
    padding: 5,
    marginVertical: 5
  },
  phone: {
    marginVertical: Platform.OS === 'ios' ? 0 : 10
  },
  contentHolder: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20
  },
  currentInfo: {
    width: '100%',
    maxHeight: Math.abs(popupConfig.maxPopupYOffset) * 0.6,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  loadingBar: {
    justifyContent: 'center',
    paddingVertical: 50
  },
  duration: {
    color: popupConfig.textColor,
    fontStyle: 'italic',
    fontSize: 12,
  }
});
