import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ErrorAlertGenerator } from '../../utils/alerts';


const getAllDefs = async () => {
    const network = await NetInfo.fetch();

    if(!network.isConnected) {
        const defs = await AsyncStorage.getItem('defs');

        return (defs
        ? JSON.parse(defs)
        : []);
    }

    const res = await axios.get('https://aed.nevidkladka.org/api/defibrillators')
        .then(res => res)
        .catch(err => err);

    if (!res.data.mapDefs) {
        ErrorAlertGenerator("Мережа","Сталась помилка при з'єднанні з сервером")
        return [];
    }

    const defs = res.data.mapDefs;
    await AsyncStorage.setItem('defs',JSON.stringify(defs));

    return defs;
};

const getDeff = async (id) => {
    const res = await axios.get(`https://aed.nevidkladka.org/api/defibrillators/${id}`)
        .then(res => res)
        .catch(err => err);
    return res.data.defibrillator;
};

export {
    getAllDefs,
    getDeff
}