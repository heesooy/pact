import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const RoundSeparator: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.divider} />
  </View>
);

export default RoundSeparator;
