import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import styles from './styles';

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
        theme={{roundness: 30}}
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

export default RoundButton;
