import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import CircleIndicator from '../CircleIndicator/CircleIndicator';
import styles from './styles';

type Props = {
  /** optional styling for the component */
  style?: ViewStyle;
  /** optional label for the component */
  label?: string;
}

const ActivityCircles: React.FC<Props> = ({ style, label }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.text}>{label}</Text>
    <View style={[styles.circles, style]}>
      <CircleIndicator checked />
      <CircleIndicator />
      <CircleIndicator checked />
      <CircleIndicator />
      <CircleIndicator />
      <CircleIndicator />
      <CircleIndicator active checked />
    </View>
  </View>
);

export default ActivityCircles;
