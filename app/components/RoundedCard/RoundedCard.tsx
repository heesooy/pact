import React from 'react';
import { TouchableRipple, Text } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';

type Props = {
  onPress: () => void;
  text: string;
}

const RoundedCard: React.FC<Props> = ({ onPress, text }) => (
  <View style={styles.container}>
    <TouchableRipple
      onPress={onPress}
      style={styles.circle}
      rippleColor="rgba(0, 0, 0, .32)">
      <Text style={styles.text}>{text}</Text>
    </TouchableRipple>
  </View>
);

export default RoundedCard;
