import React from 'react';
import { TouchableRipple, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import styles from './styles';

type Props = {
  /** function that is executed when a child component is pressed */
  onPress: () => void;
  /** text in circle */
  text: string;
  /** whether the circle is highlighted */
  highlight?: boolean;
}

const CircleButton: React.FC<Props> = ({ onPress, text, highlight }) => {
  const highlightStyle = StyleSheet.create({
    circle: {
      backgroundColor: `rgba(83, 199, 190,${highlight ? 1 : 0.32})`,
    },
  });
  return (
    <TouchableRipple
      onPress={onPress}
      style={[styles.circle, highlightStyle.circle]}
      rippleColor="rgba(0, 0, 0, .32)">
      <Text style={styles.text}>{text}</Text>
    </TouchableRipple>
  );
};

export default CircleButton;
