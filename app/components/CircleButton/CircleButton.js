import React from 'react';
import {TouchableRipple, IconButton, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import styles from './styles';

const CircleButton = ({onPress, text, highlight}) => {
  const highlightStyle = StyleSheet.create({
    circle: {
      backgroundColor: 'rgba(83, 199, 190,' + (highlight ? 1 : 0.32) + ')',
    },
  });
  return (
    <TouchableRipple
      onPress={onPress}
      style={[styles.circle, highlightStyle.circle]}
      rippleColor="rgba(0, 0, 0, .32)">
      <Text style={styles.text}>{text}</Text>
    </TouchableRipple>
  );
};

export default CircleButton;
