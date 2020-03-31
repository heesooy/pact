import React from 'react';
import { TouchableRipple, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import styles from './styles';

type Props = {
  onPress: () => void;
  text: string;
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
