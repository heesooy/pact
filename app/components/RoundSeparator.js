import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { PRIMARY_COLOR } from '../config/theme';

const RoundSeparator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  divider: {
    width: 24,
    height: 4,
    borderRadius: 2,
    backgroundColor: PRIMARY_COLOR,
  },
});

export default RoundSeparator;
