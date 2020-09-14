import NetInfo from '@react-native-community/netinfo';
import {ErrorAlertGenerator} from "../utils/alerts";

const useNetwork = () => {
    NetInfo.addEventListener((state) => {
        if (!state.isConnected) {
            ErrorAlertGenerator("Мережа","Не вдалось під'єднатись до мережі");
        }
    })
};

export default  useNetwork;