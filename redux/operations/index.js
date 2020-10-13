import NetInfo from "@react-native-community/netinfo";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { ErrorAlertGenerator } from "../../utils/alerts";
import { networkErrorAlert, SERVER_URL } from "../../config";

const { text, title } = networkErrorAlert;

const getAllDefs = async () => {
  const network = await NetInfo.fetch();

  if (!network.isConnected) {
    const defs = await AsyncStorage.getItem("defs");

    return defs ? JSON.parse(defs) : [];
  }

  const res = await axios
    .get(SERVER_URL)
    .then(async (res) => {
      const defs = res.data.mapDefs;
      await AsyncStorage.setItem("defs", JSON.stringify(defs));
      return defs;
    })
    .catch(() => {
      ErrorAlertGenerator(title, text);
      return [];
    });
  return res;
};

const getDeff = async (id) => {
  const res = await axios
    .get(`${SERVER_URL}/${id}`)
    .then((res) => res.data.defibrillator)
    .catch(() => {
      ErrorAlertGenerator(title, text);
      return [];
    });
  return res;
};

export { getAllDefs, getDeff };
