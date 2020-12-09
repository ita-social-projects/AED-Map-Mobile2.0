import { Linking, Platform } from "react-native";

export const isAndroidOS = Platform.OS === "android";

export const SERVER_URL = "https://aed.nevidkladka.org/api/defibrillators";
export const TYPE_HERE = 'Пошук...';

export const appConfig = {
  backgroundColor: "#282c34",
  backgroundActiveColor: "#4f5154",
  primarySpinnerColor: "green",
  secondarySpinnerColor: "white",
};

export const searchPanelConfig = {
  paddingTop: Platform.OS === "ios" ? 20 : 20,
  placeholderColor: "#909090",
  iconColor: "#c7c5c5",
};

export const cameraConfig = {
  zoom: 15,
  altitude: 10000,
  animateDuration: 1000,
  latitudeZoomCoeff: 0.4,
  latitudeDeltaZoomCoeff: 0.8,
};

export const myPlaceButtonConfig = {
  imageStyle: {
    width: 30,
    height: 30,
    margin: 10,
    padding: 10,
  },
};

export const deffPinConfig = {
  imageWidth: 40,
  imageHeight: 40,
  textWidth: 100,
  fontSize: 14,
  selectedBorderColor: "red",
  borderColor: "green",
  backgroundColor: "#fff",
};

export const navBarConfig = {
  typeButtonStyle: (size) => ({
    width: 40,
    height: 40,
    padding: size,
    textAlign: "center",
  }),
};

export const directionTypeConfig = {
  driving: {
    lineColor: "#90a8ff",
    lineWidth: 3,
    lineDashPattern: [1, 0],
  },
  cycling: {
    lineColor: "#ff9e0b",
    lineWidth: 3,
    lineDashPattern: [1, 6],
  },
  walking: {
    lineColor: "#bf0ae6",
    lineWidth: 3,
    lineDashPattern: [6, 5],
  },
};

export const initialPosition = {
  latitude: 49.8416218,
  longitude: 24.0300926,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export const popupConfig = {
  maxPopupYOffset: -500,
  gotoPopupYOffset: -300,
  maxYVelocity: 1.5,
  textColor: "#fcfcfc",
  nextButtonColor: "#ffddcc",
};

export const loadingBarConfig = {
  size: 60,
};

export const networkErrorAlert = {
  title: "Мережа",
  text: "Не вдалось під'єднатись до мережі",
};

export const locationErrorAlert = {
  title: "Локація",
  text: "Не вдалось отримати місцеположення!",
  buttonTitle: "Відкрити налаштування",
  handler: () => Linking.openURL("app-settings:root"),
};
