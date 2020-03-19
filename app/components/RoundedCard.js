import React from 'react';
import { TouchableRipple, IconButton, Text } from 'react-native-paper';
import {
  StyleSheet,
  View,
} from 'react-native';
import { PRIMARY_COLOR, BACKGROUND_COLOR } from '../config/theme';

const RoundedCard = ({
  onPress, text,
}) => {
  return (
    <View
      style={styles.container}
    >
      <TouchableRipple
        onPress={onPress}
        style={styles.circle}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableRipple>
    </View>
  );
};

const circleSize = 110;

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  circle: {
    margin: 0,
    backgroundColor: BACKGROUND_COLOR,
    width: '100%',
    height: circleSize,
    borderRadius: circleSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default RoundedCard;
