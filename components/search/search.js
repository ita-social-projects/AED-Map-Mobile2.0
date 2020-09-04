import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { setSearch } from '../../redux/actions';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Image
} from 'react-native';
import { SearchBar } from 'react-native-elements';

const Search = () => {
  const dispatch = useDispatch()
  const search = useSelector((state) => state.search)

  const handleSearchChange = (text) => {
    dispatch(
      setSearch(text)
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
          />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
  searchBar: {
    width: '100%',
  },
});