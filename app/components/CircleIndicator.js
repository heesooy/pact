import React from 'react';
import { TouchableRipple, IconButton, Text } from 'react-native-paper';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { PRIMARY_COLOR } from '../config/theme';

const CircleIndicator = ({
  onPress, text, checked, active
}) => {
  const opacity = () => {
    if (!checked) {
      return 0;
    }
    if (active) {
      return 1;
    }
    return 0.35;
  };
  const borderOpacity = () => {
    if (active) {
      return 1;
    }
    return 0.35;
  };
  const checkedStyle = StyleSheet.create({
    circle: {
      backgroundColor: 'rgba(83, 199, 190,' + opacity() + ')',
      borderColor: 'rgba(83, 199, 190,' + borderOpacity() + ')',
    },
  });
  return (
    <View
      style={[styles.circle, checkedStyle.circle]}
    >
      <Icon
        name="check"
        color="#FFF"
        style={{ opacity: 1 }}
      />
    </View>
  );
};

const circleSize = 30;

const styles = StyleSheet.create({
  circle: {
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: PRIMARY_COLOR,
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    elevation: 0,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});

export default CircleIndicator;
