import React from 'react';
import {StyleSheet, View} from 'react-native';
import styles from './styles';

const RoundSeparator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
    </View>
  );
};

export default RoundSeparator;
