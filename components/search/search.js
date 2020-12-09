import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";
import {
  getDeff,
  setSelectedDeff,
  setSearchLocation,
} from "../../redux/actions";
import { StyleSheet, View, Platform } from "react-native";
import { SearchBar } from "react-native-elements";
import nearestDeff from "../../utils/nearestDeff";
import { appConfig, isAndroidOS, searchPanelConfig, TYPE_HERE } from "../../config";

const { iconColor, paddingTop, placeholderColor } = searchPanelConfig;
const { backgroundColor } = appConfig;

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const { deffData } = useSelector((state) => ({
    deffData: state.deffData,
  }));

  const handleSearchChange = (searchText) => setSearch(searchText);

  const handleSearchSubmit = async () => {
    const searchLocation = await Location.geocodeAsync(search);
    if (searchLocation[0]) {
      const searchLocationArray = [
        searchLocation[0].longitude,
        searchLocation[0].latitude,
      ];
      const nearbyDefs = nearestDeff(deffData, searchLocationArray);
      if (nearbyDefs.length) {
        dispatch(setSelectedDeff(nearbyDefs[0].id));
        dispatch(getDeff(nearbyDefs[0].id));
      }
      dispatch(setSearchLocation(searchLocationArray));
    }
  };

  const searchIconProps = {
    color: iconColor,
    size: 24,
    onPress: handleSearchSubmit,
  };

  return (
    <View style={styles.searchBar}>
      <SearchBar
        round
        containerStyle={styles.container}
        inputStyle={isAndroidOS && styles.input}
        searchIcon={searchIconProps}
        cancelIcon={styles.icon}
        clearIcon={styles.icon}
        placeholderTextColor={isAndroidOS && placeholderColor}
        placeholder={TYPE_HERE}
        cancelButtonTitle="Cancel"
        platform={Platform.OS}
        onChangeText={handleSearchChange}
        onSubmitEditing={handleSearchSubmit}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: backgroundColor,
    paddingTop: paddingTop,
  },
  container: {
    backgroundColor: "#282c34",
  },
  input: {
    backgroundColor: "#e7eae7",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10,
  },
  icon: {
    color: iconColor,
    fontSize: 24,
  },
});

export default Search;
