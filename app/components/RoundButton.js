import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {PRIMARY_COLOR} from '../config/theme';
import {Icon} from 'react-native-elements';

const RoundButton = ({
  onPress,
  mode,
  title,
  icon,
  style,
  contentStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Button
        theme={theme}
        dark
        onPress={onPress}
        mode={mode}
        uppercase={false}
        style={[styles.button, style]}
        contentStyle={[styles.buttonContent, contentStyle]}
        icon={icon}>
        {title}
      </Button>
    </View>
  );
};

const theme = {
  // fonts: { regular: 'Arial' },
  roundness: 30,
};

const styles = StyleSheet.create({
  container: {
    // marginLeft: 40,
    // marginRight: 40,
    marginBottom: 20,
  },
  buttonContent: {
    height: 52,
  },
  button: {
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
    elevation: 0,
  },
});

export default RoundButton;
