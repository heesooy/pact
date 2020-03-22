import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
  /** text for the label */
  text: string;
}

const TextboxLabel: React.FC<Props> = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default TextboxLabel;
