import {Alert} from 'react-native';

const ErrorAlertGenerator = (alertTitle,alertText,handler = () => {}) => {
  return Alert.alert(
      alertTitle,
      alertText,
      [{
          text: "OK",
          onPress: handler
      }])
};

export {ErrorAlertGenerator}