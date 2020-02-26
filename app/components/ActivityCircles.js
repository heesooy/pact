import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CircleIndicator from './CircleIndicator';
import { PRIMARY_COLOR } from '../config/theme';

const ActivityCircles = ({
  onPress, style, label,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>
        {label}
      </Text>
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
};


const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: PRIMARY_COLOR,
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
  },
});

export default ActivityCircles;
