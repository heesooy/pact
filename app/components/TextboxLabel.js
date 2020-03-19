import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { PRIMARY_COLOR } from '../config/theme';

const TextboxLabel = (props) => {
  const { text } = props;
  if (!text) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
  },
  text: {
    color: PRIMARY_COLOR,
    fontSize: 13,
  },
});


export default TextboxLabel;
