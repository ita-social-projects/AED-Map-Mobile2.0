import {Alert} from 'react-native';

const ErrorAlertGenerator = (alertTitle,alertText,alertButtonLabel,handler = () => {}) => {

    let buttons = [{
        text: "Cancel",
        style: 'cancel'
    }];

    if (alertButtonLabel) {
        buttons.unshift({
            text: alertButtonLabel,
            onPress: handler
        });
    }

  return Alert.alert(
      alertTitle,
      alertText,
      buttons
  );
};

export {ErrorAlertGenerator}
