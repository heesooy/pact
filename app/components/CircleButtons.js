import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import CircleButton from './CircleButton';
import { PRIMARY_COLOR } from '../config/theme';

const CircleButtons = ({
  onPress, style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <CircleButton text="S" onPress={onPress} highlight />
      <CircleButton text="M" onPress={onPress} />
      <CircleButton text="T" onPress={onPress} highlight />
      <CircleButton text="W" onPress={onPress} />
      <CircleButton text="T" onPress={onPress} />
      <CircleButton text="F" onPress={onPress} />
      <CircleButton text="S" onPress={onPress} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CircleButtons;
