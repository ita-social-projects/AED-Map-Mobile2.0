import {Platform} from "react-native";

export const appConfig = {
  backgroundColor: '#282c34',
    primarySpinnerColor: 'green',
    secondarySpinnerColor: 'white'
};

export const searchPanelConfig = {
    paddingTop: Platform.OS === 'ios' ? 20 : 20,
};

export const cameraConfig = {
    zoom: 15,
    altitude: 10000,
    animateDuration: 1000
};

export const myPlaceButtonConfig = {
    imageStyle: {
        width: 30,
        height: 30,
        margin: 10,
        padding: 10,
    }
};

export const deffPinConfig = {
    imageWidth: 40,
    imageHeight: 40,
    textWidth: 100,
    fontSize: 14,
    selectedBorderColor: 'red',
    borderColor: 'green',
    backgroundColor: '#fff'
};

export const navBarConfig = {
    typeButtonStyle: (size) => ({
        width: 40,
        height: 40,
        padding: size,
        textAlign: 'center'
    }),

};

export const directionTypeConfig = {
      driving: {
        lineColor: '#90a8ff',
        lineWidth: 3,
        lineDashPattern: [1, 0],
      },
      cycling: {
        lineColor: '#ff9e0b',
        lineWidth: 3,
        lineDashPattern: [1, 6]
      },
      walking: {
        lineColor: '#bf0ae6',
        lineWidth: 3,
        lineDashPattern: [6, 5]
      }
};

export const initialPosition = {
    latitude: 49.8416218,
    longitude: 24.0300926,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
};

export const popupConfig = {
    maxPopupYOffset: -500,
    gotoPopupYOffset: -300,
    maxYVelocity: 1.5,
    textColor: '#fcfcfc',
    nextButtonColor: '#ffddcc'
};

export const networkErrorTitle = "Мережа";

export const networkErrorText = "Не вдалось під'єднатись до мережі";

export const locationErrorTitle = "Локація";

export const locationErrorText = "Не вдалось отримати місцеположення!";

