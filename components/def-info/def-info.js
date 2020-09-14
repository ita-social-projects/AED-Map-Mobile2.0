import React, {useState, useEffect} from 'react';
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
import { setDeff, getDeff, setSelectedDeff } from '../../redux/actions';
import nearestDeff from '../../utils/nearestDeff'
import NavBar from '../nav-bar';

const DefInfoContent = () => {
  const dispatch = useDispatch();
  const {currentDeff,deffData,userLocation} = useSelector((state) => ({ 
    currentDeff: state.currentDeff, 
    deffData: state.deffData,
    userLocation: state.userLocation}));

  const [counter, setCounter] = useState(1);

  const makePhoneCall = phoneNumber => {
    let phoneNum = '';
    if (Platform.OS === 'android') {
      phoneNum = `tel:${phoneNumber}`;
    } else {
      phoneNum = `telprompt:${phoneNumber}`;
    }
    Linking.openURL(phoneNum);
    dispatch(setDeff(null));
  };

  const findNext = () => {
    const nearbyDefs = nearestDeff(deffData,userLocation);
    setCounter(count => count + 1);
    if (counter >= nearbyDefs.length - 1) {
      setCounter(0);
    }
    const near = nearbyDefs[counter];

    dispatch(setSelectedDeff(near.id))
    dispatch(getDeff(near.id))
  };

  const phoneRenders =
    currentDeff.phone &&
    currentDeff.phone.map(singlePhone => {
      return (
        <TouchableOpacity key={singlePhone} style={styles.phone}>
          <Button
            color="gray"
            key={singlePhone}
            title={singlePhone}
            onPress={() => makePhoneCall(singlePhone)}
          />
        </TouchableOpacity>
      );
    });

  return (
    <View style={styles.contentHolder}>
      {currentDeff ? (
        <ScrollView style={styles.currentInfo}>
          {userLocation ? (
          <TouchableOpacity style={styles.nextBtn} onPress={findNext}>
            <Text>Знайти наступний дефібрилятор</Text>
          </TouchableOpacity>) : null}
          <View style={styles.title}>
            <NavBar/>
            <Text style={styles.popupText}>{currentDeff.title}</Text>
          </View>
          <Text style={styles.popupText}>{currentDeff.address}</Text>
          {currentDeff.additional_information ? (
            <Text style={styles.popupText}>
              {currentDeff.additional_information}
            </Text>
          ) : null}
          {currentDeff.phone ? (
            <>
              <Text style={styles.popupText}>Телефони:</Text>
              {phoneRenders}
            </>
          ) : null}
        </ScrollView>
      ) : null}
    </View>
  );
};

export default DefInfoContent;

const styles = StyleSheet.create({
  popupText: {
    fontSize: 20,
    color: '#fcfcfc',
    paddingBottom: 5,
    marginBottom: 5
  },
  nextBtn: {
    alignItems: 'center',
    backgroundColor: '#ffddcc',
    padding: 5,
    marginVertical: 5
  },
  phone: {
    marginVertical: 10
  },
  contentHolder: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 15
  },
  currentInfo: {
    width: '100%',
    maxHeight: 400,
    paddingHorizontal: 15
  }
});