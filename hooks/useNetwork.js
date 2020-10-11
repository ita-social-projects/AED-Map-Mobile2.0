import {useNetInfo} from '@react-native-community/netinfo';
import {ErrorAlertGenerator} from "../utils/alerts";
import {networkErrorAlert} from '../config'
import {useEffect,useRef} from "react";


const useNetwork = () => {
    const network = useNetInfo();
    const isMounted = useRef(false);

    useEffect(() => {
        if(isMounted.current) {
            !network.isConnected
            && ErrorAlertGenerator(
                networkErrorAlert.title,
                networkErrorAlert.text
            );
        }
        else {
            isMounted.current = true;
        }

    },[network.isConnected]);
};

export default  useNetwork;
