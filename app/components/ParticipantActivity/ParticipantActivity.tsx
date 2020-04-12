import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import styles from './styles';

type Props = {
  style?: ViewStyle;
  label: string;
  totalCheckins: number;
}

const ParticipantActivity: React.FC<Props> = ({ style, label, totalCheckins }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.text}>{label}</Text>
    <Text style={styles.text}>Total check-ins: {totalCheckins}</Text>
  </View>
);

export default ParticipantActivity;
