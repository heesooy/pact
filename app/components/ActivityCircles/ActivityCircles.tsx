import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import CircleIndicator from '../CircleIndicator/CircleIndicator';
import styles from './styles';

type Props = {
  /** function that is executed when a child component is pressed */
  onPress: () => void;
  /** optional styling for the component */
  style?: ViewStyle;
  /** optional label for the component */
  label?: string;
}

const ActivityCircles: React.FC<Props> = ({ onPress, style, label }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.text}>{label}</Text>
    <View style={[styles.circles, style]}>
      <CircleIndicator text="S" onPress={onPress} checked />
      <CircleIndicator text="M" onPress={onPress} />
      <CircleIndicator text="T" onPress={onPress} checked />
      <CircleIndicator text="W" onPress={onPress} />
      <CircleIndicator text="T" onPress={onPress} />
      <CircleIndicator text="F" onPress={onPress} />
      <CircleIndicator text="S" onPress={onPress} active checked />
    </View>
  </View>
);

export default ActivityCircles;
