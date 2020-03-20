import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import styles from './styles';

const TextboxLabel = props => {
  const {text} = props;
  if (!text) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TextboxLabel;
