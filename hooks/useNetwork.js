import {useNetInfo} from '@react-native-community/netinfo';
import {ErrorAlertGenerator} from "../utils/alerts";
import {networkErrorTitle,networkErrorText} from '../config'
import {useEffect,useRef} from "react";


const useNetwork = () => {
    const network = useNetInfo();
    const isMounted = useRef(false);

    useEffect(() => {
        if(isMounted.current) {
            !network.isConnected && ErrorAlertGenerator(networkErrorTitle, networkErrorText);
        }
        else {
            isMounted.current = true;
        }

    },[network.isConnected]);
};

export default  useNetwork;