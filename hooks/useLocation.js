import {useEffect} from "react";
import * as Location from "expo-location";
import {ErrorAlertGenerator} from "../utils/alerts";
import {setUserLocation} from "../redux/actions";
import {useDispatch} from 'react-redux';
import {locationErrorTitle,locationErrorText} from '../config'


const useLocation = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                ErrorAlertGenerator(locationErrorTitle, locationErrorText);
                return;
            }

            let {coords} = await Location.getCurrentPositionAsync({});
            let {latitude,longitude} = coords;

            dispatch(setUserLocation([longitude,latitude]));
        })();
    },[dispatch]);
};

export default  useLocation;