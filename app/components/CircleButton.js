import React from 'react';
import { TouchableRipple, IconButton, Text } from 'react-native-paper';
import {
  StyleSheet,
  View,
} from 'react-native';
import { PRIMARY_COLOR } from '../config/theme';

const CircleButton = ({
  onPress, text, highlight,
}) => {
  const highlightStyle = StyleSheet.create({
    circle: {
      backgroundColor: 'rgba(83, 199, 190,' + (highlight ? 1 : 0.32) + ')',
    },
  });
  return (
    <TouchableRipple
      onPress={onPress}
      style={[styles.circle, highlightStyle.circle]}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableRipple>
  );
};

const circleSize = 40;

const styles = StyleSheet.create({
  circle: {
    margin: 0,
    backgroundColor: PRIMARY_COLOR,
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});

export default CircleButton;
