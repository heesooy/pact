import React from 'react';
import {TouchableRipple, IconButton, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import styles from './styles';

const RoundedCard = ({onPress, text}) => {
  return (
    <View style={styles.container}>
      <TouchableRipple
        onPress={onPress}
        style={styles.circle}
        rippleColor="rgba(0, 0, 0, .32)">
        <Text style={styles.text}>{text}</Text>
      </TouchableRipple>
    </View>
  );
};

export default RoundedCard;
