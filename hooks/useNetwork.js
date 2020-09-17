import NetInfo from '@react-native-community/netinfo';
import {ErrorAlertGenerator} from "../utils/alerts";
import {networkErrorTitle,networkErrorText} from '../config'


const useNetwork = () => {
    NetInfo.addEventListener((state) => {
        if (!state.isConnected) {
            ErrorAlertGenerator(networkErrorTitle,networkErrorText);
        }
    })
};

export default  useNetwork;