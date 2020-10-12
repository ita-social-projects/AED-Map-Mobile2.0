import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setSearchLocation } from '../../redux/actions';
import * as Location from 'expo-location';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import nearestDeff from '../../utils/nearestDeff';
import { getDeff, setSelectedDeff } from '../../redux/actions';
import { appConfig, searchPanelConfig } from "../../config";

const isAndroidOS = Platform.OS === 'android'

const Search = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const { deffData} = useSelector((state) => ({
    deffData: state.deffData
  }))

  const handleSearchChange = async (text) => {
    setSearch(text);
    const searchLocation = await Location.geocodeAsync(text);
    if(searchLocation[0]) {
      const searchLocationArray = [searchLocation[0].longitude, searchLocation[0].latitude];
      const nearbyDefs = nearestDeff(deffData,searchLocationArray);
      if(nearbyDefs.length) {
        dispatch(setSelectedDeff(nearbyDefs[0].id));
        dispatch(getDeff(nearbyDefs[0].id))
      }
      dispatch(
        setSearchLocation(searchLocationArray)
      )
    }
  };

    return (
        <View style={styles.searchBar}>
          <SearchBar
            round
            searchIcon={styles.icon}
            cancelIcon={styles.icon}
            clearIcon={styles.icon}
            onChangeText={text => handleSearchChange(text)}
            placeholder="Type Here..."
            value={search}
            platform={Platform.OS}
            cancelButtonTitle='Cancel'
            containerStyle={styles.container}
            inputStyle={ isAndroidOS && styles.input }
            placeholderTextColor={ isAndroidOS && searchPanelConfig.placeholderColor }
          />
        </View>
    )
};

const styles = StyleSheet.create({
  searchBar: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: appConfig.backgroundColor,
    paddingTop: searchPanelConfig.paddingTop
  },
  container: {
    backgroundColor: '#282c34'
  },
  input: {
    backgroundColor: '#e7eae7',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10
  },
  icon: {
    color: isAndroidOS && searchPanelConfig.inputColor,
    fontSize: 24
  }
});

export default Search