import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import CircleIndicator from '../CircleIndicator/CircleIndicator';
import styles from './styles';

type Props = {
  style?: ViewStyle;
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
