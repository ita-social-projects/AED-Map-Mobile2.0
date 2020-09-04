import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { setSearchLocation } from '../../redux/actions';
import * as Location from 'expo-location';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import nearestDeff from '../../utils/nearestDeff';
import { getDeff } from '../../redux/actions';

const Search = () => {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  const { deffData} = useSelector((state) => ({
    deffData: state.deffData
  }))

  const handleSearchChange = async (text) => {
    setSearch(text)
    const searchLocation = await Location.geocodeAsync(text)
    const searchLocationArray = [searchLocation[0].longitude, searchLocation[0].latitude]
    const nearbyDefs = nearestDeff(deffData,searchLocationArray);
    if(nearbyDefs.length) {
      dispatch(getDeff(nearbyDefs[0].id))
    }
    dispatch(
      setSearchLocation(searchLocationArray)
    )
  }

    return (
        <View style={styles.searchBar}>
          <SearchBar
            round
            searchIcon={{ size: 24 }}
            onChangeText={text => handleSearchChange(text)}
            placeholder="Type Here..."
            value={search}
            style={styles.searchBar}
            platform={Platform.OS}
            cancelButtonTitle='Cancel'
            containerStyle={{backgroundColor: '#161F00'}}
          />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
  searchBar: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#161F00',
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
  },
});