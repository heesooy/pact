import React from 'react';
import { TouchableRipple, IconButton, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

type Props = {
  /** function that is executed when component is pressed */
  onPress: () => void;
  /** string displayed in circle */
  text: string;
  /** whether the circle is checked */
  checked?: boolean;
  /** whether the circle is active */
  active?: boolean;
}

const CircleIndicator: React.FC<Props> = ({
  onPress, text, checked, active,
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
      backgroundColor: `rgba(83, 199, 190,${opacity()})`,
      borderColor: `rgba(83, 199, 190,${borderOpacity()})`,
    },
  });
  return (
    <View style={[styles.circle, checkedStyle.circle]}>
      <Icon name="check" color="#FFF" style={{ opacity: 1 }} />
    </View>
  );
};

export default CircleIndicator;
